import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-p-24">
      <Head>
        <link rel="icon" type="image/png" href="/assets/favicon.png?v=1" />
        <meta name="theme-color" content="#152D9E" />
        <link
          rel="preload"
          as="image"
          href="https://res.cloudinary.com/samsfgreen/image/upload/v1673284167/bluegradient_ir7hrz.png"
        />
      </Head>
      <body className="bg-blue-900 antialiased selection:bg-blue-500/90 selection:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
