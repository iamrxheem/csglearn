import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// View Components
import MobileView from "../common/mobileView"
import BrowserView from "../common/browserView"
import StarsRating from "../common/starsRating"

import {
  Badge,
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

import { isMobile } from "react-device-detect"

import WebDevImage from "../images/short-courses/webdev.png"
import ProjectManagementImage from "../images/short-courses/project-managent.png"
import CustomerServiceImage from "../images/short-courses/customer-service.png"

const ContactPage = () => (
  <Layout hideAlert>
    <SEO title="Short Courses & Certifications" description="" />

    <br />
    <Container>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Short Courses</BreadcrumbItem>
      </Breadcrumb>

      <Row>
        <Col md={4}>
          <MobileView>
            <br />
          </MobileView>

          <Card className={isMobile ? "break-container" : ""}>
            <CardImg style={{ width: "100%" }} src={CustomerServiceImage} />

            <CardBody>
              <CardTitle>Customer Service & Sales</CardTitle>

              <br />
              <Button href="/short-courses/customer-service">Learn more</Button>
            </CardBody>
          </Card>
        </Col>
        <Col md={4}>
          <MobileView>
            <br />
          </MobileView>

          <Card className={isMobile ? "break-container" : ""}>
            <CardImg style={{ width: "100%" }} src={WebDevImage} />

            <CardBody>
              <CardTitle>Web Design</CardTitle>

              <br />
              <Button href="" theme="light">
                Coming soon
              </Button>
            </CardBody>
          </Card>
        </Col>
        <Col md={4}>
          <MobileView>
            <br />
          </MobileView>
          <Card className={isMobile ? "break-container" : ""}>
            <CardImg style={{ width: "100%" }} src={ProjectManagementImage} />

            <CardBody>
              <CardTitle>Project Management</CardTitle>
              <br />
              <Button href="" theme="light">
                Coming soon
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default ContactPage
