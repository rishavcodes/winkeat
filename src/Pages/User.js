import React from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import styled from "styled-components";
import { Fade } from 'react-reveal';

function User() {
  return (
    <Container>

    <Sidebar /> 

    <UserBody>
    <Fade left>
      <UserTop>
        <img src="/images/user-img.jpg" alt="not available" />
        <UserinfoText>
        <h2>Rishav Jha</h2>
        <p>2001010055@krmu.edu.in</p>
        </UserinfoText>
      </UserTop>
      <hr/>
      <OptionList>
        <ul>
          <li><a href="/orders">Your Orders</a></li>
          <li>Saved Cards</li>
          <li><a href="/changepassword">Change Password</a></li>
          <li>Log Out</li>
        </ul>
      </OptionList>
      </Fade>
    </UserBody>

    </Container>

  )
}

export default User

const Container = styled.div`
  width: 1300px;
  padding-left: 350px;
  padding-top: 80px;
`

const UserBody = styled.div`
  
`
const UserTop = styled.div`
  display: flex;
  img {
    width: 250px;
  }
`
const UserinfoText = styled.div`
  margin-top: 170px;
`

const OptionList = styled.div`
  padding-top: 25px;
  padding-left: 10px;
  text-decoration: none;
  font-size: 20px;
  cursor: pointer;
  ul li {
    list-style: none;
    padding: 6px 0;
    font-size: 25px;
    font-weight: 600;
  }
  ul li a {
    text-decoration: none;
    color: black;
  }
`

