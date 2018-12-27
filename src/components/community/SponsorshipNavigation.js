import React from 'react'
import NavTab from '../NavTab'

const SponsorshipNavigation = () => (
  <div className="tabs">
    <ul>
      <NavTab to="/community/sponsor">About</NavTab>
      <NavTab to="/community/sponsor/levels">Levels</NavTab>
      <NavTab to="/community/sponsor/scholarships">Scholarships</NavTab>
    </ul>
  </div>
)

export default SponsorshipNavigation
