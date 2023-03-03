import React from 'react'
import { FaSearch } from "react-icons/fa"

export default function SearchBox() {
    return (

        <div className='mb-2 relative'>
            <FaSearch className='absolute m-2' />
            <input type="text" id="search" class="w-full rounded-lg py-1 px-10" placeholder="Search what you like... " required />


        </div>
    )
}
