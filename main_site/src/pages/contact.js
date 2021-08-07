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
  <Layout hideAlert>
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
      <p>
        Our mission is to help your child accomplish everything he is capable of
        and realize his full potential. And that promise doesn’t stop after our
        classes have ended. Take a moment to review our Website, including the
        FAQ’s page.
      </p>

      <br />
      <Row>
        <Col xs={1}>
          <i class="fas fa-ticket-alt fa-xl"></i>
        </Col>
        <Col xs={11}>
          <p>
            Open a{" "}
            <a href="https://www.ticket.csglearn.com/open.php" target="_blank">
              Customer Support Ticket
            </a>
          </p>
        </Col>
      </Row>

      <hr className="m-4" />

      <Row>
        <Col xs={12} md={6}>
          <h5>Customer Service</h5>

          <br />
          <p>
            You may contact our Customer Service department at{" "}
            <a href="mailto:info@csglearn.com">info@csglearn.com</a> or via
            WhatsApp (876) 707-3443.
          </p>

          <p>
            Monday through Friday, <strong>9AM – 5PM EST</strong>.
          </p>
          <br />
        </Col>
        <Col xs={12} md={6}>
          <h6>Partnerships</h6>

          <p>
            <a href="mailto:partnerships@csglearn.com">
              partnerships@csglearn.com
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default ContactPage
