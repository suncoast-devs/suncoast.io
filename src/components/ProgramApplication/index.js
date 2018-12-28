import React, { Component } from 'react'
import cx from 'classnames'
import _ from 'lodash'
import update from 'immutability-helper'
import Link from 'gatsby-link'

const LAST_STEP = 3

const GATEWAY_API_URL = process.env.GATEWAY_API_URL

const QUESTIONS = [
  [],
  [
    {
      type: 'radio',
      question: 'When are you hoping to start the program?',
      answers: [
        'January 28th, 2019 (Cohort XIII)',
        'April 28th, 2019 (Cohort XIV)',
        'Summer 2019',
        'Later in the future',
      ],
    },
    {
      type: 'text',
      question:
        'What are you currently doing for hobbies and/or work that fills your day?',
      answers: '',
    },
    {
      type: 'radio',
      question:
        'Are you aware of the full-time commitment and are able to attend on campus everyday?',
      answers: ['Yes', 'No', 'Maybe, tell me more please'],
    },
    {
      type: 'radio',
      question:
        'Do you have a support system in place to make you available and successful throughout this program?',
      answers: ['Yes', 'No', 'Maybe, tell me more please'],
    },
  ],
  [
    {
      type: 'text',
      question: 'Tell us a little about yourself.',
    },
    {
      type: 'text',
      question: 'What sparked your interest to learn the craft of code?',
    },
    {
      type: 'text',
      question: 'What experience do you have with programming, if any?',
    },
    {
      type: 'radio',
      question: 'What experience do you have with a Mac laptop?',
      answers: [
        'I feel very comfortable with Mac products',
        'I’ve dabbled with Macs',
        'PC for life!',
      ],
    },
    {
      type: 'radio',
      question: 'Tell us about your education level.',
      answers: [
        'Some high school',
        'High School Diploma, GED, or equivalent',
        'Trade/Vocational Certificate',
        'Some college',
        'I received a degree',
        'I have multiple degrees',
      ],
    },
    {
      type: 'check',
      question: 'How would you say you learn best?',
      answers: [
        'I need to see it done',
        'I need to hear about it',
        'I need to do it myself',
        'I need to read about it',
      ],
    },
  ],
  [
    {
      type: 'opinion',
      question: 'I’m open to new and nontraditional methods of learning.',
    },
    {
      type: 'opinion',
      question:
        'I enjoy environments that are ever-changing, challenging but rewarding.',
    },
    {
      type: 'text',
      question:
        'Tell us about a recent stressful situation and how you handled it?',
    },
    {
      type: 'text',
      question: 'Fast-forward: You’ve just graduated from SDG. What’s next?',
    },
    {
      type: 'check',
      question: 'How did you hear about Suncoast Developers Guild?',
      answers: [
        'Meetup',
        'Twitter',
        'Facebook',
        'Instagram',
        'LinkedIn',
        'Google',
        'Creative Loafing',
        'Radio',
        'Referral',
        'Other',
      ],
    },
    {
      type: 'medium-text',
      question:
        'Tell us more about how you heard about SDG. If it was a referral, let us know who to thank!',
    },
    {
      type: 'select',
      question: 'In which county are you located?',
      answers: [
        'Pinellas County',
        'Hillsborough County',
        'Pasco County',
        'Manatee County',
        'Sarasota County',
        'Polk County',
        'Elsewhere in Florida',
        'Outside of Florida',
      ],
    },
  ],
]

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
      const { id: token } = await fetch(GATEWAY_API_URL, {
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
      await fetch(`${GATEWAY_API_URL}/${this.state.token}`, {
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
        break
      default:
        return true
    }
    return false
  }

  render() {
    const { step } = this.state
    return (
      <div className="ProgramApplication" ref={this.scrollRef}>
        {step > 0 && (
          <nav className="steps">
            <ol>
              <li className={cx({ complete: step > 0, current: step === 0 })}>
                Contact Information
              </li>
              <li className={cx({ complete: step > 1, current: step === 1 })}>
                Program Start
              </li>
              <li className={cx({ complete: step > 2, current: step === 2 })}>
                Your Background
              </li>
              <li className={cx({ complete: step > 3, current: step === 3 })}>
                Just a Bit More
              </li>
              <li className={cx({ complete: step > 4, current: step === 4 })}>
                All Done!
              </li>
            </ol>
          </nav>
        )}
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

const Question = ({
  type,
  question,
  answers,
  step,
  index,
  update,
  response,
}) => {
  return (
    <div className="field">
      <label className="label">{question}</label>
      <div className="control">
        {type === 'radio' && (
          <ul>
            {answers.map((answer, i) => (
              <li key={i}>
                <label className="radio">
                  <input
                    type="radio"
                    name={`q-${step}-${index}`}
                    value={answer}
                    checked={response === answer}
                    onChange={e => {
                      update(question, e.target.value)
                    }}
                  />
                  {answer}
                </label>
              </li>
            ))}
          </ul>
        )}
        {type === 'check' && (
          <>
            <p className="help">Check all that apply.</p>
            <ul>
              {answers.map((answer, i) => (
                <li key={i}>
                  <label class="checkbox">
                    <input
                      type="checkbox"
                      name={`q-${step}-${index}`}
                      value={answer}
                      onChange={e => {
                        update(
                          question,
                          Array.from(
                            document.querySelectorAll(
                              `input[name=q-${step}-${index}]:checked`
                            )
                          )
                            .map(i => i.value)
                            .join(', ')
                        )
                      }}
                    />
                    {answer}
                  </label>
                </li>
              ))}
            </ul>
          </>
        )}
        {type === 'select' && (
          <div className="select">
            <select
              value=""
              name={`q-${step}-${index}`}
              onChange={e => {
                update(question, e.target.value)
              }}
            >
              <option value="" disabled>
                Choose One
              </option>
              {answers.map((answer, i) => (
                <option key={i} value={answer}>
                  {answer}
                </option>
              ))}
            </select>
          </div>
        )}
        {type === 'text' && (
          <textarea
            cols="30"
            rows="10"
            className="textarea"
            value={response}
            onChange={e => {
              update(question, e.target.value)
            }}
            data-gramm_editor="false"
          />
        )}
        {type === 'medium-text' && (
          <textarea
            cols="30"
            rows="3"
            className="textarea"
            value={response}
            onChange={e => {
              update(question, e.target.value)
            }}
            data-gramm_editor="false"
          />
        )}
        {type === 'opinion' && (
          <div className="opinion">
            <ul>
              {[
                'Strongly Disagree',
                'Somewhat Disagree',
                'Neutral',
                'Somewhat Agree',
                'Strongly Agree',
              ].map(o => (
                <li key={o}>
                  <label className="radio">
                    <input
                      type="radio"
                      checked={response === o}
                      onChange={e => {
                        update(question, o)
                      }}
                    />
                    {o}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProgramApplication
