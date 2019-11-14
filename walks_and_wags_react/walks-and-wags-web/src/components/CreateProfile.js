import React from "react";
import { Form, Button, FormGroup, Input, Alert, Container } from "reactstrap";

const CreateProfile = props => {
  return (
    <div>
      <Container>
        <Form>
          <FormGroup>
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
      </Container>
    </div>
  );
};
export default CreateProfile;
