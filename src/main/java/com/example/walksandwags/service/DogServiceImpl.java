package com.example.walksandwags.service;

import com.example.walksandwags.model.Dog;
import com.example.walksandwags.model.User;
import com.example.walksandwags.repository.DogRepository;
import com.example.walksandwags.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class DogServiceImpl implements DogService {

    @Autowired
    DogRepository dogRepository;

    @Autowired
    UserService userService;

    @Autowired
    UserRepository userRepository;

    //allows user to create dog profile
    @Override
    public Dog createDog(Dog newDog, String username){
        User user = userRepository.findByUsername(username);
        newDog.setUser(user);
        user.addDog(newDog);
        return dogRepository.save(newDog);
    }

    @Override
    public Iterable<Dog> listAllDogs(){
        return dogRepository.findAll();
    }


//    @Override
//    @Transactional
//    public ResponseEntity deleteDog(Long dogId) {
//        dogRepository.deleteById(dogId);
//
//    }
}
