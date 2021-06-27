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

import { applyLinks } from "../../../data/links"
let applyLink = ""

applyLinks.map(data => {
  return (applyLink = data.capeSummer)
})

const Page = props => (
  <>
    <SEO
      title="Sixth Form Summer Programme"
      description="Enroll online in our online Sixth Form Summer Programme, beginning on June 14, 2021. Subjects include Communication Studies, Caribbean Studies, Management of Business and more!"
    />

    <SixthFormLayout enroll={applyLink}>
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
                    <a
                      target="_blank"
                      style={{ textDecoration: "none" }}
                      href={applyLink}
                    >
                      ENROLL NOW
                    </a>
                  </Alert>
                </Col>
                <Col xs={6}>
                  <Alert theme="success">
                    <a
                      style={{ textDecoration: "none" }}
                      href="/programmes/csec/summer"
                    >
                      FOR CSEC
                    </a>
                  </Alert>
                </Col>
              </Row>
            </div>

            <br />
            <span>
              Our Sixth Form Summer Programme is aimed for students who
              additional help in critical subject areas, and is now open for
              registration.
            </span>

            <br />
            <br />
            <h5>Start Dates</h5>

            <br />
            <span>
              Classes begin on Monday, August 2nd, 2021, immediately after the
              June/ July exams have concluded.
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
                  <td>July 5, 2021</td>
                  <td>August 27</td>
                </tr>
                <tr>
                  <td>
                    <b>Unit 2</b>
                  </td>
                  <td>August 2</td>
                  <td>August 27</td>
                </tr>
              </tbody>
            </Table>

            <br />
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
                  <td>Comm Studies</td>
                  <td>JMD $10,000</td>
                </tr>
                <tr>
                  <td>Carib Studies</td>
                  <td>JMD $10,000</td>
                </tr>
                <tr>
                  <td>All other subjects</td>
                  <td>JMD $7,000</td>
                </tr>
                <tr>
                  <td>Course Material</td>
                  <td>
                    JMD $4,500 <b>(optional)</b>
                  </td>
                </tr>
              </tbody>
            </Table>

            <br />
            <Button href={applyLink} target="_blank" style={{ width: "100%" }}>
              Enroll now
            </Button>
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
                    href={applyLink}
                    target="_blank"
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
