import React from 'react'
import Container from '../Container'
import NavItem from '../NavItem'

const CommunityNavigation = () => (
  <section className="hero is-light is-small sub-navigation">
    <div className="hero-body">
      <Container>
        <nav className="columns is-hidden-mobile">
          <NavItem
            to="/community"
            icon="fas fa-users fa-lg"
            paths={['/community']}
          >
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
