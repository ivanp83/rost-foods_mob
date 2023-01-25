import Layout from "../components/layout";
import Arrows from "@components/shared/arrows";
import {
  InferGetServerSidePropsType,
  NextPage,
  GetServerSideProps,
} from "next";
import { getLinks } from "@utils/helpers";
import { IPage } from "@utils/types";
import { SectionContainer } from "@styles/common/styles";
import { connectDB } from "@utils/connection";
import { Page } from "@models/page.model";

const Shipping: NextPage = ({
  pageData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
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
export const getServerSideProps: GetServerSideProps = async (context) => {
  connectDB();
  const pageData = await Page.find({ name: context?.params?.name });

  return {
    props: {
      pageData: JSON.parse(JSON.stringify(pageData)),
    },
  };
};

export default Shipping;
