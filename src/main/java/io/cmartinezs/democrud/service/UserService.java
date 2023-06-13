package io.cmartinezs.democrud.service;

import io.cmartinezs.democrud.endpoint.User;
import io.cmartinezs.democrud.repository.FakeDataBase;
import io.cmartinezs.democrud.repository.UserRepository;
import io.cmartinezs.democrud.repository.model.UserEntity;
import java.util.ArrayList;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class UserService {

  private final UserRepository userRepository;

  public List<User> getListUsers() {
    List<UserEntity> all = (List<UserEntity>)userRepository.findAll();
    List<User> users = new ArrayList<>();
    for(UserEntity ue: all){
      User user = new User();
      user.setId(ue.getId());
      user.setUsername(ue.getUsername());
      user.setPassword(ue.getPassword());
      user.setEmail(ue.getEmail());
      users.add(user);
    }
    return users;
  }

  public User getUserById(int id) {
    List<User> users = getListUsers();
    for (User user : users) {
      if (user.getId() == id) {
        return user;
      }
    }
    return null;
  }

  public int addUser(User user) {
    List<User> users = getListUsers();
    int id = users.size() + 1;
    user.setId(id);
    users.add(user);
    return id;
  }

  public User deleteUserById(int id) {
    List<User> users = getListUsers();
    for (User user : users) {
      if (user.getId() == id) {
        users.remove(user);
        return user;
      }
    }
    return null;
  }

  public User updateUserById(int id, User modifiedUser) {
    List<User> users = getListUsers();
    for (User user : users) {
      if (user.getId() == id) {
        user.setPassword(modifiedUser.getPassword());
        user.setUsername(modifiedUser.getUsername());
        user.setEmail(modifiedUser.getEmail());
        return user;
      }
    }
    return null;
  }
}
