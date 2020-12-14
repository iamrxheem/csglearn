import React, { Component } from "react"
import AdmissionsMenu from "../menus/admissionsMenu"
import TopNav from "../components/topNav"
import { MobileView, BrowserView } from "react-device-detect"
import "../components/layout.css"
import Footer from "../components/footer"

class AdmissionsLayout extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <MobileView>
          <a href="/">
            <img
              src="https://i.imgur.com/IcviBO3.jpg"
              style={{ width: "100%", height: "100%" }}
            />
          </a>
        </MobileView>

        {/*
      Top Navigation with with contact information for the company and
      quick links for subdomains.
    */}
        <BrowserView>
          <TopNav />
        </BrowserView>
        {/* End TopNav */}

        <AdmissionsMenu />
        {this.props.children}

        <br />

        {/* General footer */}
        <Footer />
      </>
    )
  }
}

export default AdmissionsLayout
