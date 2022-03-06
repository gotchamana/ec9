package io.github.gotchamana.ec9.auth;

import java.io.IOException;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.*;

import javax.crypto.SecretKey;
import javax.servlet.ServletException;
import javax.servlet.http.*;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.nimbusds.jose.*;
import com.nimbusds.jose.crypto.MACSigner;
import com.nimbusds.jwt.*;

import org.springframework.http.HttpStatus;
import org.springframework.security.core.*;
import org.springframework.security.web.authentication.*;

import lombok.extern.log4j.Log4j2;

@Log4j2
public class JwtAuthenticationHandler implements AuthenticationSuccessHandler, AuthenticationFailureHandler {

    private final ObjectMapper objectMapper = new ObjectMapper();

    private final SecretKey jwtSecretKey;

    public JwtAuthenticationHandler(SecretKey jwtSecretKey) {
        this.jwtSecretKey = jwtSecretKey;
    }

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
        Authentication authentication) throws IOException, ServletException {

        try {
            var jwt = createJwt(authentication).serialize();
            var message = objectMapper.writeValueAsString(Map.of("token", jwt));

            response.getWriter().write(message);
        } catch (JOSEException e) {
            log.error("Creating JWT for login failed, user name: {}",authentication.getName(), e);
        }
    }

    private JWT createJwt(Authentication authentication) throws JOSEException {
        var now = Instant.now();
        var roles = authentication.getAuthorities()
            .stream()
            .map(auth -> auth.getAuthority().replace("ROLE_", ""))
            .toList();

        var claims = new JWTClaimsSet.Builder()
            .jwtID(UUID.randomUUID().toString())
            .issueTime(Date.from(now))
            .expirationTime(Date.from(now.plus(1, ChronoUnit.DAYS)))
            .subject(authentication.getName())
            .claim("roles", roles)
            .build();

        var signedJwt = new SignedJWT(new JWSHeader(JWSAlgorithm.HS256), claims);
        signedJwt.sign(new MACSigner(jwtSecretKey));

        return signedJwt;
    }

    @Override
    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response,
        AuthenticationException exception) throws IOException, ServletException {

        var message = objectMapper.writeValueAsString(Map.of("message", exception.getMessage()));

        response.setStatus(HttpStatus.UNAUTHORIZED.value());
        response.getWriter().write(message);
    }
}
