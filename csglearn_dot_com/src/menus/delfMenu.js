import React, { Component } from "react"
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse,
  Button,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu
} from "shards-react"

import {
  isBrowser,
  isMobile,
  MobileView,
  BrowserView
} from "react-device-detect"

class DELFMenu extends Component {
  constructor(props) {
    super(props)
    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.toggleDropdown = this.toggleDropdown.bind(this)

    this.state = { dropdownOpen: false, collapseOpen: false }
  }

  toggleNavbar() {
    this.setState({
      ...this.state,
      ...{
        collapseOpen: !this.state.collapseOpen
      }
    })
  }

  toggleDropdown() {
    this.setState({
      ...this.state,
      ...{
        dropdownOpen: !this.state.dropdownOpen
      }
    })
  }

  render() {
    return (
      <>
        <Navbar
          className="break-out sticky-top"
          type="light"
          theme="light"
          expand="md"
        >
          <NavbarBrand href="/">CSG Learning</NavbarBrand>

          {isMobile ? (
            <a href="/diplomas/delf/pre-register" className="ml-auto mr-3">
              <Button>APPLY</Button>
            </a>
          ) : null}

          <NavbarToggler onClick={this.toggleNavbar} />

          <Collapse open={this.state.collapseOpen} navbar>
            <Nav navbar className="ml-auto">
              <NavItem>
                <NavLink active href="/diplomas/delf/tuition">
                  Fees & Tuition
                </NavLink>
              </NavItem>

              <Dropdown
                open={this.state.dropdownOpen}
                toggle={this.toggleDropdown}
              >
                <DropdownToggle nav caret>
                  Diploma
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem href="/diplomas/delf/beginners">
                    <i className="fas fa-angle-double-right mr-2 text-danger"></i>
                    Beginner's Diploma
                  </DropdownItem>
                  <DropdownItem href="/diplomas/delf/intermediate">
                    <i className="fas fa-angle-double-right mr-2 text-danger"></i>
                    Intermediate Diploma
                  </DropdownItem>
                  <DropdownItem href="/diplomas/delf/advanced">
                    <i className="fas fa-angle-double-right mr-2 text-danger"></i>
                    Advanced Diploma
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>

              <NavItem>
                <NavLink active href="/delf/exam-locations">
                  Exam Locations
                </NavLink>
              </NavItem>

              {/* Forms and Documents */}
              <NavItem>
                <NavLink active href="/diplomas/delf/forms">
                  Forms & Documents
                </NavLink>
              </NavItem>

              {/* FAQs */}
              <NavItem>
                <NavLink active href="/diplomas/delf/FAQs">
                  <i className="fas fa-info-circle text-primary mr-2"></i>
                  FAQs
                </NavLink>
              </NavItem>
              <BrowserView>
                <NavItem>
                  <Button
                    active
                    style={{
                      width: "100%",
                      marginLeft: "10px"
                    }}
                    href="/diplomas/delf/pre-register"
                  >
                    Apply
                  </Button>
                </NavItem>
              </BrowserView>
            </Nav>
          </Collapse>
        </Navbar>
      </>
    )
  }
}

export default DELFMenu
