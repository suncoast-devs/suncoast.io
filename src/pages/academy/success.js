import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import { Router, Link } from '@reach/router'
import Layout from '../../components/Layout'
import Container from '../../components/Container'
import Section from '../../components/Section'
import PageTitle from '../../components/PageTitle'
import AcademyNavigation from '../../components/academy/AcademyNavigation'
import PersonModal from '../../components/PersonModal'

const Stories = ({ children, stories }) => (
  <>
    {stories.map(({ node: story }) => (
      <React.Fragment key={story.slug}>
        <div className="columns">
          <div className="column is-narrow">
            <Link to={story.slug}>
              <Image
                className="image"
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
  return (
    <PersonModal
      person={story.student}
      content={story.story}
      returnTo="/academy/success"
    />
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
            title
            company
            image {
              fixed(width: 128, height: 128) {
                ...GatsbyContentfulFixed_withWebp
              }
              modal: fluid(maxWidth: 800, maxHeight: 600) {
                ...GatsbyContentfulFluid_withWebp
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
