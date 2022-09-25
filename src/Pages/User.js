import React from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import styled from "styled-components";

function User() {
  return (
    <Container>

    <Sidebar /> 

    <UserBody>
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
          <li>Change Password</li>
          <li>Log Out</li>
        </ul>
      </OptionList>
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
    text-decoration: inherit;
    color: inherit;
    padding: 6px 0;
    font-size: 25px;
    font-weight: 600;
  }
`