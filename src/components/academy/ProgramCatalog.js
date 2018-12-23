import React from 'react'

const ProgramCatalog = () => (
  <>
    <h3 className="title is-3">Program Catalog</h3>
    <div className="content">
      <p>
        Thanks for your interest in our immersive Web Development Program!
        Inside our program catalog, you'll find important information about our
        program and the admissions process.
      </p>
    </div>
    <div className="columns is-centered">
      <div className="column is-4">
        <nav className="panel">
          <div className="panel-block">
            <span className="panel-icon">
              <i className="far fa-file-pdf fa-lg" />
            </span>
            <a href="/catalog.pdf" download>
              Download Program Catalog
            </a>
          </div>
        </nav>
      </div>
    </div>
  </>
)

export default ProgramCatalog
