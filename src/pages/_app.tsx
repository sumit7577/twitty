import "../styles/globals.scss"

import { AppHead } from '@/components/common/app-head';
import { NextPage } from 'next';
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page): ReactNode => page);

  return (
    <>
      <AppHead />
      {getLayout(<Component {...pageProps} />)}
    </>
  )
}