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
  grid-template-columns: 100%;
  grid-gap: 40px;
`;
