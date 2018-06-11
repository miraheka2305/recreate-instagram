import React, { Component } from "react";
import styled, { css } from "styled-components";
import LoginForm from "./LoginForm";

export default class LoginPage extends Component {
  render() {
    return (
      <LoginPageWrapper>
        <LoginForm />
      </LoginPageWrapper>
    );
  }
}
const LoginPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
