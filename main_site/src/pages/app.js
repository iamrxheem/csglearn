import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// View Components
import MobileView from "../common/mobileView"
import BrowserView from "../common/browserView"

// App Components
import AppSlider from "../home/appSlider/appSlider"
import AppPromo from "../home/appPromo"

import { Container, Breadcrumb, BreadcrumbItem, Row, Col } from "shards-react"

const ContactPage = () => (
  <Layout>
    <SEO
      title="Use the App"
      description="Use the app instead! Take your online learning experience offline with the CSG Learning Institute mobile app, powered by Moodle and OpenLMS. Download today from the Google Play or App Store. "
    />

    <AppSlider />
    <AppPromo />
  </Layout>
)

export default ContactPage
