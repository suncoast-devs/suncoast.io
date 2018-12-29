import React from 'react'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Section from '../components/Section'
import PageTitle from '../components/PageTitle'
import MailingListForm from '../components/MailingListForm'

const ContactPage = () => (
  <Layout>
    <Section>
      <Container>
        <PageTitle>Contact Us</PageTitle>
        <h3 className="subtitle">
          Question? Comments? Just want to chat and say "Hello"?
        </h3>
        <form
          action="https://app.nutshell.com/api/v1/public/lead/289162:17c8389f0262460d66b7c94e0902f3eb45bc56ca"
          method="POST"
        >
          <input
            type="hidden"
            name="successUrl"
            value="https://suncoast.io/thanks"
          />
          <input type="hidden" name="sources[]" value="Contact Form" />
          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label">Name</label>
                <p className="control">
                  <input className="input" type="text" name="contact[name]" />
                </p>
              </div>
              <div className="field">
                <label className="label">Email Address</label>
                <p className="control">
                  <input className="input" type="email" name="contact[email]" />
                </p>
              </div>
              <div className="field">
                <label className="label">Telephone Number</label>
                <p className="control">
                  <input className="input" type="tel" name="contact[phone]" />
                </p>
              </div>
              <div className="field">
                <label className="label">Message</label>
                <p className="control">
                  <textarea className="textarea" name="note" />
                </p>
              </div>
            </div>
            <div className="column is-narrow">
              <div className="content box">
                <p>Are you interested in:</p>
                <ul>
                  <li>Learning web development?</li>
                  <li>Demo Day &amp; hiring events?</li>
                  <li>Community events?</li>
                  <li>Donating or becoming a sponsor?</li>
                  <li>Volunteering?</li>
                  <li>Hiring a developer?</li>
                </ul>
                <p>
                  <em>Let us know!</em>
                </p>
              </div>
            </div>
          </div>
          <div className="field">
            <p className="control">
              <button type="submit" className="button is-primary">
                Submit
              </button>
            </p>
          </div>
        </form>
      </Container>
    </Section>
    <MailingListForm />
  </Layout>
)

export default ContactPage
