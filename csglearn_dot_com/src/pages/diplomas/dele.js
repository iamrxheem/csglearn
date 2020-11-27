import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import {
  Breadcrumb,
  Button,
  BreadcrumbItem,
  Row,
  Col,
  Alert
} from "shards-react"
import { isMobile, MobileView, BrowserView } from "react-device-detect"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Diplomas in Spanish as a Foreign Language (DELE) in Jamaica"
      description="Study and take the International Spanish Language Certification (DELE Exam) in Jamaica with CSG Learning Institute. Call or WhatsApp (876) 707-3443 to get started."
      lang="en"
    />
    <Breadcrumb>
      <BreadcrumbItem>
        <a href="/">Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a href="/diplomas/">Diplomas</a>
      </BreadcrumbItem>
      <BreadcrumbItem active>DELE</BreadcrumbItem>
    </Breadcrumb>
  </Layout>
)

export default IndexPage
