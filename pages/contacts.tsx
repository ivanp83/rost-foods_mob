import Layout from "@components/layout";
import ContactForm from "@components/pages/contacts/contact-form";
import YMapsAPI from "@components/pages/contacts/ymaps";
import Arrows from "@components/shared/arrows";
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
        <section className="top top--s">
          <div className="warehouse">
            <h2>{subTitle}</h2>
            <div className="data-container">
              <span>{contentList[0]}</span>
              <span>{contentList[1]}</span>
              <a href={`tel:+${contentList[2].split("+").pop()}`}>
                {contentList[2]}
              </a>
              <a href={`tel:+${contentList[3].split("+").pop()}`}>
                {contentList[3]}
              </a>
              <a
                href={`mailto:${contentList[4].replace(
                  "E-mail: ",
                  ""
                )}?subject=Вопрос`}
              >
                {contentList[4]}
              </a>
            </div>
          </div>
          <div className="warehouse">
            <h2>{subTitleSec}</h2>
            <div className="data-container">
              <span>{contentListSec[0]}</span>
              <span>{contentListSec[1]}</span>
              <span>{contentListSec[3]}</span>
              <a href={`tel:+${contentListSec[2].split("+").pop()}`}>
                {contentListSec[2]}
              </a>
            </div>
          </div>
          <YMapsAPI />
        </section>

        <div className="bottom bottom--s">
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
    `${process.env.NEXT_PUBLIC_API}/page/contacts`
  ).then((response) => response.json());

  return {
    props: {
      pageData,
    },
  };
};

const ContactsContainer = styled.article`
  height: fit-content;
  width: 100%;
  display: grid;
  grid-row-gap: 40px;
  grid-template-columns: 100%;
  a[href^="mailto:"],
  a[href^="tel:"] {
    font-size: 16px;
    line-height: 32px;
    color: var(--main-light);
  }
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
    &--s {
      @media all and (min-width: 900px) and (orientation: landscape) {
        max-width: 62%;
      }
    }
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
