import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Breadcrumb, BreadcrumbItem } from "shards-react"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Diplomas"
      description="Enroll in overseas accredited and recognised diploma and give your career a head start. Visit CSG Learning Institute today to find out how."
      lang="en"
    />
    <Breadcrumb>
      <BreadcrumbItem>
        <a href="/">Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem active>Diplomas</BreadcrumbItem>
    </Breadcrumb>

    <h5>Diplomas</h5>

    <br />
  </Layout>
)

export default IndexPage
