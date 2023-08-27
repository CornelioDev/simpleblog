'use client'

import Link from "next/link"

const BlogPostFeed = ({ post }) => {
    return (
        <div className="blog-post bg-gray-600 p-3 text-gray-100 rounded-sm text-xl font-semibold">
            <Link href={`/blog/${post.id}`}>
                <h1>{post.title}</h1>
            </Link>
            <div className="flex place-content-between text-xs mt-4 text-gray-400">
                <div className="likes">100 Likes</div>
                <div className="comments">10 Comments</div>
            </div>
        </div>
    )
}

export default BlogPostFeed