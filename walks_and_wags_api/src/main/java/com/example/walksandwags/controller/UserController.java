package com.example.walksandwags.controller;

import com.example.walksandwags.model.JwtResponse;
import com.example.walksandwags.model.User;
import com.example.walksandwags.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {
    @Autowired
    UserService userService;

    //endpoint to list all users
    @GetMapping("/user/list")
    public Iterable<User> listUsers() {
        return userService.listUsers();
    }

    //endpoint for user signup
//    @PostMapping("/signup")
//    public User createUser(@RequestBody User newUser){
//        return userService.createUser(newUser);
//    }
    @PostMapping("/signup")
    public ResponseEntity<?> createUser(@RequestBody User newUser) {
        return ResponseEntity.ok(new JwtResponse(userService.createUser(newUser)));
    }

//    //endpoint for user login
//    @GetMapping("/login/{username}/{password}")
//    public User login(@PathVariable String username, @PathVariable String password){
//        return userService.login(username, password);
//    }

    //user login and immediately gets token
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        return ResponseEntity.ok(new JwtResponse(userService.login(user)));
    }

    //delete user
    @DeleteMapping("/user/{userId}")
    public HttpStatus deleteById(@PathVariable Long userId) {
        userService.deleteUserById(userId);
        return HttpStatus.OK;

    }

}
