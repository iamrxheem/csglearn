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
        title="On Demand Learning | Online CSEC Classes"
        description="Enroll in our On Demand CSEC course and get complete class recordings, class notes and exerices."
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
        <BreadcrumbItem active>On Demand</BreadcrumbItem>
      </Breadcrumb>

      <Row>
        <Col md={6}>
          <h2>On Demand Learning</h2>

          <br />
          <span>
            Learn at your pace and on you time with On Demand Learning by
            purchasing the entire course. This package includes:
          </span>

          <br />
          <br />
          <br />
          <ul>
            <li>Complete Access to class recordings</li>
            <li style={{ paddingTop: "10px" }}>Class notes</li>
            <li style={{ paddingTop: "10px" }}>Class activities and answers</li>
            <li style={{ paddingTop: "10px" }}>
              Access to on-going class recordings
            </li>
          </ul>
          <br />

          <span>
            To enroll, please{" "}
            <a
              href="https://api.whatsapp.com/send/?phone=18767073443&text&app_absent=0"
              target="_blank"
            >
              contact us on WhatsApp
            </a>
            .
          </span>

          <br />
          <br />
          <br />
          <h5>Course Offered</h5>
          <br />

          <Table striped bordered hover>
            <tbody>
              <tr>
                <td>English Language</td>
                <td>Mathemtics</td>
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
          <span>
            To enroll, please{" "}
            <a
              href="https://api.whatsapp.com/send/?phone=18767073443&text&app_absent=0"
              target="_blank"
            >
              contact us on WhatsApp
            </a>
            .
          </span>

          <br />
          <br />
          <br />
        </Col>

        <Col>
          <h5>Tuition & Fees</h5>

          <br />
          <span>Please note the enrollment fees below.</span>

          <br />
          <br />
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Cost</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              <tr>
                <td>English A & Maths</td>
                <td>
                  JMD $20,000 <br /> USD $150
                </td>
              </tr>
              <tr>
                <td>All other subjects</td>
                <td>
                  JMD $15,000 <br /> USD $100
                </td>
              </tr>
            </tbody>
          </Table>

          <br />
          <span>
            To enroll, please{" "}
            <a
              href="https://api.whatsapp.com/send/?phone=18767073443&text&app_absent=0"
              target="_blank"
            >
              contact us on WhatsApp
            </a>
            .
          </span>
          <br />
          <br />
        </Col>
      </Row>
    </Container>
  </CSECLayout>
)

export default Page
