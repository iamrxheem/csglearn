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
import { Table } from "react-bootstrap"

import ShortCourseVideo from "../../videos/short-courses.mp4"

const start_date = ""
const course_title = ""

const ContactPage = () => (
  <Layout hideAlert={true}>
    <SEO
      title={`${course_title} - Short Courses & Certification`}
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
        <BreadcrumbItem active>{course_title}</BreadcrumbItem>
      </Breadcrumb>

      <Row>
        <Col md={7}>
          <h3>{course_title}</h3>

          <br />
          <span>Description</span>

          <br />
          <br />
          <span>
            This course is open-entry. There are no prerequisites for entry.
          </span>

          <br />
          <br />
          <Button href="/short-courses/enroll" style={{ width: "100%" }}>
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
                <td>{start_date}</td>
              </tr>
              <tr>
                <td>Days</td>
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
                <td>JMD $25,000</td>
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

export default ContactPage
