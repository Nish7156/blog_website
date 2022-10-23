import type { NextPage } from "next";
import Head from "next/head";
import NavTabs from "../components/NavTabs";
import Card from "../components/Card";
// import Paginaction from "../components/Paginaction";
import { featchArticles, featchCategories } from "../http";

const Home: NextPage = ({ categories, Article }: any) => {

  // const {page, pageCount}= ArticlePagination.meta.pagination
  return (
    <>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavTabs categories={categories} />
      <div className="mt-4">
        <Card Article={Article} />
      </div>
      {/* <Paginaction page={page} pageCount={pageCount}/> */}
    </>
  );
};

export default Home;

export async function getStaticProps() {
  // const options={
  //   paginaction:{
  //     page:query.page ? query.page : 1,
  //     pageSize:1
  //   }
  // }

  const { data: AllArticles } = await featchArticles();
  const { data: categories } = await featchCategories();

  return {
    props: {
      categories: categories.data,
      Article: AllArticles.data,
    },
    revalidate: 2,
  };
}
