import Link from 'next/link'
import React from 'react'

export default function Categories() {
    return (
        <div className='flex flex-wrap space-x-2 mb-5'>
            <div className='bg-gray-500 box-border my-1 rounded-full inline px-2 py-2 text-black text-sm font-bold '>
                <Link href="#">
                    Recents
                </Link>
            </div>
            <div className='bg-gray-500 box-border my-1 rounded-full inline px-2 py-2 text-black text-sm font-bold '>
                Technology
            </div>
            <div className='bg-gray-500 box-border my-1 rounded-full inline px-2 py-2 text-black text-sm font-bold '>
                Technology
            </div>
            <div className='bg-gray-500 box-border my-1 rounded-full inline px-2 py-2 text-black text-sm font-bold '>
                Technology
            </div>
            <div className='bg-gray-500 box-border my-1 rounded-full inline px-2 py-2 text-black text-sm font-bold '>
                Technology
            </div>

        </div>
    )
}

export async function getServerSideProps({ query }) {
    console.log(query.search)

    const options = {
        populate: '*',
        filters: {
            category: {
                slug: query.category,
            }
        }
    }
    const queryString = qs.stringify(options);

    //fetch categories here
    const categories = await fetchCategories();
    //fetch articles here
    const articles = await fetchArticles(queryString);

    if (query.search) {
        console.log(query.search)
        options.filters = {
            Title: {
                $containsi: query.search,
            }
        }
    }

    return {
        props: {

            categories: categories.data.data,
            articles: articles.data.data,
            slug: query.category



        }, // will be passed to the page component as props
    }


}