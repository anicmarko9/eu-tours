import type { ReactNode } from 'react';
import Head from 'next/head';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <>
      <Head>
        <title>EU Tours</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
