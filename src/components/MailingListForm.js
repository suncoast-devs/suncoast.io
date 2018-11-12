import React from 'react'
import Link from 'gatsby-link'

const MailingListForm = () => (
  <section className="section mailing-list-form">
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
)

export default MailingListForm
