import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import SixthFormLayout from "../../../layouts/sixthFormLayout"
import CsecMiniMenu from "../../../components/miniMenus/csecMiniMenu"

// View Components
import MobileView from "../../../common/mobileView"
import BrowserView from "../../../common/browserView"

import View from "../../../components/view/view"
import SEO from "../../../components/seo"
import BusinessIcon from "../../../images/business-icon.png"
import SummerProgrammeVideo from "../../../videos/summer-programme.mp4"

import {
  Carousel,
  Table,
  OverlayTrigger,
  Popover,
  Button
} from "react-bootstrap"

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
  Alert
} from "shards-react"

import { isMobile } from "react-device-detect"

import ProgrammeSummary from "../../../common/programmeSummary"
import SixthFormMiniMenu from "../../../components/miniMenus/sixthFormMiniMenu"

// Images
import Img1 from "../../../images/young-student.jpg"

const Page = props => (
  <>
    <SEO
      title="Sixth Form Summer Programme"
      description="Enroll online in our online Sixth Form Summer Programme, beginning on June 14, 2021. Subjects include Communication Studies, Caribbean Studies, Management of Business and more!"
    />

    <SixthFormLayout enroll="/programmes/sixth-form/summer/enroll">
      <Container>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/programmes/sixth-form">Sixth Form</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Summer School</BreadcrumbItem>
        </Breadcrumb>

        <Row>
          <Col md={7}>
            <h3>Sixth Form Summer Programme</h3>
            <br />

            <div className="text-center">
              <Row>
                <Col xs={6}>
                  <Alert theme="primary">
                    <Link
                      style={{ textDecoration: "none" }}
                      to="/programmes/sixth-form/summer/enroll"
                    >
                      ENROLL NOW
                    </Link>
                  </Alert>
                </Col>
                <Col xs={6}>
                  <Alert theme="success">
                    <Link
                      style={{ textDecoration: "none" }}
                      to="/programmes/csec/summer"
                    >
                      FOR CSEC
                    </Link>
                  </Alert>
                </Col>
              </Row>
            </div>

            <br />
            <span>
              Our Sixth Form Summer Programme begins July 14 to August 13, 2021
              and are open to all students. Please see the list of subjects
              being offered:
            </span>

            <br />
            <br />
            <h5>Start Dates</h5>

            <br />
            <span>
              Unit 2 classes will begin immediately after the June/ July exams
              have concluded. See{" "}
              <a
                target="_blank"
                href="https://46i48l108maaxssg8uyuvr10-wpengine.netdna-ssl.com/wp-content/uploads/2021/03/FINAL-CAPE-Timetable-June-July-2021.pdf"
              >
                exam timetable
              </a>
              .
            </span>

            <br />
            <br />
            <br />
            <Table light hover responsive style={{ width: "100%" }}>
              <thead>
                <th></th>
                <th>Start</th>
                <th>End</th>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <b>Unit 1</b>
                  </td>
                  <td>June 14</td>
                  <td>August 13</td>
                </tr>
                <tr>
                  <td>
                    <b>Unit 2</b>
                  </td>
                  <td>July 19</td>
                  <td>August 20</td>
                </tr>
              </tbody>
            </Table>

            <br />
            <Row>
              <Col sm={6}>
                <Button
                  href="/programmes/sixth-form/summer/enroll"
                  style={{ width: "100%" }}
                >
                  Enroll now
                </Button>
              </Col>
              <Col sm={6}></Col>
            </Row>
          </Col>
          <Col md={5}>
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
                <source src={SummerProgrammeVideo} type="video/mp4" />
              </video>

              <br />
              <br />
            </BrowserView>

            <h5>Subject Offerings</h5>
            <br />

            <Table light hover responsive style={{ width: "100%" }}>
              <thead>
                <tr></tr>
              </thead>
              <tbody>
                <tr>
                  <td>Accounting</td>
                  <td>Biology</td>
                </tr>
                <tr>
                  <td>Caribbean Studies</td>
                  <td>Chemistry</td>
                </tr>
                <tr>
                  <td>Communication Studies</td>
                  <td>Computer Science</td>
                </tr>
                <tr>
                  <td>Economics</td>
                  <td>Entrepreneurship</td>
                </tr>
                <tr>
                  <td>Geography</td>
                  <td>Information Technology</td>
                </tr>
                <tr>
                  <td>Law</td>
                  <td>Management of Business</td>
                </tr>
                <tr>
                  <td>Pure Mathematics</td>
                  <td>Sociology</td>
                </tr>
              </tbody>
            </Table>

            <MobileView>
              <br />
              <br />
              <Row>
                <Col sm={6}>
                  <Button
                    href="/programmes/sixth-form/summer/enroll"
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
      </Container>
    </SixthFormLayout>
  </>
)

export default Page
