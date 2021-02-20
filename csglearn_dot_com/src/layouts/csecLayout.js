import React, { Component } from "react"
import CSECMenu from "../menus/csecMenu"
import TopNav from "../components/topNav"
import "../components/layout.css"
import ImportPage from "../components/import"
import Footer from "../components/footer"
import {  Nav, NavLink, NavItem } from "shards-react"

class CSECLayout extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <ImportPage />

        {this.props.hideLogo ? (
          <></>
        ) : (
          <>
            {/* Mobile View  */}
            <div className="d-block d-md-none">
              <a href="/">
                <img
                  src="https://i.imgur.com/IcviBO3.jpg"
                  style={{ width: "100%", height: "100%" }}
                />
              </a>
            </div>
          </>
        )}

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

        {/* Mobile View */}
        <div className="d-block d-md-none" style={{ clear: "both" }}>
          {this.props.swapImg === true ? (
            <>
              <img src={this.props.img} style={{ width: "100%" }} />
            </>
          ) : (
            <>
              <img
                src="https://loopnewslive.blob.core.windows.net/liveimage/sites/default/files/2020-09/Di3GpPFEwP.jpg"
                style={{ width: "100%" }}
              />
            </>
          )}

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
                href="/programmes/csec/enroll"
              >
                ENROLL NOW
              </NavLink>
            </NavItem>
          </Nav>
        </div>

        <div style={{ backgroundColor: "#f6f6f6" }}>
          <br />
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
