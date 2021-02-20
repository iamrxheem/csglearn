import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <Layout>
      <SEO
        title="Fees & Tuition"
        description="Review our tuition and payment plans for CSG Learning Institute online SAT classes. Enroll online today! Or call or WhatsApp (876) 707-3443."
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
              <a href="#">Fees & Tuition</a>
            </li>
          </ul>
        </nav>

        <h1 className="title is-4">Fees and Tuition</h1>

        <p>
          A complete list of fees and tuitions will be available when
          registration opens.
        </p>
      </div>
    </Layout>
  </>
)

export default IndexPage
