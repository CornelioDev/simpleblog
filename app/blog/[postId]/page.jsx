import BlogFeed from '@/components/Blog/BlogFeed'
import React, { Suspense } from 'react'

const searchPost = async (postId) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  const data = await res.json()
  return data
}

const BlogPostDetail = async ({ params }) => {
  const post = await searchPost(params.postId)
  return (
    <>
      <article className="post-detail">
        <h1>{post.title}</h1>
        <>
          {post.body}
        </>
        <p>Author: {post.userId}</p>
      </article>
      <section className='more-posts'>
        <Suspense 
          fallback={
            <h3>Loading related posts...</h3>
          }>
          <BlogFeed />
        </Suspense>
      </section>
    </>
  )
}

export default BlogPostDetail