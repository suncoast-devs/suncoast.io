import React from 'react'
import ContentLayout from '../../components/ContentLayout'
import AcademyNavigation from '../../components/academy/AcademyNavigation'
import ProgramNavigation from '../../components/academy/ProgramNavigation'
import ProgramCatalog from '../../components/academy/ProgramCatalog'

const AcademyCatalog = () => (
  <ContentLayout
    title="Web Development Program"
    subTitle="Program Catalog"
    nav={<AcademyNavigation />}
    subNav={<ProgramNavigation />}
  >
    <ProgramCatalog />
  </ContentLayout>
)

export default AcademyCatalog
