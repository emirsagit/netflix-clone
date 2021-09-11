import React from "react";
import { Header, OptForm } from "../components";
import * as ROUTES from "../constants/routes";

export default function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src="/images/misc/logo.svg" alt="logo" />
        <Header.ButtonLink>Sign In</Header.ButtonLink>
      </Header.Frame>
      <OptForm>
        <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
        <OptForm.Input />
        <OptForm.Button>Get Started</OptForm.Button>
      </OptForm>
    </Header>
  );
}
