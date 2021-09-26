import React, { useState } from "react";
import { useHistory } from "react-router";
import HeaderContainer from "../containers/Header";
import FooterContainer from "../containers/Footer";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";
import { getAuth, updateProfile, createUserWithEmailAndPassword } from "firebase/auth";

export default function Signup() {
  const auth = getAuth();
  const history = useHistory();
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    email: "",
    password: "",
    firstName: "",
  });

  const isValid = form.email === "" || form.password === "" || form.firstName === "";

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prevForm) => {
      return {
        ...prevForm,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        updateProfile(userCredential.user, {
          displayName: form.firstName,
          photoURL: Math.floor(Math.random() * 5) + 1,
        }).then(() => {
          setForm({
            email: "",
            password: "",
            firstName: "",
          });
          setError("");
          history.push(ROUTES.BROWSE);
        });
      })
      .catch((error) => {
        setError(error.message);
      });
  }
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Register</Form.Title>
          <Form.Base onSubmit={handleSubmit}>
            <Form.Input
              placeholder="Firstname"
              value={form.firstName}
              onChange={handleChange}
              name="firstName"
              type="text"
            />
            <Form.Input
              placeholder="Email or Phone Number"
              value={form.email}
              onChange={handleChange}
              name="email"
              type="email"
            />
            <Form.Input
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              name="password"
              type="password"
              autoFill="false"
            />
            <Form.Submit disabled={isValid}>Submit</Form.Submit>
          </Form.Base>
          <Form.Text>
            Already member? <Form.Link to={ROUTES.REGISTER}>Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
          </Form.TextSmall>
          {error && <Form.Error>{error}</Form.Error>}
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
