import React, { useState, useContext } from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";
import { UserContext } from "../context/user";
import SelectProfileContainer from "./SelectProfile";
import FooterContainer from "./Footer";

export default function BrowseContainer() {
  const [profile, setProfile] = useState({});
  const [category, setCategory] = useState("series");
  const { user } = useContext(UserContext);

  return profile.displayName ? (
    <>
      <Header src="joker1" dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src="/images/misc/logo.svg" alt="Netflix" />
            <Header.Link active={category === "series" ? "true" : "false"} onClick={() => setCategory("series")}>
              Series
            </Header.Link>
            <Header.Link active={category === "films" ? "true" : "false"} onClick={() => setCategory("films")}>
              Films
            </Header.Link>
          </Header.Group>
        </Header.Frame>
      </Header>
      <FooterContainer />
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
