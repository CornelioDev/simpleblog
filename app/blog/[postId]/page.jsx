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
      <article className="post-detail text-gray-100 flex flex-col gap-2">
        <h1 className='text-2xl font-semibold'>{post.title}</h1>
        <>
          {post.body}
        </>
        <div className='text-sm font-light flex place-content-between pb-5 mt-4 text-gray-400 border-b'>
          <p>Author: {post.userId}</p>
          <p>Published on: 30/12/99</p>
        </div>
      </article>
    
      <section className='more-posts mt-20'>
        <h2 className='text-gray-400 font-bold text-lg mb-2'>Related Posts</h2>
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