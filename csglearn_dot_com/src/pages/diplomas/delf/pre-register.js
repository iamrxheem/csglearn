import React from "react"
import { Link } from "gatsby"
import DELFLayout from "../../../layouts/delfLayout"
import SEO from "../../../components/seo"
import { Breadcrumb, BreadcrumbItem, Container, Row, Col } from "shards-react"
import Faq from "react-faq-component"
import { MobileView } from "react-device-detect"
import DELFMiniMenu from "../../../common/delfMiniMenu"
import JotformEmbed from "react-jotform-embed"

const Page = () => (
  <>
    <DELFLayout>
      <SEO title="Forms and Documents" description="" lang="en" />

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
          <BreadcrumbItem active>Pre-Register</BreadcrumbItem>
        </Breadcrumb>
        <h5>Pre-Register</h5>
        <br />
        <DELFMiniMenu />
        <br />
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfYfuNtWzDTXTMZgnu3WPvcwYveVUL_mYBBeoY_TFZE4hbq5w/viewform?embedded=true"
          style={{ width: "100%" }}
          height="2030"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading…
        </iframe>
        <br />
      </Container>
    </DELFLayout>
  </>
)

export default Page
