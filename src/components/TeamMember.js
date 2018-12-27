import React from 'react'
import Link from 'gatsby-link'
import Image from 'gatsby-image'

const TeamMember = ({ image, name, title, link }) => (
  <div className="column is-half">
    <div className="card">
      <div className="card-image">
        <Link to={link}>
          <Image
            Tag="figure"
            className="image"
            fluid={image.fluid}
            alt={image.description}
          />
        </Link>
      </div>
      <div className="card-content">
        <nav className="columns is-vcentered">
          <div className="column">
            <h5 className="title is-5">
              <Link to={link}>{name}</Link>
            </h5>
            <h6 className="subtitle heading">{title}</h6>
          </div>
          <div className="column is-narrow">
            <Link to={link}>
              <span className="icon is-medium">
                <span className="fa-stack">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fas fa-ellipsis-h fa-stack-1x fa-inverse" />
                </span>
              </span>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  </div>
)

export default TeamMember
