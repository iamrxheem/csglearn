import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <Layout>
      <SEO
        title="Exam Centers"
        description="Enroll for CSG Learning Institute online SAT classes and view a list of your local examination centers. Enroll today! Call or WhatsApp (876) 707-3443."
      />

      <img
        className="is-hidden-desktop"
        style={{ width: "100%" }}
        src="https://i.imgur.com/w626x26.jpg"
      />
      <br className="is-hidden-mobile" />

      <div class="container is-fluid">
        <nav className="breadcrumb" ariaLabel="breadcrumbs">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#">Exam Centers</a>
            </li>
          </ul>
        </nav>

        <h1 className="title is-4">SAT Exam Centers</h1>

        <p>
          A complete list of examination centers will be available once we open
          for registration.
        </p>
      </div>
    </Layout>
  </>
)

export default IndexPage
