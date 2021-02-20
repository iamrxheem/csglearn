import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <div class="container is-fluid">
      <nav className="breadcrumb" ariaLabel="breadcrumbs">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#">Page Not Found</a>
          </li>
        </ul>
      </nav>

      <h1 className="title is-4">Page Not Found</h1>

      <p>
        We couldn't find the page you were looking for, but here are some
        suggestions we think you might like:
      </p>

      <br />
      <ul className="ml-4" style={{ listStyleType: "disc" }}>
        <li>
          Return to the main{" "}
          <a target="_blank" href="https://www.csglearn.com">
            CSG Learning website
          </a>
          .
        </li>

        <li style={{ paddingTop: "15px" }}>
          View SAT <a href="/tuition">fees and tuition</a>.
        </li>

        <li style={{ paddingTop: "15px" }}>
          Find SAT <a href="/documents">forms and documents</a>.
        </li>

        <li style={{ paddingTop: "15px" }}>
          Browse other{" "}
          <a target="_blank" href="https://www.csglearn.com/diplomas">
            accredited diplomas and certifications
          </a>
        </li>
      </ul>
    </div>
  </Layout>
)

export default NotFoundPage
