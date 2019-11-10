import React, { Component } from "react";
import { Toast, ToastBody, ToastHeader } from "reactstrap";

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      dogPicURL: "",
      dogPicLoaded: false,
      dogPics: [],
      dogPicError: false
    };
  }

  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/list/random/3")
      .then(response => {
        return response.json();
      })
      .then(response => {
        this.setState({
          dogPics: response.message
        });
      })
      .catch(error => {
        this.setState({
          dogPicError: true
        });
      });
  }

  retrieveDogPic = dog => {
    fetch(`https://dog.ceo/api/breed/${dog}/images/random`)
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
                {this.state.dogPics
                  ? this.state.dogPics.map((dog, key) => {
                      return (
                        <button
                          onClick={() => this.retrieveDogPic(dog)}
                          className="dog-pics-button"
                          key={key}
                        >
                          {dog}
                        </button>
                      );
                    })
                  : ""}
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
