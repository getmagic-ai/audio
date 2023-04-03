<<<<<<< HEAD
import Router from "next/router";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Search() {
  const [searchString, setSearchString] = useState("");

  function handleSearch(searchString) {
    setSearchString(searchString);
    //console.log(searchString)
  }

  return (
    <div className='mb-2 relative'>
      <button type='submit' className='absolute m-2'>
        <FaSearch />
      </button>
      <input
        type='text'
        id='search'
        className='text-white w-full rounded-lg py-1 px-10 '
        onChange={(e) => handleSearch(e.target.value)}
        value={searchString}
        placeholder='Search what you like... '
        required
      />
    </div>
  );
=======
import { debounce } from "@/utils/blogPageUtils";
import { useState } from "react";

export default function SearchBox({ handleOnSearch }) {
    const [searchValue, setSearchValue] = useState("");

    const handleOnChange = (event) => {
        const searchValue = event.target.value;
        setSearchValue(searchValue);
        handleOnSearch(searchValue);
    };

    return (
        <div className="relative w-full mb-4">
            <input
                type="text"
                name="search"
                value={searchValue}
                onChange={(handleOnChange)}
                placeholder="Search blogs..."
                className="block w-full py-2 px-3 rounded-md bg-white text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            />
            <button className="absolute top-0 right-0 mt-2 mr-2" onClick={() => handleOnSearch(searchValue)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="10.5" cy="10.5" r="7.5"></circle><path d="M21 21L15.8 15.8"></path></svg>
            </button>
        </div>
    );
>>>>>>> c36de26eca5e8bafbc36e0b7d5a79ea0bc101881
}
