import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
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
  Alert,
  Container
} from "shards-react"
import { MobileView, BrowserView } from "react-device-detect"
import { Carousel } from "react-bootstrap"

import Layout from "../components/layout"

class PlacementLayout extends React.Component {
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
        <Layout fluid={false}>
          {/* Browser View*/}
          <BrowserView>
            <Container>
              <Carousel className="break-out">
                <Carousel.Item>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    className="d-block w-100 "
                    src="https://www.mona.uwi.edu/sites/default/files/uwi/step-by-step-to-applying.jpg"
                    alt="First slide"
                  />
                </Carousel.Item>
              </Carousel>
            </Container>

            <Alert theme="danger">
              <Nav fill>
                <NavItem>
                  <NavLink style={{ textDecoration: "none" }} href="/placement">
                    HOME
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    style={{ textDecoration: "none" }}
                    href="/placement/programmes"
                  >
                    PROGRAMMES
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    style={{ textDecoration: "none" }}
                    href="/placement/resources"
                  >
                    RESOURCES
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    style={{ textDecoration: "none" }}
                    href="/placement/contact-us"
                  >
                    CONTACT US
                  </NavLink>
                </NavItem>
              </Nav>
            </Alert>
          </BrowserView>
          {/* End Browser View  */}

          {/* Mobile View */}
          <MobileView>
            <Carousel className="break-out">
              <Carousel.Item>
                <img
                  style={{ width: "100%", height: "100%" }}
                  className="d-block w-100 "
                  src="https://www.mona.uwi.edu/humed/sites/default/files/humed/carousel_image/header-image-1_0.png"
                  alt="First slide"
                />
              </Carousel.Item>
            </Carousel>
          </MobileView>
          {/* End Mobile View */}

          {this.props.children}
        </Layout>
      </>
    )
  }
}

export default PlacementLayout
