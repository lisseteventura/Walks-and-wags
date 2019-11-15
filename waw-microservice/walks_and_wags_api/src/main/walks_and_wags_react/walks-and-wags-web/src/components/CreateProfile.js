import React from "react";
import { Form, Button, FormGroup, Input, Alert } from "reactstrap";
import { Layout } from "./Layout.js";

const CreateProfile = props => {
  return (
    <div>
      <Layout>
        <Form style={{ width: "50%", margin: "auto", textAlign: "center" }}>
          <h5>Enter or Update Your Information: </h5>

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
          <Button
            color="warning"
            onClick={props.submitProfileInfo}
            style={{ width: "100%" }}
          >
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
      </Layout>
    </div>
  );
};
export default CreateProfile;
