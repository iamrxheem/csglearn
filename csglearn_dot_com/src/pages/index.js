import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Breadcrumb, BreadcrumbItem } from "shards-react"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      description="CSG Learning Institute is a private training institution that offers a range of examination preparation programmes."
      lang="en"
    />
    <Breadcrumb>
      <BreadcrumbItem>
        <a href="/">Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem active></BreadcrumbItem>
    </Breadcrumb>
    <></>
  </Layout>
)

export default IndexPage
