import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// View Components
import MobileView from "../common/mobileView"
import BrowserView from "../common/browserView"

import { Container, Breadcrumb, BreadcrumbItem } from "shards-react"

const iframeStyle = {
  width: "100%",
  height: "750px"
}

const Interviews = () => (
  <Layout>
    <SEO
      title="Schedule an Interview"
      description="Received an interview request? Use our online scheduling portal here and we'll contact you when it's time."
    />

    <Container>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>Interviews</BreadcrumbItem>
      </Breadcrumb>

      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/csglearn/"
        style={{ width: "auto", height: "750px" }}
      ></div>
    </Container>
  </Layout>
)

export default Interviews
