import React from 'react';
import styled from "styled-components";
// import Input from "../../Components/Input"
import Form from '../Components/Form';




  function Login () {

    const onSubmitHandler = (form, callback) => {
      console.log("Sign In submitted: ", form);
      callback();
  };


  return (
    <Container>
      <LoginImg>
        <img src="/images/mini-img3.png" alt='Not available' />
      </LoginImg>
      <FormBox>
      <Form
                title={"Sign In"}
                formArr={formArr}
                submitBtn={"Sign In"}
                onSubmit={onSubmitHandler}
                redirect={{
                    label: "Don't have an account?",
                    link: {
                        label: "Register",
                        to: "/register",
                    },
                }}
            />
      </FormBox>
    </Container>
  )
}

const formArr = [
  {
      label: "Email",
      name: "email",
      type: "text",
  },
  {
      label: "Password",
      name: "password",
      type: "password",
  },
];

export default Login

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
  width: 380px;
  height: 450px;
  margin-top: 85px;
  margin-left: 80px;
  background-color: white;
  border-radius: 10px;
`
