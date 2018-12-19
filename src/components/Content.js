import React from 'react'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

const Content = ({ body }) => (
  <div>
    <MDXRenderer>{body}</MDXRenderer>
  </div>
)

export default Content
