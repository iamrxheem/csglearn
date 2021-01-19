import React from "react"
import { Link } from "gatsby"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import {
  Breadcrumb,
  Row,
  Col,
  BreadcrumbItem,
  Button,
  Container
} from "shards-react"
import { useForm, useField, splitFormProps } from "react-form"
import DELELayout from "../../../layouts/deleLayout"
import { Tab, Tabs } from "react-bootstrap"
import ProgramSummary from "../../../common/programSummary"

const Page = () => (
  <DELELayout>
    <SEO title="DELE Intermediate Diploma - B1 & B2" description="" lang="en" />
    <Container>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="/diplomas/">Diplomas</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="/diplomas/dele">DELE</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Intermediate</BreadcrumbItem>
      </Breadcrumb>

      <h5>DELE Intermediate Diploma - B1 & B2</h5>
      <br />
      <span>
        Students can choose between two diplomas at the intermediate level - B1
        and B2.
      </span>

      <br />
      <br />
      <Tabs defaultActiveKey="b1">
        <Tab eventKey="b1" title="B1 Diploma">
          <br />
          <Row>
            <Col sm={12} md={12} lg={7}>
              <span>
                CSG Learning's DELE B1 program equips students with the
                necessary training and resources to take the B1 exam through an
                intensive curriculum that focuses on expanding vocabulary and
                developing fluency.
              </span>
              <br />
              <br />
              <span>
                The DELE B1 diploma certifies candidates’ capacity to understand
                the gist of clear texts, in standard language, if they involve
                well-known topics related to work, studies or leisure. It also
                certifies students’ ability to deal with most situations that
                occur while travelling in areas where Spanish is spoken; to
                produce simple and coherent texts about familiar topics, or
                topics of personal interest; and lastly to be able to describe
                experiences, events, wishes and hopes, as well as to be able to
                briefly express opinions or explain plans.
              </span>
              <br />
              <br />
              <h4>Entry Requirements</h4>
              <br />
              Students are required to fulfil at least one of the following
              criterium
              <br />
              <br />
              <ul>
                <li style={{ paddingTop: "15px" }}>
                  At least the DELE A1 Diploma
                </li>
                <li style={{ paddingTop: "15px" }}>
                  Five CSEC subjects (General Proficiency Grades I-III) and/or
                  GCE O'Levels/ BGCSE (Grades A-C) in English Language and{" "}
                  <b>Spanish</b>,
                </li>
                <li style={{ paddingTop: "15px" }}>
                  2 A- Level subjects including Spanish (Grades I-IV)
                </li>

                <li style={{ paddingTop: "15px" }}>
                  Other prior qualifications and experience in Spanish
                </li>
              </ul>
              <br />
              Students who lived in a Spanish-speaking country for at least one
              (1) year are exempt from all requirements.
              <br />
              <br />
              <Row>
                <Col sm={12} md={6} lg={6}>
                  <Button
                    style={{ width: "100%" }}
                    outline
                    href="/diplomas/dele/apply"
                  >
                    Apply Now
                  </Button>
                </Col>
                <Col sm={12} md={6} lg={6}></Col>
              </Row>
              <div className="d-block d-md-none">
                <br />
                <br />
              </div>
            </Col>
            <Col sm={12} md={5} lg={5}>
              <ProgramSummary
                levelOfStudy="Diploma"
                numberOfCourses="4"
                modeOfStudy="Online"
                duration="10 months"
                termBeginsOn="January 25, 2021"
                showCost
                cost="USD $400 per term"
              />
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="b2" title="B2 Diploma">
          <br />
          <Row>
            <Col sm={12} md={12} lg={7}>
              <span>
                CSG Learning's DELE B2 program is similar to the B1 program, but
                at a more advanced level.
              </span>
              <br />
              <br />
              <span>
                The DELE B2 diploma certifies students’ ability to interact with
                native speakers with a sufficient degree of fluency and
                spontaneity to enable easy and natural communication between
                interlocutors; produce clear and detailed texts about diverse
                topics, as well as defend an opinion about general topics,
                expressing the pros and cons for each argument; and lastly,
                understand the gist of complex texts about both concrete and
                abstract topics, including technical texts, provided they are
                within the candidate’s area of expertise.
              </span>
              <br />
              <br />
              <h4>Entry Requirements</h4>
              <br />
              Students are required to fulfil at least one of the following
              criterium
              <br />
              <br />
              <ul>
                <li>At least the DELE A1 Diploma</li>
                <li style={{ paddingTop: "15px" }}>
                  Five CSEC subjects (General Proficiency Grades I-III) and/or
                  GCE O'Levels/ BGCSE (Grades A-C) in English Language and{" "}
                  <b>Spanish</b>,
                </li>
                <li style={{ paddingTop: "15px" }}>
                  2 A- Level subjects including Spanish (Grades I-IV)
                </li>
                <li style={{ paddingTop: "15px" }}>
                  Lived in a Spanish-speaking country for at least one (1) year.
                </li>
              </ul>
              <br />
              Students who wish to pursue the DELE B2 diploma may be required to
              pass a proficiency test administered by CSG Learning. Students who
              lived in a Spanish-speaking country for at least one (1) year are
              exempt from all requirements.
              <br />
              <br />
              <Row>
                <Col sm={12} md={6} lg={6}>
                  <Button
                    style={{ width: "100%" }}
                    outline
                    href="/diplomas/dele/apply"
                  >
                    Apply Now
                  </Button>
                </Col>
                <Col sm={12} md={6} lg={6}></Col>
              </Row>
              <div className="d-block d-md-none">
                <br />
                <br />
              </div>
            </Col>
            <Col sm={12} md={5} lg={5}>
              <ProgramSummary
                levelOfStudy="Diploma"
                numberOfCourses="4"
                modeOfStudy="Online"
                duration="10 months"
                termBeginsOn="January 25, 2021"
                showCost
                cost="USD $425 per term"
              />
            </Col>
          </Row>
        </Tab>
      </Tabs>
    </Container>
  </DELELayout>
)

export default Page
