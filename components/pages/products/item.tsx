import Accordion from "./accordion";
import styled from "styled-components";
import Image from "next/image";
import React, { useRef } from "react";
import useIntersectionObserver from "@hooks/use.observer";
import { Product } from "@utils/types";

interface IProps {
  product: Product;
}

const Item: React.FC<IProps> = ({ product }) => {
  const ref = useRef<HTMLLIElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;
  const { mainParams, duffleParams, palletParams, picture, title, subTitle } =
    product;

  return (
    <ItemContainer isVisible>
      <div className="image-container">
        <Image
          src={`/images/${picture}`}
          alt={title}
          width="260"
          height="260"
        />
      </div>
      <div className="product-description">
        <h2> {title}</h2>
        <p> {subTitle}</p>

        <Accordion {...{ title, mainParams, duffleParams, palletParams }} />
        <p className="in-stock">{product.shipping}</p>
      </div>
    </ItemContainer>
  );
};
export default Item;
const ItemContainer = styled.li<{ isVisible: boolean }>`
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: all 0.4s ease;
  transform: ${(props) =>
    props.isVisible ? "translateY(0)" : "translateY(32px)"};

  .image-container {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  .product-description h2 {
    font-size: 2.4rem;
  }
  .in-stock {
    font-size: 1.4rem;
    color: var(--main-gray);
  }
  @media all and (orientation: landscape) {
    .image-container {
      justify-content: flex-start;
    }
  }
`;
