import React from "react"
import { Link } from "gatsby"
import DELFLayout from "../../layouts/delfLayout"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ProgramSummary from "../../common/programSummary"
import DELFMiniMenu from "../../common/delfMiniMenu"

import {
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Col,
  Alert,
  Container,
  Button
} from "shards-react"
import { MobileView } from "react-device-detect"

const DELFPage = () => (
  <DELFLayout>
    <SEO
      title="Diplôme d'Etudes en Langue Française (DELF) in Jamaica"
      description="Study and take the International French Language, Certification Diplôme d'Etudes en Langue Française, (DELF Exam) in Jamaica with CSG Learning Institute. Call or WhatsApp (876) 707-3443 to get started."
      lang="en"
    />

    <Container>
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
        <Col sm={6} md={8}>
          <DELFMiniMenu />

          <MobileView>
            <br />
          </MobileView>
          <span>
            DELF (Diplôme d'Etudes en Langue Française) and DALF (Diplôme
            Approfondi de Langue Française) are the only French as a foreign
            language diplomas issued by the French Ministry of Education. They
            are valid for life and are recognized worldwide. They allow you to
            officially validate your French learning.
          </span>

          <br />
          <br />
          <span>
            These diplomas constitute a recognition of your school, university
            and/or professional background in French language. Moreover DELF and
            DALF allows you to study, work and immigrate in a French-speaking
            country.
          </span>

          <br />
          <br />
          <span>Registration opens Monday, February 1, 2021.</span>

          <br />
          <br />
          <Button href="/diplomas/delf/pre-register">Pre-register</Button>
        </Col>
        <Col sm={6} md={4}>
          <MobileView>
            <br />
            <br />
          </MobileView>
          <ProgramSummary
            levelOfStudy="Diploma"
            numberOfCourses="4"
            modeOfStudy="Online"
            duration="1 year"
            termBeginsOn="March 8, 2021"
          />
          <br />
        </Col>
      </Row>
    </Container>
  </DELFLayout>
)

export default DELFPage
