import React from 'react'

import Link from 'gatsby-link'
import cx from 'classnames'
import { Location } from '@reach/router'
import { resolve } from '@reach/router/lib/utils'
import Icon from './Icon'

const NavItem = ({ to, icon, children }) => (
  <Location>
    {({ location }) => (
      <div
        className={cx('column has-text-centered', {
          'is-active': location.pathname.startsWith(resolve(to)),
        })}
      >
        <div>
          <Link activeClassName="is-active" to={to}>
            <Icon i={icon} />
            <span className="heading">{children}</span>
          </Link>
        </div>
      </div>
    )}
  </Location>
)

export default NavItem
