import type { NextPage } from "next";
import Head from "next/head";
import NavTabs from "../components/NavTabs";
import Card from "../components/Card";
import Paginaction from "../components/Paginaction";
import { featchArticles, featchCategories } from "../http";
import qs from "qs";

const Home: NextPage = ({ categories, Article,pagination }: any) => {
  
  const {page,pageSize}= pagination.meta.pagination
  
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
      <Paginaction page={page} pageCount={pageSize}/>
    </>
  );
};

export default Home;

export async function getStaticProps(query:any) {
  // console.log(query,"++_-++");
  
  const options={
    // populate: ['author.avatar'],
    sort: ['id:desc'],
    pagination: {
      page: query.page ? +query.page : 1,
      pageSize: 2,
  },
  }
  // pagination[page]=12&pagination[pageSize]=43
  // pagination%5Bpage%5D=1&pagination%5BpageSize%5D=2 
  const queryString = qs.stringify(options)

  console.log(options,"options");
  console.log(queryString,'queryString');
  
  

  // const { data: AllArticles } = await featchArticles();
  const { data: categories } = await featchCategories();

  const {data:Articles}= await featchArticles(queryString)
  // console.log(limit.data,"limit");
  // console.log(queryString,"queryString");
  
  

  return {
    props: {
      categories: categories.data,
      Article: Articles.data,
      pagination:Articles,
      limit:Articles.data
    },
    revalidate: 2,
  };
}
