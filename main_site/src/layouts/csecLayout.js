import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// Header and Footer
import Header from "../components/header"
import Footer from "../components/footer/footer"

import { Container, Row, Col } from "react-bootstrap"
// Menu
import CSECMenu from "../menus/csecMenu"

// CSS and imports
import "../assets/css/bulma-tabs.css"
import "../assets/css/bulma-icons.css"

import StudentImage from "../images/young-student.jpg"
import CsecMiniMenu from "../components/miniMenus/csecMiniMenu"

// All imports
import ImportPage from "../components/imports/imports"

// View Components
import MobileView from "../common/mobileView"
import BrowserView from "../common/browserView"
import { isIOS } from "react-device-detect"

// Videos
import StudentVideo from "../videos/csec.mp4"

class CSECLayout extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <ImportPage />
        <CSECMenu target="_blank" enroll={this.props.enroll} />
        <MobileView>
          <video
            style={{ width: "100%" }}
            preload="auto"
            autoPlay={true}
            loop
            muted
          >
            <source src={StudentVideo} type="video/mp4" />
          </video>
        </MobileView>
        <main>
          <Container>
            {this.props.breadcrumbs}

            <Row>
              <Col md={7}>
                <h3>{this.props.title}</h3>

                <br />
                <CsecMiniMenu enroll={this.props.enroll} />

                <br />
                {this.props.children}
              </Col>
              <Col md={5}>
                <BrowserView>
                  <video
                    style={{ width: "100%" }}
                    preload="auto"
                    autoPlay={true}
                    loop
                    muted
                  >
                    <source src={StudentVideo} type="video/mp4" />
                  </video>
                </BrowserView>

                <br />
                {this.props.summary}
              </Col>
            </Row>

            {this.props.faq}
          </Container>
        </main>
        <Footer />
      </>
    )
  }
}

CSECLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default CSECLayout
