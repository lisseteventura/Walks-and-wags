package com.example.walksandwags.service;

import com.example.walksandwags.config.IAuthentication;
import com.example.walksandwags.model.User;
import com.example.walksandwags.model.UserProfile;
import com.example.walksandwags.repository.UserProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

@Service
public class UserProfileServiceImpl implements UserProfileService {
    @Autowired
    UserProfileRepository userProfileRepository;

    @Autowired
    UserService userService;

    @Autowired
    IAuthentication authImpl;

    @Override
    public UserProfile createUserProfile(UserProfile newProfile) {
        Authentication auth = authImpl.getAuthentication();
        User user = userService.getUser(auth.getName());
        user.setUserProfile(newProfile);
//        return userService.createUser(user).getUserProfile();
        return userProfileRepository.save(newProfile);

    }

    //get user's profile information if username is given.
    @Override
    public UserProfile getUserProfile(String username) {
        return userProfileRepository.findProfileByUsername(username);
    }




}