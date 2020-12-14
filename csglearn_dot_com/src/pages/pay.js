import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Breadcrumb, BreadcrumbItem, Container } from "shards-react"
import { MobileView, BrowserView } from "react-device-detect"

const Page = () => (
  <Layout>
    <SEO
      title="Pay a Fee"
      description="Learn more about our tools and services and how you can benefit. Find scholarships, student jobs and much more!"
      lang="en"
    />

    <Container>
      <MobileView>
        <img
          src="https://www.caasda.com/images/2016/10/24/pay-tuition-image.jpg"
          className="break-out"
        />
      </MobileView>

      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Pay</BreadcrumbItem>
      </Breadcrumb>

      <h5>Fees and Tuition Payment</h5>
      <br />

      <span></span>
    </Container>
  </Layout>
)

export default Page
