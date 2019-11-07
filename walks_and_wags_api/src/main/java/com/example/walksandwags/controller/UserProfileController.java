package com.example.walksandwags.controller;

import com.example.walksandwags.model.UserProfile;
import com.example.walksandwags.service.UserProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/profile")
public class UserProfileController {
    @Autowired
    UserProfileService userProfileService;

    //create user profile by username
    @PostMapping("/{username}")
    public UserProfile createUserProfile(@PathVariable String username, @RequestBody UserProfile userProfile){
        return userProfileService.createUserProfile(username, userProfile);
    }


    //endpoint for getting the user's profile if username is given
    @GetMapping("/{username}")
    public UserProfile getUserProfile(@PathVariable String username){
        return userProfileService.getUserProfile(username);
    }


}
