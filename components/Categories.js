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
