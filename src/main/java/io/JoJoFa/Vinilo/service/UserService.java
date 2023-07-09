package io.JoJoFa.Vinilo.service;

import io.JoJoFa.Vinilo.endpoint.User;
import io.JoJoFa.Vinilo.repository.model.DiscEntity;
import io.JoJoFa.Vinilo.repository.UserRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class UserService {

  private final UserRepository userRepository;

  public List<User> getListUsers() {
    List<DiscEntity> all = (List<DiscEntity>)userRepository.findAll();
    List<User> users = new ArrayList<>();
    for(DiscEntity ue: all){
      User user = new User();
      user.setId(ue.getId());
      user.setUsername(ue.getUsername());
      user.setPassword(ue.getPassword());
      user.setEmail(ue.getEmail());
      user.setRole(ue.getRole().getName());
      users.add(user);
    }
    return users;
  }

  public User getUserById(int id) {
    Optional<DiscEntity> byId = userRepository.findById(id);
    if(byId.isPresent()){
      DiscEntity ue = byId.get();
      User user = new User();
      user.setId(ue.getId());
      user.setUsername(ue.getUsername());
      user.setPassword(ue.getPassword());
      user.setEmail(ue.getEmail());
      return user;
    }

    return null;
  }

  public int addUser(User user) {
    DiscEntity newUser = new DiscEntity();
    newUser.setUsername(user.getUsername());
    newUser.setEmail(user.getEmail());
    newUser.setPassword(user.getPassword());
    DiscEntity saved = userRepository.save(newUser);
    return saved.getId();
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
