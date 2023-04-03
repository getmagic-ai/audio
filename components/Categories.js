import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Categories({ categories }) {
  const router = useRouter();
  const isActiveLink = (category) => {
    return router.query.slug === category.attributes.slug;
  };
  function CapitaliseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className='flex flex-wrap space-x-2 mt-3'>
      <Link href='/blogs' className='text-white my-2 '>
        <div
          className={
            " box-border rounded-full inline px-2 py-2 text-black text-sm font-bold " +
            `${router.pathname === "/blogs" ? "bg-gray-200" : "bg-gray-600"}`
          }
        >
          Recents
        </div>
      </Link>

      {categories.data.map((category) => (
        <Link
          href={`/blogs/category/${category.attributes.slug}`}
          key={category.id}
          className=' my-2 '
        >
          <div
            className={
              " box-border rounded-full inline px-2 py-2 text-black text-sm font-bold " +
              `${isActiveLink(category) ? "bg-gray-200" : "bg-gray-600"}`
            }
          >
            {CapitaliseFirstLetter(category.attributes.title)}
          </div>
        </Link>
      ))}
    </div>
  );
}
