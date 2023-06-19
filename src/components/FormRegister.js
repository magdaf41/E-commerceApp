import { React, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { AiOutlineClose } from "react-icons/ai";
import {
  StyledRegisterContainer,
  // StyledRegisterHeader,
  StyledRegisterTitle,
  StyledBoxInput,
  StyledBtn,
  StyledFormRegister,
  StyledInput,
  StyledLabel,
  StyledPError,
  StyledPLogin,
  StyledSpanLink,
} from "./FormRegister.css";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearResponse, register } from "../store/authSlice";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(4).max(30),
  email: Yup.string().email().required(),
  password: Yup.string().min(4).max(30).required(),
});

const initialValues = {
  name: "",
  email: "",
  password: "",
};

export const FormRegister = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const response = useSelector((state) => state.auth.response);
  const users = useSelector((state) => state.auth.users);
  const loggedUser = useSelector((state) => state.auth.loggedUser);

  useEffect(() => {
    if (response.success) {
      navigate("/");
    }
    dispatch(clearResponse());
  }, [response.success]);

  const submitForm = (values) => {
    dispatch(register(values));
    console.log(register(values));
    console.log(response);
    console.log(users);
    console.log(loggedUser);

    if (response.success) {
      navigate("/");
    }
  };
  return (
    <StyledRegisterContainer>
      {/* <StyledRegisterHeader style={{ fontSize: '20px' }}> */}
      <StyledRegisterTitle>Sing up</StyledRegisterTitle>
      {/* <AiOutlineClose onClick={() => navigate('/')} /> */}
      {/* </StyledRegisterHeader> */}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitForm}
      >
        {({
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          values,
        }) => (
          <StyledFormRegister onSubmit={handleSubmit} noValidate>
            <StyledLabel>Name</StyledLabel>
            <StyledBoxInput>
              <StyledInput
                name="name"
                value={values.name}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {errors.name && touched.name && (
                <StyledPError>{errors.name}</StyledPError>
              )}
            </StyledBoxInput>

            <StyledLabel>Email</StyledLabel>
            <StyledBoxInput>
              <StyledInput
                name="email"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {errors.email && touched.email && (
                <StyledPError>{errors.email}</StyledPError>
              )}
            </StyledBoxInput>

            <StyledLabel>Password</StyledLabel>
            <StyledBoxInput>
              <StyledInput
                name="password"
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {errors.password && touched.password && (
                <StyledPError>{errors.password}</StyledPError>
              )}
            </StyledBoxInput>

            <StyledBtn>Register</StyledBtn>
            <StyledPLogin>
              Already have an account?
              <Link to="/login">
                <StyledSpanLink>Sign In</StyledSpanLink>
              </Link>
            </StyledPLogin>
            {response.message && !response.success && <p>{response.message}</p>}
          </StyledFormRegister>
        )}
      </Formik>
    </StyledRegisterContainer>
  );
};
