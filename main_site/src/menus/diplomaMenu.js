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

class DiplomaMenu extends React.Component {
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
          <Link className="navbar-brand" to="/">
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
          </Link>

          <MobileView>
            <Button href={this.props.enroll} className="ml-5">
              Enroll
            </Button>
          </MobileView>

          <NavbarToggler onClick={this.toggleNavbar} />

          <Collapse open={this.state.collapseOpen} navbar>
            <Nav
              navbar
              className="ml-auto mr-5"
              style={{ height: "100%", width: "100%" }}
            >
              {/* Subjects */}
              <NavItem>
                <Link
                  className="nav-link"
                  style={{ display: "inline flow", width: "auto" }}
                  to={this.props.tuition}
                >
                  Tuition
                </Link>
              </NavItem>

              <Dropdown
                open={this.state.dropdownOpen}
                toggle={this.toggleDropdown}
              >
                <DropdownToggle nav caret>
                  Dropdown
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Action</DropdownItem>
                  <DropdownItem>Another action</DropdownItem>
                  <DropdownItem>Something else here</DropdownItem>
                </DropdownMenu>
              </Dropdown>

              {/* Tuition */}
              <NavItem>
                <Link className="nav-link" to="/diplomas/">
                  Resources
                </Link>
              </NavItem>

              {/* Syllabus */}
              <NavItem>
                <Link className="nav-link" to="/diplomas/">
                  Syllabus
                </Link>
              </NavItem>

              {/* Login Link */}
              <NavItem className="d-none d-md-block">
                <a
                  className="nav-link"
                  target="_blank"
                  href="https://www.hub.csglearn.com/my"
                >
                  <i className="fas fa-user text-dark"></i>
                </a>
              </NavItem>

              {/* Online Store for CSEC resources */}
              <NavItem className="d-none d-md-block">
                <a
                  className="nav-link "
                  target="_blank"
                  href="https://www.csglearn.com/store/"
                >
                  <i className="fas fa-shopping-cart text-dark"></i>
                </a>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </>
    )
  }
}

DiplomaMenu.propTypes = {
  siteTitle: PropTypes.string,
  enroll: PropTypes.string
}

DiplomaMenu.defaultProps = {
  siteTitle: ``
}

export default DiplomaMenu
