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
        Registration opens <strong>Monday, July 19, 2021</strong>. Classes begin
        on <b>September 13, 2021</b>.
      </span>

      <br />
      <br />
    </Container>
  </CSECLayout>
)

export default Page
