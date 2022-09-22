import React from "react";
import styled from "styled-components";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Switch } from "@mui/material";
// import Login from "../Pages/LoginPage/Login";

function Header() {
  return (
    
        <Buttons>
          <ButtonGroup>
            <LeftButton>Sign in</LeftButton>
            <RightButton>Sign Up</RightButton>
          </ButtonGroup>
        </Buttons>
      
  );
}

export default Header;

const Buttons = styled.div``;
const ButtonGroup = styled.div`
  padding-top: 25px;
  display: flex;
  margin-bottom: 30px;
  float: right;
  padding-right: 220px;
`;
const LeftButton = styled.div`
  background-color: white;
  height: 50px;
  width: 150px;
  color: Black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 17px;
  cursor: pointer;
  margin: 8px;
`;
const RightButton = styled.div`
  background-color: #00ff84;
  height: 50px;
  width: 150px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 17px;
  cursor: pointer;
  margin: 8px;
`;
