import * as React from "react"
import { Link } from "gatsby"

import OpenLayout from "../open/openLayout"
import SEO from "../components/seo"

// View Components
import MobileView from "../common/mobileView"
import BrowserView from "../common/browserView"

import { Container, Breadcrumb, BreadcrumbItem, Row, Col } from "shards-react"

const Page = () => (
  <OpenLayout>
    <SEO title="Open Campus" description="" />
  </OpenLayout>
)

export default Page
