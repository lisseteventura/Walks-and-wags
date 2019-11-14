package com.example.walksandwags.service;

import com.example.walksandwags.config.JwtUtil;
import com.example.walksandwags.model.User;
import com.example.walksandwags.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    @Qualifier("encoder")
    PasswordEncoder bCryptPasswordEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = getUser(username);

        if(user==null)
            throw new UsernameNotFoundException("User null");

        return new org.springframework.security.core.userdetails.User(user.getUsername(), bCryptPasswordEncoder.encode(user.getPassword()),
                true, true, true, true, new ArrayList<>());
    }

    private List<GrantedAuthority> getGrantedAuthorities(User user){
        List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();

//        authorities.add(new SimpleGrantedAuthority(user.getUserRole().getName()));

        return authorities;
    }


    @Autowired
    UserRepository userRepository;

    //get list of all users
    @Override
    public Iterable<User> listUsers(){
        return userRepository.findAll();
    }

//    //allows user to sign up
//    @Override
//    public User createUser(User newUser){
//        return userRepository.save(newUser);
//    }

//    @Override
//    public User login(String username, String password){
//        return userRepository.login(username, password);
//    }

    //get user's username(function later used in UserProfile)
    @Override public User getUser(String username){
        return userRepository.findByUsername(username);
    }


    @Override
    public void deleteUserById(Long userId) {
        userRepository.deleteById(userId);
    }

    @Autowired
    JwtUtil jwtUtil;

    @Override
    public String login(User user){
        if(userRepository.login(user.getUsername(), user.getPassword()) != null){
            UserDetails userDetails = loadUserByUsername(user.getUsername());
            return jwtUtil.generateToken(userDetails);
        }
        return null;
    }

    @Override
    public String createUser(User newUser) {
        newUser.setUsername(newUser.getUsername());
        newUser.setPassword(newUser.getPassword());

        if(userRepository.save(newUser) != null){
            UserDetails userDetails = loadUserByUsername(newUser.getUsername());
            return jwtUtil.generateToken(userDetails);
        }
        return null;
    }
}
