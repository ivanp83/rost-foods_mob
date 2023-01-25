import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import MenuBtn from "./menu-btn";
import Logo from "./logo";

export default function Header() {
  return (
    <CSSTransition
      timeout={500}
      classNames="header"
      in={true}
      appear={true}
      unmountOnExit={true}
    >
      <HeaderContainer>
        <MenuBtn />
        <Logo />
      </HeaderContainer>
    </CSSTransition>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  width: 100vw;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  z-index: 101;
  background: var(--main-dark);
`;
