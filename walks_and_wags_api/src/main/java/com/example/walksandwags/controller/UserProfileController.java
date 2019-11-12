package com.example.walksandwags.controller;

import com.example.walksandwags.model.UserProfile;
import com.example.walksandwags.service.UserProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserProfileController {
    @Autowired
    UserProfileService userProfileService;


    @PostMapping("/profile")
    public UserProfile createUserProfile(@RequestBody UserProfile userProfile){
        return userProfileService.createUserProfile(userProfile);
    }


    //endpoint for getting the user's profile if username is given
    @GetMapping("/profile/{username}")
    public UserProfile getUserProfile(@PathVariable String username){
        return userProfileService.getUserProfile(username);
    }



}
