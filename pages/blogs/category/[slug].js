import Categories from '@/components/Categories'
import { fetchblogs, fetchCategories } from '@/pages/api/blogs'
import Head from 'next/head'
import React from 'react'
import SearchBox from "@/components/SearchBox";
import qs from "qs";
import { BlogsList } from '@/components/BlogsList';

const category = ({ categories, blogs }) => {
    return (
        <>
            <Head>
                <title>Test Category</title>
                <meta name="Technology news" content="Tech News" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <SearchBox />
            <Categories categories={categories.items} />
            <BlogsList blogs={blogs.items} />
        </>
    )
}

export const getServerSideProps = async ({ query }) => {

    const options = {
        populate: '*',
        sort: ['id:desc'],
        filters: {
            category: {
                slug: query.slug,
            }
        }
    }
    const queryString = qs.stringify(options);

    const categories = await fetchCategories();

    const blogs = await fetchblogs(queryString);
    return {
        props: {
            categories: {
                items: categories.data,

            },
            blogs: {
                items: blogs.data,
                pagination: blogs.data.meta.pagination,
            },
        },
    };


}

export default category
