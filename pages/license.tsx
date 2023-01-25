import Layout from "@components/layout";
import Arrows from "@components/shared/arrows";
import { SectionContainer } from "@styles/common/styles";
import { getLinks } from "@utils/helpers";
import { IPage } from "@utils/types";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import styled from "styled-components";

const License: NextPage = ({
  pageData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { prev, next } = getLinks("/license");
  const {
    title,
    header,
    titleH2First,
    description,
    contentListArray,
    content,
    titleH2Sec,
  } = pageData as IPage;
  return (
    <Layout title={title} description={description}>
      <SectionContainer>
        <h1> {header}</h1>
        <div className="top">
          <h2>{titleH2First}</h2>
          {contentListArray.map((item, i) => (
            <a href={`${process.env.API}/${item.to}`} key={i}>
              <span className="download-link">{item.text}</span>
            </a>
          ))}
        </div>
        <div className="bottom">
          <h2>{titleH2Sec}</h2>
          {content.map((item, i) => (
            <p className="text-content" key={i}>
              <span>{item}</span>
            </p>
          ))}
        </div>

        {prev && next && <Arrows prev={prev} next={next} />}
      </SectionContainer>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const pageData: IPage = await fetch(`${process.env.API}/page/license`).then(
    (response) => response.json()
  );

  return {
    props: {
      pageData,
    },
  };
};

export default License;
const LicenseContainer = styled.section`
  height: fit-content;
  width: 100%;
  display: grid;
  grid-row-gap: 40px;
  grid-template-columns: 100%;
  padding: 0 20px;

  h2 {
    display: block;
    height: fit-content;
    overflow: hidden;
  }
  .top,
  .bottom {
    display: grid;
    grid-row-gap: 20px;
    grid-template-columns: 100%;
  }
`;
