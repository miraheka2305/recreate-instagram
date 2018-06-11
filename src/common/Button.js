import React, { Component } from "react";
import styled, { css } from "styled-components";

export default class Button extends Component {
  render() {
    const { textButton, logoButton } = this.props;
    return (
      <WrapperButton>
        <LogoButton logoButton={logoButton} />
        {/* <TextButton>{textButton}</TextButton> */}
        <TextButton>{textButton}</TextButton>
      </WrapperButton>
    );
  }
}

const WrapperButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #3897f0;
  border-radius: 2px;
  width: 100%;
  height: 25px;
  margin: 5px 0 10px 0;
`;
const TextButton = styled.span`
  font-size: 12px;
  font-weight: 510;
  color: white;
  font-family: sans-serif;
`;
const LogoButton = styled.div`
  width: 15px;
  height: 15px;
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: 5px;
  ${props =>
    props.logoButton &&
    css`
      background-image: url(${props.logoButton});
    `};
  ${props =>
    !props.logoButton &&
    css`
      display: none;
    `};
`;

//   background-image: url("../assets/instagram.png");
