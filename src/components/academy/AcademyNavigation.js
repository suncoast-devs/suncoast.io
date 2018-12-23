import React from 'react'
import Link from 'gatsby-link'
import cx from 'classnames'
import { resolve } from '@reach/router/lib/utils'
import Container from '../Container'
import Icon from '../Icon'

const NavItem = ({ to, icon, children }) => (
  <div
    className={cx('column has-text-centered', {
      'is-active': window.location.pathname.startsWith(resolve(to)),
    })}
  >
    <div>
      <Link activeClassName="is-active" to={to}>
        <Icon i={icon} />
        <span className="heading">{children}</span>
      </Link>
    </div>
  </div>
)

const ProgramNavigation = () => (
  <section className="hero is-light">
    <div className="hero-body">
      <Container>
        <nav className="columns">
          <NavItem to="/academy" icon="fas fa-code fa-lg">
            Web Development
          </NavItem>
          <NavItem to="/academy/admissions" icon="fas fa-graduation-cap fa-lg">
            Admissions
          </NavItem>
          <NavItem to="/academy/tution" icon="fas fa-money-check fa-lg">
            Tuition
          </NavItem>
          <NavItem
            to="/academy/tution/scholarships"
            icon="fas fa-seedling fa-lg"
          >
            Scholarships &amp; Diversity
          </NavItem>
          <NavItem to="/academy/success" icon="fas fa-heart fa-lg">
            Success Stories
          </NavItem>
          <NavItem to="/academy/network" icon="fas fa-handshake fa-lg">
            Hiring Network
          </NavItem>
          <NavItem to="/academy/faq" icon="fas fa-puzzle-piece fa-lg">
            FAQ
          </NavItem>
          <NavItem to="/academy/apply" icon="fas fa-laptop fa-lg">
            Apply Now
          </NavItem>
        </nav>
      </Container>
    </div>
  </section>
)

export default ProgramNavigation
