import React, { Component } from "react"
import CSECMenu from "../menus/csecMenu"
import TopNav from "../components/topNav"
import { MobileView, BrowserView } from "react-device-detect"
import "../components/layout.css"
import ImportPage from "../components/import"
import Footer from "../components/footer"
import { Container, Nav, NavLink, Alert, NavItem } from "shards-react"

class CSECLayout extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <ImportPage />
        {/* Mobile View  */}
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
        {/* Broswer view */}
        <div className="d-none d-md-block">
          <TopNav />
        </div>
        {/* End TopNav */}

        <CSECMenu />

        <div className="d-none d-md-block">
          <img
            src="https://dl.dropbox.com/s/wwwiafaz55s6dhs/WhatsApp%20Image%202021-01-08%20at%208.42.44%20PM.jpeg?dl=0"
            style={{ width: "100%" }}
          />
        </div>

        {/* Mobile View */}
        <div className="d-block d-md-none">
          <img
            src="https://loopnewslive.blob.core.windows.net/liveimage/sites/default/files/2020-09/Di3GpPFEwP.jpg"
            style={{ width: "100%" }}
          />
          <Nav
            fill
            style={{
              paddingTop: "15px",
              paddingBottom: "15px",
              backgroundColor: "#d9534f"
            }}
          >
            <NavItem>
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                href="/programmes/csec/tuition"
              >
                TUITION & FEES
              </NavLink>
            </NavItem>
            <NavItem style={{ textDecoration: "none" }} href="/inquire">
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                href="/programmes/csec/apply"
              >
                APPLY NOW
              </NavLink>
            </NavItem>
          </Nav>
          <br />
        </div>

        {/* Browser View */}
        <div className="d-none d-md-block">
          <br />
          <br />
        </div>

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

export default CSECLayout
