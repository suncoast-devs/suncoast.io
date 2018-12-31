import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import Link from 'gatsby-link'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import CommunityNavigation from '../../components/community/CommunityNavigation'
import Layout from '../../components/Layout'
import Container from '../../components/Container'
import PageTitle from '../../components/PageTitle'
import Section from '../../components/Section'

const CommunitySupporters = ({ data }) => (
  <Layout>
    <CommunityNavigation />
    <Section>
      <Container>
        <PageTitle>Supporters</PageTitle>
      </Container>
    </Section>
    <section className="hero is-primary">
      <div className="hero-body">
        <Container>
          <div className="testimonial">
            <blockquote>
              The Proforma / SDG collaboration selected passionate junior level
              candidates and created an intensive training curriculum. This
              customized curriculum would fine tune technology concepts and
              focus on the skillsets necessary to be successful at Proforma.
            </blockquote>
            <p className="has-text-weight-bold has-text-right">
              &mdash; Proforma
            </p>
            <p className="has-text-centered">
              <Link
                className="button is-primary is-outlined is-inverted"
                to="/community/supporter-testimonial"
              >
                Read More&hellip;
              </Link>
            </p>
          </div>
        </Container>
      </div>
    </section>
    <Section>
      <Container>
        <div className="content">
          <p>
            Suncoast Developers Guild would like to thank these companies for
            supporting our mission. They help make it possible for us to fulfill
            our vision in Tampa Bay.
          </p>
        </div>
        <div className="columns is-multiline">
          {data.allContentfulSponsor.edges.map(({ node: sponsor }) => (
            <div className="column is-one-third" key={sponsor.name}>
              <div className="box has-text-centered">
                <OutboundLink href={sponsor.url}>
                  <Image
                    Tag="figure"
                    className="image"
                    fluid={sponsor.logo.fluid}
                    alt={sponsor.logo.description}
                  />
                </OutboundLink>
                <hr />
                <OutboundLink href={sponsor.url}>
                  <h4 className="title is-4">{sponsor.benefit}</h4>
                </OutboundLink>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  </Layout>
)

export default CommunitySupporters

export const pageQuery = graphql`
  query {
    allContentfulSponsor(sort: { fields: createdAt }) {
      edges {
        node {
          name
          benefit
          url
          logo {
            fluid(maxWidth: 640, maxHeight: 200, resizingBehavior: PAD) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`
