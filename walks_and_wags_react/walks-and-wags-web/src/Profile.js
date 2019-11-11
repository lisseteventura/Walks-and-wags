import React, { Component } from "react";
import { Toast, ToastBody, ToastHeader } from "reactstrap";

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      dogPicURL: "",
      dogPicLoaded: false
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
        </div>
      </div>
    );
  }
}

export default Profile;
