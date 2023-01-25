import { getCurrentLink } from "@utils/helpers";
import styled from "styled-components";
import navLinks from "../../../public/data.json";
import NavItem from "./nav-item";

export default function HomeNav() {
  const filteredNavLinks: ReturnType<typeof getCurrentLink> = getCurrentLink(
    navLinks,
    "главная"
  );
  return (
    <NavigationContainer>
      <ul>
        {filteredNavLinks.map((link, i) => (
          <NavItem link={link} key={i} />
        ))}
      </ul>
    </NavigationContainer>
  );
}

const NavigationContainer = styled.nav`
  width: 100%;
  height: 100%;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;
