import Header from "./Header";
import Footer from "./Footer";
import type { ReactNode } from "react";
import Head from "next/head";

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
