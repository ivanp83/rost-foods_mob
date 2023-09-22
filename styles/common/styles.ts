import styled, { css } from "styled-components";

export const SectionContainer = styled.section`
  height: fit-content;
  width: 100%;
  display: grid;
  grid-auto-flow: row;
  grid-row-gap: 26px;

  h2 {
    display: block;
    height: fit-content;
  }

  .top,
  .bottom {
    display: grid;

    &--s {
      @media all and (min-width: 900px) and (orientation: landscape) {
        max-width: 62%;
      }
    }
  }
  .top {
    content {
      display: block;
    }
  }
  .bottom {
    margin-top: 1.6rem;
  }
  .list {
    display: block;
  }
  .download-link {
    color: var(--main-blue);
    text-decoration: underline;
  }
  .download-link,
  .text-content {
    display: block;
    height: fit-content;
  }
`;

export const Container = styled.div<{ headerWidth?: number; two?: string }>`
  display: grid;
  grid-row-gap: 40px;
  width: calc(100vw - ${(props) => props.headerWidth + "px"});
  padding-left: 7rem;
  padding-right: 6rem;
  padding-top: 6rem;

  ${(props) =>
    props.two &&
    css`
      grid-template-columns: 1fr 1fr;
    `}
`;
