import * as React from "react"
import SEO from "../../../components/seo"
import { Link } from "gatsby"

// Layout
import DelfLayout from "../../../layouts/delfLayout"

// View Components
import MobileView from "../../../common/mobileView"
import BrowserView from "../../../common/browserView"

import DelfStudentVideo from "../../../videos/delf-student-video.mp4"

// Shards-React Components
import {
  Row,
  Col,
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Button
} from "shards-react"
import { Tabs, Tab, Table } from "react-bootstrap"
import ProgrammeSummary from "../../../common/programmeSummary"

import { applyLinks } from "../../../data/links"
let applyLink = ""

applyLinks.map(data => {
  return (applyLink = data.delf)
})

const Page = () => (
  <DelfLayout enroll={applyLink} tuition="/diplomas/delf/tuition">
    <Container>
      <SEO title="Diplôme d'Etudes en Langue Française (DELF)" description="" />

      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="/programmes">Diplomas</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="/diplomas/delf">DELF</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Fees & Tuition</BreadcrumbItem>
      </Breadcrumb>

      <Row>
        <Col sm={7}>
          <h3>Diploma in French Fees & Tuition</h3>
          <br />

          <p>
            Please note the fees for the Diploma in French (DELF) and for exam
            registration.
          </p>

          <br />
          <Table light hover responsive style={{ width: "100%" }}>
            <thead>
              <tr>
                <th>Course</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Full Programme</td>
                <td>
                  JMD $80,000 <br /> USD $550
                </td>
              </tr>
              <tr>
                <td>Course Material</td>
                <td>
                  JMD $5,000 <br /> USD $35
                </td>
              </tr>
              <tr>
                <td>Exam Registration</td>
                <td>
                  JMD $13,000 <br /> USD $90
                </td>
              </tr>
            </tbody>
          </Table>

          <br />
          <br />
          <Button href={applyLink} style={{ width: "100%" }}>
            Enroll now
          </Button>
        </Col>
        <Col sm={5}>
          <MobileView>
            <br />
            <br />
          </MobileView>

          <BrowserView>
            <video
              style={{ width: "100%" }}
              preload="auto"
              autoPlay={true}
              loop
              muted
            >
              <source src={DelfStudentVideo} type="video/mp4" />
            </video>
            <br />
            <br />
          </BrowserView>
        </Col>
      </Row>
    </Container>
  </DelfLayout>
)

export default Page
