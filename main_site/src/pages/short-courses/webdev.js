import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

// View Components
import MobileView from "../../common/mobileView"
import BrowserView from "../../common/browserView"

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
import { Table } from "react-bootstrap"

import WebDevImage from "../../images/short-courses/webdev.png"
import ProjectManagementImage from "../../images/short-courses/project-managent.png"
import CustomerServiceImage from "../../images/short-courses/customer-service.png"

const ContactPage = () => (
  <Layout>
    <SEO title="Web Design and Development" description="" />

    <br />
    <Container>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="/short-courses">Short Courses</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>Web Development</BreadcrumbItem>
      </Breadcrumb>
    </Container>

    <MobileView>
      <img src={WebDevImage} style={{ width: "100%" }} />
    </MobileView>

    <Container>
      <Row>
        <Col md={7}>
          <h3>Web Development & Design</h3>

          <br />
          <span></span>

          <br />
          <br />
          <span>This course covers</span>
        </Col>
        <Col md={5}>
          <BrowserView>
            <img src={WebDevImage} style={{ width: "100%" }} />
          </BrowserView>

          <br />
          <br />
          <Table striped bordered hover>
            <tbody>
              <tr>
                <td>Start Date</td>
                <td>June 14, 2021</td>
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
                <td>JMD $25,000</td>
              </tr>
              <tr>
                <td>Award Type</td>
                <td>
                  <b>Certification</b>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default ContactPage
