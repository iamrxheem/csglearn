import React from "react"
import { Link } from "gatsby"
import DELFLayout from "../../../layouts/delfLayout"
import SEO from "../../../components/seo"
import { Breadcrumb, BreadcrumbItem, Container, Row, Col } from "shards-react"
import Faq from "react-faq-component"
import { MobileView } from "react-device-detect"
import DELFMiniMenu from "../../../common/delfMiniMenu"
import WordFile from "../../../common/wordFile"

const Page = () => (
  <>
    <DELFLayout>
      <SEO
        title="Forms and Documents - Diploma in French"
        description=""
        lang="en"
      />

      <Container>
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="/diplomas">Diplomas</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="/diplomas/delf">DELF</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>Forms</BreadcrumbItem>
        </Breadcrumb>

        <h5>Forms and Documents</h5>

        <Row>
          <Col xs={12} md={6}>
            <br />
            <DELFMiniMenu />
            <br />

            <span>Not yet available.</span>
          </Col>
          <Col xs={12} md={6}></Col>
        </Row>

        <br />
      </Container>
    </DELFLayout>
  </>
)

export default Page
