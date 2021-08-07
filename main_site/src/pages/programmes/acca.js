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
import Img1 from "../../images/young-student.jpg"
import Image from "../../images/black-college-student.jpg"

import { applyLinks } from "../../data/links"

let applyLink = ""

applyLinks.map(data => {
  return (applyLink = data.acca)
})

const Page = props => (
  <>
    <SEO
      title="ACCA Jamaica"
      description="Study for the Association of Chartered Certified Accountants online in Jamaica and in the Caribbean. Apply online now or send us a message on WhatsApp to to consult an enrollment officer."
    />

    <Layout hideAlert>
      <Container>
        <MobileView>
          <br />
          <img
            src="https://cdn.freelogovectors.net/wp-content/uploads/2020/07/acca-logo.png"
            style={{ width: "100%" }}
          />
        </MobileView>

        <div style={{ paddingTop: "10px" }}>
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="/">Home</a>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to="/programmes">Programmes</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>ACCA</BreadcrumbItem>
          </Breadcrumb>
        </div>

        <Row>
          <Col md={7}>
            <h3>ACCA Certification</h3>
            <br />

            <div className="text-center">
              <Row>
                <Col xs={6}>
                  <Alert theme="primary">
                    <a
                      target="_blank"
                      href={applyLink}
                      style={{ textDecoration: "none" }}
                    >
                      ENROLL NOW
                    </a>
                  </Alert>
                </Col>
                <Col xs={6}>
                  <Alert theme="success">
                    <a style={{ textDecoration: "none" }}>TUITION & FEES</a>
                  </Alert>
                </Col>
              </Row>
            </div>
            <br />

            <p>Registration for our online ACCA will be open soon.</p>

            <br />
            <br />
            <br />
          </Col>
          <Col md={5}>
            <ProgrammeSummary
              levelOfStudy="Accredited Certification"
              hideCourses={false}
              modeOfStudy="Online"
              duration="3 months"
              termBeginsOn="July 26, 2021"
            />

            <MobileView>
              <br />
            </MobileView>
          </Col>
        </Row>
      </Container>
    </Layout>
  </>
)

export default Page
