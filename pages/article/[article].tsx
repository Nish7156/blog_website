import { useRouter } from "next/router";
import React from "react";
import { findArticleBySlug } from "../../http";

function article({ SingleArt }: any) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading.....</div>;
  }
  return (
    <>
      {SingleArt.map((ele: any) => {
        return (
          <>
            <h1>{ele.attributes.title}</h1>
            <p>{ele.attributes.body}</p>
          </>
        );
      })}
    </>
  );
}

export default article;

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps(context: any) {
  let param = context.params.article;

  const { data: Article } = await findArticleBySlug(param);
  return {
    props: {
      SingleArt: Article.data,
    },
    revalidate: 2,
  };
}
