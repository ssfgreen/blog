import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-p-24">
      <Head />
      <body className="bg-gray-900 antialiased selection:bg-blue-500/90 selection:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
