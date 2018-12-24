import React from 'react'
import Image from 'gatsby-image'
import { Router, Link } from '@reach/router'
import Layout from '../../components/Layout'
import Container from '../../components/Container'
import Section from '../../components/Section'
import Icon from '../../components/Icon'
import PageTitle from '../../components/PageTitle'
import AcademyNavigation from '../../components/academy/AcademyNavigation'

const Stories = ({ children, stories }) => (
  <>
    {stories.map(({ node: story }) => (
      <React.Fragment key={story.slug}>
        <div className="columns">
          <div className="column is-narrow">
            <Link to={story.slug}>
              <Image
                className="image is-128x128"
                Tag="figure"
                fixed={story.student.image.fixed}
                alt={story.student.image.description}
              />
            </Link>
          </div>
          <div className="column">
            <h3 className="title is-3">
              <Link to={story.slug}>{story.student.name}</Link>
            </h3>
            <div
              className="content"
              dangerouslySetInnerHTML={{
                __html: story.story.childMarkdownRemark.html,
              }}
            />
          </div>
          <div className="column is-narrow" style={{ alignSelf: 'flex-end' }}>
            <Link to={story.slug}>
              <span className="icon is-medium">
                <span className="fa-stack">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fas fa-ellipsis-h fa-stack-1x fa-inverse" />
                </span>
              </span>
            </Link>
          </div>
        </div>
        <hr />
      </React.Fragment>
    ))}
    {children}
  </>
)

const Story = ({ slug, stories }) => {
  const story = stories.find(s => s.node.slug === slug).node
  console.log({ story })
  return (
    <div className="modal is-active">
      <div className="modal-background" />
      <div className="modal-content">
        <div className="card">
          <div className="card-image">
            <Image
              className="image is-4by3"
              Tag="figure"
              fixed={story.student.image.large}
              alt={story.student.image.description}
            />
          </div>
          <div className="card-content">
            <h3 className="title is-3">{story.student.name}</h3>
            <div
              className="content"
              dangerouslySetInnerHTML={{
                __html: story.story.childMarkdownRemark.html,
              }}
            />
            <nav className="level">
              <div className="level-left" />
              <div className="level-right">
                {story.student.github && (
                  <p className="level-item">
                    <a href={`https://github.com/${story.student.github}`}>
                      <Icon i="fab fa-github fa-lg" />
                    </a>
                  </p>
                )}
                {story.student.linkedIn && (
                  <p className="level-item">
                    <a
                      href={`https://www.linkedin.com/in/${
                        story.student.linkedIn
                      }/`}
                    >
                      <Icon i="fab fa-linkedin fa-lg" />
                    </a>
                  </p>
                )}
                {story.student.twitter && (
                  <p className="level-item">
                    <a href={`https://twitter.com/${story.student.twitter}`}>
                      <Icon i="fab fa-twitter fa-lg" />
                    </a>
                  </p>
                )}
                {story.student.blogUrl && (
                  <p className="level-item">
                    <a href={story.student.blogUrl}>
                      <Icon
                        i={
                          story.student.blogUrl.includes('medium.com')
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
      <Link className="modal-close is-large" to="/academy/success" />
    </div>
  )
}

const AcademySucesss = ({ data }) => (
  <Layout>
    <AcademyNavigation />
    <Section>
      <Container>
        <PageTitle>Success Stories</PageTitle>
        <Router>
          <Stories
            path="academy/success"
            stories={data.allContentfulSuccessStory.edges}
          >
            <Story
              path=":slug"
              stories={data.allContentfulSuccessStory.edges}
            />
          </Stories>
        </Router>
      </Container>
    </Section>
  </Layout>
)

export default AcademySucesss

export const pageQuery = graphql`
  query {
    allContentfulSuccessStory {
      edges {
        node {
          slug
          story {
            childMarkdownRemark {
              html
            }
          }
          student {
            name
            image {
              fixed(width: 128, height: 128) {
                ...GatsbyContentfulFixed_withWebp
              }
              large: fixed(width: 640, height: 480) {
                ...GatsbyContentfulFixed_withWebp
              }
              description
            }
            twitter
            github
            linkedIn
            blogUrl
          }
        }
      }
    }
  }
`
