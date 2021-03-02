import React from "react"
import { Link } from "gatsby"

import SATLayout from "../../../layouts/satLayout"
import SEO from "../../../components/seo"
import SATMiniMenu from "../../../common/satMiniMenu"
import { Breadcrumb, BreadcrumbItem } from "shards-react"
import { Alert, Button, Row, Col, Container } from "shards-react"
import ComingSoon from "react-coming-soon"

import GeneralProgrammeApplicationComponent from "../../../components/generalProgrammeApplicationComponent"

const SATPage = () => (
  <SATLayout>
    <Container>
      <SEO
        title="Online SAT Classes Application Form"
        description="View a complete list of fees and tuition for our online SAT classes. Enroll today to study online with CSG Learning Institute, Jamaica."
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
        <BreadcrumbItem active>Apply</BreadcrumbItem>
      </Breadcrumb>

      <Row>
        <Col sm={6}>
          <SATMiniMenu />

          <br />
          <h4>SAT Online Application</h4>
          <br />
        </Col>

        <Col sm={6}></Col>
      </Row>

      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScF5J5onlNur-XU_Hm9G4AMeOCixJ22YSnY-wE-07I406cIfg/viewform?embedded=true"
        style={{ width: "100%", height: "1347px" }}
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
      >
        Loading…
      </iframe>
    </Container>
  </SATLayout>
)

export default SATPage
