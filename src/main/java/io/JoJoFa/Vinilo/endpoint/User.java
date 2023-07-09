package io.JoJoFa.Vinilo.endpoint;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class User {
  private int id;
  private String username;
  private String password;
  private String email;
  private String role;
}
