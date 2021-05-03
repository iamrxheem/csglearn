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
  <Layout>
    <SEO
      title="Thanks for Enrolling"
      description="Thanks for enrolling in one of our programmes. A representative will contact you shortly to complete the registration process."
    />

    <Container>
      <br />
      <div className="text-center">
        <i className="fas fa-check-circle fa-3x text-success"></i>

        <br />
        <br />
        <h3 className="">Your response has been submitted!</h3>

        <br />
        <span>
          Thanks for enrolling in one of our programmes. A representative will
          contact you shortly to complete the registration process.
        </span>
      </div>
    </Container>
  </Layout>
)

export default ContactPage
