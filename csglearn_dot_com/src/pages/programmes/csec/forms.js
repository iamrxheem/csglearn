import React from "react"
import { Link } from "gatsby"

import SEO from "../../../components/seo"
import { Breadcrumb, BreadcrumbItem } from "shards-react"
import { Alert, Button, Row, Col, Container } from "shards-react"
import CSECLayout from "../../../layouts/csecLayout"

const Page = () => (
  <CSECLayout>
    <Container>
      <SEO
        title="Form and Documents - CSEC Classes"
        description="View a list of form and documents for our online CSEC online classes. Enroll now wish CSG Learning Institute."
        lang="en"
      />
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="/programmes/">Programmes</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="/programmes/">CSEC</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Forms</BreadcrumbItem>
      </Breadcrumb>

      <Row>
        <Col sm={12} md={7} lg={7}>
          <h5>Forms & Documents</h5>

          <br />
          <br />
        </Col>

        <Col sm={12} md={5} lg={5}></Col>
      </Row>
    </Container>
  </CSECLayout>
)

export default Page
