import React from 'react'
import temp from '../images/temp.svg'

const MissionStatement = () => (
  <section className="mission-statement section">
    <div className="container">
      <div className="columns">
        <div className="column has-text-centered is-narrow">
          <figure>
            <img src={temp} alt="Placeholder Illustration" width="200" />
          </figure>
        </div>
        <div className="mission column">
          <h2 className="title">Our Organization</h2>
          <p>
            Our mission is to provide those seeking an education in software
            development with the technical and soft skills they need to pursue
            rewarding careers as programmers. We also seek to promote a sense of
            community among local technology organizations, supporting members
            in a way that strengthens our community and promotes the common
            good.
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default MissionStatement
