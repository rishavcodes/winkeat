import React from "react";
import styled from "styled-components";
// import Input from "../../Components/Input"
import Form from "../Components/Form";
import { Link } from "react-router-dom";

function Login() {
  const onSubmitHandler = (form, callback) => {
    console.log("Sign In submitted: ", form);
    callback();
  };

  return (
    <Container>
      <LoginImg>
        <img src="/images/mini-img3.png" alt="Not available" />
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

        <OtherOptions>
          <ForgotPassword>
            <Link to="">
              <span>Forgotted Your Password?</span>
            </Link>
          </ForgotPassword>
          <br />
          <ContactUs>
            <Link to="">Contact Us</Link>
          </ContactUs>
        </OtherOptions>
      </FormBox>
    </Container>
  );
}

const formArr = [
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
];

export default Login;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("/images/background.png");
  background-repeat: no-repeat;
  display: flex;
`;
const LoginImg = styled.div`
  img {
    width: 450px;
    padding-top: 60px;
    margin-left: 300px;
  }
`;
const FormBox = styled.div`
  width: 350px;
  height: 450px;
  margin-top: 100px;
  margin-left: 80px;
  background-color: white;
  border-radius: 5px;
`;

const OtherOptions = styled.div`
  text-align: center;
  margin-top: 50px;
  text-decoration: none;
  color: grey;
`;
const ForgotPassword = styled(Link)`
  
`;
const ContactUs = styled(Link)``;
