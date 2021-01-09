import React from "react"
import { Link } from "gatsby"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import { Breadcrumb, BreadcrumbItem, Container } from "shards-react"
import { useForm, useField, splitFormProps } from "react-form"
import DELELayout from "../../../layouts/deleLayout"
import JotformEmbed from "react-jotform-embed"

const DELEApplyPage = () => (
  <DELELayout>
    <SEO
      title="Apply Now | Spanish DELE Exam"
      description="Resgister for and sit the Spanish DELE exam in Jamaica. Call or WhatsApp (876) 707-3443 to get started."
      lang="en"
    />
    <Container>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="/diplomas/">Diplomas</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="/diplomas/dele">DELE</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Apply</BreadcrumbItem>
      </Breadcrumb>

      <h5>Apply</h5>
      <br />

      <span>
        Please complete this form to begin the registration process. Note,
        additional information may be required depending on the exam level
        chosen.
      </span>

      <br />
      <br />
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdUSec1nePgk67RJV9GdAanj1zZdjTdegajE9VvoDVuwAZNDw/viewform?embedded=true"
        style={{ width: "100%" }}
        height="3227"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
      >
        Loading…
      </iframe>

      <br />
    </Container>
  </DELELayout>
)

export default DELEApplyPage
