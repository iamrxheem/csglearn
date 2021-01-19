import React from "react"
import { Link } from "gatsby"
import ShortCoursesLayout from "../../layouts/shortCoursesLayout"
import SEO from "../../components/seo"
import {
  Breadcrumb,
  BreadcrumbItem,
  Alert,
  Container,
  Row,
  Col,
  CardHeader,
  CardTitle,
  Card,
  CardFooter,
  CardBody,
  Nav,
  NavItem,
  NavLink
} from "shards-react"
import ShortCoursePreview from "../../common/shortCoursePreview"
import { Accordion, Table, Button } from "react-bootstrap"
import { Tab, Tabs } from "react-bootstrap"

const Page = () => (
  <ShortCoursesLayout>
    <>
      <SEO
        title="Introduction to Web Design - Short Courses & Certification"
        description="Learn business, creative, and technology skills to achieve your personal and professional goals."
        lang="en"
      />
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          <a href="/short-courses">Courses</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Web Design</BreadcrumbItem>
      </Breadcrumb>

      <h5>Introduction to Web Design</h5>

      <br />
      <span>
        Learn the basics of web design, beginning with HTML, CSS and Javascript,
        and create basic and functional websties using web technologies
        including WordPress, Wix, SquareSpace and Weebly.
      </span>

      <br />
      <br />
      <br />
      <Tabs defaultActiveKey="info">
        <Tab eventKey="info" title="Course Information">
          <br />
          <h5>Additional Information</h5>

          <br />
          <span>
            Please note the following additional information regarding this
            course.
          </span>

          <br />
          <br />
          <Table striped bordered hover>
            <tbody>
              <tr>
                <td>Start Date</td>
                <td>February 8, 2021</td>
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
                <td>JMD $20,000</td>
              </tr>
              <tr>
                <td>Award Type</td>
                <td>
                  <b>Certification</b>
                </td>
              </tr>
            </tbody>
          </Table>

          <br />
          <ul>
            <li>Current CLU students are exempt from enrollment fee.</li>
            <li style={{ paddingTop: "15px" }}>
              Discounts for groups are available.
            </li>
            <li style={{ paddingTop: "15px" }}>
              Schedule details are subject to change without notice.
            </li>
            <li style={{ paddingTop: "15px" }}>
              Registration ends two (2) weeks after the start of the course.
            </li>
          </ul>
        </Tab>

        <Tab eventKey="apply" title="Apply Now">
          <div style={{ width: "100%" }}>
            <br />

            <iframe
              style={{ width: "100%" }}
              src="https://docs.google.com/forms/d/e/1FAIpQLSfHjaUiHRO-X2GVa1FS8Q--iuBc3Zn3AQqYdQKzk4xOykttLQ/viewform?embedded=true"
              width="640"
              height="1604"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
            >
              Loading…
            </iframe>
          </div>
        </Tab>
      </Tabs>
    </>
  </ShortCoursesLayout>
)

export default Page
