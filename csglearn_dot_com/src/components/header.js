import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import TopNav from "./topNav"
import { isBrowser, isMobile } from "react-device-detect"

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

class Header extends Component {
  constructor(props) {
    super(props)

    this.toggleDropdown = this.toggleDropdown.bind(this)
    this.toggleDropdown2 = this.toggleDropdown2.bind(this)
    this.toggleDropdown3 = this.toggleDropdown3.bind(this)
    this.toggleDropdownAdmissions = this.toggleDropdownAdmissions.bind(this)
    this.toggleNavbar = this.toggleNavbar.bind(this)

    this.state = {
      dropdownOpen: false,
      dropdownOpen2: false,
      dropdownOpen3: false,
      dropdownOpenAdmissions: false,
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

  toggleDropdown2() {
    this.setState({
      ...this.state,
      ...{
        dropdownOpen2: !this.state.dropdownOpen2
      }
    })
  }

  toggleDropdown3() {
    this.setState({
      ...this.state,
      ...{
        dropdownOpen3: !this.state.dropdownOpen3
      }
    })
  }

  toggleDropdownAdmissions() {
    this.setState({
      ...this.state,
      ...{
        dropdownOpenAdmissions: !this.state.dropdownOpenAdmissions
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
        <TopNav />
        <Navbar type="light" theme="light" expand="md" className="sticky-top">
          <NavbarBrand href="/">CSG Learning</NavbarBrand>

          {isMobile ? (
            <a
              href="https://www.hub.csglearn.com/my/"
              target="_blank"
              className="ml-auto mr-3"
            >
              <i className="fas fa-user fa-lg text-dark"></i>
            </a>
          ) : null}

          <NavbarToggler onClick={this.toggleNavbar} />

          <Collapse open={this.state.collapseOpen} navbar>
            <Nav navbar className="ml-auto">
              <NavItem>
                <NavLink active href="/about">
                  About
                </NavLink>
              </NavItem>
              <Dropdown
                open={this.state.dropdownOpen}
                toggle={this.toggleDropdown}
                style={{ width: isBrowser ? "200%" : null }}
              >
                <DropdownToggle active nav caret>
                  Programmes
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem href="/">
                    <img
                      style={{ width: "50px" }}
                      className="mr-2"
                      src="https://46i48l108maaxssg8uyuvr10-wpengine.netdna-ssl.com/wp-content/uploads/2015/10/csec.png"
                    />
                    CSEC Classes
                  </DropdownItem>
                  <DropdownItem href="/">
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
                    <Badge pill theme="success" className="ml-2">
                      New
                    </Badge>
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

                  <hr />
                  <DropdownItem
                    href="https://www.help.csglearn.com"
                    target="_blank"
                  >
                    <i className="fas fa-info-circle text-info mr-2"></i>
                    Help and Support Forum
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>

              {/* Admissions */}
              <Dropdown
                open={this.state.dropdownOpenAdmissions}
                toggle={this.toggleDropdownAdmissions}
                style={{ width: isBrowser ? "200%" : null }}
              >
                <DropdownToggle active nav caret>
                  Admissions
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem href="/diplomas/dele">
                    Diplomas in Spanish (DELE)
                  </DropdownItem>
                  <DropdownItem href="/diplomas/delf">
                    Diplomas in French (DELF)
                  </DropdownItem>
                  <hr />
                  <DropdownItem href="/diplomas">
                    <i class="fas fa-globe-europe text-primary mr-2"></i>
                    Learn More
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              {/* Diplomas  */}

              {/* Learning Certificates */}
              <Dropdown
                open={this.state.dropdownOpen2}
                toggle={this.toggleDropdown2}
                style={{ width: isBrowser ? "200%" : null }}
              >
                <DropdownToggle active nav caret>
                  Professional Certifications
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem href="/learning">
                    <i
                      style={{ color: "orange" }}
                      className="fas fa-arrow-circle-right mr-2"
                    ></i>
                    All Certifications
                  </DropdownItem>
                  <hr />

                  <DropdownItem href="/">Customer Service</DropdownItem>
                  <DropdownItem href="/">Sales Training</DropdownItem>
                  <DropdownItem href="/">Website Development</DropdownItem>

                  <hr />
                  <DropdownItem href="/">
                    <i
                      style={{ color: "royalblue" }}
                      className="fas fa-info-circle  mr-2"
                    ></i>
                    Learn more...
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              {/* Learning Certificates */}

              {/* Services */}
              <Dropdown
                open={this.state.dropdownOpen3}
                toggle={this.toggleDropdown3}
                style={{ width: isBrowser ? "200%" : null }}
              >
                <DropdownToggle active nav caret>
                  Services
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem href="/services/career-planning">
                    Career Planning
                  </DropdownItem>

                  <hr />
                  <DropdownItem
                    href="https://www.jobs.csglearn.com"
                    target="_blank"
                  >
                    <i className="fas fa-briefcase text-danger mr-3"></i>
                    Job Board
                  </DropdownItem>
                  <DropdownItem href="/services/">
                    <i className="fas fa-search mr-3 text-primary"></i>
                    Scholarship Search
                  </DropdownItem>
                  <hr />
                  <DropdownItem href="/resources/">
                    <i
                      style={{ color: "purple" }}
                      className="fas fa-angle-double-right mr-3"
                    ></i>
                    Resources
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              {/* End Services */}

              <NavItem>
                <NavLink active href="/contact">
                  Contact
                </NavLink>
              </NavItem>

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
                        href="/register"
                      >
                        Register
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
                          href="/register"
                        >
                          Register
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

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
