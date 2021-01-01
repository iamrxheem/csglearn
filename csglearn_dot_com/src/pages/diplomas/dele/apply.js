import React from "react"
import { Link } from "gatsby"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import { Breadcrumb, BreadcrumbItem, Container } from "shards-react"
import { useForm, useField, splitFormProps } from "react-form"
import DELELayout from "../../../layouts/deleLayout"

const Page = () => (
  <DELELayout>
    <SEO
      title="Register for the Spanish DELE Exam in Jamaica"
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
        <BreadcrumbItem active>Register</BreadcrumbItem>
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
        id="JotFormIFrame-203255137832048"
        title="CSG Learning DELE Registration Form"
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

      <br />
      <br />
      <span>
        The DELE is an in-person exam. Therefore, the examiner will need to
        match your face to your ID upon registration and when you are at the
        exam site.
      </span>

      <br />
      <br />
      <span>
        Accepted IDs includes government-issued IDs, such as your passport,
        national ID, state ID or driver's license. School or work IDs are not
        allowed.
      </span>
    </Container>
  </DELELayout>
)

export default Page
