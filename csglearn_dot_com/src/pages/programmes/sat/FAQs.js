import React from "react"
import { Link } from "gatsby"

import SATLayout from "../../../layouts/satLayout"
import SEO from "../../../components/seo"
import SATMiniMenu from "../../../common/satMiniMenu"
import { Breadcrumb, BreadcrumbItem } from "shards-react"
import { Alert, Button, Row, Col, Container } from "shards-react"
import ComingSoon from "react-coming-soon"

const SATPage = () => (
  <SATLayout>
    <Container>
      <SEO
        title="Frequently Asked Questions - SAT Classes"
        description="View a complete list of frequently asked questions for our online SAT classes. Enroll today to study online with CSG Learning Institute, Jamaica."
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
          <a href="/programmes/sat">SAT</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>FAQs</BreadcrumbItem>
      </Breadcrumb>

      <Row>
        <Col sm={6}>
          <SATMiniMenu />

          <br />
          <h4>Frequently Asked Questions</h4>

          <br />
          <span>Exam centres are not yet available.</span>

          <br />
          <br />
          <span>
            Our SAT classes are launching in April, 2021. While we smooth out
            the edges, follow us on{" "}
            <a target="_blank" href="https://www.instagram.com/csglearn">
              Instagram
            </a>{" "}
            for more updates.
          </span>
        </Col>

        <Col sm={6}></Col>
      </Row>
    </Container>
  </SATLayout>
)

export default SATPage
