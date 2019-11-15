import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { Layout } from "./components/Layout.js";
import CreateProfile from "./components/CreateProfile.js";
import CreateDogProfile from "./components/CreateDogProfile.js";
import Footer from "./components/Footer.js";
import { Redirect } from "react-router-dom";
class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: "",
      email: "",
      displayEmail: "",
      displayMobile: "",
      buttonClicked: false,
      name: "",
      age: "",
      gender: "",
      description: "",
      favTreat: "",
      createButtonClicked: false
    };
  }

  componentDidMount() {
    fetch("http://localhost:8081/profile", {
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
          displayEmail: res.email,
          displayMobile: res.mobile
        });

        console.log("ayyyyy");
      })
      .catch(err => console.log(err));
  }

  submitProfileInfo = () => {
    console.log("SUBMIT");
    console.log(this.state.email, this.state.mobile);
    fetch("http://localhost:8081/profile", {
      method: "post",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("user"),
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.email,
        mobile: this.state.mobile
      })
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({
          email: "",
          mobile: "",
          buttonClicked: true,
          displayEmail: res.email,
          displayMobile: res.mobile
        });
        console.log("ayyyyy");
      })
      .catch(err => console.log(err));
  };

  submitDogProfile = () => {
    console.log("SUBMIT");
    console.log(this.state.email, this.state.mobile);
    fetch("http://localhost:8081/dog/create", {
      method: "post",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("user"),
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        age: this.state.age,
        gender: this.state.gender,
        description: this.state.description,
        favTreat: this.state.favTreat
      })
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({
          name: "",
          age: "",
          gender: "",
          description: "",
          favTreat: "",
          createButtonClicked: true
        });
        console.log("ayyyyy");
      })
      .catch(err => console.log(err));
  };

  handleEmailChange = e => {
    this.setState({
      email: e.target.value
    });
  };
  handleMobileChange = e => {
    this.setState({
      mobile: e.target.value
    });
  };
  handleNameChange = e => {
    this.setState({
      name: e.target.value
    });
  };
  handleAgeChange = e => {
    this.setState({
      age: e.target.value
    });
  };
  handleGenderChange = e => {
    this.setState({
      gender: e.target.value
    });
  };
  handleDescChange = e => {
    this.setState({
      description: e.target.value
    });
  };
  handleFavTreatChange = e => {
    this.setState({
      favTreat: e.target.value
    });
  };

  render() {
    if (this.state.createButtonClicked) {
      return <Redirect to="/profile" />;
    }
    return (
      <div>
        <Layout>
          <div style={{ width: "100%", margin: "10% auto" }}>
            <Row>
              <Col
                sm="12"
                md={{ size: 6, offset: 3 }}
                style={{
                  border: "1px solid #888888",
                  borderRadius: "5px"
                }}
              >
                <h5 style={{ textAlign: "center" }}>User Information </h5>
                <div>Email: {this.state.displayEmail}</div>
                <div>Mobile: {this.state.displayMobile}</div>
              </Col>
            </Row>
            <br />
            <br />
            <div style={{ marginLeft: "37%" }}>
              <CreateDogProfile
                name={this.state.name}
                age={this.state.age}
                gender={this.state.gender}
                description={this.state.description}
                favTreat={this.state.favTreat}
                submitDogProfile={this.submitDogProfile}
                handleNameChange={this.handleNameChange}
                handleAgeChange={this.handleAgeChange}
                handleGenderChange={this.handleGenderChange}
                handleDescChange={this.handleDescChange}
                handleFavTreatChange={this.handleFavTreatChange}
                createButtonClicked={this.state.createButtonClicked}
              />
            </div>
          </div>

          <CreateProfile
            email={this.state.email}
            mobile={this.state.mobile}
            submitProfileInfo={this.submitProfileInfo}
            buttonClicked={this.state.buttonClicked}
            handleEmailChange={this.handleEmailChange}
            handleMobileChange={this.handleMobileChange}
          />
          <br />
        </Layout>
        <Footer />
      </div>
    );
  }
}
export default Settings;
