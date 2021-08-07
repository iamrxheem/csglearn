import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import CSECLayout from "../../../layouts/csecLayout"

// View Components
import MobileView from "../../../common/mobileView"
import BrowserView from "../../../common/browserView"

import View from "../../../components/view/view"
import SEO from "../../../components/seo"
import { Carousel, Table, OverlayTrigger, Popover } from "react-bootstrap"

// Shards-React Components
import {
  Row,
  Col,
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Button
} from "shards-react"

import ProgrammeSummary from "../../../common/programmeSummary"

import { applyLinks } from "../../../data/links"
let applyLink = ""

applyLinks.map(data => {
  return (applyLink = data.csecSeptember)
})

const Summary = (
  <ProgrammeSummary
    levelOfStudy="Extra classes"
    modeOfStudy="Online"
    duration="1 month"
    numberOfCourses="As many"
    termBeginsOn="August 23, 2021"
  />
)

const Crumbs = (
  <Breadcrumb>
    <BreadcrumbItem>
      <Link to="/">Home</Link>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <Link to="/programmes/csec">CSEC</Link>
    </BreadcrumbItem>
    <BreadcrumbItem active>1 on 1</BreadcrumbItem>
  </Breadcrumb>
)

const Page = props => (
  <>
    <SEO title="1 on 1 CSEC Classes" description="" />

    <CSECLayout
      title="1 on 1 CSEC Classes"
      breadcrumbs={Crumbs}
      summary={Summary}
      enroll={applyLink}
    >
      <p>
        Our summer programme runs from July 5 to August 28, 2021 and are open to
        all students. Please see the list of subjects being offered:
      </p>

      <br />
      <Table striped bordered light hover responsive style={{ width: "100%" }}>
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
            <td>Information Technology</td>
            <td>Social Studies</td>
          </tr>
        </tbody>
      </Table>

      <br />
      <Button href={applyLink} target="_blank" style={{ width: "100%" }}>
        Enroll now
      </Button>

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
            <td>3 hours weekly</td>
            <td>USD $100</td>
          </tr>
          <tr>
            <td>3 hours weekly</td>
            <td>USD $100</td>
          </tr>
        </tbody>
      </Table>

      <br />
    </CSECLayout>
  </>
)

export default Page
