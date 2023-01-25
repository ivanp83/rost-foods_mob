import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Layout from "@components/layout";
import { getLinks } from "@utils/helpers";
import Arrows from "@components/shared/arrows";
import { IPage } from "@utils/types";
import { SectionContainer } from "@styles/common/styles";

const Suppliers: NextPage = ({
  pageData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const {
    title,
    header,
    description,
    titleH2First,
    titleH4First,
    contentList,
    titleH2Sec,
    titleH4Sec,
    contentListSec,
  } = pageData as IPage;
  const { prev, next } = getLinks("/suppliers");

  return (
    <Layout title={title} description={description}>
      <SectionContainer>
        <h1>{header}</h1>
        <div className="top">
          <h2>{titleH2First}</h2>
          <div>
            <h4 className="sub-title">{titleH4First}:</h4>
            <ul className="list">
              {contentList.map((item, i: number) => {
                return (
                  <li className="text-description" key={i}>
                    <span>{item}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="bottom">
          <h2>{titleH2Sec}</h2>
          <div>
            <h4 className="sub-title">{titleH4Sec}:</h4>
            <ul className="list">
              {contentListSec.map((item, i) => {
                return (
                  <li className="text-description" key={i}>
                    <span>{item}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {prev && next && <Arrows prev={prev} next={next} />}
      </SectionContainer>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const pageData: IPage = await fetch(`${process.env.API}/page/suppliers`).then(
    (response) => response.json()
  );

  return {
    props: {
      pageData,
    },
  };
};

export default Suppliers;
