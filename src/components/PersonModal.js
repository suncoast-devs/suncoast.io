import React from 'react'
import Image from 'gatsby-image'
import Link from 'gatsby-link'
import Icon from './Icon'

const PersonModal = ({ person, content, returnTo }) => (
  <div className="modal is-active">
    <div className="modal-background" />
    <div className="modal-content">
      <div className="card">
        <div className="card-image">
          <Image
            className="image"
            Tag="figure"
            fluid={person.image.modal}
            alt={person.image.description}
          />
        </div>
        <div className="card-content">
          <h3 className="title is-3">{person.name}</h3>
          <h4 className="subtitle heading">
            {person.title} @ {person.company}
          </h4>
          <div
            className="content"
            dangerouslySetInnerHTML={{
              __html: content.childMarkdownRemark.html,
            }}
          />
          <nav className="level is-mobile">
            <div className="level-left" />
            <div className="level-right">
              {person.github && (
                <p className="level-item">
                  <a href={`https://github.com/${person.github}`}>
                    <Icon i="fab fa-github fa-lg" />
                  </a>
                </p>
              )}
              {person.linkedIn && (
                <p className="level-item">
                  <a href={`https://www.linkedin.com/in/${person.linkedIn}/`}>
                    <Icon i="fab fa-linkedin fa-lg" />
                  </a>
                </p>
              )}
              {person.twitter && (
                <p className="level-item">
                  <a href={`https://twitter.com/${person.twitter}`}>
                    <Icon i="fab fa-twitter fa-lg" />
                  </a>
                </p>
              )}
              {person.blogUrl && (
                <p className="level-item">
                  <a href={person.blogUrl}>
                    <Icon
                      i={
                        person.blogUrl.includes('medium.com')
                          ? 'fab fa-medium fa-lg'
                          : 'fas fa-blog fa-lg'
                      }
                    />
                  </a>
                </p>
              )}
            </div>
          </nav>
        </div>
      </div>
    </div>
    <Link className="modal-close is-large" to={returnTo} />
  </div>
)

export default PersonModal
