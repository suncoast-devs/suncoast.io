import React from 'react'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Section from '../components/Section'

const NotFoundPage = () => (
  <Layout>
    <Section>
      <Container>
        <h1 className="title">This is a page not found.</h1>
        <p>
          What was it we were looking for again?{' '}
          <em>I thought it was just right here&hellip;</em>
        </p>
      </Container>
    </Section>
  </Layout>
)

export default NotFoundPage
