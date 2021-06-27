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
import Faq from "react-faq-component"

import ProgrammeSummary from "../../common/programmeSummary"

// Images
import Img1 from "../../images/young-student.jpg"

import { applyLinks } from "../../data/links"
let applyLink = ""

applyLinks.map(data => {
  return (applyLink = data.csecSeptember)
})

const FullBreadcrumbs = (
  <>
    <Breadcrumb>
      <BreadcrumbItem>
        <Link to="/">Home</Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Link to="/programmes">Programmes</Link>
      </BreadcrumbItem>
      <BreadcrumbItem active>CSEC</BreadcrumbItem>
    </Breadcrumb>
  </>
)

const Summary = (
  <>
    <ProgrammeSummary
      hasOptions
      options="1-on-1, Group"
      levelOfStudy="CSEC Certification"
      modeOfStudy="Online"
      duration="8 months"
      numberOfCourses="As many"
      termBeginsOn="Monday, August 23, 2021"
    />
  </>
)

const FAQComponent = (
  <>
    <br />
    <br />
    <br />
    <h3 className="text-center">Frequently Asked Questions</h3>

    <br />
    <Faq
      data={{
        title: "",
        rows: [
          {
            title: "Where are we located?",
            content: (
              <>
                <br />
                <p>
                  We're based in Kingston, Jamaica but our operations are
                  online, which allows us to not only provide valuable
                  educational training and materials to students across Jamaica,
                  but the entire Caribbean.
                </p>
                <br />
              </>
            )
          },
          {
            title: "How are classes held?",
            content: (
              <>
                <br />
                <p>
                  All classes are held online and are accessible through our{" "}
                  <a href="https://www.hub.csglearn.com/my" target="_blank">
                    Student Portal.
                  </a>
                </p>
                <br />
              </>
            )
          },
          {
            title: "How often are classes kept?",
            content: (
              <>
                <br />
                <p>
                  On average, students are provided 3-4 hours of classtime per
                  week. Additional classtime may be schedule by your teacher.
                </p>
                <br />
              </>
            )
          },
          {
            title: "Are payment plans available?",
            content: (
              <>
                <br />
                <p>Yes, payment plans are available for all students.</p>
                <br />
              </>
            )
          },
          {
            title: "Am I able to register for the CXC Examination as well?",
            content: (
              <>
                <br />
                <p>
                  Yes, students can indicate whether they are registering for
                  extra classes only or classes and exam registration.
                </p>
                <br />
              </>
            )
          },
          {
            title: "Where will I sit the exam?",
            content: (
              <>
                <br />
                <p>
                  You will be assigned an exmination center based in your
                  address by your local Ministry of Education.
                </p>
                <br />
              </>
            )
          },
          {
            title: "How can I pay?",
            content: (
              <>
                <br />
                <p>Students are able to pay online or via bank transfer.</p>
                <br />
              </>
            )
          }
        ]
      }}
    />
  </>
)

const Page = props => (
  <>
    <SEO
      title="Online CSEC Classes for January and May/ June Exams"
      description="Our online CSEC Online classes begin on Monday, September 13, 2021. Students can enroll online for one-on-one or group classes, all major subjects included."
    />

    <CSECLayout
      title="CSEC Programme"
      breadcrumbs={FullBreadcrumbs}
      summary={Summary}
      enroll={applyLink}
      faq={FAQComponent}
    >
      <p>
        Registration is now open for our online CSEC classes starting in August.
        Candidates are able to register for online classes for either the
        January 2022 exams or the May/ June 2022 exams.
      </p>
      <br />

      <h5>Subjects Offered</h5>

      <br />
      <Table light hover responsive style={{ width: "100%" }}>
        <thead>
          <tr></tr>
        </thead>
        <tbody>
          <tr>
            <td>English A</td>
            <td>Mathematics</td>
            <td>Biology</td>
          </tr>
          <tr>
            <td>Chemistry</td>
            <td>Physics</td>
            <td>Human & Social Biology</td>
          </tr>
          <tr>
            <td>Principles of Accounts</td>
            <td>Principles of Business</td>
            <td>Social Studies</td>
          </tr>
          <tr>
            <td>Caribbean History</td>
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
      <a
        className="btn btn-primary"
        href={applyLink}
        style={{ width: "100%" }}
        target="_blank"
      >
        Enroll now
      </a>

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
    </CSECLayout>
  </>
)

export default Page
