import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import SplashHero from '../components/SplashHero'
import AcademyCommunityDuo from '../components/AcademyCommunityDuo'
import MissionStatement from '../components/MissionStatement'
import MailingListForm from '../components/MailingListForm'

const IndexPage = () => (
  <Layout>
    <Helmet>
      <html className="landing" />
    </Helmet>
    <SplashHero />
    <AcademyCommunityDuo />
    <MissionStatement />
    <MailingListForm />
  </Layout>
)

export default IndexPage
