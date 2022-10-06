import React from 'react';
import styled from 'styled-components';
import Searchbar from '../Components/Searchbar';
import Sidebar from '../Components/Sidebar/Sidebar';

function ChangePassword() {
  return (
    <Container>
        <Sidebar />
        <Searchbar placeholder="Search for your favourite food" />
        <MainContent>
            <h2>Change Password</h2>
            <InputBox>
            <input placeholder="Enter New Password" type="password" />
            <input placeholder="Re-enter New Password" type="password" />
            <button>Enter OTP</button>
            <input placeholder="Enter OTP" type="password" />
            <button>Change Password</button>
            </InputBox>
        </MainContent>
    </Container>
  )
}

export default ChangePassword


const Container = styled.div``

const MainContent = styled.div`
    margin-top: 40px;
    margin-left: 300px;
    h2 {
        font-size: 30px;
    }
`
const InputBox = styled.div`
    display: grid;
    button{
        width: 300px;
        height: 40px;
        border-radius: 10px;
        background-color: #FFCF52;
        color: white;
        font-size: 15px;
        border-style: none;
    }
    input {  
    width: 400px;
    height: 40px;
    margin: 20px 0;
    border-radius: 10px;
    border: 0.5px solid;
    padding: 10px;
    font-size: 15px;
    }

`