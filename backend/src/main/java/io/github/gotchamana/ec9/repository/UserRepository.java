package io.github.gotchamana.ec9.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import io.github.gotchamana.ec9.entity.User;

public interface UserRepository extends JpaRepository<User, String> {

    boolean existsByAccount(String account);

    User findByAccount(String account);
}
