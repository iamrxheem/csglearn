import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Breadcrumb, BreadcrumbItem } from "shards-react"

const Page = () => (
  <Layout>
    <SEO
      title="Terms of Use"
      description="This note describes our terms of use."
      lang="en"
    />
    <Breadcrumb>
      <BreadcrumbItem>
        <a href="/">Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem active>Terms of Use</BreadcrumbItem>
    </Breadcrumb>
    <></>
  </Layout>
)

export default Page
