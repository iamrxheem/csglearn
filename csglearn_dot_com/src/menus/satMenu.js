import React, { Component } from "react"
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse,
  Button
} from "shards-react"

class SATMenu extends Component {
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

          <div className="d-block d-md-none ml-5">
            <Button href="/programmes/sat/apply">Apply</Button>
          </div>

          <NavbarToggler onClick={this.toggleNavbar} />

          <Collapse open={this.state.collapseOpen} navbar>
            <Nav navbar className="ml-auto">
              <NavItem>
                <NavLink active href="/programmes/sat/tuition">
                  Fees & Tuition
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink active href="/delf/exam-centres">
                  Exam Locations
                </NavLink>
              </NavItem>

              {/* Forms and Documents */}
              <NavItem>
                <NavLink active href="/programmes/sat/forms">
                  Forms & Documents
                </NavLink>
              </NavItem>

              {/* FAQs */}
              <NavItem>
                <NavLink active href="/programmes/sat/FAQs">
                  <i className="fas fa-info-circle text-primary mr-2"></i>
                  FAQs
                </NavLink>
              </NavItem>
              <div className="d-none d-md-block">
                <NavItem>
                  <Button
                    active
                    style={{
                      width: "100%",
                      marginLeft: "10px"
                    }}
                    href="/programmes/sat/apply"
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

export default SATMenu
