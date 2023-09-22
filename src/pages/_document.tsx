import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="font-montserrat">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Forum&family=Poppins:wght@100;200;300;400;500&display=swap" rel="stylesheet"/> 
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
