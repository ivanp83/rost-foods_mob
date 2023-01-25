import React from "react";
import styled from "styled-components";
import Link from "next/link";
export default function Logo() {
  return (
    <Link href="/" scroll={false}>
      <LogoContianer>
        <p>
          <span>РОСТ</span>
          <span>ФУДС</span>
        </p>
      </LogoContianer>
    </Link>
  );
}

const LogoContianer = styled.div`
  color: var(--main-yellow);
  text-align: center;
  line-height: 1;
  p {
    font-weight: 500;
    font-size: 2.2rem;
    line-height: 1;
    font-family: "Roboto Slab", serif;
  }
  .slug {
    font-size: 1rem;
  }
`;
