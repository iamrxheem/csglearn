import React from "react"
import { Link } from "gatsby"

import SEO from "../../../components/seo"
import { Breadcrumb, BreadcrumbItem } from "shards-react"
import { Alert, Button, Row, Col, Container } from "shards-react"
import CSECLayout from "../../../layouts/csecLayout"
import JotformEmbed from "react-jotform-embed"
import { Table } from "react-bootstrap"

const Page = () => (
  <CSECLayout>
    <Container>
      <SEO
        title="4-month Crash Course | Online CSEC Classes"
        description="Enroll in our online 4-months crash course and study online from the comfort of your home. Take advantage of the extended late regsitration deadline and register for the CSEC 2021 May/ June exams."
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
          <a href="/programmes/csec">CSEC</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>4-mo CC</BreadcrumbItem>
      </Breadcrumb>

      <Row>
        <Col md={6}>
          <h5> 4-months CSEC Crash Course</h5>

          <br />
          <span>
            Enroll in our online 4-months crash course and study online from the
            comfort of your home. Take advantage of the extended late
            regsitration deadline and register for the CSEC 2021 May/ June
            exams.
          </span>

          <br />
          <br />
          <span>
            Classes begin on <strong>Monday, February 8, 2021</strong>.{" "}
            <a href="/programmes/csec/enroll">Enroll now</a>!
          </span>

          <br />
          <br />
          <Button
            style={{ width: "100%" }}
            outline
            href="/programmes/csec/enroll"
          >
            Enroll now
          </Button>

          <br />
          <br />
          <br />
          <h5>Subjects Offered</h5>
          <br />

          <Table striped bordered hover>
            <tbody>
              <tr>
                <td>English Language</td>
                <td>English Literature</td>
              </tr>
              <tr>
                <td>Mathemtics</td>
                <td>Additional Mathemtics</td>
              </tr>
              <tr>
                <td>Spanish</td>
                <td>French</td>
              </tr>
              <tr>
                <td>Chemistry</td>
                <td>Biology</td>
              </tr>
              <tr>
                <td>Physics</td>
                <td>Human & Social Biology</td>
              </tr>
              <tr>
                <td>Integrated Science</td>
                <td>Information Technology</td>
              </tr>
              <tr>
                <td>Social Studies</td>
                <td>Caribbean History</td>
              </tr>
              <tr>
                <td>Principles of Accounts</td>
                <td>Principles of Business</td>
              </tr>
              <tr>
                <td>Office Administration</td>
                <td>Economics</td>
              </tr>
              <tr>
                <td>Geography</td>
                <td>Electronic Document Preparation </td>
              </tr>
            </tbody>
          </Table>

          <br />
          <Button
            style={{ width: "100%" }}
            outline
            href="/programmes/csec/enroll"
          >
            Enroll now
          </Button>
          <br />
          <br />
          <br />
        </Col>

        <Col>
          <h5>Tuition & Fees</h5>

          <br />
          <span>
            Fees listed are the monthly fees for online classes. Exam fees are
            not included in this amount.
          </span>

          <br />
          <br />
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Cost (in JMD) per month</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              <tr>
                <td>English A</td>
                <td>JMD $5,800 / USD $45</td>
              </tr>
              <tr>
                <td>Mathematics</td>
                <td>JMD $5,800 / USD $45</td>
              </tr>
              <tr>
                <td>All other subjects</td>
                <td>JMD $4,300 / USD $30</td>
              </tr>
            </tbody>
          </Table>

          <br />
          <Button
            style={{ width: "100%" }}
            outline
            href="/programmes/csec/enroll"
          >
            Enroll now
          </Button>
        </Col>
      </Row>
    </Container>
  </CSECLayout>
)

export default Page
