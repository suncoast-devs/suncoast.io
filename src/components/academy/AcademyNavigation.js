import React from 'react'
import Container from '../Container'
import NavItem from '../NavItem'

const AcademyNavigation = () => (
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
          <NavItem to="/academy/tuition" icon="fas fa-money-check fa-lg">
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
)

export default AcademyNavigation
