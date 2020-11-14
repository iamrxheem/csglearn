import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Breadcrumb, BreadcrumbItem, Row, Col, Alert } from "shards-react"

const IndexPage = () => (
  <Layout>
    <SEO
      title="International French Language Certification (DELF) in Jamaica"
      description="Study and take the International French Language Certification (DELF Exam) in Jamaica with CSG Learning Institute. Call or WhatsApp (876) 707-3443 to get started."
      lang="en"
    />
    <Breadcrumb>
      <BreadcrumbItem>
        <a href="/">Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a href="/diplomas/">Diplomas</a>
      </BreadcrumbItem>
      <BreadcrumbItem active>DELF</BreadcrumbItem>
    </Breadcrumb>

    <h5>International French Language Certification (DELF)</h5>
    <br />

    <Row>
      <Col sm={6} md={6} lg={6}>
        <Row>
          <Col xs={6}>
            <Alert theme="info">x</Alert>
          </Col>
          <Col xs={6}>
            <Alert theme="danger">x</Alert>
          </Col>
          <Col xs={6}>
            <Alert theme="success">x</Alert>
          </Col>
          <Col xs={6}>
            <Alert theme="primary">x</Alert>
          </Col>
        </Row>
      </Col>
      <Col sm={6} md={6} lg={6}>
        <span>Yah</span>
      </Col>
    </Row>
  </Layout>
)

export default IndexPage
