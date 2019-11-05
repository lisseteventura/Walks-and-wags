package com.example.walksandwags.service;

import com.example.walksandwags.model.Dog;

public interface DogService {

    public Dog createDog(Dog newDog, String username);

    public Iterable<Dog> listAllDogs();


    public void deleteDog(Long dogId);

}
