import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Input
} from "reactstrap";

const SignUp = props => {
  const { className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button
        color="warning"
        style={{ width: "100%", height: "38px", color: "white" }}
        onClick={toggle}
      >
        Sign up
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>New User</ModalHeader>
        <ModalBody>
          <form onSubmit={e => props.submitSignUp(e)}>
            <FormGroup>
              <p>Please enter required fields.</p>
              <Input
                type="username"
                placeholder="username"
                value={props.username}
                onChange={props.handleUsernameChange}
              />
              <br />
              <Input
                type="password"
                placeholder="password"
                value={props.password}
                onChange={props.handlePasswordChange}
              />
            </FormGroup>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="warning" onClick={e => props.submitSignUp(e)}>
            Sign Up!
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default SignUp;
