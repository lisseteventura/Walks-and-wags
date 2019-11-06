package com.example.walksandwags.controller;

import com.example.walksandwags.model.Dog;
import com.example.walksandwags.service.DogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/dog")
public class DogController {

    @Autowired
    DogService dogService;

    //create dog profile by username
    @PostMapping("/create/{username}")
    public Dog createDog(@PathVariable String username, @RequestBody Dog newDog) {
        return dogService.createDog(newDog, username);
    }

    //get list of all dogs
    @GetMapping("/list")
    public Iterable<Dog> listAllDogs() { return dogService.listAllDogs(); }

    //delete dog profile
//    @DeleteMapping("/delete/{dogId}")
//    public HttpStatus deleteDogById(@PathVariable Long dogId) {
//        dogService.deleteDog(dogId);
//        return HttpStatus.OK;
//
//    }
}
