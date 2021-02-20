import React from "react"
import DELFLayout from "../../layouts/delfLayout"
import SEO from "../../components/seo"
import ProgramSummary from "../../common/programSummary"
import DELFMiniMenu from "../../common/delfMiniMenu"

import {
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Col,
  Container,
  Button
} from "shards-react"

const DELFPage = () => (
  <DELFLayout>
    <SEO
      title="Diplôme d'Etudes en Langue Française (DELF) in Jamaica"
      description="Study and take the International French Language certification Diplôme d'Etudes en Langue Française, (DELF Exam) in Jamaica with CSG Learning Institute. Call or WhatsApp (876) 707-3443 to get started."
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
        <BreadcrumbItem active>Diploma in French</BreadcrumbItem>
      </Breadcrumb>

      <h5>Diploma in French as a Foreign Language</h5>
      <br />

      <Row>
        <Col sm={6} md={8}>
          <DELFMiniMenu />
          <div className="d-block d-md-none">
            <br />
          </div>
          <span>
            The Diploma in French as a Foreign Langauge (Diplôme d'Etudes en
            Langue Française) and DALF (Diplôme Approfondi de Langue Française)
            are the only French as a foreign language diplomas issued by the
            French Ministry of Education. They are valid for life and are
            recognized worldwide. They allow you to officially validate your
            French learning.
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
          <br />
          <Row>
            <Col xs={6} md={6} lg={6}>
              <Button style={{ width: "100%" }} href="/diplomas/delf/beginners">
                Beginner's Course
              </Button>
            </Col>
            <Col xs={6} md={6} lg={6}>
              <Button
                style={{ width: "100%" }}
                outline
                href="/diplomas/delf/enroll"
              >
                Enroll Now
              </Button>
            </Col>
          </Row>
        </Col>
        <Col sm={6} md={4}>
          <div className="d-block d-md-none">
            <br />
            <br />
          </div>
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
