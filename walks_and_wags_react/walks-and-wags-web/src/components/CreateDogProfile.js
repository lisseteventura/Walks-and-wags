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

const CreateDogProfile = props => {
  const { className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button
        color="primary"
        onClick={toggle}
        style={{ width: "20%", height: "50%" }}
      >
        Create a profile for your pup!
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Pups Profile</ModalHeader>
        <ModalBody>
          <form onSubmit={e => props.submitSignUp(e)}>
            <FormGroup>
              <p>Please enter required fields.</p>
              <Input
                type="text"
                placeholder="name"
                value={props.name}
                onChange={props.handleNameChange}
              />
              <br />
              <Input
                type="text"
                placeholder="age"
                value={props.age}
                onChange={props.handleAgeChange}
              />
              <br />
              <Input
                type="text"
                placeholder="gender"
                value={props.gender}
                onChange={props.handleGenderChange}
              />
              <br />
              <Input
                type="text"
                placeholder="Give us a quick bio about your pup...what do they like to do"
                value={props.description}
                onChange={props.handleDescChange}
              />
              <br />
              <Input
                type="text"
                placeholder="What's their favorite treat?"
                value={props.favTreat}
                onChange={props.handleFavTreatChange}
              />
            </FormGroup>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={props.submitDogProfile}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CreateDogProfile;
