import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// Header and Footer
import Header from "../components/header"
import Footer from "../components/footer/footer"

// Menu
import SixthFormMenu from "../menus/sixthFormMenu"

// CSS and imports
import "../assets/css/bulma-tabs.css"
import "../assets/css/bulma-icons.css"

import StudentImage from "../images/black-college-student.jpg"

// All imports
import ImportPage from "../components/imports/imports"

// View Components
import MobileView from "../common/mobileView"

class SixthFormLayout extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <ImportPage />
        <SixthFormMenu target="_blank" enroll={this.props.enroll} />
        <MobileView>
          <img src={StudentImage} style={{ width: "100%" }} />
        </MobileView>
        <main>{this.props.children}</main>
        <Footer />
      </>
    )
  }
}

SixthFormLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default SixthFormLayout
