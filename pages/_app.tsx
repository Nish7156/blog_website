import "../styles/globals.css";
import Layout from "../components/ui/Layout";
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }: any) {
  return (
    <>
    
      <Layout>
        <main className="container mx-auto">
          <NextNProgress/>
          <Component {...pageProps} />
        </main>
      </Layout>
    </>
  );
}

export default MyApp;
