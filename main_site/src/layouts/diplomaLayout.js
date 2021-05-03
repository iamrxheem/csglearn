import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// Header and Footer
import Header from "../components/header"
import Footer from "../components/footer/footer"

// Menu
import DiplomaMenu from "../menus/diplomaMenu"
import DiplomaMiniMenu from "../components/miniMenus/diplomaMiniMenu"

// CSS and imports
import "../assets/css/bulma-tabs.css"
import "../assets/css/bulma-icons.css"

import Image from "../images/black-college-student.jpg"

// All imports
import ImportPage from "../components/imports/imports"

// View Components
import MobileView from "../common/mobileView"

class DiplomaLayout extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <ImportPage />
        <DiplomaMenu enroll={this.props.enroll} tuition={this.props.tuition} />
        <MobileView>
          {this.props.showBreak ? <br /> : null}
          <img
            className={this.props.container === true ? "container" : ""}
            src={Image}
            style={{ width: "100%" }}
          />
          <br />
          <br />
          <DiplomaMiniMenu
            enroll={this.props.enroll}
            tuition={this.props.tuition}
          />
        </MobileView>
        <main>{this.props.children}</main>
        <Footer />
      </>
    )
  }
}

DiplomaLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default DiplomaLayout
