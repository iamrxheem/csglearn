import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Breadcrumb, BreadcrumbItem } from "shards-react"

const IndexPage = () => (
  <Layout>
    <SEO title="Career Planning" description="" lang="en" />
    <Breadcrumb>
      <BreadcrumbItem>
        <a href="/">Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a href="/services/">Services</a>
      </BreadcrumbItem>
      <BreadcrumbItem active>Career Planning</BreadcrumbItem>
    </Breadcrumb>

    <h5>Career Planning</h5>

    <br />
    <span></span>
  </Layout>
)

export default IndexPage
