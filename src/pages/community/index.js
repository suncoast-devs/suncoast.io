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

const CommunityIndex = ({ data }) => (
  <Layout>
    <CommunityNavigation />
    <Section>
      <Container>
        <PageTitle seo="Our Member Organizations">Community</PageTitle>
        <div className="content">
          <p>
            Suncoast Developers Guild is proud to help connect dozens of local
            tech organizations. If you don't see your group here and you'd like
            to; please <Link to="/contact">reach out to us</Link>.
          </p>
        </div>
        <h3 className="title is-3">Our Member Organizations</h3>
        <div className="columns is-multiline">
          {data.allContentfulMemberOrganization.edges.map(({ node: org }) => (
            <div className="column is-half" key={org.name}>
              <div className="box">
                <div className="columns has-text-centered is-vcentered">
                  <div className="column is-narrow">
                    <OutboundLink href={org.url}>
                      <Image
                        Tag="figure"
                        className="image"
                        fixed={org.logo.fixed}
                        alt={org.logo.description}
                      />
                    </OutboundLink>
                  </div>
                  <div className="column">
                    <OutboundLink href={org.url}>
                      <h4 className="title is-4">{org.name}</h4>
                    </OutboundLink>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  </Layout>
)

export default CommunityIndex

export const pageQuery = graphql`
  query {
    allContentfulMemberOrganization(sort: { fields: foundedDate }) {
      edges {
        node {
          name
          url
          logo {
            fixed(width: 64, height: 64, resizingBehavior: PAD) {
              ...GatsbyContentfulFixed_withWebp
            }
          }
        }
      }
    }
  }
`
