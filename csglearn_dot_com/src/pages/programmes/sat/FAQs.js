import React from "react"
import { Link } from "gatsby"

import SATLayout from "../../../layouts/satLayout"
import SEO from "../../../components/seo"
import SATMiniMenu from "../../../common/satMiniMenu"
import { Breadcrumb, BreadcrumbItem } from "shards-react"
import { Alert, Button, Row, Col, Container } from "shards-react"
import ComingSoon from "react-coming-soon"

import Faq from "react-faq-component"

const data = {
  title: "",
  rows: [
    {
      title: "",
      content: (
        <span>
          <br />

          <br />
          <br />
        </span>
      )
    },
    {
      title: "",
      content: (
        <span>
          <br />

          <br />
          <br />
        </span>
      )
    },
    {
      title: "",
      content: (
        <span>
          <br />

          <br />
          <br />
        </span>
      )
    },
    {
      title: "",
      content: (
        <span>
          <br />

          <br />
          <br />
        </span>
      )
    },
    {
      title: "",
      content: (
        <span>
          <br />

          <br />
          <br />
        </span>
      )
    }
  ]
}

const styles = {
  bgColor: "transparent",
  titleTextColor: "",
  rowTitleColor: ""
  // rowContentColor: 'grey',
  // arrowColor: "red",
}

const config = {
  animate: true
  // arrowIcon: "V",
  // tabFocus: true
}

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
        </Col>

        <Col sm={6}></Col>
      </Row>

      <br />
      <h4>Frequently Asked Questions</h4>

      <br />
      <Faq data={data} styles={styles} config={config} />
    </Container>
  </SATLayout>
)

export default SATPage
