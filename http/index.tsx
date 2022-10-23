import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,

  headers: { Authorization: `bearer ${process.env.NEXT_PUBLIC_API_TOKEN}` },
});

//Featch All Categories
export const featchCategories = async () => api.get("/api/categories");

//Featch All Articles
export const featchArticles = async () => api.get("/api/articles");

//Featch By Slug
export const findBySlug = async (param: string) =>
  api.get(`/api/articles?filters[category][slug][$eq]=${param}`);

//Set Artilcle Limit
export const articleLimit = async () =>
  api.get("/api/articles?pagination[pageSize]=2");

//Find Single Article
export const findSingleArticle = async (param: any) =>
  api.get(`/api/articles?filters[category][slug][$eq]=${param}`);

//Featch Single Article by slug
export const findArticleBySlug = async (param: any) =>
  api.get(`/api/articles?filters[slug][$eq]=${param}`);
