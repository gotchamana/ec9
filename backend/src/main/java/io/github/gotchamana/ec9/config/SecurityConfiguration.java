package io.github.gotchamana.ec9.config;

import java.io.IOException;
import java.security.NoSuchAlgorithmException;
import java.util.Map;

import javax.crypto.*;
import javax.servlet.http.*;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.*;
import org.springframework.security.authentication.*;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.*;
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
            .antMatchers("/api/v1/register").permitAll()
            .antMatchers("/api/v1/**").authenticated();

        http.csrf().ignoringAntMatchers("/api/v1/**");

        http.addFilter(createUsernamePasswordAuthenticationFilter(authenticationManager()));
        http.addFilter(new BearerTokenAuthenticationFilter(authenticationManager()));

        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
    }

    private UsernamePasswordAuthenticationFilter createUsernamePasswordAuthenticationFilter(
        AuthenticationManager authenticationManager) {

        var authenticationHandler = new JwtAuthenticationHandler(jwtSecretKey());

        var filter = new UsernamePasswordAuthenticationFilter(authenticationManager) {

            private final ObjectMapper objectMapper = new ObjectMapper();

            @Override
            public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
                throws AuthenticationException {

                if (!request.getMethod().equals("POST")) {
                    throw new AuthenticationServiceException(
                        "Authentication method not supported: " + request.getMethod());
                }

                // 改從request body讀取帳號密碼
                var json = readBodyAsJson(request);
                var username = json.getOrDefault(getUsernameParameter(), "").trim();
                var password = json.getOrDefault(getPasswordParameter(), "");

                var authRequest = new UsernamePasswordAuthenticationToken(username, password);
                setDetails(request, authRequest);

                return this.getAuthenticationManager().authenticate(authRequest);
            }

            private Map<String, String> readBodyAsJson(HttpServletRequest request) {
                try (var in = request.getInputStream()) {
                    return objectMapper.readValue(in, new TypeReference<Map<String, String>>() {});
                } catch (IOException e) {
                    logger.error("Reading json body failed", e);
                    return Map.of();
                }
            }
        };
        filter.setUsernameParameter("account");
        filter.setPasswordParameter("psd");
        filter.setFilterProcessesUrl("/api/v1/login");
        filter.setAuthenticationSuccessHandler(authenticationHandler);
        filter.setAuthenticationFailureHandler(authenticationHandler);

        return filter;
    }
}
