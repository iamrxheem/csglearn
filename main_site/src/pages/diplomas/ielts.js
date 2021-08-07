import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import CsecMiniMenu from "../../components/miniMenus/csecMiniMenu"

// View Components
import MobileView from "../../common/mobileView"
import BrowserView from "../../common/browserView"
import Faq from "react-faq-component"
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
import Image from "../../images/black-college-student.jpg"
import IELTSImage from "../../images/ielts.png"

const IELTS = props => (
  <>
    <SEO
      title="IELTS Jamaica - International English Language Testing System"
      description=""
    />

    <Layout
      hideAlert
      replaceTopImg={true}
      topImg="https://i.ytimg.com/vi/C3XwcFQmQA4/maxresdefault.jpg"
    >
      <br />
      <Container>
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/programmes">Diplomas</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>IELTS</BreadcrumbItem>
        </Breadcrumb>

        <Row>
          <Col md={7}>
            <h3>International English Language Test</h3>
            <br />

            <Row className="text-center">
              <Col xs={6}>
                <Alert theme="info">
                  <a>APPLY NOW</a>
                </Alert>
              </Col>
              <Col xs={6}>
                <Alert theme="danger">
                  <a>TUITION</a>
                </Alert>
              </Col>
              <Col xs={6}>
                <Alert theme="success">
                  <a>RESOURCES</a>
                </Alert>
              </Col>
              <Col xs={6}>
                <Alert theme="primary">
                  <a>EXAMINATION</a>
                </Alert>
              </Col>
            </Row>

            <br />
            <br />
            <br />
          </Col>
          <Col md={5}>
            <ProgrammeSummary
              showCost
              hasOptions
              options="1-on-1, Group"
              levelOfStudy="CSEC Certification"
              modeOfStudy="Online"
              duration="3 months"
              numberOfCourses="One"
              termBeginsOn="Monday, August 30, 2021"
              cost="JMD $50,000"
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  </>
)

export default IELTS
