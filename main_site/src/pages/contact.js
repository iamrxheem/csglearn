import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// View Components
import MobileView from "../common/mobileView"
import BrowserView from "../common/browserView"

import {
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Alert,
  Row,
  Col
} from "shards-react"

const ContactPage = () => (
  <Layout>
    <SEO
      title="Contact Us"
      description="Contact our Customer Support team today online, or give us a call at (876) 707-3443 or by email at info@csglearn.com."
    />

    <Container>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>Contact</BreadcrumbItem>
      </Breadcrumb>

      <h2>Contact Us</h2>

      <br />
      <span>
        Our mission is to help your child accomplish everything he is capable of
        and realize his full potential. And that promise doesn’t stop after
        we’ve shipped you our product. Take a moment to review our Website,
        including the FAQ’s page.
      </span>

      <hr className="m-5" />

      <h6>Customer Service</h6>
      <span>
        You may contact our Customer Service department at{" "}
        <a href="mailto:info@csglearn.com">info@csglearn.com</a> or (876)
        707-3443.
      </span>

      <br />
      <span>
        Monday through Friday, <strong>8AM – 7PM EST</strong>.
      </span>
    </Container>
  </Layout>
)

export default ContactPage
