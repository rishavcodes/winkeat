import React from 'react';
import styled from "styled-components";
import Form from '../Components/Form';

function Register() {

  const onSubmitHandler = (form, callback) => {
    console.log("Register Submitted:", form);
    callback();
};



  return (
    <Container>
      <LoginImg>
        <img src="/images/mini-img3.png" alt='Not available' />
      </LoginImg>
      <FormBox>
      <Form
                title={"Register"}
                formArr={formArr}
                submitBtn={"Register"}
                onSubmit={onSubmitHandler}
                redirect={{
                    label: "Already have an account?",
                    link: {
                        label: "Sign In",
                        to: "/login",
                    },
                }}
            />
      </FormBox>
    </Container>
  )
}


const formArr = [
  {
      label: "Name",
      name: "name",
      type: "text",
  },
  {
      label: "Email",
      name: "email",
      type: "text",
  },
  {
    label: "Roll No",
    name: "roll no",
    type: "text",
},

  {
      label: "Password",
      name: "password",
      type: "password",
  },
  {
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
  },
];

export default Register

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("/images/background.png");
  background-repeat: no-repeat;
  display: flex;
`
const LoginImg = styled.div`
  img {
    width: 450px;
    padding-top: 60px;
    margin-left: 300px;
  }
`
const FormBox = styled.div`
  width: 370px;
  height: 580px;
  margin-top: 85px;
  margin-left: 80px;
  background-color: white;
  border-radius: 10px;
`
