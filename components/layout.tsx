import Head from "next/head";
import React, { ReactElement } from "react";

interface IProps {
  children: ReactElement;
  title: string;
  description: string;
}

import { useRouter } from "next/router";

const MainLaylout: React.FC<IProps> = ({ children, title, description }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0"
          device-width="device-width"
        />
        <meta name="description" content={description} />
        <title>{title}</title>
      </Head>
      {children}
    </>
  );
};

export default React.memo(MainLaylout);
