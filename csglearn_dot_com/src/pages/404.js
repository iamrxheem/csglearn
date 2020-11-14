import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Breadcrumb, BreadcrumbItem } from "shards-react"

const NotFoundPage = () => (
  <Layout>
    <SEO
      title="Page Not Found"
      description="CSG Learning Institute is a Jamaica-based private training institution that offers a range of examination preparation programmes and learning certifications, and extends is services to online learning in the Caribbean."
      lang="en"
    />
    <Breadcrumb>
      <BreadcrumbItem>
        <a href="/">Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem active>Page Not Found</BreadcrumbItem>
    </Breadcrumb>

    <h5>Page Not Found</h5>
  </Layout>
)

export default NotFoundPage
