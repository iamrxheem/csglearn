import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import "../assets/js/ecwid.js"

// View Components
import MobileView from "../common/mobileView"
import BrowserView from "../common/browserView"

import {
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Col,
  Button,
  Alert
} from "shards-react"

class Agreements extends React.Component {
  executeOnClick(isExpanded) {
    console.log(isExpanded)
  }

  render() {
    return (
      <>
        <Layout hideAlert hideMenu>
          <SEO title="Online Store" description="" />

          <frameset rows="100%">
            <frame
              name=""
              src="https://csglearn.company.site/?lang=en&from_admin"
            />
            <noframes>
              <body>Your browser does not support frames.</body>
            </noframes>
          </frameset>
        </Layout>
      </>
    )
  }
}

export default Agreements
