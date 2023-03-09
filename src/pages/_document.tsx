import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="preload" href="/fonts/fonts.css" as="style" />
        {/* eslint-disable-next-line */}
        <link rel="stylesheet" href="/fonts/fonts.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
