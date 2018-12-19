import React from 'react'
import Link from 'gatsby-link'

const MailingListForm = () => (
  <section className="section mailing-list-form">
    <div className="container">
      <div className="columns">
        <div className="column is-three-fifths">
          <h2 className="title">Keep in Touch</h2>
          <p className="subtitle">
            Stay up to date with our latest news and upcoming events.
          </p>
          <div className="field is-grouped">
            <div className="control is-expanded">
              <label class="label is-small">First Name</label>
              <input type="text" className="input" placeholder="Something" />
            </div>
            <div className="control is-expanded">
              <label class="label is-small">Last Name</label>
              <input type="text" className="input" placeholder="Clever" />
            </div>
          </div>
          <div className="field">
            <label class="label is-small">Email Address</label>
            <p className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="email"
                placeholder="something@clever.todo"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope" />
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
        <div className="column">
          <h2 className="title">Take a Tour</h2>
          <p className="subtitle">Fridays at 12:00 p.m.</p>
          <div className="content">
            <p>
              Come visit our campus in St. Petersburg, FL and see what
              we&rsquo;re all about.
            </p>
          </div>
          <div className="buttons">
            <a
              href="https://www.eventbrite.com/e/campus-tour-tickets-53318845101"
              className="button is-primary"
            >
              RSVP
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default MailingListForm
