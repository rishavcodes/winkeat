import React, { useState } from "react";
import styled from "styled-components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

const prepareForm = (formArr) => {
  return formArr.reduce((r, v) => ({ ...r, [v.name]: "" }), {});
};

const Form = ({ title, formArr, submitBtn, onSubmit, redirect }) => {
  const initialForm = prepareForm(formArr);

  const [form, setForm] = useState(initialForm);

  const onChangeHandler = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  const onSubmitHandler = () => onSubmit(form, () => setForm(initialForm));

  const hasRedirect = !!redirect;

  return (
    <SForm autoComplete="off">
      <FormHeader>
        <BackIcon>
          <a href="#">
            <ArrowBackIcon />
          </a>
        </BackIcon>
        <SFormTitle>{title}</SFormTitle>
      </FormHeader>
      {formArr.map(({ label, name, type }, index) => (
        <SFormControl key={index}>
          <SLabel htmlFor={name}>{label}</SLabel>
          <SInput
            id={name}
            name={name}
            type={type}
            value={form[name]}
            onChange={(e) => onChangeHandler(e)}
          />
        </SFormControl>
      ))}
      <SButton
        onClick={(e) => {
          e.preventDefault();
          onSubmitHandler();
        }}
      >
        {submitBtn}
      </SButton>

      {hasRedirect && 
      (<SRedirect>
        <SRedirectLabel>{redirect.label}&nbsp;</SRedirectLabel>
        <SRedirectLink to={redirect.link.to}>{redirect.link.label}</SRedirectLink>
      </SRedirect>)}


    </SForm>
  );
};

Form.defaultProps = {
  title: "Sign In",
  formArr: [
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
  ],
  submitBtn: "Sign In",
  onSubmit: (form) => console.log(form),
  redirect: {
    label: "Don't hava an account?",
    link: {
      label: "Sign Up",
      to: "/Register",
    },
  },
};

export default Form;

const SForm = styled.form``;
const BackIcon = styled.div`
  margin-left: 20px;
`;
const FormHeader = styled.div`
  display: flex;
  margin-top: 20px;
`;
const SFormTitle = styled.span`
  font-size: 24px;
  font-weight: 600;
  padding-left: 100px;
`;
const SFormControl = styled.div`
  margin-left: 30px;
  margin-top: 10px;
`;
const SLabel = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 600;
  margin-left: 4px;
  margin-bottom: 3px;
`;
const SInput = styled.input`
  outline: none;
  border: 1px solid;
  width: 300px;
  height: 26px;
  padding: 7px;
  font-size: 14px;
  border-radius: 5px;
`;
const SButton = styled.button`
  width: 315px;
  height: 40px;
  padding: 7px;
  margin-left: 30px;
  font-size: 20px;
  justify-content: center;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  margin-top: 15px;
  cursor: pointer;
  background-color: #c0dffd;
  border-width: 0.2px;
`;

const SRedirect = styled.div`
  display: flex;
  margin-top: 20px;
  margin-left: 50px;
`
const SRedirectLabel = styled.span`
`
const SRedirectLink = styled(Link)`
`