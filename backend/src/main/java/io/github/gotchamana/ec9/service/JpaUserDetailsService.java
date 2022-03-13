package io.github.gotchamana.ec9.service;

import java.lang.reflect.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import io.github.gotchamana.ec9.auth.ExtendedUserDetails;
import io.github.gotchamana.ec9.repository.UserRepository;

@Service
public class JpaUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        var user = userRepository.findByAccount(username);

        if (user == null)
            throw new UsernameNotFoundException("No such user: " + username);

        var authorities = user.getRoles()
            .stream()
            .map(role -> new SimpleGrantedAuthority("ROLE_" + role.name()))
            .toList();

        return createUserProxy(user, new User(username, user.getPassword(), authorities));
    }

    private UserDetails createUserProxy(io.github.gotchamana.ec9.entity.User user, User proxiedUser) {
        var interfaces = new Class[] { ExtendedUserDetails.class };

        InvocationHandler handler = (proxy, method, args) -> {
            if (method.getName().equals("getId"))
                return user.getId();
            else if (method.getName().equals("getName"))
                return user.getName();

            return method.invoke(proxiedUser, args);
        };

        return (UserDetails) Proxy.newProxyInstance(getClass().getClassLoader(), interfaces, handler);
    }
}
