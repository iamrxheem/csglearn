import React, { Component } from "react"
import SATMenu from "../menus/satMenu"
import TopNav from "../components/topNav"
import { MobileView, BrowserView } from "react-device-detect"
import "../components/layout.css"
import Footer from "../components/footer"
import { Container, Nav, NavLink, Alert, NavItem } from "shards-react"
import ImportPage from "../components/import"
import { Link } from "gatsby"

class SATLayout extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <div className="d-block d-md-none">
          <a href="/">
            <img
              src="https://i.imgur.com/IcviBO3.jpg"
              style={{ width: "100%", height: "100%" }}
            />
          </a>
        </div>

        {/*
      Top Navigation with with contact information for the company and
      quick links for subdomains.
    */}
        <div className="d-none d-md-block">
          <TopNav />
        </div>
        {/* End TopNav */}

        <SATMenu />

        {/* Browswe view */}
        <div className="d-none d-md-block"></div>

        {/* Mobile View */}
        <div className="d-block d-md-none">
          <img
            style={{ width: "100%", height: "100%" }}
            src="https://i.imgur.com/w626x26.jpg"
          />

          <br />
        </div>

        <div style={{ backgroundColor: "#f6f6f6", marginTop: "-15px" }}>
          {/* Content */}
          <br />
          {this.props.children}
          <br />
          <br />
        </div>

        {/* General footer */}
        <Footer />
      </>
    )
  }
}

export default SATLayout
