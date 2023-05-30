package io.cmartinezs.democrud.repository;

import io.cmartinezs.democrud.endpoint.User;
import java.util.ArrayList;
import java.util.List;

public class FakeDataBase {
  private static List<User> users;

  public static void createList(){
    users = new ArrayList<>();

    User user1 = new User();
    user1.setUsername("cmartinezs");
    user1.setPassword("asdf");
    user1.setId(1);
    user1.setEmail("carlos@duoc.cl");
    users.add(user1);

    User user2 = new User();
    user2.setUsername("fperez");
    user2.setPassword("asdf");
    user2.setId(2);
    user2.setEmail("francisco@duoc.cl");
    users.add(user2);

    User user3 = new User();
    user3.setUsername("pjimenez");
    user3.setPassword("asdf");
    user3.setId(3);
    user3.setEmail("pedro@duoc.cl");
    users.add(user3);
  }

  public static List<User> getUsers(){
    if(users == null){
      createList();
    }
    return users;
  }
}
