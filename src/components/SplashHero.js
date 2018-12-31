import React from 'react'
import banner from '../images/banner.svg'

const SplashHero = () => (
  <section className="splash hero">
    <div className="hero-body">
      <div className="container has-text-centered">
        <img src={banner} alt="SDG Icon" width="512" />
      </div>
    </div>
  </section>
)

export default SplashHero
