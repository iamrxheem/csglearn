import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

class IndexPage extends Component {
  render() {
    return (
      <>
        <Layout>
          <SEO title="Home" />
        </Layout>
      </>
    )
  }
}

export default IndexPage
