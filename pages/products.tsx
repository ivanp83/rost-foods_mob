import styled from "styled-components";
import Items from "@components/pages/products/items";
import Layout from "@components/layout";
import Arrows from "@components/shared/arrows";

import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { IPage, Product } from "@utils/types";
import { getLinks } from "@utils/helpers";

const Products: NextPage = ({
  pageData,
  prodData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { title, description } = pageData as IPage;
  const { prev, next } = getLinks("/products");
  return (
    <Layout title={title} description={description}>
      <ProductsContainer>
        <h1>{title}</h1>
        <Items data={prodData} />
        {prev && next && <Arrows prev={prev} next={next} />}
      </ProductsContainer>
    </Layout>
  );
};
export default Products;

export const getStaticProps: GetStaticProps = async (context) => {
  const p1 = fetch(`${process.env.API}/page/products`).then((response) =>
    response.json()
  );
  const p2 = fetch(`${process.env.API}/products`).then((response) =>
    response.json()
  );

  const [pageData, prodData] = await Promise.all([p1, p2]);
  return {
    props: {
      pageData,
      prodData,
    },
  };
};

const ProductsContainer = styled.section`
  width: 100%;
  padding: 0 20px;
  height: fit-content;
  width: 100%;
  display: grid;
  grid-row-gap: 40px;
  grid-template-columns: 100%;
  padding: 0 20px;
`;
