import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Breadcrumb, BreadcrumbItem, Container, Row, Col } from "shards-react"

const IndexPage = () => (
  <Layout hideApplyButton>
    <SEO
      title="Disclaimer"
      description="This note describes our desclaimers."
      lang="en"
    />

    {/* Displays on Mobile */}
    <div className="d-block d-md-none">
      <img src="" style={{ width: "100%" }} />
    </div>

    <Container>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Terms & Disclaimers</BreadcrumbItem>
      </Breadcrumb>

      <h3>Disclaimers</h3>

      <br />
      <Row>
        <Col md={6}>
          <span>
            Select the relevant product and/ or service to review the
            disclaimers.
          </span>

          <br />
          <br />
          <hr />
          <span style={{ color: "grey" }}>ACADEMIC PROGRAMMES</span>
          <hr />

          <br />
          <ul>
            <li>
              <a href="/disclaimers/csec">CSEC Programme</a>
            </li>
            <li style={{ paddingTop: "15px" }}>
              <a href="/disclaimers/cape">Sixth Form Programme</a>
            </li>
            <li style={{ paddingTop: "15px" }}>
              <a href="/disclaimers/acca">ACCA Programme</a>
            </li>
            <li style={{ paddingTop: "15px" }}>
              <a href="/disclaimers/sat">SAT Programme</a>
            </li>
            <li style={{ paddingTop: "15px" }}>
              <a href="/disclaimers/short-courses">Short Courses</a>
            </li>
            <li style={{ paddingTop: "15px" }}>
              <a href="/disclaimers/delf">Diplomas in French</a>
            </li>
            <li style={{ paddingTop: "15px" }}>
              <a href="/disclaimers/dele">Diplomas in Spanish</a>
            </li>
          </ul>

          <br />
          <br />
          <hr />
          <span style={{ color: "grey" }}>AGREEMENTS AND REGISTRATION</span>
          <hr />

          <br />
          <ul>
            <li>
              <a href="/disclaimers/">LMS Terms of Use</a>
            </li>
            <li style={{ paddingTop: "15px" }}>
              <a href="/disclaimers/">Payment Plans</a>
            </li>
          </ul>
        </Col>
        <Col md={6}></Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
