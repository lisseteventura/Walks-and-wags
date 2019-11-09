import React, { Component } from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";

class Settings extends Component {
  render() {
    return (
      <div style={{ width: "50%", margin: "10rem auto" }}>
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
