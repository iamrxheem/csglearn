import React, { Component } from "react"
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
  Button
} from "shards-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBuilding, faUser, faStar } from "@fortawesome/free-solid-svg-icons"

export default class Header extends Component {
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
        <Navbar type="light" theme="" expand="md">
          <NavbarBrand href="/">{this.props.siteTitle}</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} />

          <Collapse open={this.state.collapseOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink active href="/">
                  Home
                </NavLink>
              </NavItem>
            </Nav>

            <Nav navbar className="ml-auto">
              <NavItem>
                <NavLink active href="/classes">
                  Classes
                </NavLink>
              </NavItem>
              <Dropdown
                open={this.state.dropdownOpen}
                toggle={this.toggleDropdown}
              >
                <DropdownToggle nav caret>
                  About
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <FontAwesomeIcon
                      icon={faBuilding}
                      style={{ marginRight: "10px", color: "brown" }}
                    />
                    Our Organization
                  </DropdownItem>
                  <DropdownItem>
                    <FontAwesomeIcon
                      icon={faUser}
                      style={{ marginRight: "10px", color: "purple" }}
                    />
                    Our Teachers
                  </DropdownItem>
                  <DropdownItem>
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ marginRight: "8px", color: "gold" }}
                    />
                    Our Mission
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <NavItem>
                <NavLink active href="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink active href="/contact">
                  Contact
                </NavLink>
              </NavItem>

              <Button
                target="_blank"
                href="https://www.hub.cxcguide.com/login/index.php"
                theme="light"
                style={{ marginRight: "10px", marginLeft: "10px" }}
              >
                Sign In
              </Button>
              <Button
                target="_blank"
                href="https://www.hub.cxcguide.com/login/signup.php?"
              >
                Sign Up
              </Button>
            </Nav>
          </Collapse>
        </Navbar>
      </>
    )
  }
}
