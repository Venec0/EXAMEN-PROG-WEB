package io.JoJoFa.Vinilo.repository.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "roles")
@Getter
@Setter
public class RoleEntity {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id", updatable = false, nullable = false)
  private Integer id;

  @Column(name = "name", updatable = false, nullable = false, length = 30)
  private String name;

  @Column(name = "description", nullable = false, length = 500)
  private String description;
}
