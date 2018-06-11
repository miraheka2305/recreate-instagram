import React, { Component } from "react";
import styled, { css } from "styled-components";
import Button from "../common/Button";
import Logo from "../assets/instagram-text.png";
import FacebookLogo from "../assets/facebook.png";

export default class LoginForm extends Component {
  render() {
    return (
      <LoginWrapper>
        <LogoForm />
        <Text style={{ "font-size": "0.85em", "font-weight": "510" }}>
          Sign up to see photos and videos from your friends.
        </Text>
        <Button textButton={"Log in with Facebook"} logoButton={FacebookLogo} />
        <Separator>
          <LineHorz />
          <TextSeparator>OR</TextSeparator>
          <LineHorz />
        </Separator>
        <Input type="text" placeholder="Mobile Number or Email" />
        <Input type="text" placeholder="Full Name" />
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Button textButton={"Sign Up"} />
        <Text style={{ "font-size": "0.75em", "font-weight": "500" }}>
          By signing up, you agree to our <b>Term</b>, <b>Data Policy</b> and{" "}
          <b>Cookies Policy</b>.
        </Text>
      </LoginWrapper>
    );
  }
}

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  border: 1px solid #e6e6e6;
  padding: 25px 36px 30px 36px;
  margin: 35px 20px 5px 20px;
  height: auto;
  width: 235px;
  border-radius: 1px;
`;

const LogoForm = styled.div`
  display: flex;
  background-image: url(${Logo});
  background-repeat: no-repeat;
  align-self: center;
  background-size: cover;
  height: 55px;
  width: 160px;
`;
const Text = styled.div`
  color: #999;
  text-align: center;
  font-family: sans-serif;
  margin: 10px 0 10px 0;
`;
const Separator = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0 10px 0;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
`;
const Input = styled.input`
  background: #fafafa;
  padding: 8px;
  margin-bottom: 5px;
  border-radius: 2px;
  font-size: 0.675em;
  border: 1px solid #e6e6e6;
`;
const LineHorz = styled.div`
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  background-color: #c7c7c7;
  height: 1px;
  position: relative;
  top: 0.45em;
`;
const TextSeparator = styled.div`
  display: flex;
  color: #999;
  -webkit-box-flex: 0;
  flex-grow: 0;
  flex-shrink: 0;
  font-size: 12px;
  font-weight: 550;
  line-height: 15px;
  margin: 0 18px;
  text-transform: uppercase;
  font-family: sans-serif;
`;
