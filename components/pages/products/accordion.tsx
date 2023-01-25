import { AccordionParams, IAccordion } from "@utils/types";
import React from "react";
import styled from "styled-components";

const AccordionWrapper: React.FC<{
  mainParams: AccordionParams;
  duffleParams: AccordionParams;
  palletParams: AccordionParams;
}> = ({ mainParams, duffleParams, palletParams }) => {
  const [expanded, setExpanded] = React.useState<number | null>(null);

  return (
    <AccordionContainer>
      <>
        {[mainParams, duffleParams, palletParams].map((details, index) => {
          return (
            <Accordion
              key={index}
              details={details}
              index={index}
              expanded={expanded}
              setExpanded={setExpanded}
            />
          );
        })}
      </>
    </AccordionContainer>
  );
};
export default AccordionWrapper;

const Accordion: React.FC<IAccordion> = ({
  index,
  details,
  expanded,
  setExpanded,
}) => {
  const isOpen = index === expanded;
  return (
    <>
      <AccordionHeader onClick={() => setExpanded(isOpen ? null : index)}>
        <AccordionIcon>
          <span
            style={{
              transform: isOpen
                ? "rotate(0deg)"
                : "rotate(45deg)  translateX(2px)",
              transition: "transform 0.5s ease-in-out",
            }}
          />
          <span
            style={{
              transform: isOpen
                ? "rotate(0deg)"
                : "rotate(-45deg) translateX(-2px)",
              transition: "transform 0.5s ease-in-out",
            }}
          />
        </AccordionIcon>
        {details.title}
      </AccordionHeader>

      <AccordionContent
        style={{
          overflow: "hidden",
          maxHeight: isOpen ? "200px" : "0px",
          transition: "max-height 0.7s ease-in-out",
        }}
      >
        {details.data.map((res, i: number) => {
          return <span key={i}>{res}</span>;
        })}
      </AccordionContent>
    </>
  );
};

const AccordionContainer = styled.div`
  margin-top: 2.1rem;
  @media all and (max-width: 950px) and (orientation: landscape) {
    min-height: auto;
  }
`;
const AccordionHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: inherit;
  cursor: pointer;
`;
const AccordionIcon = styled.div`
  display: flex;
  align-items: center;
  height: fit-content;
  margin-right: 8px;
  span {
    width: 8px;
    height: 1px;
    background: var(--main-light);
    transition: all 0.1s ease-in-out;
  }
`;

const AccordionContent = styled.ul`
  overflow: hidden;
  padding-left: 2.4rem;
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
  span {
    display: block;
  }
`;
