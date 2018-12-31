import React from 'react'
import { MDXProvider } from '@mdx-js/tag'
import Layout from './Layout'
import Container from './Container'
import Section from './Section'
import PageTitle from './PageTitle'
import Link from './UniversalLink'

const HandbookLayout = ({ children }) => (
  <Layout>
    <Section>
      <Container>
        <MDXProvider
          components={{
            a: Link,
            h1: ({ children, ...rest }) => <PageTitle>{children}</PageTitle>,
            h2: ({ children, ...rest }) => (
              <h3 className="title is-3" {...rest}>
                {children}
              </h3>
            ),
            h3: ({ children, ...rest }) => (
              <h4 className="title is-4" {...rest}>
                {children}
              </h4>
            ),
            h4: ({ children, ...rest }) => (
              <h5 className="title is-5" {...rest}>
                {children}
              </h5>
            ),
            h5: ({ children, ...rest }) => (
              <h6 className="title is-6" {...rest}>
                {children}
              </h6>
            ),
          }}
        >
          <div className="columns">
            <div className="column is-narrow">
              <aside className="menu">
                <p className="menu-label">Handbook</p>
                <ul className="menu-list">
                  <li>
                    <Link to="/handbook/curriculum" activeClassName="is-active">
                      Curriculum
                    </Link>
                    <ul>
                      <li>
                        <Link
                          to="/handbook/prework"
                          activeClassName="is-active"
                        >
                          Pre-work
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/handbook/curriculum/fundamentals"
                          activeClassName="is-active"
                        >
                          Fundamentals
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/handbook/curriculum/front-end"
                          activeClassName="is-active"
                        >
                          Front-end
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/handbook/curriculum/back-end"
                          activeClassName="is-active"
                        >
                          Full-stack
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/handbook/career" activeClassName="is-active">
                      Career Support
                    </Link>
                  </li>
                  <li>
                    <Link to="/handbook/campus" activeClassName="is-active">
                      Our Campus
                    </Link>
                  </li>
                  <li>
                    <Link to="/handbook/resources" activeClassName="is-active">
                      Resources
                    </Link>
                  </li>
                  <li>
                    <Link to="/handbook/skills" activeClassName="is-active">
                      Skills
                    </Link>
                  </li>
                  <li>
                    <Link to="/handbook/tools" activeClassName="is-active">
                      Tools
                    </Link>
                  </li>
                </ul>
              </aside>
            </div>
            <div className="column">
              <article className="message is-primary">
                <div className="message-body">
                  <strong>Note</strong>: This document is a{' '}
                  <em>work in progress</em>. You can help{' '}
                  <Link href="https://github.com/suncoast-devs/handbook">
                    improve it
                  </Link>
                  .
                </div>
              </article>
              <div className="content">{children}</div>
            </div>
          </div>
        </MDXProvider>
      </Container>
    </Section>
  </Layout>
)

export default HandbookLayout
