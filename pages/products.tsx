import styled from "styled-components";
import Items from "@components/pages/products/items";
import Layout from "@components/layout";
import Arrows from "@components/shared/arrows";

import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import { IPage, Product } from "@utils/types";
import { getLinks } from "@utils/helpers";
import { connectDB } from "@utils/connection";
import { Page } from "@models/page.model";

const Products: NextPage = ({
  pageData,
  prodData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  connectDB();
  const pageData = await Page.find({ name: context?.params?.name });

  return {
    props: {
      pageData: JSON.parse(JSON.stringify(pageData)),
    },
  };
};

const ProductsContainer = styled.section`
  width: 100%;
  height: fit-content;
  display: grid;
  grid-row-gap: 40px;
`;
