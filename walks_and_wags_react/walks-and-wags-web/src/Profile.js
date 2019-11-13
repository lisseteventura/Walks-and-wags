import React, { Component } from "react";
import { Toast, ToastBody, ToastHeader } from "reactstrap";
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
      <div>
        <div className="p-3 my-2 rounded">
          <Toast style={{ margin: "auto" }}>
            <ToastHeader>Reactstrap</ToastHeader>
            <ToastBody>
              This is a toast on a white background — check it out!
              <div className="dog-pics-app">
                <h1>Dog Pics!</h1>
                <div>Click the button below to retrieve a dog pic!</div>
                <button
                  onClick={this.retrieveDogPic}
                  className="dog-pics-button"
                >
                  Click for a dog pic!
                </button>
                {this.state.dogPicLoaded && (
                  <img src={this.state.dogPicURL} alt="Dog Pic!" />
                )}
              </div>
            </ToastBody>
          </Toast>
          <div>
            <h1>Dog profile</h1>
            <button onClick={this.getDogProfile}>Click for profile</button>
            <ul>
              {this.state.dogs.length > 0 &&
                this.state.dogs[this.state.profileNum].name}
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
      </div>
    );
  }
}

export default Profile;
//
// {this.state.dogs.map(dog => (
//   <li key={dog.name}> {dog.name} </li>
// ))}
