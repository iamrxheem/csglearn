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
import { Link } from "gatsby"

import { MobileView } from "react-device-detect"

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

          <MobileView>
            <Link
              className="btn btn-primary"
              to="/diplomas/delf/enroll/"
              state={this.props.delfConfig.state}
            >
              Enroll now
            </Link>
          </MobileView>

          <NavbarToggler onClick={this.toggleNavbar} />

          <Collapse open={this.state.collapseOpen} navbar>
            <Nav navbar className="ml-auto">
              <NavItem>
                <NavLink href="/diplomas/delf/tuition">Fees & Tuition</NavLink>
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
                  <DropdownItem href="/diplomas/dalf/advanced">
                    <i className="fas fa-angle-double-right mr-2 text-danger"></i>
                    Advanced Diploma
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>

              <NavItem>
                <NavLink href="/delf/exam-centres">Exam Locations</NavLink>
              </NavItem>

              {/* Forms and Documents */}
              <NavItem>
                <NavLink href="/diplomas/delf/forms">Forms & Documents</NavLink>
              </NavItem>

              {/* FAQs */}
              <NavItem>
                <NavLink href="/diplomas/delf/FAQs">
                  <i className="fas fa-info-circle text-primary mr-2"></i>
                  FAQs
                </NavLink>
              </NavItem>
              <div className="d-none d-md-block">
                <NavItem>
                  <Link
                    className="btn btn-primary"
                    to="/apply"
                    state={this.props.delfConfig.state}
                    style={{
                      width: "100%",
                      marginLeft: "10px"
                    }}
                  >
                    Enroll now
                  </Link>
                </NavItem>
              </div>
            </Nav>
          </Collapse>
        </Navbar>
      </>
    )
  }
}

export default DELFMenu
