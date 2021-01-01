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
import {
  isBrowser,
  isMobile,
  MobileView,
  BrowserView
} from "react-device-detect"

class DELEMenu extends Component {
  constructor(props) {
    super(props)
    this.toggleNavbar = this.toggleNavbar.bind(this)

    this.state = {
      collapseOpen: false
    }
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
        <Navbar
          className="break-out sticky-top"
          type="light"
          theme="light"
          expand="md"
        >
          <NavbarBrand href="/">CSG Learning</NavbarBrand>

          {isMobile ? (
            <a href="/diplomas/dele/apply" className="ml-auto mr-3">
              <Button>APPLY</Button>
            </a>
          ) : null}

          <NavbarToggler onClick={this.toggleNavbar} />

          <Collapse open={this.state.collapseOpen} navbar>
            <Nav navbar className="ml-auto">
              <NavItem>
                <NavLink active href="/diplomas/dele/requirements">
                  Requirements
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink active href="/dele/exam-locations">
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
              <BrowserView>
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
              </BrowserView>
            </Nav>
          </Collapse>
        </Navbar>
      </>
    )
  }
}

export default DELEMenu
