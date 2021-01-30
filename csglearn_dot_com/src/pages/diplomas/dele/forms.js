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
      <SEO
        title="Forms and Documents - DELE"
        description="View a complete list of forms and documents for the Diplomas in Spanish (DELE). Enroll today and start learning Spanish from scratch."
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
            <a href="/diplomas/dele">DELE</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>Forms</BreadcrumbItem>
        </Breadcrumb>

        <h5>Forms and Documents</h5>

        <br />
        <span>Forms and documents are not yet available.</span>

        <br />
      </Container>
    </DELELayout>
  </>
)

export default Page
