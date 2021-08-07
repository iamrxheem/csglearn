import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// View Components
import MobileView from "../common/mobileView"
import BrowserView from "../common/browserView"
import StaffPreview from "../common/staffPreview"

import { Container, Breadcrumb, BreadcrumbItem, Row, Col } from "shards-react"

const ContactPage = () => (
  <Layout hideAlert>
    <SEO title="Meet Our Staff" description="" />

    <Container>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>Our Staff</BreadcrumbItem>
      </Breadcrumb>

      <Row>
        <StaffPreview name="" position="" src="" />
      </Row>
    </Container>
  </Layout>
)

export default ContactPage
