package io.github.gotchamana.ec9.auth;

import org.springframework.security.core.userdetails.UserDetails;

public interface ExtendedUserDetails extends UserDetails {
    String getId();
    String getName();
}
