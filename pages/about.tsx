import Arrows from "@components/shared/arrows";
import { Page } from "@models/page.model";
import { SectionContainer } from "@styles/common/styles";
import { connectDB } from "@utils/connection";
import { getLinks } from "@utils/helpers";
import { IPage } from "@utils/types";

import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";


import Layout from "../components/layout";

const About: NextPage = ({
  pageData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  connectDB();
  const pageData = await Page.find({ name: context?.params?.name });

  return {
    props: {
      pageData: JSON.parse(JSON.stringify(pageData)),
    },
  };
};
export default About;
