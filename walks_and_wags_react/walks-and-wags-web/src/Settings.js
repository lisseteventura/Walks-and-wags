import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { Layout } from "./components/Layout.js";
import CreateProfile from "./components/CreateProfile.js";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: "",
      email: "",
      buttonClicked: false
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/profile", {
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
          email: res.email,
          mobile: res.mobile
        });

        console.log("ayyyyy");
      })
      .catch(err => console.log(err));
  }

  submitProfileInfo = () => {
    console.log("SUBMIT");
    fetch("http://localhost:8080/profile", {
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
        this.setState({
          email: "",
          mobile: "",
          buttonClicked: true
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

  render() {
    return (
      <div>
        <Layout>
          <div style={{ width: "100%", margin: "12% auto" }}>
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
                <div>Email: {this.state.email}</div>
                <div>Mobile: {this.state.mobile}</div>
              </Col>
            </Row>
            <br />
          </div>
          <CreateProfile
            email={this.state.email}
            mobile={this.state.mobile}
            submitProfileInfo={this.submitProfileInfo}
            buttonClicked={this.state.buttonClicked}
            handleEmailChange={this.state.handleEmailChange}
            handleMobileChange={this.state.handleMobileChange}
          />
        </Layout>
      </div>
    );
  }
}
export default Settings;
