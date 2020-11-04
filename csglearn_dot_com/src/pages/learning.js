import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Breadcrumb, BreadcrumbItem } from "shards-react"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Learning Certificates of Completion"
      description="CSG Learning Institute is a private training institution that offers a range of examination preparation programmes."
      lang="en"
    />
    <Breadcrumb>
      <BreadcrumbItem>
        <a href="/">Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem active>Learning Certificates</BreadcrumbItem>
    </Breadcrumb>

    <h5>Learning Certificates of Completion</h5>

    <br />
    <span>
      CSG Learning is proud to offer Certificates of Completion to students who
      complete courses with us.
    </span>
  </Layout>
)

export default IndexPage
