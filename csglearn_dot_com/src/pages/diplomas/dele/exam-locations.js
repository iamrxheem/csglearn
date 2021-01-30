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
        title="DELE Exam Locations"
        description="View a complete list of examiniation centres for the Diplomas in Spanish (DELE). Enroll today and start learning Spanish from scratch."
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
          <BreadcrumbItem active>Exam Locations</BreadcrumbItem>
        </Breadcrumb>

        <h5>Exam Locations</h5>

        <br />
        <span>Exam locations wil be available closer towards exam date.</span>

        <br />
      </Container>
    </DELELayout>
  </>
)

export default Page
