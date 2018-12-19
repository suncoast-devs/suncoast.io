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
        <h3 className="title is-3">Program Schedule</h3>

        <table className="table is-fullwidth">
          <thead>
            <tr>
              <th>Cohort</th>
              <th>Status</th>
              <th>Classes Start</th>
              <th>Graduation / Demo Day</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cohort XII</td>
              <td>
                <em>In Progress</em>
              </td>
              <td>
                October 22<sup>nd</sup>, 2018
              </td>
              <td>
                January 25<sup>th</sup>, 2018
              </td>
            </tr>
            <tr class="upcoming">
              <td>Cohort XIII</td>
              <td>
                <Link to="/academy/apply">Now Enrolling</Link>
              </td>
              <td>
                January 28<sup>th</sup>, 2019
              </td>
              <td>
                April 19<sup>th</sup>, 2019
              </td>
            </tr>
            <tr>
              <td>Cohort XIV</td>
              <td>
                <Link to="/academy/apply">Accepting Applicants</Link>
              </td>
              <td>
                April 28<sup>th</sup>, 2019
              </td>
              <td>TBA</td>
            </tr>
            <tr>
              <td>Cohort XV</td>
              <td>"</td>
              <td>Summer 2019</td>
              <td>TBA</td>
            </tr>
          </tbody>
        </table>

        <h3 className="title is-3">Our Curriculum</h3>
        <div className="content">
          <p>
            Our three-month program runs four cohorts per year, starting roughly
            every quarter. We prepare individuals for entry-level jobs as junior
            front-end or back-end web developers. Graduates will be able find
            employment with companies who build and maintain their own websites
            and web applications (i.e. product work), or with agencies that
            produce websites and web applications for other companies (i.e.
            client work).
          </p>
          <p>
            Students will learn client-side (front-end) technology: HTML, CSS,
            and JavaScript as well as server-side (back-end) technology such as
            .NET or Ruby on Rails. At the end of the course, students will be
            able to create beautiful, fully functional websites backed by
            databases and server-side applications.
          </p>
        </div>
      </Container>
    </section>
    <MailingListForm />
  </Layout>
)

export default AcademyIndex
