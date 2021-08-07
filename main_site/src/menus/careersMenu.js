import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { isMobile } from "react-device-detect"
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
  Collapse,
  Button
} from "shards-react"
import { StaticImage } from "gatsby-plugin-image"
import { Img } from "react-image"
import TopNav from "../components/topNav/topNav"

// View Components
import MobileView from "../common/mobileView"
import BrowserView from "../common/browserView"

import GetFlag from "../common/getFlag"
/// Logo importimport * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

// Header and Footer
import Header from "../components/header"
import Footer from "../components/footer/footer"

// CSS and imports

import "../assets/css/bulma-tabs.css"
import "../assets/css/bulma-icons.css"

// All imports
import ImportPage from "../components/imports/imports"

import OfficialLogo from "../images/csg-learning.png"
import TopLogo from "../images/top-logo.jpg"

class CareersMenu extends React.Component {
  constructor(props) {
    super(props)

    this.toggleDropdown = this.toggleDropdown.bind(this)
    this.toggleNavbar = this.toggleNavbar.bind(this)

    this.state = {
      dropdownOpen: false,
      collapseOpen: false
    }
  }

  toggleDropdown() {
    this.setState({
      ...this.state,
      ...{
        dropdownOpen: !this.state.dropdownOpen
      }
    })
  }

  toggleNavbar() {
    this.setState({
      ...this.state,
      ...{
        collapseOpen: !this.state.collapseOpen
      }
    })
  }

  render() {
    return (
      <>
        {/* Top logo */}
        <MobileView>
          <a href="/">
            <img src={TopLogo} style={{ width: "100%" }} />
          </a>
        </MobileView>

        <BrowserView>
          <TopNav />
        </BrowserView>

        <Navbar
          type="light"
          theme="light"
          expand="md"
          style={{ height: "auto" }}
          className={isMobile ? "sticky-top" : ""}
        >
          <a className="navbar-brand" href="/careers">
            {/* Display the Company Logo on desktop devices */}
            <BrowserView>
              <Img
                className="ml-3"
                src={OfficialLogo}
                style={{ width: "30%" }}
              />
            </BrowserView>

            {/* Display the simple text on mobile devices */}
            <MobileView>CSG Learning</MobileView>
          </a>

          <NavbarToggler onClick={this.toggleNavbar} />

          <Collapse open={this.state.collapseOpen} navbar>
            <Nav
              navbar
              className="ml-auto mr-5"
              style={{ height: "100%", width: "100%" }}
            >
              {/* Services */}
              <NavItem>
                <a className="nav-link" href="/careers/services">
                  Services
                </a>
              </NavItem>

              {/* About */}
              <NavItem>
                <a
                  className="nav-link"
                  style={{ display: "inline flow", width: "auto" }}
                  href="/careers/about"
                >
                  About
                </a>
              </NavItem>

              <Dropdown
                open={this.state.dropdownOpen}
                toggle={this.toggleDropdown}
              >
                <DropdownToggle nav caret>
                  Dropdown
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Work From Home</DropdownItem>
                  <DropdownItem>Another action</DropdownItem>
                  <DropdownItem>Something else here</DropdownItem>
                </DropdownMenu>
              </Dropdown>

              {/* Perks */}
              <NavItem>
                <Link className="nav-link" to="/careers/perks">
                  Perks
                </Link>
              </NavItem>

              {/* Contact */}
              <NavItem>
                <Link className="nav-link" to="/diplomas/">
                  Contact
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </>
    )
  }
}

CareersMenu.propTypes = {
  siteTitle: PropTypes.string,
  enroll: PropTypes.string
}

CareersMenu.defaultProps = {
  siteTitle: ``
}

export default CareersMenu
