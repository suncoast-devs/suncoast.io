import React, { Component } from 'react'
import { globalHistory as history } from '@reach/router/lib/history'
import Link from 'gatsby-link'
import cx from 'classnames'
import button from '../images/button.svg'

class MainNavigation extends Component {
  state = { active: false }

  componentDidMount() {
    this.unlisten = history.listen(() => {
      this.setState({ active: false })
    })
    window.addEventListener('scroll', this._visibilty)
  }

  componentWillUnmount() {
    this.unlisten()
    window.removeEventListener('scroll', this._visibilty)
  }

  _toggle = () => {
    this.setState({ active: !this.state.active })
  }

  _visibilty = () => {
    // Don't hide while menu is visible.
    if (!this.state.active) {
      const visible = window.scrollY > 100
      this.setState({ visible })
    }
  }

  render() {
    const { active, visible } = this.state
    return (
      <nav
        className={cx(
          'main-navigation',
          'navbar',
          'is-fixed-top',
          'is-transparent',
          { visible }
        )}
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <img src={button} alt="SDG Button Icon" height="28" width="28" />
            </Link>
            <Link
              to="/"
              className="navbar-item has-text-weight-bold is-uppercase"
            >
              Suncoast Developers Guild
            </Link>
            <span
              className={cx('navbar-burger burger', {
                'is-active': active,
              })}
              onClick={this._toggle}
            >
              <span />
              <span />
              <span />
            </span>
          </div>
          <div className={cx('navbar-menu', { 'is-active': active })}>
            <div className="navbar-start">
              <div className="navbar-item has-dropdown is-hoverable">
                <Link to="/academy" className="navbar-link">
                  Academy
                </Link>
                <div className="navbar-dropdown">
                  <Link to="/academy" className="navbar-item">
                    Web Development Program
                  </Link>
                  <Link to="/academy/admissions" className="navbar-item">
                    Admissions
                  </Link>
                  <Link to="/academy/tuition" className="navbar-item">
                    Tuition &amp; Financing
                  </Link>
                  <Link to="/academy/diversity" className="navbar-item">
                    Diversity
                  </Link>
                  <Link to="/academy/success" className="navbar-item">
                    Success Stories
                  </Link>
                  <Link to="/academy/network" className="navbar-item">
                    Hiring Network
                  </Link>
                  <Link to="/academy/faq" className="navbar-item">
                    FAQ
                  </Link>
                  <hr className="navbar-divider" />
                  <Link to="/academy/apply" className="navbar-item">
                    Apply Now
                  </Link>
                </div>
              </div>
              <div className="navbar-item has-dropdown is-hoverable">
                <Link to="/academy" className="navbar-link">
                  Community
                </Link>
                <div className="navbar-dropdown">
                  <Link to="/community/" className="navbar-item">
                    Member Organizations
                  </Link>
                  <Link to="/community/" className="navbar-item">
                    Corporate Sponsors
                  </Link>
                  <Link to="/community/" className="navbar-item">
                    Join Training
                  </Link>
                  <Link to="/community/" className="navbar-item">
                    Sponsorship
                  </Link>
                </div>
              </div>

              <Link to="/team" className="navbar-item">
                Our Team
              </Link>
              <Link to="/blog" className="navbar-item">
                Blog
              </Link>
            </div>
            <div className="navbar-end">
              <span className="navbar-item">
                <Link to="/academy/apply" className="button is-primary">
                  <span>Apply Now</span>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default MainNavigation
