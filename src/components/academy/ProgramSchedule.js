import React from 'react'
import Link from 'gatsby-link'

const ProgramSchedule = () => (
  <>
    <h3 className="title is-3">Program Schedule</h3>
    <div className="table-container">
      <table className="table is-fullwidth program-schedule">
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
          <tr className="upcoming">
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
    </div>
  </>
)

export default ProgramSchedule
