import React, { Component } from "react";
import { Toast, ToastBody, ToastHeader } from "reactstrap";
import { Col, Row } from "reactstrap";

class Profile extends Component {
  render() {
    return (
      <div>
        <h3>Doggies profiles here</h3>
        <div className="p-3 my-2 rounded">
          <Toast style={{ margin: "auto" }}>
            <ToastHeader>Reactstrap</ToastHeader>
            <ToastBody>
              This is a toast on a white background — check it out!
            </ToastBody>
          </Toast>
        </div>
      </div>
    );
  }
}

export default Profile;
