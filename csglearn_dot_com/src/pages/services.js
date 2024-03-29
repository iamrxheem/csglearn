import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Breadcrumb, BreadcrumbItem } from "shards-react"

const Page = () => (
  <Layout>
    <SEO
      title="Services"
      description="Learn more about our tools and services and how you can benefit. Find scholarships, student jobs and much more!"
      lang="en"
    />
    <Breadcrumb>
      <BreadcrumbItem>
        <a href="/">Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem active>Services</BreadcrumbItem>
    </Breadcrumb>

    <h5>Services</h5>

    <br />
    <span></span>

    <a href="/services/career-planning">Career Planning</a>
  </Layout>
)

export default Page
