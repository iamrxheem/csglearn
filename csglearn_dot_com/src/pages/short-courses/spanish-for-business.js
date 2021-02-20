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
        title="Spanish for Business - Short Courses & Certification"
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
        <BreadcrumbItem active>Spanish for Business</BreadcrumbItem>
      </Breadcrumb>

      <h5>Spanish for Professional Communication</h5>

      <br />
      <span>
        This course will introduce students to basic lexical and grammatical
        aspects of the Spanish language. Students will be exposed to basic
        Spanish in the spoken and written form that is used in practical
        everyday business situations. Students will also be exposed to important
        aspects of culture in the Spanish speaking world.
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
            <li>Current CLI students are exempt from enrollment fee.</li>
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
              src="https://docs.google.com/forms/d/e/1FAIpQLSfPSlAAV2nR9GBAcdAj8r-XZPzWXmUPkbOwpA4pmbmzvep7fA/viewform?embedded=true"
              width="640"
              style={{ width: "100%" }}
              height="1910"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
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
