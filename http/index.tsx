import axios from "axios";


const api = axios.create({

    baseURL:process.env.BASE_URL,

    headers: { Authorization: `bearer 050c3c35002c6454aeb3c1191dc1298b85b6a91b8562622965c3b907fc84dd9081cd9d74fa86c7e8e96bb28425085879eb03f2f1dfd4f792d253a11f6cde68c69cb6c889da9605bf3a69b9aa4bb80ca5900a2883a06cc4c049878cedb82735f11eb736c35f6b4c475fca989c8ba46d9e8af85261d3f2095bc8e616c1e50173bf` }
})




export const featchCategories= async () => api.get('http://localhost:1337/api/categories');

export const featchArticles= async () => api.get('http://localhost:1337/api/articles');

export const findBySlug= async (param:any) => api.get(`http://localhost:1337/api/articles?filters[category][slug][$eq]=${param}`)