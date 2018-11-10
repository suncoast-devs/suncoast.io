import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Layout from '../components/Layout'
import banner from '../images/banner.svg'

const IndexPage = () => (
  <Layout>
    <Helmet>
      <html className="landing" />
    </Helmet>
    <section className="hero is-info">
      <div className="hero-body">
        <div className="container has-text-centered">
          <img src={banner} alt="SDG Icon" width="512" />
        </div>
      </div>
    </section>
    <section className="duo section">
      <div className="container">
        <div className="columns is-variable is-8">
          <div className="academy column has-text-centered">
            <h2 className="title is-2 is-spaced">
              <Link to="/academy">Academy</Link>
            </h2>
            <p className="subtitle">Learn to code with us.</p>
            <div className="content">
              <p className="has-text-left">
                The <strong>Academy at Suncoast Developers Guild</strong> is a
                code school that serves people, not profit. We are changing
                lives and teaching people to be the best software developers
                they can be.
              </p>
              <p>
                <Link to="/academy/apply" className="button is-primary">
                  Apply Now
                </Link>
              </p>
            </div>
          </div>
          <div className="community column has-text-centered">
            <h2 className="title is-2 is-spaced">
              <Link to="/community">Community</Link>
            </h2>
            <p className="subtitle">
              We are a collective of software engineers, programmers, and
              designers in Tampa Bay.
            </p>
            <div className="content">
              <p className="has-text-left">
                With thousands of members across dozens of local groups, our
                members touch all aspects of technology development across Tampa
                Bay.
              </p>
              <p>
                <a
                  href="https://join.slack.com/t/suncoast-devs/shared_invite/enQtMzE1NzYyNjM3NzE1LTUwYmJiZmQwNzMwOTJlMTczMzQ4ODdiYmE5NDJiMDgwOGY2ODRmNDIxNTIzMGQ1ZmI3OTEwYmVjZmU3YzYzZjY"
                  className="button is-primary"
                >
                  Join us on Slack
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <h2 className="title">Our Organization</h2>
        <p>
          Our mission is to provide those seeking an education in software
          development with the technical and soft skills they need to pursue
          rewarding careers as programmers. We also seek to promote a sense of
          community among local technology organizations, supporting members in
          a way that strengthens our community and promotes the common good.
        </p>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-narrow">
            <h2 className="title">Keep in Touch</h2>
            <p className="subtitle">
              Stay up to date with our latest news and upcoming events.
            </p>
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="email"
                  placeholder="something@clever.todo"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope" />
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-check" />
                </span>
              </p>
              <p className="help">
                By sharing your email, you agree to our{' '}
                <Link to="/privacy">Privacy Policy</Link> and{' '}
                <Link to="/terms">Terms of Service</Link>.
              </p>
            </div>
            <div className="buttons">
              <button className="button is-primary">Sign Up Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer className="footer">
      <div className="content has-text-centered">
        <p className="is-uppercase has-text-weight-bold">
          &copy; 2018 Suncoast Developers Guild, Inc.
        </p>
        <p>
          Made with
          <span className="icon has-text-danger">
            <i className="fas fa-heart" />
          </span>
          in St Petersburg, Florida.
        </p>
      </div>
    </footer>
  </Layout>
)

export default IndexPage
