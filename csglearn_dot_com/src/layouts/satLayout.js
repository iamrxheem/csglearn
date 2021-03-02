import React, { Component } from "react"
import SATMenu from "../menus/satMenu"
import TopNav from "../components/topNav"
import "../components/layout.css"
import Footer from "../components/footer"
import YoungManSmilingImg from "../images/bbmsml.jpg"
import SATImage from "../images/cc-sat.png"
import CSGLearningTopImage from "../images/top-logo.jpg"

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
              alt="CSG Learning Institute company logo"
              src={CSGLearningTopImage}
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
            src={YoungManSmilingImg}
          />

          <br />
        </div>

        <div style={{ backgroundColor: "#f6f6f6", marginTop: "-15px" }}>
          {/* Content */}
          <br />
          {this.props.children}
          <br />
          <br />
          <br />
        </div>

        <img src={SATImage} style={{ width: "100%", height: "50%" }} />
        {/* General footer */}
        <br />
        <br />
        <Footer />
      </>
    )
  }
}

export default SATLayout
