import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import dog from "../assets/dog.png";

const Styles = styled.div`
  .jumbo {
    background: url(${dog}) no-repeat fixed bottom;
    background-size: cover;
    color: #ccc;
    height: 550px;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container style={{ textAlign: "center" }}>
        <h1>Looking for a companion for your four-legged friend?</h1>
      </Container>
    </Jumbo>
  </Styles>
);
