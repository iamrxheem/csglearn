import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import LiteracyProgrammeLayout from "../../../layouts/literacyProgrammeLayout"
import CsecMiniMenu from "../../../components/miniMenus/csecMiniMenu"
import LiteracyProgrammeMiniMenu from "../../../components/miniMenus/literacyProgrammeMiniMenu"

// View Components
import MobileView from "../../../common/mobileView"
import BrowserView from "../../../common/browserView"

import View from "../../../components/view/view"
import SEO from "../../../components/seo"
import {
  Carousel,
  Table,
  OverlayTrigger,
  Popover,
  Button
} from "react-bootstrap"
import Faq from "react-faq-component"

// Shards-React Components
import {
  Row,
  Col,
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Alert
} from "shards-react"

import ProgrammeSummary from "../../../common/programmeSummary"

import KidsImage from "../../../images/kids-reading.jpeg"

const data = {
  title: "",
  rows: [
    {
      title: "What is the cost of the classes?",
      content: (
        <span>
          <br />
          <Table>
            <tbody>
              <tr>
                <td>Course Fee</td>
                <td>JMD $35,000</td>
              </tr>
              <tr>
                <td>Registration Fee</td>
                <td>JMD $2,000</td>
              </tr>
            </tbody>
          </Table>
          <br />
        </span>
      )
    },
    {
      title: "When do the classes begin?",
      content: (
        <span>
          <br />
          Classes begin on Monday, June 7, 2021.
          <br />
          <br />
        </span>
      )
    },
    {
      title: "Who can enroll in this programme?",
      content: (
        <span>
          <br />
          Anyone can enroll in our reading programme.
          <br />
          <br />
        </span>
      )
    },
    {
      title: "When are classes kept?",
      content: (
        <span>
          <br />
          Enrolled students will reveive a customize timetable so they can learn
          on their schedule.
          <br />
          <br />
        </span>
      )
    },
    {
      title: "I am already enrolled. How can I log in?",
      content: (
        <span>
          <br />
          Log in{" "}
          <a target="_blank" href="https://www.hub.csglearn.com/my">
            here
          </a>
          .
          <br />
          <br />
        </span>
      )
    },
    {
      title: "What other courses are offered?",
      content: (
        <span>
          <br />
          Please see our list of <a href="/programmes">programmes</a> and{" "}
          <a href="/short-courses">short courses</a>.
          <br />
          <br />
        </span>
      )
    }
  ]
}

const styles = {
  bgColor: "transparent",
  titleTextColor: "",
  rowTitleColor: ""
  // rowContentColor: 'grey',
  // arrowColor: "red",
}

const config = {
  animate: true
  // arrowIcon: "V",
  // tabFocus: true
}

const Page = props => (
  <>
    <SEO
      title="Online Literacy Programme FAQs"
      description="See a list of frequently asked questions about our online literacy and numeracy programme. Contact us today at (876) 707-3443 or email us at info@csglearn.com."
    />

    <LiteracyProgrammeLayout
      enroll="/programmes/literacy/enroll"
      image={KidsImage}
      container
      showBreak
    >
      <br />
      <Container>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/programmes">Programmes</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/programmes/literacy">Literacy</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>FAQs</BreadcrumbItem>
        </Breadcrumb>

        <Row>
          <Col sm={6}>
            <h3>Frequently Asked Questions</h3>

            <br />
            <MobileView>
              <LiteracyProgrammeMiniMenu />
            </MobileView>
          </Col>
          <Col sm={6}></Col>
        </Row>

        <br />
        <Faq data={data} styles={styles} config={config} />
      </Container>
    </LiteracyProgrammeLayout>
  </>
)

export default Page
