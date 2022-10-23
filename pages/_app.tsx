import "../styles/globals.css";
import Layout from "../components/ui/Layout";

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Layout>
        <main className="container mx-auto">
          <Component {...pageProps} />
        </main>
      </Layout>
    </>
  );
}

export default MyApp;
