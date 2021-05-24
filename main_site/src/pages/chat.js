import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// View Components
import MobileView from "../common/mobileView"
import BrowserView from "../common/browserView"
import { Helmet } from "react-helmet"

import { Container, Breadcrumb, BreadcrumbItem } from "shards-react"

const Page = () => (
  <Layout>
    <SEO title="Online Chat" description="" />

    <Container fluid>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>Online Chat</BreadcrumbItem>
      </Breadcrumb>

      <div className="iframe-container">
        <iframe src="https://tawk.to/chat/60561c51067c2605c0ba8e34/1f185t7po" />
      </div>
    </Container>
  </Layout>
)

export default Page
