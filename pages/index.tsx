import type { NextPage } from "next";
import Head from "next/head";
import NavTabs from "../components/NavTabs";
import Card from "../components/Card";
import Paginaction from "../components/Paginaction";
import { featchArticles, featchCategories } from "../http";
import qs from "qs";
import { useRouter } from "next/router";
import { type } from "@testing-library/user-event/dist/type";
import { debounce } from "../utils";

type IQUERY={
  filters: { title: { $containsi: any; }; };
  filtes?:any;
  sort:any;
  pagination:any
}

const Home: NextPage = ({ categories, Article, pagination }: any) => {
  const { page, pageSize } = pagination.meta.pagination;
  const router = useRouter()

  const handleOnSearch=(query:any)=>{
    console.log();
    router.push(`/?search=${query}`)
    
  }

  return (
    <>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavTabs categories={categories} handleOnSearch={debounce(handleOnSearch,1000)} />
      <div className="mt-4">
        <Card Article={Article} />
      </div>
      <Paginaction page={page} pageCount={pageSize} />
    </>
  );
};

export default Home;

export async function getServerSideProps({ query }: any) {

  console.log(".....Running");
  
  // console.log(query,"++_-++");
  console.log(query, "++++---");

  const options:IQUERY = {
    // populate: ['author.avatar'],
    sort: ["id:desc"],
    pagination: {
      page: query.page ? +query.page : 1,
      pageSize: 3,
    },
    filters: {
      title: {
        $containsi: undefined
      }
    }
  };

  if(query.search){
    options.filters={
      title:{
        $containsi:query.search
      }
    }
  }
  // pagination[page]=12&pagination[pageSize]=43
  // pagination%5Bpage%5D=1&pagination%5BpageSize%5D=2
  const queryString = qs.stringify(options);

  console.log(options, "options");
  console.log(queryString, "queryString");

  // const { data: AllArticles } = await featchArticles();
  const { data: categories } = await featchCategories();

  const { data: Articles } = await featchArticles(queryString);
  // console.log(limit.data,"limit");
  // console.log(queryString,"queryString");

  return {
    props: {
      categories: categories.data,
      Article: Articles.data,
      pagination: Articles,
      limit: Articles.data,
    }
  };
}
