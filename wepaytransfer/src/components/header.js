import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import {
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap"

class Header extends React.Component {
  render() {
    return (
      <>
        <Navbar
          className="navbar-horizontal navbar-dark bg-primary"
          expand="lg"
        >
          <Container>
            <NavbarBrand href="/">WePAY MONEY TRANSFER</NavbarBrand>
            <button
              aria-controls="navbar-primary"
              aria-expanded={false}
              aria-label="Toggle navigation"
              className="navbar-toggler"
              data-target="#navbar-primary"
              data-toggle="collapse"
              id="navbar-primary"
              type="button"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse navbar toggler="#navbar-primary">
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <Link to="/"></Link>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button
                      aria-controls="navbar-primary"
                      aria-expanded={false}
                      aria-label="Toggle navigation"
                      className="navbar-toggler"
                      data-target="#navbar-primary"
                      data-toggle="collapse"
                      id="navbar-primary"
                      type="button"
                    >
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="ml-lg-auto" navbar>
                <NavItem>
                  <NavLink href="/about">
                    About Us <span className="sr-only">(current)</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/calculator">Calculator</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/transfer-request">Transfer Request</NavLink>
                </NavItem>
                <UncontrolledDropdown nav>
                  <NavLink
                    aria-expanded={false}
                    aria-haspopup={true}
                    data-toggle="dropdown"
                    href="https://www.instagram.com/wepaytransfer/"
                    id="navbar-primary_dropdown_1"
                    role="button"
                  >
                    Contact
                  </NavLink>
                  <DropdownMenu
                    aria-labelledby="navbar-primary_dropdown_1"
                    right
                  >
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Another action
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Something else here
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
        <br />
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
