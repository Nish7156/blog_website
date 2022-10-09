import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Card from '../../components/Card';
import NavTabs from '../../components/NavTabs'
import { featchArticles, featchCategories, findBySlug } from '../../http';

function categore({TabsVal,SingleArt}:any) {

  const router = useRouter();
  // console.log(router.query.categore,"MMM");
  
   
  return (
    <>
    <NavTabs navtabs={TabsVal}/>
    <div className='mt-4'>
    <div className='grid-cols-2 gap-4'>
      {SingleArt.map((ele:any)=>{
        return  <div key={ele.id} className="p-6 mr-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <svg className="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clip-rule="evenodd"></path><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path></svg>
        <Link href={`/article/${ele.attributes.slug}`}>
            <a href="#">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{ele.attributes.title}</h5>
        </a>
        </Link>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
        <a href="#" className="inline-flex items-center text-blue-600 hover:underline">
            See our guideline
            <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
        </a>
    </div>
      })}
    </div>
    </div>
   
    </>
  )
}

export default categore

export async function getServerSideProps(context:any) {
  const param= context.query.categore;
  
  const response= await fetch('http://127.0.0.1:1337/api/categories', {
    method: 'GET',
    headers: {
      authorization: 'Bearer 050c3c35002c6454aeb3c1191dc1298b85b6a91b8562622965c3b907fc84dd9081cd9d74fa86c7e8e96bb28425085879eb03f2f1dfd4f792d253a11f6cde68c69cb6c889da9605bf3a69b9aa4bb80ca5900a2883a06cc4c049878cedb82735f11eb736c35f6b4c475fca989c8ba46d9e8af85261d3f2095bc8e616c1e50173bf'
    },
  });
  const data = await response.json();

  const articles= await fetch(`http://127.0.0.1:1337/api/articles?filters[category][slug][$eq]=${param}`, {
    method: 'GET',
    headers: {
      authorization: 'Bearer 050c3c35002c6454aeb3c1191dc1298b85b6a91b8562622965c3b907fc84dd9081cd9d74fa86c7e8e96bb28425085879eb03f2f1dfd4f792d253a11f6cde68c69cb6c889da9605bf3a69b9aa4bb80ca5900a2883a06cc4c049878cedb82735f11eb736c35f6b4c475fca989c8ba46d9e8af85261d3f2095bc8e616c1e50173bf'
    },
  });
  const AllArticles = await articles.json()
  
  return {
    props: {
      TabsVal:data.data,
      SingleArt:AllArticles.data
    }, 
  }
}