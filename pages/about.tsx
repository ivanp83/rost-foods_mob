import Arrows from "@components/shared/arrows";
import { SectionContainer } from "@styles/common/styles";
import { getLinks } from "@utils/helpers";
import { IPage } from "@utils/types";

import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import styled from "styled-components";

import Layout from "../components/layout";

const About: NextPage = ({
  pageData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { prev, next } = getLinks("/about");
  const { title, description, header, content } = pageData as IPage;

  return (
    <Layout title={title} description={description}>
      <SectionContainer>
        <h1>{header}</h1>
        <div className="top">
          {content.map((item, i) => (
            <span key={i} className="content">
              {item}
            </span>
          ))}
        </div>
        {prev && next && <Arrows prev={prev} next={next} />}
      </SectionContainer>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const pageData: IPage = await fetch(`${process.env.API}/page/about`).then(
    (response) => response.json()
  );

  return {
    props: {
      pageData,
    },
  };
};
export default About;
