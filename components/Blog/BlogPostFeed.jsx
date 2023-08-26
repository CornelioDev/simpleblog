'use client'

const BlogPostFeed = ({ post }) => {
    return (
        <div className="blog-post-feed">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <button onClick={
                () => { alert('Hello World!') }
            }>read more...</button>
        </div>
    )
}

export default BlogPostFeed