import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "@components/header";
import NavigationAside from "@components/navigation-aside";
import Transition from "@components/transition";
import { AppContext } from "@context/app.context";
import GlobalStyle from "@styles/globalStyle";
import { useRouter } from "next/router";
import { useEffect, useReducer } from "react";
import { appReducer } from "@context/reducer";
import { initialAppState } from "@context/state";

import useMediaQuery from "@hooks/use.media-query";
import useWindowSize from "@hooks/use.window-size";
import ErrorBoundary from "@components/ErrorBoundary";

export default function App({ Component, pageProps, router }: AppProps) {
  const [state, dispatch] = useReducer(appReducer, initialAppState);

  const { width, isMobile } = useWindowSize();

  useEffect(() => {
    if (!isMobile && width > 1024) {
      router.push(process.env.NEXT_PUBLIC_DOMAIN as string);
    }
  }, [width, isMobile]);
  return (
    <ErrorBoundary>
      <AppContext.Provider value={{ state, dispatch }}>
        <Head>
          <meta name="theme-color" content="#ffffff" />
          <meta name="yandex-verification" content="ed5f066e87d4a245" />
          <meta
            name="viewport"
            content="width=device-width, height=device-height, initial-scale=1"
          />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        </Head>

        <GlobalStyle />
        <Header />
        <NavigationAside />
        <Transition location={router.pathname}>
          <Component {...pageProps} />
        </Transition>
      </AppContext.Provider>
    </ErrorBoundary>
  );
}
