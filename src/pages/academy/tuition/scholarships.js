import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import Layout from '../../../components/Layout'
import Container from '../../../components/Container'
import Section from '../../../components/Section'
import PageTitle from '../../../components/PageTitle'
import AcademyNavigation from '../../../components/academy/AcademyNavigation'
import TuitionNavigation from '../../../components/academy/TuitionNavigation'

const ScholarshipsPage = ({ data }) => (
  <Layout>
    <AcademyNavigation />
    <Section>
      <Container>
        <PageTitle seo="Scholarships">Financing</PageTitle>
        <TuitionNavigation />
        <h3 className="title is-3">Scholarships</h3>
        {data.allContentfulScholarship.edges.map(({ node: scholarship }) => (
          <React.Fragment key="f">
            <div className="columns">
              <div className="column is-3">
                <figure className="image">
                  <a href={scholarship.url}>
                    <Image
                      fluid={scholarship.logo.fluid}
                      alt={scholarship.logo.description}
                    />
                  </a>
                </figure>
                <br />
                <p className="has-text-centered">
                  <a href={scholarship.url} className="button is-link">
                    {scholarship.callToAction}
                  </a>
                </p>
              </div>
              <div className="column">
                <h4 className="title is-4">{scholarship.name}</h4>
                <div
                  className="content"
                  dangerouslySetInnerHTML={{
                    __html: scholarship.description.childMarkdownRemark.html,
                  }}
                />
              </div>
            </div>
            <hr />
          </React.Fragment>
        ))}
      </Container>
    </Section>
  </Layout>
)

export default ScholarshipsPage

export const pageQuery = graphql`
  query {
    allContentfulScholarship {
      edges {
        node {
          name
          logo {
            fluid(maxWidth: 320) {
              ...GatsbyContentfulFluid_withWebp
            }
            description
          }
          description {
            childMarkdownRemark {
              html
            }
          }
          callToAction
          url
        }
      }
    }
  }
`
