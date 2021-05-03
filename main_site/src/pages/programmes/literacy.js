import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import LiteracyProgrammeLayout from "../../layouts/literacyProgrammeLayout"
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
import {
  Row,
  Col,
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Alert
} from "shards-react"

import ProgrammeSummary from "../../common/programmeSummary"

const Page = props => (
  <>
    <SEO
      title="Online Literacy Programme"
      description="Enroll in our online reading and numeracy classes beginning on June 7, 2021. Get your child up to speed for the upcoming school term."
    />

    <LiteracyProgrammeLayout
      enroll="/programmes/literacy/enroll"
      image="https://img.icons8.com/bubbles/2x/book-reading.png"
    >
      <Container>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/programmes">Programmes</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Literacy</BreadcrumbItem>
        </Breadcrumb>

        <h3>Literacy Programme</h3>

        <br />
        <Row>
          <Col xs={6}>
            <Alert theme="primary" className="text-center">
              <Link
                style={{ textDecoration: "none" }}
                to="/programmes/literacy/kids"
              >
                For Kids
              </Link>
            </Alert>
          </Col>
          <Col xs={6}>
            <Alert theme="danger" className="text-center">
              <Link
                style={{ textDecoration: "none" }}
                to="/programmes/literacy/adults"
              >
                For Adults
              </Link>
            </Alert>
          </Col>
        </Row>
      </Container>
    </LiteracyProgrammeLayout>
  </>
)

export default Page
