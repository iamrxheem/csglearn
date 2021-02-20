import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <Layout>
      <SEO
        title="Enroll in the SATs"
        description="Enroll in CSG Learning Institute online SAT classes. Call or WhatsApp (876) 707-3443 or enroll online today."
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
              <a href="#">Enroll</a>
            </li>
          </ul>
        </nav>

        <h1 className="title is-4">Enroll in the SATs</h1>

        <div className="columns">
          <div className="column">
            <p>
              Please complete this form to enroll in online SAT classes. By
              completing and submitting this form, you are enrolling in online
              classes and consent to be contacted by a representative from CSG
              Learning Institute and/ or one of it's affiliates.
            </p>

            <br />
            <p>
              Prefer to{" "}
              <a
                style={{ textDecoration: "underline" }}
                href="mailto:info@csglearn.com?Subject=SAT Inquiry"
              >
                inquire
              </a>
              ?
            </p>

            <br />
            <p>
              <strong>Registration opens mid-February.</strong>
            </p>
          </div>

          <div className="column"></div>
        </div>
      </div>
    </Layout>
  </>
)

export default IndexPage
