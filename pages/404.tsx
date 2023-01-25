import React from "react";
import styled from "styled-components";
export default function PageNotFound() {
  return (
    <Container>
      <h1>404</h1>
      <p>Такая страница не существует!</p>
    </Container>
  );
}

const Container = styled.section`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-content: center;
  background: var(--main-dark);
  position: fixed;
  z-index: 10;
  text-align: center;
  h1 {
    font-size: 10vw;
  }
`;
