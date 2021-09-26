import React from "react";
import JumbotronContainer from "../containers/Jumbotron";
import FooterContainer from "../containers/Footer";
import FaqsContainer from "../containers/Faqs";
import HeaderContainer from "../containers/Header";
import { OptForm, Features } from "../components";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Features>
          <Features.Title>Unlimited movies, TV shows, and more.</Features.Title>
          <Features.Subtitle>Watch anywhere. Cancel anytime.</Features.Subtitle>
          <OptForm>
            <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
            <OptForm.Input />
            <OptForm.Button>Get Started</OptForm.Button>
          </OptForm>
        </Features>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
