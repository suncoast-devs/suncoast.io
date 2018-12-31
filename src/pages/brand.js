import React from 'react'
import Layout from '../components/Layout'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { withPrefix } from 'gatsby'

const BrandPage = () => (
  <Layout>
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Brand Identity</h1>
          <h2 className="subtitle">
            Guidelines for using the Suncoast Developers Guild Brand
          </h2>
        </div>
      </div>
    </section>
    <section className="brand section">
      <div className="container">
        <article className="message is-primary">
          <div className="message-body">
            <strong>Note</strong>: This document is a <em>work in progress</em>.
          </div>
        </article>
        <section className="subsection">
          <h3 className="title">Color</h3>
          <div className="columns">
            <div className="column">
              <div className="well card">
                <div
                  className="card-content"
                  style={{ backgroundColor: '#80ced2' }}
                />
                <div className="card-footer">
                  <p className="card-footer-item has-text-weight-bold">
                    Bright Sky
                  </p>
                  <p className="card-footer-item">
                    <span className="tag is-medium has-family-code">
                      #80ced2
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="well card">
                <div
                  className="card-content"
                  style={{ backgroundColor: '#85577e' }}
                />
                <div className="card-footer">
                  <p className="card-footer-item has-text-weight-bold">
                    Night Sky
                  </p>
                  <p className="card-footer-item">
                    <span className="tag is-medium has-family-code">
                      #85577e
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <div className="well card">
                <div
                  className="card-content"
                  style={{ backgroundColor: '#d5562b' }}
                />
                <div className="card-footer">
                  <p className="card-footer-item has-text-weight-bold">Sun</p>
                  <p className="card-footer-item">
                    <span className="tag is-medium has-family-code">
                      #d5562b
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="well card">
                <div
                  className="card-content"
                  style={{ backgroundColor: '#5a9090' }}
                />
                <div className="card-footer">
                  <p className="card-footer-item has-text-weight-bold">Sea</p>
                  <p className="card-footer-item">
                    <span className="tag is-medium has-family-code">
                      #5a9090
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="well card">
                <div
                  className="card-content"
                  style={{ backgroundColor: '#f7f0da' }}
                />
                <div className="card-footer">
                  <p className="card-footer-item has-text-weight-bold">Sand</p>
                  <p className="card-footer-item">
                    <span className="tag is-medium has-family-code">
                      #f7f0da
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="well card">
                <div
                  className="card-content"
                  style={{ backgroundColor: '#2f3737' }}
                />
                <div className="card-footer">
                  <p className="card-footer-item has-text-weight-bold">
                    Asphalt
                  </p>
                  <p className="card-footer-item">
                    <span className="tag is-medium has-family-code">
                      #2f3737
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <div className="well card">
                <div
                  className="card-content"
                  style={{ backgroundColor: '#b1d133' }}
                />
                <div className="card-footer">
                  <p className="card-footer-item has-text-weight-bold">Lime</p>
                  <p className="card-footer-item">
                    <span className="tag is-medium has-family-code">
                      #b1d133
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="well card">
                <div
                  className="card-content"
                  style={{ backgroundColor: '#f99d1b' }}
                />
                <div className="card-footer">
                  <p className="card-footer-item has-text-weight-bold">
                    Tangerine
                  </p>
                  <p className="card-footer-item">
                    <span className="tag is-medium has-family-code">
                      #f99d1b
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="subsection">
          <h3 className="title">Typography</h3>
          <div className="content">
            <p>
              Our primary typeface is <strong>Source Sans Pro</strong>. A part
              of Adobe's open source typeface family, it is inspired by
              twentieth-century American gothic type design. Source Sans Pro
              should be used for all body copy with various weights and case
              (including small caps) to indicate hierarchy.
            </p>
          </div>
          <div className="box" style={{ font: '1.5rem Source Sans Pro' }}>
            <p>How does a mum tiger study?</p>
            <p
              className="has-text-weight-bold"
              style={{ fontVariant: 'small-caps', textTransform: 'lowercase' }}
            >
              The dread wartime paces past the mainstream guy.
            </p>
            <p className="has-text-weight-light">An engine orbits!</p>
          </div>
          <div className="content">
            <p>
              Our secondary typeface, reserved almost exclusively for titles, is{' '}
              <strong>Source Serif Pro</strong>. Set titles in bold (700 weight)
              using title case or sentence case, but never all caps or small
              caps.
            </p>
          </div>
          <div className="box" style={{ font: '1.5rem Source Serif Pro' }}>
            <p className="has-text-weight-bold">A Protein Mutters</p>
            <p className="has-text-weight-bold">
              Can a wolf storm under another fifteen view?
            </p>
          </div>
        </section>
        <section className="subsection">
          <h3 className="title">Our Logos and their Usage</h3>

          <div className="columns">
            <div className="column is-one-fifth">
              <div className="logo card">
                <div className="card-image">
                  <figure className="image">
                    <img
                      src={withPrefix('/brand/banner.svg')}
                      alt="SDG Banner Logo"
                    />
                  </figure>
                </div>
                <footer className="card-footer">
                  <a
                    href={withPrefix('/brand/banner.svg')}
                    className="card-footer-item"
                  >
                    SVG
                  </a>
                  <a
                    href={withPrefix('/brand/banner.png')}
                    className="card-footer-item"
                  >
                    PNG
                  </a>
                </footer>
              </div>
              <div className="logo card">
                <div className="card-image">
                  <figure className="image">
                    <img
                      src={withPrefix('/brand/banner-mono.svg')}
                      alt="SDG Mono Banner Logo"
                    />
                  </figure>
                </div>
                <footer className="card-footer">
                  <a
                    href={withPrefix('/brand/banner-mono.svg')}
                    className="card-footer-item"
                  >
                    SVG
                  </a>
                  <a
                    href={withPrefix('/brand/banner-mono.png')}
                    className="card-footer-item"
                  >
                    PNG
                  </a>
                </footer>
              </div>
            </div>
            <div className="column content">
              <p>
                The <strong>Banner</strong> logo is our brand's primary symbol.
                It is the default option in almost every use-case. The
                monochromatic variant of this logo can also be used in print.
              </p>
            </div>
          </div>
          <div className="columns">
            <div className="column is-one-fifth">
              <div className="logo card">
                <div className="card-image">
                  <figure className="image">
                    <img
                      src={withPrefix('/brand/bouy.svg')}
                      alt="SDG Bouy Logo"
                    />
                  </figure>
                </div>
                <footer className="card-footer">
                  <a
                    href={withPrefix('/brand/bouy.svg')}
                    className="card-footer-item"
                  >
                    SVG
                  </a>
                  <a
                    href={withPrefix('/brand/bouy.png')}
                    className="card-footer-item"
                  >
                    PNG
                  </a>
                </footer>
              </div>
            </div>
            <div className="column content">
              <p>
                The <strong>Bouy</strong> logo is an embellishment of our
                primary Banner logo and is used only in situations where it will
                render clearly (i.e., legibly sized text in the banner) and in{' '}
                <em>full color</em>, usually in addition to the Banner (e.g., in
                a footer, or on back of a card).
              </p>
            </div>
          </div>
          <div className="columns">
            <div className="column is-one-fifth">
              <div className="logo card">
                <div className="card-image">
                  <figure className="image">
                    <img
                      src={withPrefix('/brand/button.svg')}
                      alt="SDG Button Logo"
                    />
                  </figure>
                </div>
                <footer className="card-footer">
                  <a
                    href={withPrefix('/brand/button.svg')}
                    className="card-footer-item"
                  >
                    SVG
                  </a>
                  <a
                    href={withPrefix('/brand/button.png')}
                    className="card-footer-item"
                  >
                    PNG
                  </a>
                </footer>
              </div>
            </div>
            <div className="column content">
              <p>
                The <strong>Button</strong> logo is used exclusively where
                small, square, or round sizes are required (e.g., avatars,
                profile images for company accounts on social media, etc.).
              </p>
            </div>
          </div>
          <div className="columns">
            <div className="column is-one-fifth">
              <div className="logo card">
                <div className="card-image">
                  <figure className="image">
                    <img
                      src={withPrefix('/brand/badge.svg')}
                      alt="SDG Badge Logo"
                    />
                  </figure>
                </div>
                <footer className="card-footer">
                  <a
                    href={withPrefix('/brand/badge.svg')}
                    className="card-footer-item"
                  >
                    SVG
                  </a>
                  <a
                    href={withPrefix('/brand/badge.png')}
                    className="card-footer-item"
                  >
                    PNG
                  </a>
                </footer>
              </div>
            </div>
            <div className="column content">
              <p>
                The <strong>Badge</strong> logo is a decorative figure based on
                our corporate seal. It's primarily used a watermark to add
                visual interest to a design, or on the back/bottom of a card or
                letter.
              </p>
            </div>
          </div>
        </section>
        <section className="subsection">
          <h3 className="title">Vision</h3>
          <div className="content">
            <p>
              Our illustration style is intended to resemble hand-cut paper.
            </p>
          </div>
        </section>
        <section className="subsection">
          <h3 className="title">Voice</h3>
          <div className="content">
            <p>
              The official style manual for all Suncoast Developers Guild
              communications is{' '}
              <OutboundLink href="https://www.apstylebook.com/">
                The Associated Press Stylebook
              </OutboundLink>
              . Use tools like spell checking,{' '}
              <OutboundLink href="https://www.grammarly.com/">
                Grammarly
              </OutboundLink>
              , and{' '}
              <OutboundLink href="http://www.hemingwayapp.com/">
                Hemingway Editor
              </OutboundLink>{' '}
              to ensure writing is clear, concise, and correct.
            </p>
            <p>Look for opportunities to convey inclusiveness and empathy.</p>
          </div>
        </section>
      </div>
    </section>
  </Layout>
)

export default BrandPage
