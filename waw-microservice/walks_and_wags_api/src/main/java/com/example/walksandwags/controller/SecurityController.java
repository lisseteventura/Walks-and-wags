package com.example.walksandwags.controller;

import com.example.walksandwags.config.IAuthentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

@Component
public class SecurityController {

    //get current user in the bean
    @Autowired
    private IAuthentication iauthentication;


    public String getCurrentUsername() {
        Authentication authentication = iauthentication.getAuthentication();
        return authentication.getName();
    }
}
