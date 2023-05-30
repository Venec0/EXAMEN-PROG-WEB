package io.cmartinezs.democrud.service;

import io.cmartinezs.democrud.endpoint.User;
import io.cmartinezs.democrud.repository.FakeDataBase;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {
    public List<User> getListUsers(){
        return FakeDataBase.getUsers();
    }

    public User getUserById(int id){
        List<User> users = getListUsers();
        for(User user: users){
            if(user.getId() == id){
                return user;
            }
        }
        return null;
    }

    public int addUser(User user){
        List<User> users = getListUsers();
        int id = users.size() + 1;
        user.setId(id);
        users.add(user);
        return id;
    }
}
