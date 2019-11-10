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
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="warning" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>New User</ModalHeader>
        <ModalBody>
          <form>
            <FormGroup>
              <Input type="text" placeholder="username" />
              <br />
              <Input type="text" placeholder="password" />
            </FormGroup>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="warning" onClick={toggle}>
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
