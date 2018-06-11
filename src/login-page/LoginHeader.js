import React, { Component } from "react";
import styled, { css } from "styled-components";
import Button from "../common/Button";

export default class LoginHeader extends Component {
  render() {
    return (
      <HeaderPage>
        <TextWrapper>
          <TextHeader style={{ "font-size": "0.8em" }}>Instagram</TextHeader>
          <TextHeader style={{ "font-size": "0.7em" }}>
            Find it for free on the Windows Store.
          </TextHeader>
        </TextWrapper>
        <Button
          textButton={"GET"}
          style={{
            width: "50px",
            background: "transparent",
            border: "1px solid white"
          }}
        />
      </HeaderPage>
    );
  }
}

const HeaderPage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(
    280deg,
    #feda75,
    #fa7e1e,
    #d62976,
    #962fbf,
    #4f5bd5
  );
  width: 100%;
  height: 50px;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  font-weight: 510;
  margin-left: 20px;
`;
const TextHeader = styled.span`
  font-family: apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
`;
