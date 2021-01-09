import React from "react"
import { Link } from "gatsby"
import DELELayout from "../../../layouts/deleLayout"
import SEO from "../../../components/seo"
import { Breadcrumb, BreadcrumbItem, Container, Row, Col } from "shards-react"
import Faq from "react-faq-component"
import { MobileView } from "react-device-detect"

const Page = () => (
  <>
    <DELELayout>
      <SEO title="Forms and Documents - DELF" description="" lang="en" />

      <Container>
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="/diplomas">Diplomas</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="/diplomas/dele">DELE</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>Forms</BreadcrumbItem>
        </Breadcrumb>

        <h5>Forms and Documents</h5>

        <br />
        <span>
          A complete list of forms and documents will be available when
          registration opens.
        </span>

        <br />
      </Container>
    </DELELayout>
  </>
)

export default Page
