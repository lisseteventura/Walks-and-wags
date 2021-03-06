package com.example.walksandwags.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;

@Entity
@Table(name = "dogs")
public class Dog {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column
    private String gender;

    @Column
    private Double age;

    @Column
    private String description;

    @Column
    private String favTreat;

    public Dog(){}

    public Long getId(){
        return id;
    }
    public void setId(Long id){
        this.id = id;
    }

    public String getName(){
        return name;
    }
    public void setName(String name){
        this.name = name;
    }

    public String getGender(){
        return gender;
    }
    public void setGender(String gender){
        this.gender = gender;
    }

    public Double getAge(){
        return age;
    }

    public void setAge(Double age){
        this.age = age;
    }

    public String getDescription(){
        return description;
    }

    public void setDescription(String description){
        this.description = description;
    }

    public String getFavTreat(){
        return favTreat;
    }
    public void setFavTreat(String favTreat){
        this.favTreat = favTreat;
    }

    @JsonIgnore
//    @OneToOne(mappedBy = "dog", cascade={CascadeType.DETACH,
//            CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH})
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name= "user_id", nullable = false)
//    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private User user;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

}
