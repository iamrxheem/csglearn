import React from "react"
import { Link } from "gatsby"
import DELFLayout from "../../../layouts/delfLayout"
import SEO from "../../../components/seo"
import {
  Breadcrumb,
  BreadcrumbItem,
  Container,
  Row,
  Col,
  Button
} from "shards-react"
import Faq from "react-faq-component"
import { MobileView } from "react-device-detect"
import DELFAlternateMiniMenu from "../../../common/delfAlternateMiniMenu"
import ProgramSummary from "../../../common/programSummary"
import { Tab, Tabs } from "react-bootstrap"

const Page = () => (
  <>
    <DELFLayout>
      <SEO
        title="Diplomas in French (DELF) for Intermediate Speakers"
        description="Enroll online in the accredited Diploma in French B1 or B2 today, and learn French at the intermediate level. Study online with CSG Learning Institute in Jamaica."
        lang="en"
      />

      <Container>
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="/diplomas">Diplomas</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="/diplomas/delf">DELF</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>Intermediate</BreadcrumbItem>
        </Breadcrumb>

        <Row>
          <Col md={7}>
            <h5>Diplomas in French for Intermediate Speakers</h5>

            <br />
            <span>
              Students can choose between two diplomas at the intermediate level
              - B1 and B2.
            </span>

            <br />
            <br />
            <DELFAlternateMiniMenu />

            <br />

            <Tabs defaultActiveKey="b1">
              <Tab eventKey="b1" title="B1 Diploma">
                <br />
                <span>
                  At level B1, the user becomes independent. He/she can maintain
                  interaction: he/she can understand and maintain a discussion
                  and give his/her opinion. He/she is capable of dealing with
                  situations likely to arise in daily life.
                </span>

                <br />
                <br />
                <span>
                  Please note that DELF B1 is required to obtain the French
                  nationality. It is also necessary to validate some diplomas.
                  For example, it is the case for the diplomas of the AUF
                  (Agence Universitaire de la Francophonie) and of the PFIEV
                  (Programme de Formation des Ingénieurs d'Excellence au
                  Vietnam).
                </span>
              </Tab>
              <Tab eventKey="b2" title="B2 Diploma">
                <br />
                <span>
                  A B2 user has a degree of independence that allows him/her to
                  construct arguments to defend his/her opinion, explain his/her
                  viewpoint and negotiate. At level B2, the candidate has a
                  degree of fluency and spontaneity in regular interactions and
                  is capable of correcting his/her own mistakes.
                </span>

                <br />
                <br />
                <span>
                  Please note that, except dispensation, DELF B2 is compulsory
                  to follow studies in the French higher education.
                </span>
              </Tab>
            </Tabs>

            <br />
            <h4>Entry Requirements</h4>

            <br />
            <span>
              Some experience in French is necessary to manage this course.
              Applicants will be assessed by an instructor.
            </span>

            <br />
            <br />
            <Row>
              <Col sm={12} md={6} lg={6}>
                <Button
                  style={{ width: "100%" }}
                  outline
                  href="/diplomas/delf/enroll"
                >
                  Enroll now
                </Button>
              </Col>
              <Col sm={12} md={6} lg={6}></Col>
            </Row>

            <br />
            <br />
          </Col>

          <Col md={5}>
            <ProgramSummary
              levelOfStudy="Diploma"
              numberOfCourses="4"
              modeOfStudy="Online"
              duration="10 months"
              termBeginsOn="March 29, 2021"
              showCost
              cost="USD $450 per term, 2 terms"
            />
          </Col>
        </Row>
      </Container>
    </DELFLayout>
  </>
)

export default Page
