import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Container from '../../components/Container'
import Section from '../../components/Section'
import PageTitle from '../../components/PageTitle'
import AcademyNavigation from '../../components/academy/AcademyNavigation'
import SuccessStories from '../../components/SuccessStories'

const AcademySucesss = ({ data }) => (
  <Layout>
    <AcademyNavigation />
    <Section>
      <Container>
        <PageTitle>Success Stories</PageTitle>
        <SuccessStories stories={data.allContentfulSuccessStory.edges} />
      </Container>
    </Section>
  </Layout>
)

export default AcademySucesss

export const pageQuery = graphql`
  query {
    allContentfulSuccessStory(sort: { fields: publishDate, order: DESC }) {
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
