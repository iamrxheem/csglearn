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
        title="Diplomas in French (DALF) for Fluent Speakers | C1 & C2 Jamaica"
        description="Enroll online in the accredited Diploma (DALF) in French C1 or C2 today, and learn French at the fluent and advanced level. Study online with CSG Learning Institute in Jamaica."
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
            <a href="/diplomas/delf">DALF</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>Fluent</BreadcrumbItem>
        </Breadcrumb>

        <Row>
          <Col md={7}>
            <h5>Diplomas in French (DALF) for Fluent Speakers</h5>

            <br />
            <span>
              Students can choose between two diplomas at the fluent level - C1
              and C2.
            </span>

            <br />
            <br />
            <DELFAlternateMiniMenu />

            <br />

            <Tabs defaultActiveKey="c1">
              <Tab eventKey="c1" title="C1 - Fluent">
                <br />
                <span>
                  Language users at level C1 are independent. They can express
                  themselves fluently and spontaneously. They have a large
                  vocabulary and can choose the appropriate expression to
                  introduce their comments. They can produce clear,
                  well-structured discourse without hesitation and which shows
                  controlled use of structures.
                </span>

                <br />
                <br />
                <span>
                  DALF C1 can be required to join some French Grandes Écoles.
                  Furthermore, it constitutes an advantage for CampusFrance
                  files, for scholarship applications, for Canadian immigration
                  and for access to some jobs.
                </span>
              </Tab>
              <Tab eventKey="c2" title="C2 - Mastry Level">
                <br />
                <span>
                  C2 is the highest level of the CEFR and DALF C2 is the highest
                  diploma of French as a foreign language.
                </span>

                <br />
                <br />
                <span>
                  C2 users' proficiency in the language is illustrated by
                  precision, appropriateness and fluency of expression. C2
                  candidates are capable of using the language for academic and
                  advanced-level purposes.
                </span>
              </Tab>
            </Tabs>

            <br />
            <h4>Entry Requirements</h4>

            <br />
            <span>
              Candidates are expected to have mastered the intermediate level in
              French. All applicants will be assessed by an instructor.
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
              cost="USD $700 per term"
            />
          </Col>
        </Row>
      </Container>
    </DELFLayout>
  </>
)

export default Page
