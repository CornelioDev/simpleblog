import BlogPostFeed from "./BlogPostFeed"

const loadPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const postsJson = await res.json()
  return postsJson
}

const BlogFeed = async () => {
  const blogPosts = await loadPosts()
  return (
    <div className="feed flex flex-col gap-2">
      {blogPosts.map((blogPost) => (
        <BlogPostFeed post={blogPost} key={blogPost.id} />
      ))}
    </div>
  )
}

export default BlogFeed