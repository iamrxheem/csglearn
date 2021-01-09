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
      <SEO title="Apply Now | CSEC Classes" description="" lang="en" />
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
        <BreadcrumbItem active>Apply</BreadcrumbItem>
      </Breadcrumb>

      <h5>Apply</h5>

      <br />
      <span>
        This form is only to be completed by candidates over 18 years of age or
        the parents or guardians on behalf of the minor.
      </span>

      <br />

      <span>
        Reminder, classes begin on <b>September 13, 2021</b>.
      </span>
      <br />
      <br />
    </Container>

    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSe6ue8tZts-zWsdtJ4AWNeJrt6z3V5kJ5frvMaqc4vUSJ-cSA/viewform?embedded=true"
      style={{ width: "100%" }}
      height="2097"
      frameBorder="0"
      marginHeight="0"
      marginWidth="0"
    >
      Loading…
    </iframe>
  </CSECLayout>
)

export default Page
