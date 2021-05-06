import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// View Components
import MobileView from "../common/mobileView"
import BrowserView from "../common/browserView"
import StarsRating from "../common/starsRating"

import {
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
  <Layout>
    <SEO title="Short Courses" description="" />

    <br />
    <Container>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>Short Courses</BreadcrumbItem>
      </Breadcrumb>
    </Container>

    <Container fluid>
      <Row>
        <Col md={4}>
          <MobileView>
            <br />
          </MobileView>
          <Card>
            <CardImg src={WebDevImage} />

            <CardBody>
              <CardTitle>Web Design</CardTitle>

              <span>This is the description.</span>

              <br />
              <br />
              <Button href="/short-courses/webdev">Learn more</Button>
            </CardBody>
          </Card>
        </Col>
        <Col md={4}>
          <MobileView>
            <br />
          </MobileView>
          <Card>
            <CardImg src={ProjectManagementImage} />

            <CardBody>
              <CardTitle>Project Management</CardTitle>

              <span>This is the description.</span>

              <br />
              <br />
              <Button href="/short-courses/project-management">
                Learn more
              </Button>
            </CardBody>
          </Card>
        </Col>
        <Col md={4}>
          <MobileView>
            <br />
          </MobileView>

          <Card>
            <CardImg src={CustomerServiceImage} />

            <CardBody>
              <CardTitle>Customer Service & Sales</CardTitle>

              <span>This is the description.</span>

              <br />
              <br />
              <Button href="/short-courses/customer-service">Learn more</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default ContactPage
