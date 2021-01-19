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

class DELEMenu extends Component {
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

          {/* Mobile View */}
          <div className="d-block d-md-none">
            <a href="/diplomas/dele/apply" className="ml-auto mr-3">
              <Button>APPLY</Button>
            </a>
          </div>

          <NavbarToggler onClick={this.toggleNavbar} />

          <Collapse open={this.state.collapseOpen} navbar>
            <Nav navbar className="ml-auto">
              <NavItem>
                <NavLink active href="/diplomas/dele/tuition">
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
                  <DropdownItem href="/diplomas/dele/beginners">
                    <i className="fas fa-angle-double-right mr-2 text-danger"></i>
                    Beginner's Diploma
                  </DropdownItem>
                  <DropdownItem href="/diplomas/dele/intermediate">
                    <i className="fas fa-angle-double-right mr-2 text-danger"></i>
                    Intermediate Diploma
                  </DropdownItem>
                  <DropdownItem href="/diplomas/dele/advanced">
                    <i className="fas fa-angle-double-right mr-2 text-danger"></i>
                    Advanced Diploma
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>

              <NavItem>
                <NavLink active href="/diplomas/dele/exam-locations">
                  Exam Locations
                </NavLink>
              </NavItem>

              {/* Forms and Documents */}
              <NavItem>
                <NavLink active href="/diplomas/dele/forms">
                  Forms & Documents
                </NavLink>
              </NavItem>

              {/* FAQs */}
              <NavItem>
                <NavLink active href="/diplomas/dele/FAQs">
                  <i className="fas fa-info-circle text-primary mr-2"></i>
                  FAQs
                </NavLink>
              </NavItem>

              {/* Browser View */}
              <div className="d-none d-md-block">
                <NavItem>
                  <Button
                    active
                    style={{
                      width: "100%",
                      marginLeft: "10px"
                    }}
                    href="/diplomas/dele/apply"
                  >
                    Apply
                  </Button>
                </NavItem>
              </div>
            </Nav>
          </Collapse>
        </Navbar>
      </>
    )
  }
}

export default DELEMenu
