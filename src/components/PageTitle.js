import React from 'react'
import Helmet from 'react-helmet'

const PageHeading = ({ children, hidden, seo }) => {
  const title = seo ? `${children} (${seo})` : children
  const helmet = <Helmet title={`${title} @ Suncoast Developers Guild`} />
  return hidden ? (
    helmet
  ) : (
    <h2 className="title is-2">
      {children}
      {helmet}
    </h2>
  )
}

export default PageHeading
