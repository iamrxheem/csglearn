import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import CSECLayout from "../../../layouts/csecLayout"

// View Components
import MobileView from "../../../common/mobileView"
import BrowserView from "../../../common/browserView"

import View from "../../../components/view/view"
import SEO from "../../../components/seo"
import { Carousel, Table, OverlayTrigger, Popover } from "react-bootstrap"

// Shards-React Components
import {
  Row,
  Col,
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Button
} from "shards-react"

import ProgrammeSummary from "../../../common/programmeSummary"

const Page = props => (
  <>
    <SEO
      title="CXC Summer Programme"
      description="Enroll in our online CSEC Summer School Programme and study subjects such as English A, Mathematics, Biology, Chemistry and more! Special discount available."
    />

    <CSECLayout enroll="/programmes/csec/summer/enroll">
      <Container>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/programmes/csec">CSEC</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Summer Programme</BreadcrumbItem>
        </Breadcrumb>

        <Row>
          <Col md={7}>
            <h3>Summer Programme</h3>

            <br />
            <span>
              Our summer programme runs from June 14 to August 13, 2021 and are
              open to all students. Please see the list of subjects being
              offered:
            </span>

            <br />
            <br />
            <br />
            <Table
              striped
              bordered
              light
              hover
              responsive
              style={{ width: "100%" }}
            >
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
                  <td>Information Technology</td>
                  <td>Social Studies</td>
                </tr>
              </tbody>
            </Table>

            <br />
            <Row>
              <Col sm={6}>
                <Button
                  href="/programmes/csec/summer/enroll"
                  style={{ width: "100%" }}
                >
                  Enroll now
                </Button>
              </Col>
              <Col sm={6}></Col>
            </Row>

            <br />
            <br />
            <h5>Fees & Tuition</h5>

            <br />
            <Table light hover responsive style={{ width: "100%" }}>
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Cost (per month)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>English A</td>
                  <td>JMD $5,800</td>
                </tr>
                <tr>
                  <td>Mathematics</td>
                  <td>JMD $5,800</td>
                </tr>
                <tr>
                  <td>All other subjects</td>
                  <td>JMD $4,200</td>
                </tr>
                <tr>
                  <td>Course Material</td>
                  <td>
                    JMD $4,500 <b>(one time)</b>
                  </td>
                </tr>
              </tbody>
            </Table>

            <br />
            <br />
          </Col>
          <Col md={5}>
            <ProgrammeSummary
              levelOfStudy="Extra classes"
              modeOfStudy="Online"
              duration="2 months"
              numberOfCourses="As many"
              termBeginsOn="Monday, June 14, 2021"
            />

            <MobileView>
              <br />
              <br />
              <Row>
                <Col sm={6}>
                  <Button
                    href="/programmes/csec/summer/enroll"
                    style={{ width: "100%" }}
                  >
                    Enroll now
                  </Button>
                </Col>
                <Col sm={6}></Col>
              </Row>
            </MobileView>
          </Col>
        </Row>

        <br />
      </Container>
    </CSECLayout>
  </>
)

export default Page
