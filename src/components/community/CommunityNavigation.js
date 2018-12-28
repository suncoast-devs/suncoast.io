import React from 'react'
import Container from '../Container'
import NavItem from '../NavItem'

const CommunityNavigation = () => (
  <section className="hero is-light">
    <div className="hero-body">
      <Container>
        <nav className="columns">
          <NavItem to="/community" icon="fas fa-users fa-lg">
            Member Organizations
          </NavItem>
          <NavItem to="/community/supporters" icon="fas fa-handshake fa-lg">
            Supporters
          </NavItem>
          <NavItem to="/community/sponsor" icon="fas fa-donate fa-lg">
            Sponsorship
          </NavItem>
        </nav>
      </Container>
    </div>
  </section>
)

export default CommunityNavigation