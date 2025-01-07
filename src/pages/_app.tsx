import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div>global 헤더</div>
      <Component {...pageProps} />;
    </>
  );
}
