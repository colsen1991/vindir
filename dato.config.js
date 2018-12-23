module.exports = (dato, root) => {
  root.directory('static/data', (dataDir) => {
    let bloggliste = []

    dato.blogPosts.forEach(blogPost => {
      console.log(bloggliste)
      const blogPostObject = blogPost.toMap()

      delete blogPostObject.seoMetaTags

      bloggliste.push({
        id: blogPostObject.id,
        date: blogPostObject.createdAt,
        title: blogPostObject.title,
        slug: blogPostObject.slug,
        image: blogPostObject.image,
        excerpt: blogPostObject.excerpt,
        tag: blogPostObject.tag.tag
      })

      dataDir.createPost(`blogg/${blogPostObject.slug}.json`, 'json', {
        frontmatter: {
          ...blogPostObject
        }
      })
    })

    dataDir.createPost(`blogg.json`, 'json', {
      frontmatter: {
        liste: bloggliste
      }
    })
  })
}
