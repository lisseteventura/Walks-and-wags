import React, { Component } from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import { Row, Col } from "reactstrap";
// import axios from "axios";

class Settings extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     user = []
  //   };
  // }

  // componentDidMount() {
  //   axios.get(`https://localhost:8080/`).then(response => {
  //     this.setState({ email: response.email, mobile: response.mobile });
  //   });
  // }
  render() {
    return (
      <div style={{ width: "50%", margin: "10rem auto" }}>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            .col-sm-12 .col-md-6 .offset-md-3 - user profile info
            {this.state}
          </Col>
        </Row>
        <br />
        <InputGroup>
          <InputGroupAddon addonType="prepend">First name: </InputGroupAddon>
          <Input placeholder="first name" />
        </InputGroup>
        <br />
        <InputGroup>
          <InputGroupAddon addonType="prepend">Last name: </InputGroupAddon>
          <Input placeholder="last name" />
        </InputGroup>
        <br />
        <InputGroup>
          <InputGroupAddon addonType="prepend">Mobile:</InputGroupAddon>
          <Input placeholder="mobile number" />
        </InputGroup>
        <br />

        <InputGroup>
          <Input placeholder="email" />
          <InputGroupAddon addonType="append">
            <InputGroupText>@example.com</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
  }
}
export default Settings;
