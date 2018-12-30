const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    const successStory = path.resolve('./src/templates/success-story.js')
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  slug
                }
              }
            }

            allContentfulSuccessStory {
              edges {
                node {
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
        posts.forEach(post => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug,
            },
          })
        })

        const stories = result.data.allContentfulSuccessStory.edges
        stories.forEach(story => {
          createPage({
            path: `/academy/success/${story.node.slug}/`,
            component: successStory,
            context: {
              slug: story.node.slug,
            },
          })
        })
      })
    )
  })
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  return new Promise((resolve, reject) => {
    switch (page.path) {
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

    // Remove trailing slash
    const newPage = Object.assign({}, page, {
      path: page.path === `/` ? page.path : page.path.replace(/\/$/, ``),
    })
    if (newPage.path !== page.path) {
      deletePage(page)
      createPage(newPage)
    }

    resolve()
  })
}
