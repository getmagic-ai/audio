import Categories from '@/components/Categories'
import { fetchblogs, fetchCategories } from '@/pages/api/blogs'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import SearchBox from "@/components/SearchBox";
import qs from "qs";
import { BlogsList } from '@/components/BlogsList';
import { useRouter } from 'next/router';
import { debounce } from '@/utils/blogPageUtils';

const category = ({ categories, blogs, slug }) => {

    const [currCategory, setCurrCategory] = useState("")
    useEffect(() => {
        if (slug !== "") {
            setCurrCategory("Blogs | " + slug.charAt(0).toUpperCase() + slug.slice(1))
        }

    }, [slug])
    const router = useRouter();

    const handleSearch = (query) => {
        // query.preventDefault();
        console.log("this is squery", query);
        router.push(`/blogs/category/${router.query.slug}/?search=${query}`);
    };

    return (
        <>
            <Head>
                <title>{currCategory}</title>
                <meta name="Technology news" content="Tech News" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="text-white items-center align-middle text-xl mb-3 -my-10 ">
                Get the latest of Media and Technology updates !
            </div>
            <SearchBox handleOnSearch={debounce(handleSearch, 500)} />
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
    if (query.search) {
        options.filters = {
            Title: {
                $containsi: query.search,

            },

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
            slug: query.slug,
        },
    };


}

export default category;
