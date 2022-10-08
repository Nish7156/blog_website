import { AxiosResponse } from 'axios'
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { featchCategories } from '../http'
import { ICategory, ICollections } from '../interface'
import axios from "axios";
import { useEffect, useState } from 'react'
import NavTabs from '../components/NavTabs'

const Home: NextPage = ({items}:any) => {

  const [TabsVal ,setTabsVal]= useState([]);
  console.log(TabsVal,"tabs");
  

  useEffect( ()=>{

    const response=  featchCategories()
    .then((response) => {
      console.log(response,"jj")
      setTabsVal(response.data.data)
    })
    .catch((err) => console.log(err));

  },[])

 
  
  return (
    <>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavTabs navtabs={TabsVal}/>
      

    </>
  )
}

export default Home

