import React from 'react'
import Layout from '../../components/Layout'
import Container from '../../components/Container'
import Section from '../../components/Section'
import PageTitle from '../../components/PageTitle'
import AcademyNavigation from '../../components/academy/AcademyNavigation'
import ProgramNavigation from '../../components/academy/ProgramNavigation'

const AcademyCatalog = () => (
  <Layout>
    <AcademyNavigation />
    <Section>
      <Container>
        <PageTitle seo="Program Catalog">Web Development Program</PageTitle>
        <ProgramNavigation />
        <h3 className="title is-3">Program Catalog</h3>
      </Container>
    </Section>
  </Layout>
)

export default AcademyCatalog
