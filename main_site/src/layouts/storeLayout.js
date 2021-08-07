import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// Header and Footer
import Header from "../components/header"
import Footer from "../components/footer/footer"
import { Helmet } from "react-helmet"

// CSS and imports
import "../assets/css/bulma-tabs.css"
import "../assets/css/bulma-icons.css"
import "../assets/css/design-cards.css"

// All imports
import ImportPage from "../components/imports/imports"

class StoreLayout extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <meta charset="UTF-8" />
          <title>{this.props.title} | CSG Learning Store</title>
          <meta name="description" content={this.props.description} />
          <meta name="author" content={this.props.author} />
          <meta name="keywords" content={this.props.keywords + ``} />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <base href="https://www.csglearn.com/" target="_blank" />
        </Helmet>

        <ImportPage />

        <Header enroll="/apply" />

        <main>{this.props.children}</main>

        <Footer />
        <Footer />
        <Footer />
        <Footer />
        <Footer />
        <Footer />
        <Footer />
        <Footer />
      </>
    )
  }
}

StoreLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default StoreLayout
