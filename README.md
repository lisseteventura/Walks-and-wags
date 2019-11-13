# Walks and Wags
(Capstone Project)
A website to view the profile of potential companions for you four-legged friend!

### Technologies Used
- Java
- Springboot
- Postgres
- Postman
- React

### General Approach
I started by making an ERD diagram for this website. I wanted to visual see the tables as well as the relationships between the tables. Once I felt confident about the ERD diagram I implemented it into a monolithic backend. For me it was easier to start with a monolithic backend and then convert it to a microservice. The general flow when creating the backend went as follows: Models > Repositories > Services > Controller. After testing all endpoints I moved on to converting it to a microservice but I hit a roadblock. I was receiving a ton of errors throughout this process. So I then decided to start working on the React frontend. I worked on making sure that I made the correct fetch calls to connect my backend to the front while keeping in mind that there are two flows in the website depending on whether the user is new or returning.  

### Unsolved Problems and Major Hurdles
Some of my unsolved problems:

Major hurdles included:
- Flyway errors and connection being refused while developing a microservice.
- Choosing where state should reside in my React app.
- 401 Unauthorized error when trying to fetch the list of dogs.

### User Stories
- As a user who just moved into the city, I'd like to find friendly dogs to have playdates with my dog.
- As a new user, upon signing up I'd like to be taken through a sign up flow where I can enter my information and make my dog's profile.
- As a returning user, I'd like to immediately see other dog's profile so that I can see who I think would be a good match for my dog.
- As a user, I would like to be able to reach out to the owner of the dog so that I can set up a playdate.

### Sketches
