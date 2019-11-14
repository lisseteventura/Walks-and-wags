package com.example.walksandwags.repository;

import com.example.walksandwags.model.Dog;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface DogRepository extends CrudRepository<Dog, Long> {


//    @Query("from Dog up inner join User u on u.username = ?1 and up.id = u.dog.id")
//    public Dog findProfileByUsername(String username);

    public Iterable<Dog> findAllById(String anyString);

}
