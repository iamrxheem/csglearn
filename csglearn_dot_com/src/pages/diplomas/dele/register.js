import React from "react"
import { Link } from "gatsby"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import { Breadcrumb, BreadcrumbItem } from "shards-react"
import { useForm, useField, splitFormProps } from "react-form"

const Page = () => (
  <Layout>
    <SEO
      title="Register for the Spanish DELE Exam in Jamaica"
      description="Resgister for and sit the Spanish DELE exam in Jamaica. Call or WhatsApp (876) 707-3443 to get started."
      lang="en"
    />
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
      <BreadcrumbItem active>Register</BreadcrumbItem>
    </Breadcrumb>

    <h5>Register</h5>
    <br />

    <iframe
      id="JotFormIFrame-203255137832048"
      title="Form"
      onLoad="window.parent.scrollTo(0,0)"
      allowTransparency="true"
      allowFullscreen="true"
      allow="geolocation; microphone; camera"
      src="https://form.jotform.com/203255137832048"
      frameBorder="0"
      style={{
        minWidth: "100%",
        height: "539px",
        border: "none",
        scrolling: "no"
      }}
    >
      Your browser does not support iframes.
    </iframe>
  </Layout>
)

export default Page
