import Layout from "../components/layout";
import Arrows from "@components/shared/arrows";
import { InferGetStaticPropsType, NextPage, GetStaticProps } from "next";
import { getLinks } from "@utils/helpers";
import { IPage } from "@utils/types";
import { SectionContainer } from "@styles/common/styles";

const Shipping: NextPage = ({
  pageData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { prev, next } = getLinks("/shipping");
  const { title, header, description, content } = pageData as IPage;

  return (
    <Layout title={title} description={description}>
      <SectionContainer>
        <h1> {header}</h1>
        <div className="top">
          {content.map((item, i: number) => (
            <span className="content" key={i}>
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
  const pageData: IPage = await fetch(`${process.env.API}/page/shipping`).then(
    (response) => response.json()
  );

  return {
    props: {
      pageData,
    },
  };
};
export default Shipping;
