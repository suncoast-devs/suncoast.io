import React from 'react'
import Layout from '../../components/Layout'
import Container from '../../components/Container'
import PageTitle from '../../components/PageTitle'
import cx from 'classnames'
import { resolve } from '@reach/router/lib/utils'
import Link from 'gatsby-link'
import MailingListForm from '../../components/MailingListForm'

const NavTab = ({ to, children }) => (
  <li className={cx({ 'is-active': window.location.pathname === resolve(to) })}>
    <Link to={to}>{children}</Link>
  </li>
)

const AcademyIndex = () => (
  <Layout>
    <section className="section">
      <Container>
        <PageTitle>Web Development Program</PageTitle>
        <div className="tabs">
          <ul>
            <NavTab to="/academy">Our Curriculum</NavTab>
            <NavTab to="/academy/catalog">Program Catalog</NavTab>
            <NavTab to="/academy/schedule">Daily Schedule</NavTab>
            <NavTab to="/academy/career">Career Services</NavTab>
          </ul>
        </div>
      </Container>
    </section>
    <section className="subsection">
      <Container>
        <h3 className="title is-3">Program Catalog</h3>
      </Container>
    </section>
  </Layout>
)

export default AcademyIndex
