import React from "react"
import { Link } from "gatsby"

import SATLayout from "../../layouts/satLayout"
import SEO from "../../components/seo"
import SATMiniMenu from "../../common/satMiniMenu"
import { Breadcrumb, BreadcrumbItem } from "shards-react"
import { Alert, Button, Row, Col, Container } from "shards-react"
import ComingSoon from "react-coming-soon"

const SATPage = () => (
  <SATLayout>
    <Container>
      <SEO
        title="SAT Classes"
        description="Find out today why CSG Learning Institute's renowned SAT online course is considered the best in Jamaica. Enroll today and start learning from the comform of your home."
        lang="en"
      />
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="/programmes/">Programmes</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>SAT</BreadcrumbItem>
      </Breadcrumb>

      <Row>
        <Col sm={6}>
          <SATMiniMenu />
          <br />
          <h4>SAT Classes</h4>

          <br />
          <span>
            Our mission is to revolutionise education and provide world-class
            training to anyone, anywhere.
          </span>

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
