import React, { Component } from "react"
import { isBrowser, isMobile, MobileView } from "react-device-detect"
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
  Collapse,
  Button,
  Row,
  Col
} from "shards-react"

// Images
import CSGLearningTopImage from "../images/top-logo.jpg"
import ACCALogo from "../images/logo-acca.jpg"

class MainMenu extends Component {
  constructor(props) {
    super(props)

    // Used to toggle the navbar
    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.toggleDropdown = this.toggleDropdown.bind(this)
    this.toggleDropdownDiplomas = this.toggleDropdownDiplomas.bind(this)

    this.state = {
      collapseOpen: false,
      dropdownOpen: false,
      dropdownDiplomasOpen: false
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

  toggleDropdownDiplomas() {
    this.setState({
      ...this.state,
      ...{
        dropdownDiplomasOpen: !this.state.dropdownDiplomasOpen
      }
    })
  }

  render() {
    return (
      <>
        {/* Mobile View */}
        <div className="d-block d-md-none">
          <a href="/">
            <img
              src={CSGLearningTopImage}
              style={{ width: "100%", height: "100%" }}
            />
          </a>
        </div>

        {/*
    Top Navigation with with contact information for the company and
    quick links for subdomains.
  */}
        <div className="d-none d-md-block">
          <TopNav />
        </div>
        {/* End TopNav */}

        {/* Main Menu */}
        <Navbar type="light" theme="light" expand="md" className="sticky-top">
          <NavbarBrand href="/">CSG Learning </NavbarBrand>

          {this.props.hideApplyButton ? (
            <></>
          ) : (
            <>
              <div className="d-block d-md-none">
                <a href="/enroll/" className="ml-auto ml-4">
                  <Button>APPLY</Button>
                </a>
              </div>
            </>
          )}

          <NavbarToggler onClick={this.toggleNavbar} />

          <Collapse navbar open={this.state.collapseOpen}>
            <Nav navbar className="ml-auto">
              {/* About */}
              <NavItem>
                <NavLink href="/about">About</NavLink>
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
                  {/* CSEC classes */}
                  <DropdownItem href="/programmes/csec">
                    <img
                      style={{ width: "50px" }}
                      className="mr-2"
                      src="https://46i48l108maaxssg8uyuvr10-wpengine.netdna-ssl.com/wp-content/uploads/2015/10/csec.png"
                    />
                    CSEC Classes
                  </DropdownItem>

                  {/* CAPE classes */}
                  <hr />
                  <DropdownItem href="/programmes/sixth-form">
                    Sixth Form Programme
                  </DropdownItem>

                  {/* SAT classes */}

                  <hr />

                  <DropdownItem href="/programmes/sat">
                    <i
                      style={{ color: "orange" }}
                      className="fas fa-location-arrow mr-2"
                    ></i>
                    SAT Classes
                  </DropdownItem>

                  {/* ACCA Classes */}
                  <DropdownItem href="/programmes/acca">
                    <i
                      style={{ color: "royalblue" }}
                      className="fas fa-location-arrow mr-2"
                    ></i>
                    ACCA Programme
                  </DropdownItem>

                  {/* CFA Classes */}
                  <DropdownItem href="/programmes/acca">
                    <i
                      style={{ color: "purple" }}
                      className="fas fa-location-arrow mr-2"
                    ></i>
                    CFA Programme
                  </DropdownItem>

                  <hr />
                  <DropdownItem
                    target="_blank"
                    href="https://www.literacyja.org"
                  >
                    Literacy Jamaica
                    <i className="fas fa-external-link-alt ml-2 text-primary"></i>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              {/* End Programmes */}

              {/* Short Courses */}
              <NavItem>
                <NavLink href="/short-courses">Short Courses</NavLink>
              </NavItem>
              {/* Short Courses */}

              {/* Accredited Diplomas */}
              <Dropdown
                open={this.state.dropdownDiplomasOpen}
                toggle={this.toggleDropdownDiplomas}
              >
                <DropdownToggle nav caret>
                  Accredited Diplomas
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem href="/diplomas/dele">
                    <i
                      style={{ color: "royalblue" }}
                      className="fas fa-location-arrow mr-2"
                    ></i>
                    Diploma in Spanish
                  </DropdownItem>
                  <DropdownItem href="/diplomas/delf">
                    <i
                      style={{ color: "green" }}
                      className="fas fa-location-arrow mr-2"
                    ></i>
                    Diploma in French
                  </DropdownItem>

                  <hr />
                  <DropdownItem href="/diplomas/">
                    <i className="fas fa-angle-right mr-2 text-danger"></i>
                    See all
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              {/* End Accredited Diplomas */}

              {/* Academics */}
              <NavItem>
                <NavLink href="/academics">Academics</NavLink>
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
                    <br />
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
