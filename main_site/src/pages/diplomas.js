import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// View Components
import MobileView from "../common/mobileView"
import BrowserView from "../common/browserView"

import { Container, Breadcrumb, BreadcrumbItem } from "shards-react"

const Page = () => (
  <Layout>
    <SEO
      title="Accredited Diplomas"
      description="Enroll in an accredited diploma and certifications today. Diplomas include the ACCA, Diplomas in Spanish, Diplomas in French and more."
    />

    <Container>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>Diplomas</BreadcrumbItem>
      </Breadcrumb>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </Container>
  </Layout>
)

export default Page
