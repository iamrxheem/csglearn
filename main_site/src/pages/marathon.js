import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// View Components
import MobileView from "../common/mobileView"
import BrowserView from "../common/browserView"

// App Components
import AppSlider from "../home/appSlider/appSlider"
import AppPromo from "../home/appPromo"

import ExamMarathonVieo from "../videos/exam-marathon.mp4"

import {
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Col,
  Button
} from "shards-react"

import { Table } from "react-bootstrap"

const ContactPage = () => (
  <Layout hideAlert>
    <SEO
      title="CXC 2021 Exam Marathon"
      description="Join our CSEC and CAPE exam marathon for only JMD $5,000 for any three (3) subject marathon of your choice. Message us on WhatsApp today to register at (876) 707-3443."
    />

    <MobileView>
      <video
        style={{ width: "100%" }}
        preload="auto"
        autoPlay={true}
        loop
        muted
      >
        <source src={ExamMarathonVieo} type="video/mp4" />
      </video>
    </MobileView>

    <Container>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="/programmes">Programmes</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>Exam Marathon</BreadcrumbItem>
      </Breadcrumb>

      <Row>
        <Col sm={6}>
          <h3>CSEC & CAPE Exam Marathon</h3>

          <br />
          <span>
            Our online CXC exam marathons are designed to allow students to
            revise key concepts in their subject syllabus while reviewing a
            series of past paper questions and answers.
          </span>

          <br />
          <br />
          <span>Our sessions include</span>

          <br />
          <br />
          <ul>
            <li>revision sessions</li>
            <li>past paper questions</li>
            <li>short quizzes</li>
            <li>24/7 access to recorded classes</li>
          </ul>

          <br />
          <br />
          <span>
            <strong>Cost</strong> - Only JMD $5,000 for any three (3) subject
            marathon of your choice! (or $USD $40 / TTD $230).
          </span>

          <br />
          <br />
          <h5>CAPE Subjects (both units)</h5>

          <br />
          <Table light hover responsive style={{ width: "100%" }}>
            <thead>
              <tr></tr>
            </thead>
            <tbody>
              <tr>
                <td>Communication Studies</td>
                <td>Caribean Studies</td>
              </tr>
              <tr>
                <td>Biology</td>
                <td>Chemistry</td>
              </tr>
              <tr>
                <td>Physics</td>
                <td>Accounting</td>
              </tr>
              <tr>
                <td>Economics</td>
                <td>Management of Business</td>
              </tr>
              <tr>
                <td>Sociology</td>
                <td>Entrepreneurship</td>
              </tr>
            </tbody>
          </Table>

          <br />
          <Button
            href="https://api.whatsapp.com/send/?phone=18767073443&text&app_absent=0"
            target="_blank"
            style={{ width: "100%" }}
          >
            Enroll now
          </Button>

          <br />
          <br />
          <br />
          <h5>CSEC Subjects</h5>

          <br />
          <Table light hover responsive style={{ width: "100%" }}>
            <thead>
              <tr></tr>
            </thead>
            <tbody>
              <tr>
                <td>English A</td>
                <td>Mathematics</td>
              </tr>
              <tr>
                <td>Biology</td>
                <td>Chemistry</td>
              </tr>
              <tr>
                <td>Physics</td>
                <td>Human & Social Biology</td>
              </tr>
              <tr>
                <td>Principles of Accounts</td>
                <td>Principles of Business</td>
              </tr>
            </tbody>
          </Table>

          <br />
          <Button
            href="https://api.whatsapp.com/send/?phone=18767073443&text&app_absent=0"
            target="_blank"
            style={{ width: "100%" }}
          >
            Enroll now
          </Button>
        </Col>
        <Col sm={6}>
          <BrowserView>
            <video
              style={{ width: "100%" }}
              preload="auto"
              autoPlay={true}
              loop
              muted
            >
              <source src={ExamMarathonVieo} type="video/mp4" />
            </video>
          </BrowserView>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default ContactPage
