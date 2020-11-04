import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Breadcrumb, BreadcrumbItem } from "shards-react"
import { Alert, Button, Row, Col } from "shards-react"

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

    <h5>Sixth Form Programme</h5>

    <br />
    <Row>
      <Col xs={12} sm={6} md={6} lg={6} xl={6}>
        <Row className="text-white text-center">
          <Col xs={6}>
            <Alert theme="success">
              <i className="fas fa-search-location fa-lg"></i>
              <br />
              <br />
              Choose your desired career
            </Alert>
          </Col>
          <Col xs={6}>
            <Alert theme="warning">
              <i className="fas fa-lg fa-shoe-prints"></i>
              <br />
              <br />
              Match it with a programme
            </Alert>
          </Col>
          <Col xs={6}>
            <Alert theme="danger">
              <i className="fas fa-file-pdf fa-lg"></i>
              <br />
              <br />
              Complete the application
            </Alert>
          </Col>
          <Col xs={6}>
            <Alert theme="primary">
              <i className="fas fa-check-double fa-lg"></i>
              <br />
              <br />
              Kick-start your career
            </Alert>
          </Col>
        </Row>

        <br />
        <span>
          Our Sixth Form Programme is designed to assist students with career
          development, which will allow all 2021 high school graduates to
          transition to grade 12 to earn either their chosen CAPE subjects or
          CXC Associate Degree.
        </span>
      </Col>

      <Col xs={12} sm={6} md={6} lg={6} xl={6}></Col>
    </Row>
  </Layout>
)

export default IndexPage
