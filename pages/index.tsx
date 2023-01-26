import Layout from "@components/layout";
import styled from "styled-components";
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import HomeNav from "@components/pages/home/navigation";
import { IPage } from "@utils/types";
import Image from "next/image";

const Home: NextPage = ({
  pageData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { title, description, textAbout, mainImageMob, mainTextContent } =
    pageData;

  return (
    <>
      <Layout {...{ title, description }}>
        <HomeConatiner bgImage={mainImageMob}>
          <h1>{title}</h1>
          <div className="home-conntent">
            <p className="text-about">{textAbout}</p>
            <div className="banner-image">
              <Image src="/images/15.jpg" alt="ассортимент снеков" fill />
            </div>
            <p className="main-text">
              <span>{mainTextContent}</span>
            </p>
          </div>
          <HomeNav />
        </HomeConatiner>
      </Layout>
    </>
  );
};
export default Home;
export const getServerSideProps: GetServerSideProps = async (context) => {
  const pageData: IPage = await fetch(
    `${process.env.NEXT_PUBLIC_API}/page/home`
  ).then((response) => response.json());

  return {
    props: {
      pageData,
    },
  };
};
const HomeConatiner = styled.section<{ bgImage: string }>`
  height: fit-content;
  width: 100%;
  display: grid;
  grid-row-gap: 26px;
  grid-template-columns: 100%;

  h1 {
    height: fit-content;

    span {
      display: block;
    }
  }
  .home-conntent {
    display: grid;
    grid-template-columns: 100%;
    grid-gap: 20px;

    .text-about {
      span {
        display: block;
      }
    }

    .banner-image {
      width: 100%;
      height: calc(100vw - 4rem);
      position: relative;
    }

    .main-text {
      height: fit-content;

      span {
        display: block;
      }
    }
    @media all and (orientation: landscape) {
      .banner {
        height: 100vh;
      }
    }
  }
`;
