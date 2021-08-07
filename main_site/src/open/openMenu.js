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
import TopLogo from "../images/open-campus/top.jpeg"

class OpenMenu extends React.Component {
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
          <a href="/open">
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
          style={{ height: "auto", width: "100%", display: "flex" }}
          className={isMobile ? "sticky-top" : ""}
        >
          <Link className="navbar-brand" to="/open">
            {/* Display the Company Logo on desktop devices */}
            <BrowserView>
              <Img
                className="ml-3"
                src={OfficialLogo}
                style={{ width: "30%" }}
              />
            </BrowserView>

            {/* Display the simple text on mobile devices */}

            <MobileView>Open Campus</MobileView>
          </Link>

          <NavbarToggler onClick={this.toggleNavbar} />

          <Collapse open={this.state.collapseOpen} navbar>
            <Nav navbar className="ml-auto pr-5" style={{ width: "100%" }}>
              {/* Features */}
              <NavItem>
                <Link className="nav-link" to="/open/features">
                  Features
                </Link>
              </NavItem>

              {/* Pricing */}
              <NavItem>
                <Link className="nav-link" to="/open/pricing">
                  Pricing
                </Link>
              </NavItem>

              {/* Use Cases */}
              <Dropdown
                open={this.state.dropdownOpen}
                toggle={this.toggleDropdown}
              >
                <DropdownToggle nav caret>
                  Use Cases
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem href="open/teachers/">
                    <i className="fas fa-user mr-2 text-primary" />
                    Teachers
                  </DropdownItem>
                  <DropdownItem href="/open/small-groups">
                    <i className="fas fa-user-friends mr-2 text-warning" />
                    Small Groups
                  </DropdownItem>

                  <hr />
                  <DropdownItem href="/open/schools">
                    <i className="fas fa-users mr-2 text-danger" />
                    Schools
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>

              {/* Contact Us */}
              <NavItem>
                <Link className="nav-link" to="/open/contact">
                  Contact
                </Link>
              </NavItem>

              {/* Learn & Support */}
              <NavItem>
                <Button
                  theme="primary"
                  style={{ width: "140px", display: "inline-block" }}
                  to="/open/get-your-own"
                >
                  Get Your Own
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </>
    )
  }
}

OpenMenu.propTypes = {
  siteTitle: PropTypes.string,
  enroll: PropTypes.string
}

OpenMenu.defaultProps = {
  siteTitle: ``
}

export default OpenMenu
