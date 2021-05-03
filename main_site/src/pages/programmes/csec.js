import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import CSECLayout from "../../layouts/csecLayout"
import CsecMiniMenu from "../../components/miniMenus/csecMiniMenu"

// View Components
import MobileView from "../../common/mobileView"
import BrowserView from "../../common/browserView"

import View from "../../components/view/view"
import SEO from "../../components/seo"
import {
  Carousel,
  Table,
  OverlayTrigger,
  Popover,
  Button
} from "react-bootstrap"

// Shards-React Components
import { Row, Col, Container, Breadcrumb, BreadcrumbItem } from "shards-react"

import ProgrammeSummary from "../../common/programmeSummary"

// Images
import Img1 from "../../images/young-student.jpg"

const Page = props => (
  <>
    <SEO
      title="Online CXC CSEC Classes"
      description="Our online CSEC Online classes begin on Monday, September 13, 2021. Students can enroll online for one-on-one or group classes, all major subjects included."
    />

    <CSECLayout enroll="/programmes/csec/enroll">
      <Container>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/programmes">Programmes</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>CSEC</BreadcrumbItem>
        </Breadcrumb>

        <Row>
          <Col md={7}>
            <h3>CSEC Classes</h3>

            <br />
            <span>
              Enroll in group or 1-on-1 online CSEC classes and exam
              registration today! Our CSEC Programme offers online classes in
              all major subjects.
            </span>

            <br />
            <br />
            <span>
              Enroll in our{" "}
              <Link to="/programmes/csec/summer">Summer Programme</Link>,
              starting June 14.
            </span>

            <br />
            <br />
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
                  <td>Electronic Document P&M</td>
                  <td>Geography</td>
                </tr>
              </tbody>
            </Table>

            <br />
            <Row>
              <Col sm={6}>
                <Link
                  className="btn btn-primary"
                  to="/programmes/csec/enroll"
                  style={{ width: "100%" }}
                >
                  Enroll now
                </Link>
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
              hasOptions
              options="1-on-1, Group"
              levelOfStudy="CSEC Certification"
              modeOfStudy="Online"
              duration="8 months"
              numberOfCourses="As many"
              termBeginsOn="Monday, March 8, 2021"
            />

            <MobileView>
              <br />
              <br />
              <Row>
                <Col sm={6}>
                  <Link
                    className="btn btn-primary"
                    to="/programmes/csec/enroll"
                    style={{ width: "100%" }}
                  >
                    Enroll now
                  </Link>
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
