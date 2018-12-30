import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Container from '../../components/Container'
import PageTitle from '../../components/PageTitle'
import Section from '../../components/Section'
import AcademyNavigation from '../../components/academy/AcademyNavigation'

const AcademyCatalog = ({ data }) => (
  <Layout>
    <AcademyNavigation />
    <Section>
      <Container>
        {/* eslint-disable-next-line */}
        <a name="top" />
        <PageTitle>Frequently Asked Questions</PageTitle>
        <div className="content">
          <p>
            These are some of the questions we receive most often from potential
            students.
          </p>
        </div>
        {data.allContentfulFaq.edges.map(({ node: faq }) => (
          <h4 key={faq.slug}>
            <a href={`#${faq.slug}`}>{faq.question}</a>
          </h4>
        ))}
        {data.allContentfulFaq.edges.map(({ node: faq }) => (
          <React.Fragment key={faq.slug}>
            <hr />
            {/* eslint-disable-next-line */}
            <a
              name={faq.slug}
              style={{ position: 'absolute', marginTop: '-68px' }}
            />
            <nav className="columns is-mobile">
              <div className="column">
                <h4 className="title is-4 is-marginless">{faq.question}</h4>
              </div>
              <div className="column is-narrow">
                <a href="#top">
                  <span className="icon">
                    <i className="fas fa-angle-up" />
                  </span>
                </a>
              </div>
            </nav>
            <div
              className="content"
              dangerouslySetInnerHTML={{
                __html: faq.answer.childMarkdownRemark.html,
              }}
            />
          </React.Fragment>
        ))}
      </Container>
    </Section>
  </Layout>
)

export default AcademyCatalog

export const pageQuery = graphql`
  query {
    allContentfulFaq(sort: { fields: position }) {
      edges {
        node {
          question
          answer {
            childMarkdownRemark {
              html
            }
          }
          slug
        }
      }
    }
  }
`
