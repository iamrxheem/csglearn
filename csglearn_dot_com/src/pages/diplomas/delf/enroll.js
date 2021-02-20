import React from "react"
import { Link } from "gatsby"
import DELFLayout from "../../../layouts/delfLayout"
import SEO from "../../../components/seo"
import { Breadcrumb, BreadcrumbItem, Container, Row, Col } from "shards-react"
import Faq from "react-faq-component"
import { MobileView } from "react-device-detect"
import DELFMiniMenu from "../../../common/delfMiniMenu"
import DelfApplyFormComponent from "../../../formComponents/delfApplyFormComponent"
import JotformEmbed from "react-jotform-embed"

const Page = () => (
  <>
    <DELFLayout>
      <SEO
        title="Enroll - Diploma in French"
        description="Enroll in the accredited Diploma in French as a Foregign Langauge (DELF & DALF) online and start learning with CSG Learning Institute."
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
          <BreadcrumbItem active>Enroll Now</BreadcrumbItem>
        </Breadcrumb>

        <h3>Enroll in the Diploma in French</h3>
        <br />
        <DELFMiniMenu />

        <br />
        <span>
          Please complete this form to enroll in the Diploma in French. If you
          wish to inquire, please review our{" "}
          <a href="/diplomas/delf/FAQs" target="_blank">
            frequently asked questions
          </a>{" "}
          or <a href="mailto:info@csglearn.com">send us an email</a>. Otherwise,
          please complete the below form to enroll.
        </span>
        <br />
        <br />
        <br />
        <DelfApplyFormComponent />
        <br />
      </Container>
    </DELFLayout>
  </>
)

export default Page
