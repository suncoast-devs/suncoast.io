import React from 'react'
import PersonModal from './PersonModal'
import SEO from './SEO'

const SuccessStory = ({ slug, story }) => {
  return (
    <>
      <PersonModal
        person={story.student}
        content={story.story}
        returnTo="/academy/success"
      />
      <SEO
        title={`Success Story: ${story.student.name}`}
        photo={story.student.image.seo.src}
      />
    </>
  )
}

export default SuccessStory
