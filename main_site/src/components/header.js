import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

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
  Collapse
} from "shards-react"
import { StaticImage } from "gatsby-plugin-image"
import { Img } from "react-image"

// View Components
import MobileView from "../common/mobileView"
import BrowserView from "../common/browserView"

import GetFlag from "../common/getFlag"
/// Logo import
import OfficialLogo from "../images/csg-learning.png"
import TopLogo from "../images/top-logo.jpg"
import TopNav from "./topNav/topNav"

import { isMobile } from "react-device-detect"

class Header extends React.Component {
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
          <NavbarBrand className="navbar-brand" href="/">
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
          </NavbarBrand>

          <NavbarToggler onClick={this.toggleNavbar} />

          <Collapse open={this.state.collapseOpen} navbar>
            <Nav
              navbar
              className="ml-auto mr-5"
              style={{ height: "100%", width: "100%" }}
            >
              {/* About */}
              <NavItem>
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </NavItem>

              {/* Programmes */}
              <NavItem>
                <Link className="nav-link" to="/programmes">
                  Programmes
                </Link>
              </NavItem>

              {/* Short Courses */}
              <NavItem>
                <Link className="nav-link" to="/short-courses">
                  Courses
                </Link>
              </NavItem>

              {/* Accreditted Diplomas */}
              <NavItem>
                <Link className="nav-link" to="/diplomas">
                  Diplomas
                </Link>
              </NavItem>

              {/* Contact */}
              <NavItem>
                <Link className="nav-link" to="/contact">
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

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
