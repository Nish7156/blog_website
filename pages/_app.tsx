import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="container mx-auto ">
        <Navbar/>
        <main className="container mx-auto">
        <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default MyApp;
