import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// Header and Footer
import Header from "../components/header"
import Footer from "../components/footer/footer"

// Menu
import LiteracyProgrammeMenu from "../menus/literacyMenu"

// CSS and imports
import "../assets/css/bulma-tabs.css"
import "../assets/css/bulma-icons.css"

import Image from "../images/abc.png"

// All imports
import ImportPage from "../components/imports/imports"

// View Components
import MobileView from "../common/mobileView"

class LiteracyProgrammeLayout extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <ImportPage />
        <LiteracyProgrammeMenu target="_blank" enroll={this.props.enroll} />
        <MobileView>
          {this.props.showBreak ? <br /> : null}
          <img
            className={this.props.container === true ? "container" : ""}
            src={this.props.image}
            style={{ width: "100%" }}
          />
        </MobileView>
        <main>{this.props.children}</main>
        <Footer />
      </>
    )
  }
}

LiteracyProgrammeLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default LiteracyProgrammeLayout
