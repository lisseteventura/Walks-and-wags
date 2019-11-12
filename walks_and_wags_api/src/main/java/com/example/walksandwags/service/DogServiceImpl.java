package com.example.walksandwags.service;

import com.example.walksandwags.config.IAuthentication;
import com.example.walksandwags.model.Dog;
import com.example.walksandwags.model.User;
import com.example.walksandwags.repository.DogRepository;
import com.example.walksandwags.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
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

    @Autowired
    IAuthentication authImpl;

    //allows user to create dog profile
    @Override
    public Dog createDog(Dog newDog){
        Authentication auth = authImpl.getAuthentication();
        User user = userRepository.findByUsername(auth.getName());
        newDog.setUser(user);
        user.addDog(newDog);
        return dogRepository.save(newDog);
    }

    @Override
    public Iterable<Dog> listAllDogs(){
        return dogRepository.findAll();
    }

    @Override
    public Dog getDogById(Long dogId) {
        return dogRepository.findById(dogId).get();
    }

    @Override
    @Transactional
    public ResponseEntity deleteDogById(Long dogId) {
        dogRepository.deleteById(dogId);
        return new ResponseEntity(HttpStatus.OK);

    }
}
