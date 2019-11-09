import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import styled from "styled-components";

const Styles = styled.div`
  form {
    width: 50%;
    margin: auto;
  }
`;

export const LogIn = () => (
  <Styles>
    <Form>
      <FormGroup>
        <Label for="Email">Email</Label>
        <Input type="email" name="email" id="email" placeholder="email" />
      </FormGroup>
      <FormGroup>
        <Label for="Password">Password</Label>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="password"
        />
      </FormGroup>
      <Button className="btn btn-primary btn-block">Login</Button>
      <Button className="btn btn-primary btn-block">Signup</Button>
    </Form>
  </Styles>
);
