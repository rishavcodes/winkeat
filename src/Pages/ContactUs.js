import React from 'react'
import styled from 'styled-components'

function ContactUs() {
  return (
    <Container>
        <FormBox>
            <FormAndLogo>

            <LeftSide>
                <img src='/images/winkeat-logo.png' alt='not available' />
            </LeftSide>
            <RightSide>
                <h2>Contact Us</h2>
                <input placeholder='Name' /><hr/>
                <input placeholder='Email' /><hr/>
                <input placeholder='Contact No' /><hr/>
                <input placeholder='Message' /><hr/>
                <button>Submit</button>
            </RightSide>
            </FormAndLogo>
        </FormBox>
    </Container>
  )
}

export default ContactUs

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: url("/images/background.png");
`
const FormBox = styled.div`
    width: 650px;
    height: 500px;
    position: absolute;
    left: 430px;
    top: 100px;
    background-color: #FFB800;
    border-radius: 20px;
`
const FormAndLogo = styled.div`
    justify-content: space-around;
    display: inline-flex;
    background: white;
    margin: 30px 0 5px 0;
    width: 100%;
    height: 467px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
`

const LeftSide = styled.div`
    width: 50%;
    img {
        padding-top: 10px;
        padding-left: 30px;
        width: 280px;
    }
`
const RightSide = styled.div`
    width: 50%;
    display: grid;
    margin-top: 30px;
    margin-bottom: 3px;
    /* width: 500px; */
    
    h2 {
        font-weight: 400;
        color: #707070;
        font-size: 30px;
        margin-bottom: 10px;
    }
    input {
        width: 260px;
        height: 40px;
        border: #707070;
        font-size: 16px;
        outline: none;
    }
    hr {
        height: 0;
        width: 260px;
    }
    button {
        width: 200px;
        border: none;
        background-color: white;
        font-size: 20px;
        padding-left: 190px;
        margin-top: 40px;
        margin-bottom: 30px;
        cursor: pointer;
    }
`