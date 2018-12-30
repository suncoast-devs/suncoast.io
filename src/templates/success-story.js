import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Section from '../components/Section'
import PageTitle from '../components/PageTitle'
import AcademyNavigation from '../components/academy/AcademyNavigation'
import SuccessStories from '../components/SuccessStories'
import SuccessStory from '../components/SuccessStory'

const AcademySucesss = ({ data }) => (
  <Layout>
    <AcademyNavigation />
    <Section>
      <Container>
        <PageTitle>Success Stories</PageTitle>
        <SuccessStories stories={data.allContentfulSuccessStory.edges}>
          <SuccessStory story={data.contentfulSuccessStory} />
        </SuccessStories>
      </Container>
    </Section>
  </Layout>
)

export default AcademySucesss

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulSuccessStory(slug: { eq: $slug }) {
      story {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 200)
        }
      }
      student {
        name
        title
        company
        image {
          seo: fixed(width: 1200, height: 630) {
            src
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
              description
            }
          }
        }
      }
    }
  }
`
