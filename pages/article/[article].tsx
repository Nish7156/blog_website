import React from 'react'

function article({SingleArt}:any) {
  return (
    <>
        {SingleArt.map((ele:any)=>{
            return <>
            <h1>{ele.attributes.title}</h1>
            <p>{ele.attributes.body}</p>
            </>
        })}
    </>
  )
}

export default article;

export async function getServerSideProps(context:any) {
    const param= context.query.article;
    
    
    const response= await fetch('http://127.0.0.1:1337/api/categories', {
      method: 'GET',
      headers: {
        authorization: 'Bearer 050c3c35002c6454aeb3c1191dc1298b85b6a91b8562622965c3b907fc84dd9081cd9d74fa86c7e8e96bb28425085879eb03f2f1dfd4f792d253a11f6cde68c69cb6c889da9605bf3a69b9aa4bb80ca5900a2883a06cc4c049878cedb82735f11eb736c35f6b4c475fca989c8ba46d9e8af85261d3f2095bc8e616c1e50173bf'
      },
    });
    const data = await response.json();
  
    const article= await fetch(`http://127.0.0.1:1337/api/articles?filters[slug][$eq]=${param}`, {
      method: 'GET',
      headers: {
        authorization: 'Bearer 050c3c35002c6454aeb3c1191dc1298b85b6a91b8562622965c3b907fc84dd9081cd9d74fa86c7e8e96bb28425085879eb03f2f1dfd4f792d253a11f6cde68c69cb6c889da9605bf3a69b9aa4bb80ca5900a2883a06cc4c049878cedb82735f11eb736c35f6b4c475fca989c8ba46d9e8af85261d3f2095bc8e616c1e50173bf'
      },
    });
    const AllArticles = await article.json()
    console.log(AllArticles.data,"+++");
    
    
    return {
      props: {
        TabsVal:data.data,
        SingleArt:AllArticles.data
      }, 
    }
  }