import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
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
          <React.Fragment key={scholarship.name}>
            <div className="columns is-mobile">
              <div className="column">
                <h4 className="title is-4">{scholarship.name}</h4>
                <div
                  className="content"
                  dangerouslySetInnerHTML={{
                    __html: scholarship.description.childMarkdownRemark.html,
                  }}
                />
              </div>
              <div className="column is-narrow">
                <OutboundLink href={scholarship.url}>
                  <Image
                    Tag="figure"
                    className="image"
                    fluid={scholarship.logo.fluid}
                    alt={scholarship.logo.description}
                  />
                </OutboundLink>
                <br />
                <p className="has-text-centered">
                  <OutboundLink
                    href={scholarship.url}
                    className="button is-link"
                  >
                    {scholarship.callToAction}
                  </OutboundLink>
                </p>
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
    allContentfulScholarship(sort: { fields: position }) {
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
