import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Breadcrumb, BreadcrumbItem } from "shards-react"

const Page = () => (
  <Layout>
    <SEO
      title="Privacy Policy"
      description="This note describes our privacy policy and cookies."
      lang="en"
    />
    <Breadcrumb>
      <BreadcrumbItem>
        <a href="/">Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem active>Privacy Policy</BreadcrumbItem>
    </Breadcrumb>
    <></>
  </Layout>
)

export default Page
