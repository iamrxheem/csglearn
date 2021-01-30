import React, { Component } from "react"
import DELEMenu from "../menus/deleMenu"
import TopNav from "../components/topNav"
import { MobileView, BrowserView } from "react-device-detect"
import "../components/layout.css"
import Footer from "../components/footer"
import { Container, Nav, NavLink, Alert, NavItem } from "shards-react"
import ImportPage from "../components/import"
import { Link } from "gatsby"

class DELELayout extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <ImportPage />
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

        <DELEMenu />

        {/* Browswe view */}
        <div className="d-none d-md-block">
          <img
            style={{ width: "100%" }}
            className="d-block w-100"
            src="https://dl.dropbox.com/s/ddh0rfj7swit71a/WhatsApp%20Image%202021-01-05%20at%2011.15.59%20AM.jpeg?dl=0"
            alt="First slide"
          />
        </div>

        {/* Mobile View */}
        <div className="d-block d-md-none">
          <img
            style={{ width: "100%", height: "100%" }}
            src="https://i.imgur.com/w626x26.jpg"
          />

          <br />

          <Nav
            fill
            style={{
              paddingTop: "15px",
              paddingBottom: "15px",
              backgroundColor: "#d9534f"
            }}
          >
            <NavItem>
              <Link
                className="nav-link"
                style={{ textDecoration: "none", color: "white" }}
                to="/diplomas/dele/tuition"
              >
                TUITION & FEES
              </Link>
            </NavItem>
            <NavItem style={{ textDecoration: "none" }} href="/inquire">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/diplomas/dele/apply"
                className="nav-link"
              >
                APPLY NOW
              </Link>
            </NavItem>
          </Nav>
          <br />
        </div>

        {/* Broswer view */}
        <div className="d-none d-md-block">
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
                href="/diplomas/dele/tuition"
              >
                TUITION & FEES
              </NavLink>
            </NavItem>
            <NavItem style={{ textDecoration: "none" }} href="/inquire">
              <Link
                className="nav-link"
                style={{ textDecoration: "none", color: "white" }}
                to="/diplomas/dele/FAQs"
              >
                PROGRAMME FAQs
              </Link>
            </NavItem>
            <NavItem style={{ textDecoration: "none" }} href="/inquire">
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                href="/diplomas/dele/apply"
              >
                APPLY NOW
              </NavLink>
            </NavItem>
          </Nav>
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

export default DELELayout
