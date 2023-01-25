import React, { useContext } from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import Credentials from "@components/credentials";
import { AppContext } from "@context/app.context";
import NavigationLinks from "./navigation-links";
export default function MainNavigation() {
  const { state } = useContext(AppContext);

  return (
    <CSSTransition
      in={state.menuIsOpen}
      timeout={{ exit: 1000, appear: 850 }}
      classNames="navigation"
      appear={true}
      unmountOnExit={true}
    >
      <NavigationAsideContainer>
        <NavigationLinks />
        <Credentials />
      </NavigationAsideContainer>
    </CSSTransition>
  );
}

const NavigationAsideContainer = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: var(--main-dark);
  display: grid;
  grid-template-rows: 20% 60% 20%;
  grid-template-columns: 1fr 3fr 1fr;
  justify-items: left;
  padding: 20px;
  @media all and (orientation: landscape) {
    grid-template-rows: 28% 60% 12%;
  }
`;
