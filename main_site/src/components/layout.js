import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// Header and Footer
import Header from "./header"
import Footer from "./footer/footer"

// CSS and imports
import "../assets/css/bulma-tabs.css"
import "../assets/css/bulma-icons.css"
import "../assets/css/design-cards.css"

// All imports
import ImportPage from "./imports/imports"
import SiteAlert from "./siteAlert"

class Layout extends React.Component {
  render() {
    return (
      <>
        <ImportPage />

        {this.props.hideMenu ? null : (
          <Header
            replaceTopImg={this.props.replaceTopImg}
            topImg="https://i.ytimg.com/vi/C3XwcFQmQA4/maxresdefault.jpg"
            enroll={this.props.enroll}
            hideApplyButton
          />
        )}

        {this.props.hideAlert ? null : <SiteAlert />}
        <main>{this.props.children}</main>

        <Footer />
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
