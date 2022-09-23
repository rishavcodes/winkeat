import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom"

function Body() {
  return (
    <Wrap>
      <ItemText>
        <ItemBodyText>
          <h1>Winkeat</h1>
          <h4>Get your</h4>
          <h4>food ready</h4>
          <h4>before you</h4>
          <h4>reach</h4>
        </ItemBodyText>

        <ItemFooterText>
          <p><Link to="/vendorlogin">Login </Link> as Vendor</p>
          <p>
            Let's enhance your business <a href="/">Contact Us</a>
          </p>
        </ItemFooterText>
      </ItemText>
      <MiniImg>
        <img src="/images/mini-img.png" alt="Not availble" />
      </MiniImg>
    </Wrap>
  );
}

export default Body;

const Wrap = styled.div`
  width: 100vw;
  display: flex;
`;
const ItemText = styled.div`
  margin-top: 5vh;
  margin-left: 30vh;
  h1 {
    font-size: 60px;
    font-weight: 700;
    color: #e2293f;
    margin-bottom: 10px;
  }
  h4 {
    margin: 10px;
    font-size: 40px;
    font-weight: 800;
  }
`;
const MiniImg = styled.div`
  position: absolute;
  right: 200px;
  bottom: 0;
  img {
    width: 400px;
    height: 500px;
  }
`;

const ItemBodyText = styled.div`

`;

const ItemFooterText = styled.div`
    position: absolute;
    bottom: 2px;
    left: 32vh;
`