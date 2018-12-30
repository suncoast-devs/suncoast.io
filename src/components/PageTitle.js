import React from 'react'
import Helmet from 'react-helmet'
import cx from 'classnames'
import SEO from './SEO'

const PageHeading = ({ children, hidden, seo, className }) => {
  const title = seo ? `${children} (${seo})` : children
  const helmet = <Helmet title={`${title} @ Suncoast Developers Guild`} />
  return hidden ? (
    helmet
  ) : (
    <>
      <h2 className={cx('title is-2', className)}>
        {children}
        {helmet}
      </h2>
      <SEO title={title} />
    </>
  )
}

export default PageHeading
