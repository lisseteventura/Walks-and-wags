package com.example.walksandwags.service;

import com.example.walksandwags.model.Dog;
import org.springframework.http.ResponseEntity;

public interface DogService {

    public Dog createDog(Dog newDog);

    public Iterable<Dog> listAllDogs();

    public Dog getDogById(Long dogId);

//    public void deleteDog(Long dogId);
    public ResponseEntity deleteDogById(Long dogId);
}
