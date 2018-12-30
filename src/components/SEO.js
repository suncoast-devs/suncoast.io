import React from 'react'
import Helmet from 'react-helmet'
import { Location } from '@reach/router'
import config from '../../gatsby-config'

const { siteUrl } = config.siteMetadata

const SEO = ({ title, description, photo, url }) => {
  const titleFields = [
    {
      property: 'og:title',
      content: title,
    },
    { name: 'twitter:title', content: title },
  ]

  const descriptionFields = [
    { name: 'description', content: description },
    {
      property: 'og:description',
      content: description,
    },
    {
      name: 'twitter:description',
      content: description,
    },
  ]

  const photoFields = [
    {
      property: 'og:image:width',
      content: '1200',
    },
    {
      property: 'og:image:height',
      content: '630',
    },
    {
      property: 'og:image',
      content: photo,
    },
    {
      name: 'twitter:image',
      content: photo,
    },
  ]
  return (
    <Location>
      {({ location }) => (
        <Helmet
          meta={[
            {
              property: 'og:url',
              content: url ? url : siteUrl + location.pathname,
            },
            ...(title && titleFields),
            ...(description && descriptionFields),
            ...(photo && photoFields),
          ]}
        />
      )}
    </Location>
  )
}
