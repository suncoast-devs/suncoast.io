import React from 'react'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Section from '../components/Section'
import PageTitle from '../components/PageTitle'
// import temp from '../images/temp.svg'

const NotFoundPage = () => (
  <Layout>
    <Section>
      <Container>
        <PageTitle>This is a page not found.</PageTitle>
        <div className="content">
          <p>
            What was it we were looking for again?{' '}
            <em>I thought it was just right here&hellip;</em>
          </p>
          {/* <p className="has-text-centered">
            <figure>
              <img src={temp} alt="Placeholder Illustration" width="200" />
            </figure>
          </p> */}
        </div>
      </Container>
    </Section>
  </Layout>
)

export default NotFoundPage
