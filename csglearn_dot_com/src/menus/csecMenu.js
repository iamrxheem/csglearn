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
import { MobileView, BrowserView } from "react-device-detect"

import CSECQuickEnroll from "../common/csecQuickEnroll"

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

          <MobileView>
            <Button href="/programmes/csec/enroll">Enroll now</Button>
          </MobileView>

          <NavbarToggler onClick={this.toggleNavbar} />

          <Collapse open={this.state.collapseOpen} navbar>
            <Nav navbar className="ml-auto">
              <NavItem>
                <NavLink href="/programmes/csec/subjects">Subjects</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/programmes/csec/tuition">
                  Fees & Tuition
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/programmes/csec/resources">Resources</NavLink>
              </NavItem>

              {/* Forms and Documents */}
              <NavItem>
                <NavLink href="/programmes/csec/forms">
                  Forms & Documents
                </NavLink>
              </NavItem>

              {/* FAQs */}
              <NavItem>
                <NavLink href="/programmes/csec/FAQs">
                  <i className="fas fa-info-circle text-primary mr-2"></i>
                  FAQs
                </NavLink>
              </NavItem>
              <BrowserView>
                <NavItem>
                  <CSECQuickEnroll />
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
