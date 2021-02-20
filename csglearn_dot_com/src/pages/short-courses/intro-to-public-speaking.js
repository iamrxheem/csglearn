import React from "react"
import ShortCoursesLayout from "../../layouts/shortCoursesLayout"
import SEO from "../../components/seo"
import {
  Breadcrumb,
  BreadcrumbItem} from "shards-react"
import { Table } from "react-bootstrap"
import { Tab, Tabs } from "react-bootstrap"

const Page = () => (
  <ShortCoursesLayout>
    <>
      <SEO
        title="Introduction to Public Speaking - Short Courses & Certification"
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
        <BreadcrumbItem active>Public Speaking</BreadcrumbItem>
      </Breadcrumb>

      <h5>Introduction to Public Speaking</h5>

      <br />
      <span>
        The course is design to prepare participants for success in public
        speaking through systematically examining the elements of speech
        presentation.
      </span>

      <br />
      <br />
      <Tabs defaultActiveKey="info">
        <Tab eventKey="info" title="Course Information">
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
              src="https://docs.google.com/forms/d/e/1FAIpQLSdbwOnrP1BQ1PlyhsENvfP-n3bU4Bj1mf45GnIQ2Mog2rCLPA/viewform?embedded=true"
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
