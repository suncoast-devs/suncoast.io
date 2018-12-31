import React from 'react'
import Link from 'gatsby-link'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const UniversalLink = ({ to, href, ...rest }) => {
  const url = to || href
  if (/^(http)?s?:\/\//.test(url)) {
    return <OutboundLink href={url} {...rest} />
  } else {
    return <Link to={url} {...rest} />
  }
}

export default UniversalLink
