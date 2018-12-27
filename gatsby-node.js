const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulBlogPost.edges
        posts.forEach((post, index) => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug,
            },
          })
        })
      })
    )
  })
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions
  switch (page.path) {
    case `/academy/success/`:
      page.matchPath = `/academy/success/*`
      createPage(page)
      break
    case `/team/volunteers/`:
      page.matchPath = `/team/volunteers/*`
      createPage(page)
      break
    case `/team/advisory/`:
      page.matchPath = `/team/advisory/*`
      createPage(page)
      break
    case `/team/`:
      page.matchPath = `/team/*`
      createPage(page)
      break
  }
}
