import BlogPostFeed from "./BlogPostFeed"

const loadPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')

    // if (!res.ok) {
    //     throw console.error('Fetching Error');
    // }

    const postsJson = await res.json()
    return postsJson
}

const BlogFeed = async () => {
    const blogPosts = await loadPosts()
  return (
    blogPosts.map( (blogPost) => (
      <BlogPostFeed post={blogPost} key={blogPost.id}/>
    ))
  )
}

export default BlogFeed