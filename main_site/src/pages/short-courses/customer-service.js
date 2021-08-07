import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

// View Components
import MobileView from "../../common/mobileView"
import BrowserView from "../../common/browserView"

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
  Button
} from "shards-react"
import { Table, Tab, Tabs } from "react-bootstrap"

import ShortCourseVideo from "../../videos/short-courses.mp4"
import { courseData } from "../../data/css"

let courseName = ""
let courseTerm = ""
let courseTuition = ""

courseData.map(data => {
  courseName = data.name
  courseTerm = data.term
  courseTuition = data.tuition
})

const Page = () => (
  <Layout hideAlert enroll="https://zfrmz.com/QYATfS2tZrHWV5CdYrap">
    <SEO
      title={`${courseName} - Short Courses & Certification`}
      description=""
    />

    <MobileView>
      <video
        style={{ width: "100%" }}
        preload="auto"
        autoPlay={true}
        loop
        muted
      >
        <source src={ShortCourseVideo} type="video/mp4" />
      </video>
    </MobileView>

    <Container>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="/short-courses">Short Courses</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>{courseName}</BreadcrumbItem>
      </Breadcrumb>

      <Row>
        <Col md={7}>
          <h3>{courseName}</h3>

          <br />
          <span>
            These qualifications cover Levels appropriate for learners at any
            stage of a career in {courseName}, from those who are just starting
            out - handling customer queries - to those responsible for an
            organisation's overall customer-service strategy - analysing
            customer feedback and planning improvements.
          </span>

          <br />
          <br />
          <Tabs defaultActiveKey="level1" id="uncontrolled-tab-example">
            <Tab eventKey="level1" title="Level 1">
              <>
                <br />
                <p>
                  This qualification provides learners with the skills and
                  knowledge required to successfully work in customer services.
                  It will also build learners’ knowledge of the principles of
                  customer service.
                </p>

                <br />
                <h4>Requirements</h4>

                <br />
                <p>
                  This course is open-entry. There are no prerequisites for
                  entry.
                </p>
              </>
            </Tab>
            <Tab eventKey="level2" title="Level II">
              <>
                <br />
                <p>
                  Our level 2 Customer Service qualification is for candidates
                  who undertake a customer service role and recognises that
                  employment in the customer service sector involves a diverse
                  range of functions, tasks and activities that are constantly
                  developing and changing. This training is at the supervisory
                  and managerial level
                </p>

                <br />
                <h4>Requirements</h4>

                <br />
                <ul>
                  <li>
                    <p>
                      {courseName} Level I, <b>OR</b>
                    </p>
                  </li>
                  <li>
                    <p>
                      Experience in {courseName}, <b>OR</b>
                    </p>
                  </li>
                  <li>
                    <p>
                      A combination of related expreience and qualification{" "}
                    </p>
                  </li>
                </ul>
              </>
            </Tab>
            <Tab eventKey="level3" title="Level III">
              <>
                <br />
                <p>
                  This {courseName} Level 3 course is designed to help learners
                  understand and appreciate the need for quality customer
                  service within companies at the supervisory and managerial
                  level. With modern technologies, the requirements and
                  constructs of customer service has changed and the course
                  teaches students how to create a quality, customer-orientated
                  service within a variety of businesses.
                </p>

                <br />
                <h4>Requirements</h4>

                <br />
                <ul>
                  <li>
                    <p>
                      {courseName} Level II, <b>OR</b>{" "}
                    </p>
                  </li>
                  <li>
                    <p>
                      Experience in {courseName} at the supervisory level.,{" "}
                      <b>OR</b>
                    </p>
                  </li>
                  <li>
                    <p>
                      A combination of related expreience and qualification{" "}
                    </p>
                  </li>
                </ul>
              </>
            </Tab>
          </Tabs>

          <br />
          <Button
            href="https://zfrmz.com/QYATfS2tZrHWV5CdYrap"
            target="_blank"
            style={{ width: "100%" }}
          >
            Enroll Now
          </Button>
        </Col>
        <Col md={5}>
          <BrowserView>
            <video
              style={{ width: "100%" }}
              preload="auto"
              autoPlay={true}
              loop
              muted
            >
              <source src={ShortCourseVideo} type="video/mp4" />
            </video>
          </BrowserView>

          <br />
          <br />
          <Table striped bordered hover>
            <tbody>
              <tr>
                <td>Start Date</td>
                <td>{courseTerm}</td>
              </tr>
              <tr>
                <td>Schedule</td>
                <td>TBA</td>
              </tr>
              <tr>
                <td>Course Duration</td>
                <td>3 months</td>
              </tr>
              <tr>
                <td>Enrollment Fee</td>
                <td>JMD $1,500</td>
              </tr>
              <tr>
                <td>Course Tuition</td>
                <td>{courseTuition}</td>
              </tr>
              <tr>
                <td>Award Type</td>
                <td>
                  <b>Certification</b>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default Page
