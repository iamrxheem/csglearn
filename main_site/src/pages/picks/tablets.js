import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

// Picks
import PickBox from "../../common/pickBox"
import PickDisplay from "../../common/pickDisplay"

// View Components
import MobileView from "../../common/mobileView"
import BrowserView from "../../common/browserView"
import { Helmet } from "react-helmet"
import {
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Col,
  Alert
} from "shards-react"
import { isIOS } from "react-device-detect"

const Page = () => (
  <Layout hideAlert>
    <SEO title="Top Picks for Laptops & Tablets on Amazon" description="" />

    <Container style={{ paddingTop: "10px" }}>
      <br />
      <Row>
        <PickBox href="/picks" src="" title="This is the title" />
        <PickBox href="/picks" src="" title="This is the title" />
        <PickBox href="/picks" src="" title="This is the title" />
        <PickBox href="/picks" src="" title="This is the title" />
        <PickBox href="/picks" src="" title="This is the title" />
      </Row>
    </Container>
  </Layout>
)

export default Page
