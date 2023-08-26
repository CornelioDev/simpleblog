'use client'

import Link from "next/link"

const BlogPostFeed = ({ post }) => {
    return (
        <div className="blog-post-feed">
            <Link href={`/blog/${post.id}`}>
                <h1>{post.id}. {post.title}</h1>
            </Link>
        </div>
    )
}

export default BlogPostFeed