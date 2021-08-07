import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// View Components
import MobileView from "../common/mobileView"
import BrowserView from "../common/browserView"

import { Container, Breadcrumb, BreadcrumbItem, Row, Col } from "shards-react"
import Logo from "../images/csg-learning.png"
const ContactPage = () => (
  <Layout hideAlert>
    <SEO
      title="About Us"
      description="Learn more about the team at CSG Learning Institute, lead by Mr. Raheem McDonald and our mission, culture and staff."
    />

    <Container>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>About Us</BreadcrumbItem>
      </Breadcrumb>

      <Row>
        <Col sm={4}>
          <img src={Logo} style={{ width: "100%" }} />
        </Col>
        <Col sm={8}>
          <span>
            CSG Learning Institute orginally started as{" "}
            <span style={{ color: "#8a3ab9" }}>@cxcspanish</span> on Instagram
            in August 2019 with the aim of providing online classes in CSEC
            Spanish to students who needed help. During the Covid-19 pandemic,
            we rebranded to <span style={{ color: "#8a3ab9" }}>@cxguide</span>{" "}
            and provided online resources in all subject areas for CSEC and CAPE
            students, where we reached over 30,000 students from across the
            Caribbean.
          </span>

          <br />
          <br />
          <span>
            Today, we are on online-only institution that offers classes CSEC
            and CAPE classes, as well as training and development in a wide
            range of diplomas and certifications including
          </span>

          <br />
          <br />
          <ul>
            <li>
              <a href="/programmes/literacy">Literacy and Numeracy</a>
            </li>
            <li style={{ paddingTop: "15px" }}>
              <a href="/diplomas/dele">The Diplomas in Spanish</a>
            </li>
            <li style={{ paddingTop: "15px" }}>
              <a href="/diplomas/delf">The Diplomas in French</a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default ContactPage
