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
            <footer className="page-footer font-small indigo">
              <div className="container">
                <div className="row text-center d-flex justify-content-center pt-3">
                  <div className="col-md-2 mb-3">
                    <h6 className="text-uppercase font-weight-bold">
                      <a style={{ textDecoration: "none" }} href="/placement">
                        Home
                      </a>
                    </h6>
                  </div>

                  <div className="col-md-2 mb-3">
                    <h6 className="text-uppercase font-weight-bold">
                      <a
                        style={{ textDecoration: "none" }}
                        href="/placement/about"
                      >
                        About
                      </a>
                    </h6>
                  </div>

                  <div className="col-md-2 mb-3">
                    <h6 className="text-uppercase font-weight-bold">
                      <a
                        style={{ textDecoration: "none" }}
                        href="/placement/programes"
                      >
                        Programmes
                      </a>
                    </h6>
                  </div>

                  <div className="col-md-2 mb-3">
                    <h6 className="text-uppercase font-weight-bold">
                      <a
                        style={{ textDecoration: "none" }}
                        href="/placement/resources"
                      >
                        Resources
                      </a>
                    </h6>
                  </div>

                  <div className="col-md-2 mb-3">
                    <h6 className="text-uppercase font-weight-bold">
                      <a
                        style={{ textDecoration: "none" }}
                        href="/placement/contact"
                      >
                        Contact
                      </a>
                    </h6>
                  </div>
                </div>
              </div>
            </footer>
          </Alert>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          {this.props.children}
        </Layout>
      </>
    )
  }
}

export default PlacementLayout
