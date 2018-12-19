import React from 'react'

import Content from '../../components/Content'

const ContentPreview = ({ entry, widgetFor }) => (
  <Content body={widgetFor('body')} />
)

export default ContentPreview
