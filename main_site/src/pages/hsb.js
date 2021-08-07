import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// View Components
import MobileView from "../common/mobileView"
import BrowserView from "../common/browserView"

// Media
import StudentImage from "../images/black-college-student.jpg"
import StudentVideo from "../videos/csec.mp4"

// Shards-React Components
import {
  Row,
  Col,
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Alert,
  Button
} from "shards-react"

import { Table } from "react-bootstrap"

import Logo from "../images/csg-learning.png"

import { applyLinks } from "../data/links"

let applyLink = ""

applyLinks.map(data => {
  return (applyLink = data.csecSeptember)
})

const subject = "CSEC Human and Social Biology"
const cost = "JMD $4,200"

const ContactPage = () => (
  <Layout hideAlert>
    <SEO
      title={`${subject} Classes`}
      description={`Start preparing for your ${subject} January or May CXC 2022 exams today with for only ${cost} per month. Email us at info@csglearn.com or WhatsApp at (876) 707-3443 today to get started.`}
    />

    <MobileView>
      <img src={StudentImage} style={{ width: "100%" }} />
    </MobileView>

    <Container>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="/csec">Subjects</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>{subject}</BreadcrumbItem>
      </Breadcrumb>

      <Row>
        <Col sm={6}>
          <h3>{subject} Classes</h3>
          <br />

          <p>
            Study {subject} and take the exams next year! Registration is now
            open for our online CSEC classes - classes begin in August. Students
            are able to register for online classes for either the January 2022
            exams or the May/ June 2022 exams.
          </p>

          <br />
          <div className="text-center">
            <Row>
              <Col xs={6}>
                <a href={applyLink} target="_blank">
                  <Alert theme="info">ENROLL NOW</Alert>
                </a>
              </Col>
              <Col xs={6}>
                <a href="/csec">
                  <Alert theme="danger">ALL SUBJECTS</Alert>
                </a>
              </Col>
            </Row>
          </div>

          <br />
          <p>Enrolled students get access to:</p>

          <br />
          <ul>
            <li>3-4 hours of class time weekly for each subject</li>
            <li style={{ paddingTop: "15px" }}>Weekly assignments</li>
            <li style={{ paddingTop: "15px" }}>Monthly mock exams</li>
            <li style={{ paddingTop: "15px" }}>
              Monthly progress reports for parents
            </li>
            <li style={{ paddingTop: "15px" }}>Virtual textbooks</li>
            <li style={{ paddingTop: "15px" }}>
              Additional virtual class materials
            </li>
          </ul>

          <br />
          <Alert theme="light">
            <i className="fas fa-info-circle text-success mr-2"></i> Classes
            cost only <strong>{cost} per month</strong> + exam registration
          </Alert>

          <br />
          <Button style={{ width: "100%" }} target="_blank" href={applyLink}>
            Enroll now
          </Button>

          <br />
          <br />
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
              <source src={StudentVideo} type="video/mp4" />
            </video>

            <br />
            <br />
          </BrowserView>

          <h5>Other Subjects Offered</h5>

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
              <tr>
                <td>Social Studies</td>
                <td>Caribbean History</td>
              </tr>
              <tr>
                <td>Information Technology</td>
                <td>Office Administration</td>
              </tr>
              <tr>
                <td>EDPM</td>
                <td>Geography</td>
              </tr>
            </tbody>
          </Table>

          <MobileView>
            <br />
            <Button style={{ width: "100%" }} target="_blank" href={applyLink}>
              Enroll now
            </Button>
          </MobileView>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default ContactPage
