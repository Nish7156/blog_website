import { AxiosResponse } from 'axios'
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { featchArticles, featchCategories } from '../http'
import { ICategory, ICollections } from '../interface'
import axios from "axios";
import { useEffect, useState } from 'react'
import NavTabs from '../components/NavTabs'
import Card from '../components/Card'

const Home: NextPage = ({TabsVal,Article}:any) => {

 

 
  
  return (
    <>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavTabs navtabs={TabsVal}/>
      <div className='mt-4'>
      <Card Article={Article}/>
      </div>
      

    </>
  )
}

export default Home

export async function getStaticProps() {

  const response= await fetch('http://127.0.0.1:1337/api/categories', {
    method: 'GET',
    headers: {
      authorization: 'Bearer 050c3c35002c6454aeb3c1191dc1298b85b6a91b8562622965c3b907fc84dd9081cd9d74fa86c7e8e96bb28425085879eb03f2f1dfd4f792d253a11f6cde68c69cb6c889da9605bf3a69b9aa4bb80ca5900a2883a06cc4c049878cedb82735f11eb736c35f6b4c475fca989c8ba46d9e8af85261d3f2095bc8e616c1e50173bf'
    },
  });
  const data = await response.json();

  const articles= await fetch('http://127.0.0.1:1337/api/articles', {
    method: 'GET',
    headers: {
      authorization: 'Bearer 050c3c35002c6454aeb3c1191dc1298b85b6a91b8562622965c3b907fc84dd9081cd9d74fa86c7e8e96bb28425085879eb03f2f1dfd4f792d253a11f6cde68c69cb6c889da9605bf3a69b9aa4bb80ca5900a2883a06cc4c049878cedb82735f11eb736c35f6b4c475fca989c8ba46d9e8af85261d3f2095bc8e616c1e50173bf'
    },
  });
  const AllArticles = await articles.json()
  // console.log(AllArticles);
  
  return {
    props: {
      TabsVal:data.data,
      Article:AllArticles.data
    }, 
  }
}

