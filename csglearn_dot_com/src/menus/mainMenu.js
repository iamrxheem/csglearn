import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import { isBrowser, isMobile } from "react-device-detect"
import TopNav from "../components/topNav"

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
  Button,
  Row,
  Col,
  Badge
} from "shards-react"
import { MobileView, BrowserView } from "react-device-detect"

class MainMenu extends Component {
  constructor(props) {
    super(props)

    // Used to toggle the navbar
    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.toggleDropdown = this.toggleDropdown.bind(this)

    this.state = {
      collapseOpen: false,
      dropdownOpen: false
    }
  }

  // Function responsible for toggling the main navbar
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
        <MobileView>
          <a href="/">
            <img
              src="https://i.imgur.com/IcviBO3.jpg"
              style={{ width: "100%", height: "100%" }}
            />
          </a>
        </MobileView>

        {/*
    Top Navigation with with contact information for the company and
    quick links for subdomains.
  */}
        <BrowserView>
          <TopNav />
        </BrowserView>
        {/* End TopNav */}

        {/* Main Menu */}
        <Navbar type="light" theme="light" expand="md" className="sticky-top">
          <NavbarBrand href="/">CSG Learning</NavbarBrand>

          {isMobile ? (
            <a href="/diplomas/dele/apply/" className="ml-auto mr-3">
              <Button>APPLY</Button>
            </a>
          ) : null}

          <NavbarToggler onClick={this.toggleNavbar} />

          <Collapse navbar open={this.state.collapseOpen}>
            <Nav navbar className="ml-auto">
              {/* About */}
              <NavItem>
                <NavLink active href="/about">
                  About
                </NavLink>
              </NavItem>
              {/* End About */}
              <Dropdown
                open={this.state.dropdownOpen}
                toggle={this.toggleDropdown}
                style={{ width: isBrowser ? "200%" : null }}
              >
                <DropdownToggle active nav caret>
                  Programmes
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem href="/programmes/csec">
                    <img
                      style={{ width: "50px" }}
                      className="mr-2"
                      src="https://46i48l108maaxssg8uyuvr10-wpengine.netdna-ssl.com/wp-content/uploads/2015/10/csec.png"
                    />
                    CSEC Classes
                  </DropdownItem>
                  <DropdownItem href="/programmes/cape">
                    <img
                      style={{ width: "50px" }}
                      className="mr-2"
                      src="https://46i48l108maaxssg8uyuvr10-wpengine.netdna-ssl.com/wp-content/uploads/2015/10/cape.png"
                    />
                    CAPE Classes
                  </DropdownItem>

                  <hr />
                  <DropdownItem href="/programmes/sixth-form">
                    <i className="far fa-bookmark mr-2"></i>
                    Sixth Form Programme
                  </DropdownItem>

                  <hr />
                  <DropdownItem
                    target="_blank"
                    href="https://www.literacyja.org"
                  >
                    Literacy Jamaica
                    <i className="fas fa-external-link-alt ml-2 text-primary"></i>
                  </DropdownItem>

                  <hr />
                  <DropdownItem href="/">Lowerschool</DropdownItem>
                  <DropdownItem href="/">Preschool</DropdownItem>
                </DropdownMenu>
              </Dropdown>
              {/* End Programmes */}
              {/* Admissions */}
              <NavItem>
                <NavLink active href="/admissions">
                  Admissions
                </NavLink>
              </NavItem>
              {/* End Admissions */}
              {/* Admissions */}
              <NavItem>
                <NavLink active href="/academics">
                  Academics
                </NavLink>
              </NavItem>
              {/* End Admissions */}
              <React.Fragment>
                {isBrowser ? (
                  <>
                    <NavItem className="ml-2">
                      <Button
                        active
                        theme="light"
                        target="_blank"
                        href="https://www.hub.csglearn.com/my/"
                      >
                        <i className="fas fa-user mr-2"></i>
                        Log in
                      </Button>
                    </NavItem>
                    <NavItem>
                      <Button
                        active
                        style={{
                          backgroundColor: "rgb(148,0,211)",
                          borderColor: "rgb(148,0,211)",
                          marginLeft: "10px"
                        }}
                        href="/apply"
                      >
                        Apply
                      </Button>
                    </NavItem>
                  </>
                ) : (
                  <>
                    <br />
                    <Row>
                      <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                        <Button
                          style={{ width: "100%" }}
                          active
                          theme="light"
                          target="_blank"
                          href="https://www.hub.csglearn.com/my/"
                        >
                          <i className="fas fa-user mr-2"></i>
                          Log in
                        </Button>
                      </Col>
                      <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                        <Button
                          active
                          style={{
                            width: "100%",
                            backgroundColor: "rgb(148,0,211)",
                            borderColor: "rgb(148,0,211)",
                            marginLeft: "10px"
                          }}
                          href="/diplomas/dele/apply/"
                        >
                          Apply
                        </Button>
                      </Col>
                    </Row>
                  </>
                )}
              </React.Fragment>
            </Nav>
          </Collapse>
        </Navbar>
      </>
    )
  }
}

export default MainMenu
