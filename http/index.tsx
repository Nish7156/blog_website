import axios from "axios";
import QueryString from "qs";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,

  headers: { Authorization: `bearer ${process.env.NEXT_PUBLIC_API_TOKEN}` },
});

//Featch All Categories
export const featchCategories = async () => api.get("/api/categories");

//Featch By Slug
export const findBySlug = async (param: string) =>
  api.get(`/api/articles?filters[category][slug][$eq]=${param}`);

//Find Single Article
export const findSingleArticle = async (param: any) =>
  api.get(`/api/articles?filters[category][slug][$eq]=${param}`);

//Featch Single Article by slug
export const findArticleBySlug = async (param: any) =>
  api.get(`/api/articles?filters[slug][$eq]=${param}`);

//Pagination
export const pagination = async (page: any) => {
  api.get(`api/articles?pagination[page]=${page}&pagination[pageSize]=3`);
};

//Set Artilcle Limit
export const featchArticles = async (queryString: any) =>
  api.get(`api/articles?${queryString}`);


  

//api/articles?pagination[page]=${page}&pagination[pageSize]=${pageSize}`

//Set Artilcle Limit
// export const articleLimit = async (param: any) =>
//   api.get(`/api/articles?pagination[pageSize]=${param}`);

//Featch All Articles
// export const featchArticles = async () => api.get("/api/articles");
