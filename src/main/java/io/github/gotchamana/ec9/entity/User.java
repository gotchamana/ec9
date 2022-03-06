package io.github.gotchamana.ec9.entity;

import java.util.Set;

import javax.persistence.*;

import org.hibernate.annotations.GenericGenerator;

import lombok.*;

@Entity
@Table(name = "\"user\"")
@Getter
@Setter
public class User {
    
    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    private String id;

    @Column(nullable = false, unique = true)
    private String name;

    @Column(nullable = false)
    private String password;

    @Enumerated(EnumType.STRING)
    @ElementCollection
    @Column(name = "role", nullable = false)
    @JoinTable(name = "user_role")
    private Set<Role> roles;

    public enum Role {
        USER, ADMIN
    }
}
