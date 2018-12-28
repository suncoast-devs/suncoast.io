import React, { Component } from 'react'
import _ from 'lodash'
import update from 'immutability-helper'
import Link from 'gatsby-link'
import QUESTIONS from './questions'
import Steps from './Steps'
import Question from './Question'

const LAST_STEP = 3

const GATEWAY_API_URL = process.env.GATEWAY_API_URL

class ProgramApplication extends Component {
  constructor() {
    super()
    const questions = _.flatten(QUESTIONS).map(q => q.question)
    this.scrollRef = React.createRef()
    this.state = {
      token: null,
      contact: { full_name: '', email_address: '', phone_number: '' },
      step: 0,
      responses: _.zipObject(questions, Array(questions.length).fill('')),
    }
  }

  componentDidMount() {
    const token = window.localStorage.getItem('application-token')
    const responses = window.localStorage.getItem('application-responses')
    if (token && token.length > 0) {
      if (responses && responses.length > 0) {
        this.setState({ responses: JSON.parse(responses) })
      }

      this.setState({ token, step: 1 })
    }
  }

  continueApplication = async event => {
    event.preventDefault()

    if (this.state.step === 0) {
      const { id: token } = await fetch(`${GATEWAY_API_URL}/apply`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify({
          program: 'web-development',
          ...this.state.contact,
        }),
      }).then(response => response.json())
      window.localStorage.setItem('application-token', token)
      await this.setState({ token })
    }

    if (this.state.step === LAST_STEP) {
      await fetch(`${GATEWAY_API_URL}/apply/${this.state.token}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify({ question_responses: this.state.responses }),
      })
      window.localStorage.removeItem('application-token')
      window.localStorage.removeItem('application-responses')
    }

    const step = this.state.token ? this.state.step + 1 : 0

    window.localStorage.setItem(
      'application-responses',
      JSON.stringify(this.state.responses)
    )

    this.setState({ step })
    this.scrollToTop()
  }

  backtrackApplication = event => {
    event.preventDefault()
    this.setState({ step: Math.max(0, this.state.step - 1) })
    this.scrollToTop()
  }

  setResponse = (question, answer) => {
    this.setState({
      responses: update(this.state.responses, { [question]: { $set: answer } }),
    })
  }

  updateContact = event => {
    const { name, value } = event.target
    this.setState({
      contact: update(this.state.contact, { [name]: { $set: value } }),
    })
  }

  scrollToTop() {
    window.scrollTo(0, this.scrollRef.current.parentNode.offsetTop)
  }

  // NOTE: Very naive, maybe improve later?
  isValid() {
    switch (this.state.step) {
      case 0:
        const { full_name, email_address, phone_number } = this.state.contact
        return (
          full_name.length > 0 &&
          email_address.length > 0 &&
          phone_number.length > 0
        )
      default:
        return true
    }
  }

  render() {
    const { step } = this.state
    return (
      <div className="ProgramApplication" ref={this.scrollRef}>
        {step > 0 && <Steps step={step} />}
        <form onSubmit={e => e.preventDefault()}>
          {step === 0 && (
            <>
              <div className="field">
                <label className="label">Name</label>
                <p className="control">
                  <input
                    type="text"
                    className="input"
                    name="full_name"
                    value={this.state.contact.full_name}
                    onChange={this.updateContact}
                  />
                </p>
              </div>
              <div className="field">
                <label className="label">Email Address</label>
                <p className="control">
                  <input
                    type="email"
                    className="input"
                    name="email_address"
                    value={this.state.contact.email_address}
                    onChange={this.updateContact}
                  />
                </p>
              </div>
              <div className="field">
                <label className="label">Telephone Number</label>
                <p className="control">
                  <input
                    type="tel"
                    className="input"
                    name="phone_number"
                    value={this.state.contact.phone_number}
                    onChange={this.updateContact}
                  />
                </p>
              </div>
              <div className="content">
                <p>
                  Congratulations on making the first step to launch your career
                  in software development. Remember, there is no cost to apply
                  or obligation to join the program.
                </p>
                <p>
                  Filling out the application will get you fast-tracked to
                  meeting with someone on our team to see if the Web Development
                  Program is a good fit for you. This application should take 15
                  to 30 minutes. Please be honest with yourself and with us.
                </p>
                <p>
                  <strong>Notice:</strong> By continuing with this application,
                  you are agreeing to the terms of our{' '}
                  <Link to="/privacy">Privacy Policy</Link> and{' '}
                  <Link to="/terms">Terms of Service</Link>.
                </p>
              </div>
            </>
          )}
          {step > 0 && step < 4 && (
            <>
              {QUESTIONS[step].map((question, index) => (
                <Question
                  {...question}
                  {...{ step, index }}
                  update={this.setResponse}
                  response={this.state.responses[question.question]}
                  key={index}
                />
              ))}
            </>
          )}
          {step === 4 && (
            <div className="content">
              <h3>Hey, you're all done!</h3>
              <p>
                Thanks for completing this application; that was easy right?
              </p>
              <p>
                Your next step is an interview to get to learn more about the
                program and answer any questions you may have. Our enrollment
                specialist will be reaching out to you soon to schedule your
                interview.
              </p>
              <p>We'll be in touch&hellip;</p>
            </div>
          )}
          <hr />
          <div className="field is-grouped">
            {step < LAST_STEP + 1 && (
              <p className="control">
                <button
                  className="button is-primary"
                  type="submit"
                  onClick={this.continueApplication}
                  disabled={!this.isValid()}
                >
                  Continue
                </button>
              </p>
            )}
            {step > 1 && step < LAST_STEP + 1 && (
              <p className="control">
                <button
                  className="button is-text"
                  type="submit"
                  onClick={this.backtrackApplication}
                >
                  Back
                </button>
              </p>
            )}
          </div>
        </form>
      </div>
    )
  }
}

export default ProgramApplication
