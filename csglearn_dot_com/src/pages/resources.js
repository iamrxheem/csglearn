import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Breadcrumb, BreadcrumbItem } from "shards-react"

const Page = () => (
  <Layout>
    <SEO
      title="Resources"
      description="Learn more about our tools and services and how you can benefit. Find scholarships, student jobs and much more!"
      lang="en"
    />
    <Breadcrumb>
      <BreadcrumbItem>
        <a href="/">Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem active>Resources</BreadcrumbItem>
    </Breadcrumb>

    <h5>Resources</h5>

    <br />
    <span>This is resources.</span>
  </Layout>
)

export default Page
