import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

const MissionStatement = () => (
  <StaticQuery
    query={graphql`
      query MissionStatementQuery {
        org: file(relativePath: { eq: "organization.jpg" }) {
          childImageSharp {
            fixed(width: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={({ org }) => (
      <section className="mission-statement section">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column has-text-centered is-narrow">
              <Image
                Tag="figure"
                className="image"
                fixed={org.childImageSharp.fixed}
                alt="A portrait of our team"
              />
            </div>
            <div className="mission column">
              <h2 className="title">Our Organization</h2>
              <p>
                Our mission is to provide those seeking an education in software
                development with the technical and soft skills they need to
                pursue rewarding careers as programmers. We also seek to promote
                a sense of community among local technology organizations,
                supporting members in a way that strengthens our community and
                promotes the common good.
              </p>
            </div>
          </div>
        </div>
      </section>
    )}
  />
)

export default MissionStatement
