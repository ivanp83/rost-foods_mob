import Layout from "@components/layout";
import ContactForm from "@components/pages/contacts/contact-form";
import YMapsAPI from "@components/pages/contacts/ymaps";
import Arrows from "@components/shared/arrows";
import { Page } from "@models/page.model";
import { connectDB } from "@utils/connection";
import { getLinks } from "@utils/helpers";
import { IPage } from "@utils/types";
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import styled from "styled-components";

const Contacts: NextPage = ({
  pageData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { prev, next } = getLinks("/contacts");
  const {
    title,
    description,
    header,
    subTitle,
    contentList,
    contentListSec,
    titleH2First,
    titleH2Sec,
    subTitleSec,
  } = pageData as IPage;
  return (
    <Layout title={title} description={description}>
      <ContactsContainer>
        <h1>{title}</h1>
        <div className="top">
          <h2>{titleH2First}</h2>
          <div className="warehouse">
            <h4>{subTitle}</h4>
            <div className="data-container">
              {contentList.map((item, i) => (
                <span key={i}>{item}</span>
              ))}
            </div>
          </div>
          <div className="warehouse">
            <h4>{subTitleSec}</h4>
            <div className="data-container">
              {contentListSec.map((item, i) => (
                <span key={i}>{item}</span>
              ))}
            </div>
          </div>
          <YMapsAPI />
        </div>

        <div className="bottom">
          <h2>{titleH2Sec}</h2>
          <ContactForm />
        </div>
        {prev && next && <Arrows prev={prev} next={next} />}
      </ContactsContainer>
    </Layout>
  );
};
export default Contacts;
export const getServerSideProps: GetServerSideProps = async (context) => {
  const pageData: IPage = await fetch(
    `${process.env.NEXT_PUBLIC_API}/page/${context?.params?.name}`
  ).then((response) => response.json());

  return {
    props: {
      pageData,
    },
  };
};

const ContactsContainer = styled.section`
  height: fit-content;
  width: 100%;
  display: grid;
  grid-row-gap: 40px;
  grid-template-columns: 100%;
  padding: 0 20px;

  h2 {
    display: block;
    height: fit-content;
  }
  .top {
    grid-row-gap: 20px;
    margin-bottom: 30px;
  }
  .top,
  .bottom {
    display: grid;
    grid-template-columns: 100%;
  }

  .data-container * {
    display: block;
  }
  .warehouse {
    h4 {
      display: block;
      height: fit-content;
      overflow: hidden;
    }
  }
`;
