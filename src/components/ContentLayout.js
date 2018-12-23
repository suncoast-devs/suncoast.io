import React from 'react'
import Layout from './Layout'
import Container from './Container'
import Section from './Section'
import PageTitle from './PageTitle'

const ContentLayout = ({ children, title, subTitle, nav, subNav }) => (
  <Layout>
    {nav}
    <Section>
      <Container>
        <PageTitle seo={subTitle}>{title}</PageTitle>
        {subNav}
        <div className="content">{children}</div>
      </Container>
    </Section>
  </Layout>
)

export default ContentLayout
