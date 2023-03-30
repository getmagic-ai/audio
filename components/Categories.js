import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'

export default function Categories({ categories }) {

    const router = useRouter();
    const isActiveLink = (category) => {
        if (router.query.category === category.attributes.slug) {
            return true;
        }
    }
    return (
        <div className='flex flex-wrap space-x-2 '>
            <Link href="/blogs" className='text-white my-2 '>
                <div className='bg-gray-500 box-border rounded-full inline px-2 py-2 text-black text-sm font-bold '>

                    Recents

                </div>
            </Link>

            {categories.data.map((category) => (
                <Link href={`/blogs/category/${category.attributes.slug}`} key={category.id} className='text-white my-2 '>
                    <div className='bg-gray-500 box-border rounded-full inline px-2 py-2 text-black text-sm font-bold '>

                        {category.attributes.title}

                    </div>
                </Link>
            ))}

        </div>
    )
}

// export async function getServerSideProps({ query }) {
//     console.log(query.search)

//     const options = {
//         populate: '*',
//         filters: {
//             category: {
//                 slug: query.category,
//             }
//         }
//     }
//     const queryString = qs.stringify(options);

//     //fetch categories here
//     const categories = await fetchCategories();
//     //fetch articles here
//     const articles = await fetchArticles(queryString);

//     if (query.search) {
//         console.log(query.search)
//         options.filters = {
//             Title: {
//                 $containsi: query.search,
//             }
//         }
//     }

//     return {
//         props: {

//             categories: categories.data.data,
//             articles: articles.data.data,
//             slug: query.category



//         }, // will be passed to the page component as props
//     }


// }