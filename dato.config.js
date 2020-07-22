module.exports = (dato, root) => {
  root.directory('static/data', (dataDir) => {
    let blogPosts = []

    dato.blogPosts.forEach(blogPost => {
      const _blogPost = blogPost.toMap()

      delete _blogPost.seoMetaTags

      blogPosts.push({
        id: _blogPost.id,
        date: _blogPost.createdAt,
        title: _blogPost.title,
        slug: _blogPost.slug,
        image: _blogPost.image,
        excerpt: _blogPost.excerpt,
        tag: _blogPost.tag.tag
      })

      dataDir.createPost(`blogg/${_blogPost.slug}.json`, 'json', {
        frontmatter: {
          ..._blogPost
        }
      })
    })

    dataDir.createPost(`blog.json`, 'json', {
      frontmatter: [
        ...blogPosts
      ]
    })
  })
}
