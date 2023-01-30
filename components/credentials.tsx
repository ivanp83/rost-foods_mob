import React from "react";
import styled from "styled-components";
export default function Credentials() {
  return (
    <CredentialsContainer>
      <a href="tel: +74012520333">+7(4012) 520 333</a>

      <a href="mailto:rost-foods@mail.ru">rost-foods@mail.ru</a>
    </CredentialsContainer>
  );
}

const CredentialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--main-gray);
  font-size: 1.6rem;
  grid-row: 3;
  grid-column: 1/3;

  a {
    display: inline-block;
    color: var(--main-blue);
  }
`;
