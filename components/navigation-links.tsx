import React, { useContext } from "react";
import styled from "styled-components";
import navLinks from "@public/data.json";
import { useRouter } from "next/router";
import { AppContext } from "@context/app.context";
import { toggleMenu } from "@context/reducer";
type Props = {};

const NavigationLinks = (props: Props) => {
  const router = useRouter();
  const { dispatch, state } = useContext(AppContext);
  return (
    <NavigationContainer>
      <ul>
        {navLinks.map((link, i) => (
          <li
            key={link.name}
            onClick={() => {
              router.push(link.to);
              setTimeout(() => {
                dispatch(toggleMenu(!state.menuIsOpen));
              }, 1500);
            }}
          >
            <a
              className={`nav-link ${
                link.to === router.pathname ? "active" : ""
              }`}
            >
              {i + 1}.{link.name}
            </a>
          </li>
        ))}
      </ul>
    </NavigationContainer>
  );
};
export default NavigationLinks;
const NavigationContainer = styled.nav`
  width: 100%;
  height: 100%;
  grid-column: 1/3;
  grid-row: 2/2;
  position: relative;
  display: flex;
  flex-direction: column;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  li {
    cursor: pointer;
    font-size: 2rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.35rem;
    width: 100%;
    text-align: left;

    a {
      text-decoration: none;
      color: var(--mainLight);
      &.active {
        color: var(--main-gray);
      }
    }
  }
`;
