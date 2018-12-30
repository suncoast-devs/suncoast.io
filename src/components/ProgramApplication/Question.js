import React from 'react'

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
                  <label className="checkbox">
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

export default Question
