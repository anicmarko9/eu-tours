import type { ReactNode } from 'react';

import Header from './Header';
import Footer from './Footer';

export default function Layout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
