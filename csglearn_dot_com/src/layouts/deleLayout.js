import React, { Component } from "react"
import DELEMenu from "../menus/deleMenu"
import TopNav from "../components/topNav"
import { MobileView, BrowserView } from "react-device-detect"
import "../components/layout.css"
import Footer from "../components/footer"
import { Container, Nav, NavLink, Alert, NavItem } from "shards-react"
import { isMobile } from "mobile-device-detect"

class DELELayout extends Component {
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

        <DELEMenu />

        {isMobile ? (
          <>
            <img
              style={{ width: "100%", height: "100%" }}
              src="https://gotocollegenyc.org/wp-content/uploads/2016/08/male-on-campus.jpg"
            />
            <Alert style={{ clear: "both" }} theme="danger">
              <Nav fill>
                <NavItem>
                  <NavLink
                    style={{ textDecoration: "none" }}
                    href="/diplomas/dele/tuition"
                  >
                    TUITION & FEES
                  </NavLink>
                </NavItem>
                <NavItem style={{ textDecoration: "none" }} href="/inquire">
                  <NavLink
                    style={{ textDecoration: "none" }}
                    href="/diplomas/dele/apply"
                  >
                    APPLY NOW
                  </NavLink>
                </NavItem>
              </Nav>
            </Alert>
          </>
        ) : (
          <>
            <img
              style={{ width: "100%", height: "100%" }}
              src="https://www.mona.uwi.edu/sites/default/files/uwi/step-by-step-to-applying.jpg"
            />

            <Alert style={{ clear: "both" }} theme="danger">
              <Nav fill>
                <NavItem>
                  <NavLink
                    style={{ textDecoration: "none" }}
                    href="/diplomas/dele/tuition"
                  >
                    TUITION & FEES
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink style={{ textDecoration: "none" }} href="/inquire">
                    INQUIRE
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    style={{ textDecoration: "none" }}
                    href="/diplomas/dele/apply"
                  >
                    APPLY NOW
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    style={{ textDecoration: "none" }}
                    href="/diplomas/dele/contact"
                  >
                    CONTACT US
                  </NavLink>
                </NavItem>
              </Nav>
            </Alert>
          </>
        )}

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

export default DELELayout
