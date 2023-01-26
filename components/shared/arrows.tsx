import React from "react";

import Link from "next/link";
import styled from "styled-components";
interface IProps {
  prev: { to: string; name: string };
  next: { to: string; name: string };
}

const Arrows: React.FC<IProps> = ({ prev, next }) => {
  return (
    <ArrowsContainer>
      <ul>
        <li className="icon-container">
          <Link href={prev.to}>
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 282 282"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M92.1045 237.162C95.9463 241.138 102.34 241.138 106.316 237.162C110.158 233.32 110.158 226.926 106.316 223.093L34.2537 151.03L272.051 151.03C277.594 151.021 282 146.615 282 141.072C282 135.529 277.594 130.98 272.051 130.98L34.2537 130.98L106.316 59.0513C110.158 55.0751 110.158 48.6722 106.316 44.8393C102.34 40.8632 95.9373 40.8632 92.1045 44.8393L2.9821 133.962C-0.994022 137.803 -0.994023 144.198 2.9821 148.03L92.1045 237.162Z"
                fill="var(--main-light)"
              />
            </svg>
            <p>{prev.name}</p>
          </Link>
        </li>

        <li className="icon-container">
          <Link href={next.to}>
            <p>{next.name}</p>
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 282 282"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M189.896 44.8384C186.054 40.8623 179.66 40.8623 175.684 44.8384C171.842 48.6802 171.842 55.0742 175.684 58.9071L247.746 130.97H9.94925C4.40597 130.979 0 135.385 0 140.928C0 146.471 4.40597 151.02 9.94925 151.02H247.746L175.684 222.949C171.842 226.925 171.842 233.328 175.684 237.161C179.66 241.137 186.063 241.137 189.896 237.161L279.018 148.038C282.994 144.197 282.994 137.803 279.018 133.97L189.896 44.8384Z"
                fill="var(--main-light)"
              />
            </svg>
          </Link>
        </li>
      </ul>
    </ArrowsContainer>
  );
};

const ArrowsContainer = styled.nav`
  display: none;
  justify-content: space-between;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.35rem;
  text-transform: uppercase;
  margin-top: 40px;

  ul {
    display: contents;
    list-style: none;
  }

  a {
    color: var(--main-light);
    display: flex;
    align-items: center;
  }
  .icon-container {
    p {
      font-size: 1.3rem;
      margin: 0 0.2rem;
    }
    svg {
      width: 2rem;
      height: 1.2rem;
    }
  }
  @media all and (max-width: 1000px) {
    display: flex;
  }
`;

export default Arrows;
