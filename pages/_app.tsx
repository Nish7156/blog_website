import "../styles/globals.css";
import Layout from "../components/ui/Layout";

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Layout>
        {/* <div className="container mx-auto ">
        <Navbar/> */}
        <main className="container mx-auto">
          <Component {...pageProps} />
        </main>
        {/* </div> */}
      </Layout>
    </>
  );
}

export default MyApp;
