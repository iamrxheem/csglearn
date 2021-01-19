import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Breadcrumb, BreadcrumbItem, Container } from "shards-react"

const Page = () => (
  <Layout>
    <SEO
      title="Support"
      description="Get help for your CSG Learning Institute service with our support options. Fix many of your issues online with our new tools. Contact an CSG Learning customer service representative."
      lang="en"
    />
    <Container>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Support</BreadcrumbItem>
      </Breadcrumb>

      <h5>Support</h5>

      <br />
    </Container>
  </Layout>
)

export default Page
