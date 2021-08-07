import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

// View Components
import MobileView from "../../common/mobileView"
import BrowserView from "../../common/browserView"
import ProgrammeSummary from "../../common/programmeSummary"
import StudentVideo from "../../videos/csec.mp4"

import {
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Col,
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button,
  Alert
} from "shards-react"
import { Table } from "react-bootstrap"
import Image from "../../images/black-college-student.jpg"

const Page = () => (
  <Layout hideAlert={true} enroll="https://zfrmz.com/PJjvTGbugUVYdQCDp35C">
    <SEO title="CSEC & CAPE Classes in Barbados" description="" />

    <MobileView>
      <video
        style={{ width: "100%" }}
        preload="auto"
        autoPlay={true}
        loop
        muted
      >
        <source src={StudentVideo} type="video/mp4" />
      </video>
    </MobileView>

    <Container>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="/programmes">Programmes</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>CSEC & CAPE</BreadcrumbItem>
      </Breadcrumb>

      <Row>
        <Col xs={12} md={7}>
          <h3>CSEC & Form 6 Classes for Students in Barbados</h3>

          <br />
          <div className="text-center">
            <Row>
              <Col xs={6}>
                <Alert theme="primary">
                  <a
                    style={{ textDecoration: "none" }}
                    href="https://forms.zohopublic.com/csglearninginstitute/form/CSECSummerProgrammeOnlineApplicationForm/formperma/ITXP9uDz1BFuoXLzZgWT102nyoJ-3uz_fKr8ERHBgJo"
                    target="_blank"
                  >
                    Register for CSEC
                  </a>
                </Alert>
              </Col>
              <Col xs={6}>
                <Alert theme="danger">
                  <a
                    style={{ textDecoration: "none" }}
                    href="https://forms.zohopublic.com/csglearninginstitute/form/SixthFormApplicationForm/formperma/KzS0owBdPzi9_ukGpWYg6qshaeDOa3xT7rMkQjf3q24"
                    target="_blank"
                  >
                    Register for CAPE
                  </a>
                </Alert>
              </Col>
            </Row>
          </div>

          <br />
          <p>
            Registration is now open for our onlne CSEC and CAPE classes for the
            2021/ 2022 academic year. Enrolled students get access to:
          </p>

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
          <h5>CSEC Subjects Offered</h5>

          <br />
          <p>Please note the following subjects being offered.</p>

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
                <td>BBD $90</td>
              </tr>
              <tr>
                <td>Mathematics</td>
                <td>BBD $90</td>
              </tr>
              <tr>
                <td>All other subjects</td>
                <td>BBD $75</td>
              </tr>
              <tr>
                <td>Course Material</td>
                <td>
                  BBD $60 <b>(one time)</b>
                </td>
              </tr>
            </tbody>
          </Table>

          <br />
          <div className="text-center">
            <Row>
              <Col xs={6}>
                <Alert theme="primary">
                  <a
                    style={{ textDecoration: "none" }}
                    href="https://forms.zohopublic.com/csglearninginstitute/form/CSECSummerProgrammeOnlineApplicationForm/formperma/ITXP9uDz1BFuoXLzZgWT102nyoJ-3uz_fKr8ERHBgJo"
                    target="_blank"
                  >
                    For CSEC
                  </a>
                </Alert>
              </Col>
              <Col xs={6}>
                <Alert theme="danger">
                  <a
                    style={{ textDecoration: "none" }}
                    href="https://forms.zohopublic.com/csglearninginstitute/form/SixthFormApplicationForm/formperma/KzS0owBdPzi9_ukGpWYg6qshaeDOa3xT7rMkQjf3q24"
                    target="_blank"
                  >
                    For CAPE
                  </a>
                </Alert>
              </Col>
            </Row>
          </div>

          <br />
          <br />
          <h5>Form 6 Subjects Offered</h5>

          <br />
          <p>Please note the following subjects being offered for Form 6.</p>

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
                <td>Communication Studies</td>
                <td>BBD $90</td>
              </tr>
              <tr>
                <td>Caribbean Studies</td>
                <td>BBD $90</td>
              </tr>
              <tr>
                <td>All other subjects</td>
                <td>BBD $75</td>
              </tr>
              <tr>
                <td>Course Material</td>
                <td>
                  BBD $60 <b>(one time, optional)</b>
                </td>
              </tr>
            </tbody>
          </Table>

          <br />
          <div className="text-center">
            <Row>
              <Col xs={6}>
                <Alert theme="primary">
                  <a
                    style={{ textDecoration: "none" }}
                    href="https://forms.zohopublic.com/csglearninginstitute/form/CSECSummerProgrammeOnlineApplicationForm/formperma/ITXP9uDz1BFuoXLzZgWT102nyoJ-3uz_fKr8ERHBgJo"
                    target="_blank"
                  >
                    For CSEC
                  </a>
                </Alert>
              </Col>
              <Col xs={6}>
                <Alert theme="danger">
                  <a
                    style={{ textDecoration: "none" }}
                    href="https://forms.zohopublic.com/csglearninginstitute/form/SixthFormApplicationForm/formperma/KzS0owBdPzi9_ukGpWYg6qshaeDOa3xT7rMkQjf3q24"
                    target="_blank"
                  >
                    For CAPE
                  </a>
                </Alert>
              </Col>
            </Row>
          </div>

          <br />
          <MobileView>
            <img
              src="https://caricom.org/wp-content/uploads/cxc-rebranding.png"
              style={{ width: "100%" }}
            />
          </MobileView>

          <br />
          <br />
        </Col>
        <Col xs={12} md={5}>
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

          <ProgrammeSummary
            hasOptions
            options="1-on-1, Group"
            levelOfStudy="CSEC Certification"
            modeOfStudy="Online"
            duration="8 months"
            numberOfCourses="As many"
            termBeginsOn="Monday, August 2, 2021"
          />
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default Page
