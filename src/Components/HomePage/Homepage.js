import React from 'react';
import styled from "styled-components";
import Header from '../Header';
import Body from '../Body';



function Homepage() {
  return (
    
      <Container>
        <Header />
        <Body />
      </Container>
  )
}

export default Homepage

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url("/images/background.png");
    background-repeat: no-repeat;
`