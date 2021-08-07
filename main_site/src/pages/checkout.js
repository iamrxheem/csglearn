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
    <SEO title="Checkout - Pay fees online" description="" />

    <Container>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>Checkout</BreadcrumbItem>
      </Breadcrumb>
    </Container>
  </Layout>
)

export default ContactPage
