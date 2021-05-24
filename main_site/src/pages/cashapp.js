import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// View Components
import MobileView from "../common/mobileView"
import BrowserView from "../common/browserView"

// App Components
import AppSlider from "../home/appSlider/appSlider"
import AppPromo from "../home/appPromo"

import { Container, Breadcrumb, BreadcrumbItem, Row, Col } from "shards-react"

const ContactPage = () => (
  <Layout hideAlert>
    <SEO title="Pay Using Cash App" description="" />

    <Container>
      <br />
      <h3 className="">
        Pay Using <span style={{ color: "#00C244" }}>Cash App</span>
      </h3>

      <br />
      <span>We're offering more ways to pay!</span>

      <br />
      <br />
      <span>
        Parents and students can now pay online via CashApp, using our username{" "}
        <a
          target="_blank"
          href="https://cash.app/$csglearn"
          style={{ color: "#00C244" }}
        >
          cash.app/$csglearn
        </a>
        .
      </span>
    </Container>
  </Layout>
)

export default ContactPage
