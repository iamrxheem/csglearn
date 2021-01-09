import React from "react"
import { Link } from "gatsby"
import DELFLayout from "../../../layouts/delfLayout"
import SEO from "../../../components/seo"
import { Breadcrumb, BreadcrumbItem, Container, Row, Col } from "shards-react"
import Faq from "react-faq-component"
import { MobileView } from "react-device-detect"
import DELFMiniMenu from "../../../common/delfMiniMenu"

const Page = () => (
  <>
    <DELFLayout>
      <SEO title="Fees and Tuitions - DELF" description="" lang="en" />

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

        <h5>Fees and Tuition</h5>

        <br />
        <DELFMiniMenu />

        <br />
        <span>
          A complete list of fees and tuition will be available when
          registration opens.
        </span>

        <br />
      </Container>
    </DELFLayout>
  </>
)

export default Page
