import Header from "./Header";
import Footer from "./Footer";
import type { ReactNode } from "react";
import Head from "next/head";

const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <div>
      <Head>
        <title>EU - Tours</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
