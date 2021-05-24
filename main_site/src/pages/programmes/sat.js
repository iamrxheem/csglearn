import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
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
import {
  Row,
  Col,
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Alert
} from "shards-react"

import ProgrammeSummary from "../../common/programmeSummary"

// Images
import Img1 from "../../images/young-student.jpg"
import Image from "../../images/black-college-student.jpg"

const Page = props => (
  <>
    <SEO
      title="Online SAT Classes"
      description="Our online SAT are coming soon!"
    />

    <Layout hideAlert>
      <MobileView>
        <img src={Image} style={{ width: "100%" }} />
      </MobileView>

      <Container>
        <div style={{ paddingTop: "10px" }}>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to="/programmes">Programmes</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>SAT</BreadcrumbItem>
          </Breadcrumb>
        </div>

        <Row>
          <Col md={7}>
            <h3>SAT Programme</h3>
            <br />

            <div className="text-center">
              <Row>
                <Col xs={6}>
                  <Alert theme="info">
                    <a style={{ textDecoration: "none" }}>ENROLL NOW</a>
                  </Alert>
                </Col>
                <Col xs={6}>
                  <Alert theme="danger">
                    <a style={{ textDecoration: "none" }} href="#requirements">
                      REQUIREMENTS
                    </a>
                  </Alert>
                </Col>
                <Col xs={6}>
                  <Alert theme="success">
                    <a style={{ textDecoration: "none" }} href="#tuition">
                      FEES & TUITION
                    </a>
                  </Alert>
                </Col>
                <Col xs={6}>
                  <Alert theme="primary">
                    <a style={{ textDecoration: "none" }}>EXAM CENTRES</a>
                  </Alert>
                </Col>
              </Row>
            </div>
            <br />

            <span>Ready, set -- not so fast!</span>

            <br />
            <br />
            <span>
              We're still organising our online SAT Programme and regsitration
              will be open soon. Consider following us on Instagram for more
              updates!{" "}
              <a target="_blank" href="https://www.instagram.com/csglearn">
                @csglearn
              </a>
              .
            </span>

            <div id="requirements">
              <br />
              <br />
              <br />
              <h4>Requirements</h4>

              <br />
              <span>Candidates applying must meet the follwoing criteria</span>

              <br />
              <br />
              <ul>
                <li>
                  Must be at least 13 years old at the time of registration
                </li>
                <li style={{ paddingTop: "15px" }}>
                  Candidates under 18 years must be enrolled in a recognised
                  educational instsitution
                </li>
                <li style={{ paddingTop: "15px" }}>
                  Candidate must possess a valid government-issued photo ID at
                  the time of registration
                </li>
              </ul>
            </div>

            <div id="tuition">
              <br />
              <br />
              <br />
              <h4>Fees & Tuition</h4>

              <br />
              <Table hover>
                <tbody>
                  <tr>
                    <td>Course</td>
                    <td>JMD $130,000</td>
                  </tr>
                  <tr>
                    <td>Course Materials</td>
                    <td>JMD $5,000</td>
                  </tr>
                </tbody>
              </Table>
              <br />
            </div>

            <Button style={{ width: "100%" }}>Enroll now</Button>

            <br />
            <br />
            <br />
          </Col>
          <Col md={5}>
            <ProgrammeSummary
              levelOfStudy="Accredited Certification"
              numberOfCourses="N/A"
              modeOfStudy="Online"
              showCost
              cost="To be announced"
              duration="To be announced"
              termBeginsOn="To be announced"
            />

            <MobileView>
              <br />
              <br />
              <br />
            </MobileView>
          </Col>
        </Row>
      </Container>

      <MobileView>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQserNMP-GKESvWF4ew_U4igPKX-peq_wKFPJoJ27k85JruP9URw_Ond_q7yPbOt0Esfg&usqp=CAU"
          style={{ width: "100%" }}
        />
      </MobileView>
    </Layout>
  </>
)

export default Page
