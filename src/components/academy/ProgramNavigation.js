import React from 'react'
import NavTab from '../NavTab'

const ProgramNavigation = () => (
  <div className="tabs">
    <ul>
      <NavTab to="/academy">Our Curriculum</NavTab>
      <NavTab to="/academy/catalog">Program Catalog</NavTab>
      <NavTab to="/academy/schedule">Daily Schedule</NavTab>
      <NavTab to="/academy/career">Career Services</NavTab>
    </ul>
  </div>
)

export default ProgramNavigation
