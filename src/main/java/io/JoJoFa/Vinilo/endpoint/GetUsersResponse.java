package io.JoJoFa.Vinilo.endpoint;

import java.util.List;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class GetUsersResponse {
  private List<User> users;
}
