import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Layout from '../components/Layout'
import SplashHero from '../components/SplashHero'
import AcademyCommunityDuo from '../components/AcademyCommunityDuo'
import MissionStatement from '../components/MissionStatement'
import UpcomingEvents from '../components/UpcomingEvents'
import SocialHighlights from '../components/SocialHighlights'
import MailingListForm from '../components/MailingListForm'

const IndexPage = () => (
  <Layout>
    <Helmet>
      <html className="landing" />
    </Helmet>
    <SplashHero />
    <AcademyCommunityDuo />
    <MissionStatement />
    <UpcomingEvents />
    <SocialHighlights />
    <MailingListForm />
  </Layout>
)

export default IndexPage
