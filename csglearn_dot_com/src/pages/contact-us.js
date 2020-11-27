import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { isMobile, MobileView } from "react-device-detect"
import { Breadcrumb, BreadcrumbItem } from "shards-react"

import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button,
  Row,
  Col
} from "shards-react"

const Page = () => (
  <Layout>
    <SEO
      title="Contact Us"
      description="Developing · Chat live with sales · Contact sales: 1-876-565-3942 · Looking for help & support? Click here."
      lang="en"
    />

    <Breadcrumb>
      <BreadcrumbItem>
        <a href="/">Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem active>Contact Us</BreadcrumbItem>
    </Breadcrumb>
    <br />

    <Row>
      <Col sm={6} md={6} lg={6}></Col>
      <Col sm={6} md={6} lg={6}></Col>
    </Row>
  </Layout>
)

export default Page
