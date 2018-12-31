import React from 'react'
import Link from 'gatsby-link'
import Container from '../Container'
import NavItem from '../NavItem'
import announcement from '../../images/announcement.svg'

const AcademyNavigation = () => (
  <>
    <section className="hero is-light is-small sub-navigation">
      <div className="hero-body">
        <Container>
          <nav className="columns is-hidden-mobile">
            <NavItem
              to="/academy"
              icon="fas fa-code fa-lg"
              paths={[
                '/academy',
                '/academy/catalog',
                '/academy/schedule/',
                '/academy/career',
              ]}
            >
              Web Development
            </NavItem>
            <NavItem
              to="/academy/admissions"
              icon="fas fa-graduation-cap fa-lg"
            >
              Admissions
            </NavItem>
            <NavItem
              to="/academy/tuition"
              icon="fas fa-money-check fa-lg"
              paths={['/academy/tuition', '/academy/tuition/financing']}
            >
              Tuition
            </NavItem>
            <NavItem
              to="/academy/tuition/scholarships"
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
    <figure className="announcement">
      <Link to="/academy/apply">
        <img
          src={announcement}
          alt="Now enrolling for our January 28th cohort!"
        />
      </Link>
    </figure>
  </>
)

export default AcademyNavigation
