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

const FinancingPage = ({ data }) => (
  <Layout>
    <AcademyNavigation />
    <Section>
      <Container>
        <PageTitle seo="Tuition &amp; Financing">Financing</PageTitle>
        <TuitionNavigation />
        <h3 className="title is-3">Finacing &amp; Payment Options</h3>
        {data.allContentfulFinancingPartner.edges.map(({ node: partner }) => (
          <React.Fragment key={partner.name}>
            <div className="columns">
              <div className="column is-3">
                <OutboundLink href={partner.url}>
                  <Image
                    tag="figure"
                    className="image"
                    fluid={partner.logo.fluid}
                    alt={partner.logo.description}
                  />
                </OutboundLink>
                <br />
                <p className="has-text-centered">
                  <OutboundLink href={partner.url} className="button is-link">
                    {partner.callToAction}
                  </OutboundLink>
                </p>
              </div>
              <div
                className="column content"
                dangerouslySetInnerHTML={{
                  __html: partner.description.childMarkdownRemark.html,
                }}
              />
            </div>
            <hr />
          </React.Fragment>
        ))}
      </Container>
    </Section>
  </Layout>
)

export default FinancingPage

export const pageQuery = graphql`
  query {
    allContentfulFinancingPartner {
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
