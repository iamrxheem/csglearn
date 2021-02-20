import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { Carousel } from "react-responsive-carousel"

const IndexPage = () => (
  <>
    <Layout>
      <SEO
        title="SAT Center"
        description="Enroll in CSG Learning Institute online SAT classes and learn in a virtual classroom from the comfort of your home. Call or WhatsApp (876) 707-3443."
      />

      <br />
      <div class="container is-fluid">
        <nav className="breadcrumb" ariaLabel="breadcrumbs">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#"></a>
            </li>
          </ul>
        </nav>
      </div>

      <br />
      <Carousel>
        <div>
          <img
            style={{ width: "100%" }}
            src="https://assets2.varsitytutors.com/vt-ecom-catalog-ui/images/products/test_prep_ACTandSAT_blue-2x.jpg"
          />
        </div>
        <div>
          <a target="_blank" href="https://www.csglearn.com/programmes/csec">
            <img src="https://dl.dropbox.com/s/wwwiafaz55s6dhs/WhatsApp%20Image%202021-01-08%20at%208.42.44%20PM.jpeg?dl=0" />
          </a>
        </div>
        <div>
          <a target="_blank" href="https://www.csglearn.com/diplomas/dele">
            <img src="https://dl.dropbox.com/s/am5jl3bbdnsm8hk/WhatsApp%20Image%202021-01-05%20at%2010.33.15%20AM.jpeg?dl=0" />
          </a>
        </div>
      </Carousel>

      <br />
      <div className="container is-fluid">
        {/* Main content */}
        <div className="columns">
          <div className="column">
            <p>
              The SAT is a college entrance exam used by most colleges and
              universities to assess readiness for college-level work. Your SAT
              score is a major factor in college admissions, so it’s important
              to prep to achieve your best score. The SAT exam tests your skills
              in math, reading, and writing, and includes an optional essay.
            </p>
          </div>
          <div className="column"></div>
        </div>
      </div>

      <br />
      <div class="notification is-danger">
        <p>
          Registration for our online SAT classes begins in mid-February, 2021.
          Follow us on{" "}
          <a target="_blank" href="https://www.instagram.com/csglearn">
            Instagram
          </a>{" "}
          to learn more
        </p>

        <br />
        <br />
        <div className="columns">
          <div className="column">
            <a href="/enroll" className="button">
              Enroll today
            </a>
          </div>
          <div className="column"></div>
        </div>
      </div>
    </Layout>
  </>
)

export default IndexPage
