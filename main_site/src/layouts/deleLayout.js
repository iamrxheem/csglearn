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
import DeleStudentVideo from "../videos/dele-student-video.mp4"

// All imports
import ImportPage from "../components/imports/imports"

// View Components
import MobileView from "../common/mobileView"
import BrowserView from "../common/browserView"

import { isIOS } from "react-device-detect"

class DeleLayout extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <ImportPage />
        <DiplomaMenu
          target="_blank"
          enroll={this.props.enroll}
          tuition={this.props.tuition}
        />
        <MobileView>
          {this.props.showBreak ? <br /> : null}

          {isIOS ? (
            <>
              <img
                className={this.props.container === true ? "container" : ""}
                src={Image}
                style={{ width: "100%" }}
              />
            </>
          ) : (
            <>
              <video
                style={{ width: "100%" }}
                preload="auto"
                autoPlay={true}
                loop
                muted
              >
                <source src={DeleStudentVideo} type="video/mp4" />
              </video>
            </>
          )}

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

DeleLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default DeleLayout
