import React, { useState } from "react";
import { useHistory } from "react-router";
import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";
import HeaderContainer from "../containers/Header";
import FooterContainer from "../containers/Footer";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";

export default function Signin() {
  const auth = getAuth();
  const history = useHistory();
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const isValid = form.email === "" || form.password === "";

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
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        setForm({
          email: "",
          password: "",
        });
        setError('');
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => setError(error.message));
  }

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          <Form.Base onSubmit={handleSubmit}>
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
            New to Netflix? <Form.Link to={ROUTES.REGISTER}>Sign up now.</Form.Link>
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
