import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="font-montserrat">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="Discover the beauty of Europe with our exciting tours. Explore iconic landmarks, immerse yourself in rich cultural experiences, and create unforgettable memories. Book your dream European tour with our trusted travel agency today."
        />
        <meta name="author" content="Marko Anic" />
      </Head>
      <body className="bg-bodyBg">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
