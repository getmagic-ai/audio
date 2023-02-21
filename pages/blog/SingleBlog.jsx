import React from 'react'

export const SingleBlog = ({ selectedBlog }) => {
    return (
        <div>
            <h1>{selectedBlog.attributes.Title}</h1>
            <div className="text-white">
                {selectedBlog.attributes.blog_body}
            </div>
        </div>
    )
}
