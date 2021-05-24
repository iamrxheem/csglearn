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

import ShortCourseVideo from "../../videos/short-courses.mp4"

const ContactPage = () => (
  <Layout hideAlert={true}>
    <SEO title={`Enroll - Short Courses & Certification`} description="" />

    <MobileView>
      <video
        style={{ width: "100%" }}
        preload="auto"
        autoPlay={true}
        loop
        muted
      >
        <source src={ShortCourseVideo} type="video/mp4" />
      </video>
    </MobileView>

    <Container>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="/short-courses">Short Courses</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>Enroll</BreadcrumbItem>
      </Breadcrumb>

      <h3>Short Courses Online Application Form</h3>

      <br />
      <span>Applications are not yet opened.</span>
    </Container>
  </Layout>
)

export default ContactPage
