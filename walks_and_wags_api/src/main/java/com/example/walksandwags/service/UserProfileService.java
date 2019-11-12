package com.example.walksandwags.service;

import com.example.walksandwags.model.UserProfile;

public interface UserProfileService {
    //add a user's profile if username is given
    UserProfile createUserProfile(UserProfile newProfile);

    //get user's profile information if username is given.
    UserProfile getUserProfile(String username);



}
