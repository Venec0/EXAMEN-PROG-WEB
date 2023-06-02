package io.cmartinezs.democrud.endpoint;

import io.cmartinezs.democrud.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class UserController {
  final private UserService service;

  @GetMapping("/users")
  public ResponseEntity<GetUsersResponse> getUsers() {
    GetUsersResponse response = new GetUsersResponse();
    response.setUsers(service.getListUsers());
    return ResponseEntity.ok(response);
  }

  @GetMapping("/users/{id}")
  public ResponseEntity<GetUserResponse> getUsers(@PathVariable("id") int id) {
    User userById = service.getUserById(id);
    if (userById != null) {
      GetUserResponse response = new GetUserResponse();
      response.setUser(userById);
      return ResponseEntity.ok(response);
    } else {
      return ResponseEntity.notFound().build();
    }
  }

  @PostMapping("/users")
  public ResponseEntity<PostUserResponse> post(@RequestBody User user) {
    int id = service.addUser(user);
    PostUserResponse response = new PostUserResponse();
    response.setId(id);
    return ResponseEntity.ok(response);
  }

  @PutMapping("/users/{id}")
  public ResponseEntity<PutUserResponse> put(@PathVariable("id") int id, @RequestBody User user){
    User updated = service.updateUserById(id, user);
    if (updated != null) {
      PutUserResponse response = new PutUserResponse();
      response.setUser(updated);
      return ResponseEntity.ok(response);
    } else {
      return ResponseEntity.badRequest().build();
    }
  }

  @DeleteMapping("/users/{id}")
  public ResponseEntity<DeleteUserResponse> delete(@PathVariable("id") int id) {
    User deleted = service.deleteUserById(id);
    if (deleted != null) {
      DeleteUserResponse response = new DeleteUserResponse();
      response.setUser(deleted);
      return ResponseEntity.ok(response);
    } else {
      return ResponseEntity.badRequest().build();
    }
  }
}
