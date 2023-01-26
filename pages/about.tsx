import Arrows from "@components/shared/arrows";
import { SectionContainer } from "@styles/common/styles";
import { getLinks } from "@utils/helpers";
import redirect from "@utils/redirect";
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
        <div className="top top--s">
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
  await redirect(context);
  const pageData: IPage = await fetch(
    `${process.env.NEXT_PUBLIC_API}/page/about`
  ).then((response) => response.json());

  return {
    props: {
      pageData,
    },
  };
};
export default About;
