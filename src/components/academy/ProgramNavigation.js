import React from 'react'
import Link from 'gatsby-link'
import cx from 'classnames'
import { resolve } from '@reach/router/lib/utils'

const NavTab = ({ to, children }) => (
  <li className={cx({ 'is-active': window.location.pathname === resolve(to) })}>
    <Link to={to}>{children}</Link>
  </li>
)

const ProgramNavigation = () => (
  <div className="tabs">
    <ul>
      <NavTab to="/academy">Our Curriculum</NavTab>
      <NavTab to="/academy/catalog">Program Catalog</NavTab>
      <NavTab to="/academy/schedule">Daily Schedule</NavTab>
      <NavTab to="/academy/career">Career Services</NavTab>
    </ul>
  </div>
)

export default ProgramNavigation
