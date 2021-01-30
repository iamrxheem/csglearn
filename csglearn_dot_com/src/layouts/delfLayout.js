import React, { Component } from "react"
import DELFMenu from "../menus/delfMenu"
import TopNav from "../components/topNav"
import { MobileView, BrowserView } from "react-device-detect"
import "../components/layout.css"
import Footer from "../components/footer"
import { Container, Nav, NavLink, Alert, NavItem } from "shards-react"
import { isMobile } from "mobile-device-detect"
import ImportPage from "../components/import"

class DELFLayout extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <ImportPage />
        {/* Mobile View */}
        <div className="d-block d-md-none">
          <a href="/">
            <img
              src="https://i.imgur.com/IcviBO3.jpg"
              style={{ width: "100%" }}
            />
          </a>
        </div>

        {/*
          Top Navigation with with contact information for the company and
          quick links for subdomains.

          Browser view
        */}
        <div className="d-none d-md-block">
          <TopNav />
        </div>
        {/* End TopNav */}

        <DELFMenu />

        {/* Mobile view */}
        <div className="d-block d-md-none">
          <img
            style={{ width: "100%" }}
            className="d-block w-100"
            src="https://i.imgur.com/w626x26.jpg"
            alt="First slide"
          />
        </div>

        {/* Broswer View */}
        <div className="d-none d-md-block">
          <img
            style={{ width: "100%" }}
            className="d-block w-100"
            src="https://dl.dropbox.com/s/m3k97c8149s3omt/WhatsApp%20Image%202021-01-08%20at%201.59.29%20PM.jpeg?dl=0"
            alt="First slide"
          />
        </div>

        <br />
        <div style={{ backgroundColor: "#f6f6f6", marginTop: "-15px" }}>
          {/* Content */}
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

export default DELFLayout
