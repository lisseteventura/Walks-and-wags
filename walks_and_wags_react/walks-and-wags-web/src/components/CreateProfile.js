import React from "react";
import { Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";

const CreateProfile = props => {
  return (
    <div>
      <Form>
        <FormGroup>
          <Label for="Email">Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="email"
            value={props.email}
            onChange={props.handleEmailChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="mobile">Mobile</Label>
          <Input
            type="mobile"
            name="mobile"
            id="mobile"
            placeholder="mobile"
            value={props.mobile}
            onChange={props.handleMobileChange}
          />
        </FormGroup>
        <Button color="warning" onClick={props.submitProfileInfo}>
          Submit
        </Button>
        <br />
        {props.buttonClicked}
        {props.buttonClicked ? (
          <Alert color="warning" style={{ textAlign: "center" }}>
            Success!
          </Alert>
        ) : (
          " "
        )}
      </Form>
    </div>
  );
};
export default CreateProfile;
