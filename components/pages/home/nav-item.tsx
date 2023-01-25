import useIntersectionObserver from "@hooks/use.observer";
import Link from "next/link";
import React, { useRef } from "react";
import styled from "styled-components";

interface IProps {
  link: { name: string; to: string };
}

const NavItem: React.FC<IProps> = ({ link }) => {
  const ref = useRef<HTMLLIElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  return (
    <NavItemContainer key={link.name} ref={ref} isVisible={isVisible}>
      <div className="line" />
      <Link href={link.to} className="nav-link">
        {link.name}
      </Link>
    </NavItemContainer>
  );
};

export default NavItem;

const NavItemContainer = styled.li<{ isVisible: boolean }>`
  cursor: pointer;
  font-size: 2rem;
  font-weight: 400;
  width: 100%;
  height: fit-content;
  text-align: start;
  margin-bottom: 1rem;
  text-transform: capitalize;
  overflow: hidden;
  position: relative;
  .line {
  }
  a {
    text-decoration: none;
    color: inherit;
    display: inline-block;
    transform: ${(props) =>
      props.isVisible ? " translateY(0)" : "translateY(100%)"};
    transition: 0.4s ease-in-out;
  }
  .line {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: var(--main-light);
    height: 1px;

    transition: 0.4s ease-in-out;
    transform: ${(props) =>
      props.isVisible ? " translateX(0)" : "translateX(-100%)"};
  }
`;
