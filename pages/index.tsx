import Layout from "@components/layout";
import styled from "styled-components";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import CustomImage from "@components/shared/image";
import HomeNav from "@components/pages/home/navigation";
import { IPage } from "@utils/types";

const Home: NextPage = ({
  pageData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { title, description, textAbout, mainImageMob, mainTextContent } =
    pageData;

  return (
    <>
      <Layout {...{ title, description }}>
        <HomeConatiner bgImage={mainImageMob}>
          <h1>{title}</h1>
          <div className="home-conntent">
            <p className="text-about">{textAbout}</p>
            <div className="banner">
              <CustomImage src={mainImageMob} alt="ассортимент снеков" />
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
export const getStaticProps: GetStaticProps = async (context) => {
  const pageData: IPage = await fetch(`${process.env.API}/page/home`).then(
    (response) => response.json()
  );

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
    .banner {
      width: 100%;
      height: 50vh;
      position: relative;

      .banner-image {
        width: 100%;
        height: 100%;
        background: url(${(props) => props.bgImage});
        background-size: cover;
        background-position: center;
      }
      .banner-inner {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        background: var(--main-dark);
        width: 100%;
        height: 100%;
        transition-delay: 0.5s;
        display: block;
      }
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
