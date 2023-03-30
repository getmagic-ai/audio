import Router from 'next/router'
import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa"


export default function Search() {
    const [searchString, setSearchString] = useState('')

    function handleSearch(event) {
        event.preventDefault();
        console.log(event.target.value)
        setSearchString(event.target.value);
        Router.push(`/blogs/?search=${searchString}`);

    }

    return (

        <div className='mb-2 relative'>

            <button type='submit' className='absolute m-2'><FaSearch /></button>
            <input type="text" id="search" className="text-white w-full rounded-lg py-1 px-10 " onChange={(e) => handleSearch(e)} value={searchString} placeholder="Search what you like... " required />



        </div>
    )
}
