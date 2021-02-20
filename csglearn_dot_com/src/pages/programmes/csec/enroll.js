import React from "react"
import { Link } from "gatsby"

import SEO from "../../../components/seo"
import { Breadcrumb, BreadcrumbItem } from "shards-react"
import { Alert, Button, Row, Col, Container } from "shards-react"
import CSECLayout from "../../../layouts/csecLayout"
import JotformEmbed from "react-jotform-embed"

const Page = () => (
  <CSECLayout>
    <Container>
      <SEO
        title="Enroll Today - Online CSEC Classes"
        description="Enroll in online CSEC classes with CSEC classes and exam registration with CSG Learning Institute for September 2021."
        lang="en"
      />
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="/programmes/">Programmes</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="/programmes/csec">CSEC</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Enroll</BreadcrumbItem>
      </Breadcrumb>

      <h5>Enroll</h5>

      <br />
      <span>
        Our 4-months crash course begins on Monday, February 8, 2021. Please use
        this form to enroll. If you wish to inquire only , please
        <a
          target="_blank"
          href="https://api.whatsapp.com/send/?phone=18767073443&text&app_absent=0"
        >
          {" "}
          contact us on WhatsApp
        </a>
      </span>

      <br />
      <br />
      <iframe
        style={{ width: "100%" }}
        src="https://docs.google.com/forms/d/e/1FAIpQLSeizcVb8ccN99RZ_gKpL_MYrpQM69DVZHVFDuXYgLNWAOxBJg/viewform?embedded=true"
        width="640"
        height="1968"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
      >
        Loading…
      </iframe>
    </Container>
  </CSECLayout>
)

export default Page
