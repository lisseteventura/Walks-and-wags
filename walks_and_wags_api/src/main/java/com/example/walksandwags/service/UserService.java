package com.example.walksandwags.service;

import com.example.walksandwags.model.User;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService extends UserDetailsService {

    public Iterable<User> listUsers();

    //user sign up
//    public User createUser(User newUser);

    //user login
    public User login(String username, String password);

    //get user's username(function later used in UserProfile)
    public User getUser(String username);

    public void deleteUserById(Long userId);

    public String login(User user);

    public String createUser(User newUser);

}
