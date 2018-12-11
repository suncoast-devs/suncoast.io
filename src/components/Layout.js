import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Footer from './Footer'

import MainNavigation from './MainNavigation'

import '../styles/screen.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet title={data.site.siteMetadata.title}>
          <html lang="en" className="has-navbar-fixed-top" />
          <link
            rel="stylesheet"
            href="https://pro.fontawesome.com/releases/v5.5.0/css/all.css"
            integrity="sha384-j8y0ITrvFafF4EkV1mPW0BKm6dp3c+J9Fky22Man50Ofxo2wNe5pT1oZejDH9/Dt"
            crossorigin="anonymous"
          />
        </Helmet>
        <MainNavigation />
        {children}
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
