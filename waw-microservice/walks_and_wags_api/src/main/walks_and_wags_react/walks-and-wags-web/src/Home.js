import React, { Component } from "react";
import { Jumbotron } from "./components/Jumbotron.js";
import LogIn from "./components/LogIn.js";
import Footer from "./components/Footer.js";
import { Col, Row } from "reactstrap";
import twoDogs from "./assets/twoDogs.jpeg";
import { Layout } from "./components/Layout.js";
class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron />
        <Layout>
          <Row style={{ textAlign: "center" }}>
            <Col xs="6">
              Make your dog a lucky dog. View through the profile's of dogs in
              your area. We're pawsitive we'll find a friend for your dog.
              <br />
              <img
                style={{ width: "60%", height: "90%" }}
                src={twoDogs}
                alt="Two dogs walking"
              />
            </Col>
            <Col xs="6">
              <LogIn />
            </Col>
          </Row>
        </Layout>

        <Footer />
      </div>
    );
  }
}
export default Home;
