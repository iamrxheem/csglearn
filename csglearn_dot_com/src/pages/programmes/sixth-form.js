import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Breadcrumb, BreadcrumbItem } from "shards-react"
import { Alert, Button, Row, Col, Container } from "shards-react"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Sixth Form Programme"
      description="CSG Learning Institute is a private training institution that offers a range of examination preparation programmes."
      lang="en"
    />
    <Breadcrumb>
      <BreadcrumbItem>
        <a href="/">Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a href="/programmes/">Programmes</a>
      </BreadcrumbItem>
      <BreadcrumbItem active>Sixth Form</BreadcrumbItem>
    </Breadcrumb>

    <Container>
      <h5>Sixth Form Programme</h5>

      <br />
      <span>Coming in April.</span>
      <Row>
        <Col xs={12} sm={6} md={6} lg={6} xl={6}></Col>

        <Col xs={12} sm={6} md={6} lg={6} xl={6}></Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
