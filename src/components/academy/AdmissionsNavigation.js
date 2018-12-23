import React from 'react'
import NavTab from '../NavTab'

const AdmissionsNavigation = () => (
  <div className="tabs">
    <ul>
      <NavTab to="/academy/admissions">Application Process</NavTab>
      <NavTab to="/academy/admissions/requirements">Requirements</NavTab>
    </ul>
  </div>
)

export default AdmissionsNavigation
