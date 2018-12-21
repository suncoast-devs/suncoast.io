import React from 'react'
import temp from '../../images/temp.svg'

const OurCurriculum = () => (
  <>
    <h3 className="title is-3">Our Curriculum</h3>

    <div className="columns">
      <div className="column has-text-centered">
        <figure>
          <img src={temp} alt="Placeholder Illustration" width="200" />
        </figure>
      </div>
      <div className="column has-text-centered">
        <figure>
          <img src={temp} alt="Placeholder Illustration" width="200" />
        </figure>
      </div>
      <div className="column has-text-centered">
        <figure>
          <img src={temp} alt="Placeholder Illustration" width="200" />
        </figure>
      </div>
    </div>

    <div className="content">
      <p>
        Our three-month program runs four cohorts per year, starting roughly
        every quarter. We prepare individuals for entry-level jobs as junior
        front-end or back-end web developers. Graduates will be able find
        employment with companies who build and maintain their own websites and
        web applications (i.e. product work), or with agencies that produce
        websites and web applications for other companies (i.e. client work).
      </p>
      <p>
        Students will learn client-side (front-end) technology: HTML, CSS, and
        JavaScript as well as server-side (back-end) technology such as .NET or
        Ruby on Rails. At the end of the course, students will be able to create
        beautiful, fully functional websites backed by databases and server-side
        applications.
      </p>
    </div>
  </>
)

export default OurCurriculum
