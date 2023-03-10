import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-p-24">
      <Head>
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <meta name="theme-color" content="#152D9E" />
        <link
          rel="preload"
          as="image"
          href="https://res.cloudinary.com/samsfgreen/image/upload/v1673301885/curve_es93ov.png"
        />
      </Head>
      <body className="bg-gradient-to-tr from-slate-700 to-navy-900 antialiased selection:bg-sky-300/90 selection:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
