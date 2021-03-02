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
import GeneralProgrammeApplicationComponent from "../../../components/generalProgrammeApplicationComponent"

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
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfYfuNtWzDTXTMZgnu3WPvcwYveVUL_mYBBeoY_TFZE4hbq5w/viewform?embedded=true"
          width="640"
          height="3611"
          style={{ frameBorder: "0", width: "100%" }}
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading…
        </iframe>
        <br />

        <br />
        <a href="https://forms.gle/WaihVLtRUxZV1Xic6" target="_blank">
          Open form in a new tab
        </a>
      </Container>
    </DELFLayout>
  </>
)

export default Page
