import axios from "axios";

const api = axios.create({
    baseURL: process.env.API_BASE_URL,
    headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_DEV}`,
    },
});

// Categories
export const fetchCategories = async () => api.get('/api/categories');

// blogs
export const fetchblogs = async (queryString = "") =>
    api.get(`/api/blogs/?${queryString}`);

export const fetchArticleBySlug = async (queryString = "") =>
    api.get(`/api/blogs/?${queryString}`);

