import React, { Component } from "react";
import { Layout } from "./components/Layout.js";
class Profile extends Component {
  constructor() {
    super();

    this.state = {
      dogPicURL: "",
      dogPicLoaded: false,
      dogs: [],
      dogProfileLoaded: false,
      profileNum: 0
    };
  }

  componentDidMount() {
    this.retrieveDogPic();
    this.getDogProfile();
  }

  loadDogPP = () => {
    this.retrieveDogPic();
    this.getDogProfile();
    this.setState({ profileNum: (this.state.profileNum += 1) });
  };

  retrieveDogPic = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(response => {
        return response.json();
      })
      .then(response => {
        this.setState({
          dogPicURL: response.message,
          dogPicLoaded: true
        });
      });
  };

  getDogProfile = () => {
    console.log("SUBMIT");
    fetch("http://localhost:8080/dog/list", {
      method: "get",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("user"),
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({
          dogs: res,
          dogProfileLoaded: true
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Layout>
        <div style={{ margin: "4% auto", textAlign: "center" }}>
          <div className="dog-pics-app">
            <h1>Dog Pics!</h1>

            {this.state.dogPicLoaded && (
              <img src={this.state.dogPicURL} alt="Dog Pic!" />
            )}
          </div>
          <div>
            <button onClick={this.loadDogPP}>Click for profile</button>

            <ul style={{ textDecoration: "none" }}>
              <li>
                {this.state.dogs.length > 0 &&
                  this.state.dogs[this.state.profileNum].name}
              </li>
              <li>
                {this.state.dogs.length > 0 &&
                  this.state.dogs[this.state.profileNum].age}
              </li>
              <li>
                {this.state.dogs.length > 0 &&
                  this.state.dogs[this.state.profileNum].gender}
              </li>
              <li>
                {this.state.dogs.length > 0 &&
                  this.state.dogs[this.state.profileNum].description}
              </li>
              <li>
                {this.state.dogs.length > 0 &&
                  this.state.dogs[this.state.profileNum].favTreat}
              </li>
            </ul>

            <button
              onClick={() =>
                this.setState({ profileNum: (this.state.profileNum += 1) })
              }
            >
              next
            </button>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Profile;
//
// {this.state.dogs.map(dog => (
//   <li key={dog.name}> {dog.name} </li>
// ))}

// <li>
//   {this.state.dogs.length > 0 &&
//     this.state.dogs[this.state.profileNum].description}
// </li>
