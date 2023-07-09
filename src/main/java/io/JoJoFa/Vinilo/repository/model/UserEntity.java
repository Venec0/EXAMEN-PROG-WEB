package io.JoJoFa.Vinilo.repository.model;

import javax.persistence.*;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "users")
@Getter
@Setter
public class UserEntity {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id", updatable = false, nullable = false)
  private Integer id;

  @Column(name = "username", updatable = false, nullable = false, length = 30)
  private String username;

  @Column(name = "password", nullable = false, length = 30)
  private String password;

  @Column(name = "email", nullable = false, length = 100)
  private String email;

  @ManyToOne
  @JoinColumn(name = "role_id", nullable = false)
  private io.JoJoFa.Vinilo.repository.model.RolEntity role;
}
