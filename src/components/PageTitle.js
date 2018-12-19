import React from 'react'
import Helmet from 'react-helmet'

const PageHeading = ({ children, hidden }) => {
  const helmet = <Helmet title={`${children} @ Suncoast Developers Guild`} />
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
