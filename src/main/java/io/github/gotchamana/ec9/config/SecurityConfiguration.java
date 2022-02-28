package io.github.gotchamana.ec9.config;

import java.security.NoSuchAlgorithmException;

import javax.crypto.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.*;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.jose.jws.MacAlgorithm;
import org.springframework.security.oauth2.jwt.*;
import org.springframework.security.oauth2.server.resource.authentication.*;
import org.springframework.security.oauth2.server.resource.web.BearerTokenAuthenticationFilter;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import io.github.gotchamana.ec9.auth.JwtAuthenticationHandler;
import lombok.*;

@Configuration
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Autowired
    private UserDetailsService userDetailsService;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.authenticationProvider(createJwtAuthenticationProvider());

        auth.userDetailsService(userDetailsService)
            .passwordEncoder(new BCryptPasswordEncoder());
    }

    private JwtAuthenticationProvider createJwtAuthenticationProvider() {
        var decoder = NimbusJwtDecoder.withSecretKey(jwtSecretKey())
            .macAlgorithm(MacAlgorithm.HS256)
            .build();
        decoder.setJwtValidator(JwtValidators.createDefault());

        var converter = new JwtAuthenticationConverter();
        converter.setJwtGrantedAuthoritiesConverter(jwt -> jwt.getClaimAsStringList("roles")
            .stream()
            .<GrantedAuthority>map(role -> new SimpleGrantedAuthority("ROLE_" + role.toUpperCase()))
            .toList());

        var provider = new JwtAuthenticationProvider(decoder);
        provider.setJwtAuthenticationConverter(converter);

        return provider;
    }

    @Bean
    @SneakyThrows(NoSuchAlgorithmException.class)
    public SecretKey jwtSecretKey() {
        var generator = KeyGenerator.getInstance("AES");
        generator.init(256);
        return generator.generateKey();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeHttpRequests()
            .anyRequest().authenticated();

        http.csrf().ignoringAntMatchers("/api/v1/**");

        http.addFilter(createUsernamePasswordAuthenticationFilter(authenticationManager()));
        http.addFilter(new BearerTokenAuthenticationFilter(authenticationManager()));

        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
    }

    private UsernamePasswordAuthenticationFilter createUsernamePasswordAuthenticationFilter(
        AuthenticationManager authenticationManager) {

        var authenticationHandler = new JwtAuthenticationHandler(jwtSecretKey());

        var filter = new UsernamePasswordAuthenticationFilter(authenticationManager);
        filter.setUsernameParameter("account");
        filter.setPasswordParameter("pwd");
        filter.setFilterProcessesUrl("/api/v1/auth");
        filter.setAuthenticationSuccessHandler(authenticationHandler);
        filter.setAuthenticationFailureHandler(authenticationHandler);

        return filter;
    }
}
