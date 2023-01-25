import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "@context/app.context";
import { toggleMenu } from "@context/reducer";

export default function MenuBtn() {
  const { dispatch, state } = useContext(AppContext);

  return (
    <MenuBtnContainer
      onClick={() => {
        dispatch(toggleMenu(!state.menuIsOpen));
      }}
    >
      {!state.menuIsOpen ? <span>МЕНЮ</span> : <span>ЗАКР</span>}
    </MenuBtnContainer>
  );
}

const MenuBtnContainer = styled.button`
  outline: none;
  border: none;
  outline: none;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--main-light);
  cursor: pointer;
  span {
    font-size: 2rem;
    font-weight: 400;
    text-transform: uppercase;
    display: inline-block;
    color: inherit;
  }
`;
