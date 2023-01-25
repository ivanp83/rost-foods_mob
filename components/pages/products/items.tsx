import { Product } from "@utils/types";
import styled from "styled-components";
import Item from "./item";
interface IProps {
  data: Product[];
}
const Items: React.FC<IProps> = ({ data }) => {
  return (
    <ItemsContainer>
      {data.map((product, i) => (
        <Item product={product} key={i} />
      ))}
    </ItemsContainer>
  );
};
export default Items;
const ItemsContainer = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;

  grid-gap: 40px;
  @media all and (min-width: 550px) {
    grid-template-columns: 1fr 1fr;
  }
  @media all and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
