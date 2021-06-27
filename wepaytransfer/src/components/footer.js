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

class Footer extends React.Component {
  render() {
    return (
      <div className="" style={{ backgroundColor: "#f6f9fc" }}>
        <br />
        <Container>
          <Row>
            <Col sm={6}>
              <h5>ABOUT US</h5>
              <p
                style={{
                  margin: "0px",
                  padding: "10px 0px 0px 0px"
                }}
              >
                Humbird eCash is an online service to Jamaican residents that
                converts your PayPal funds to Jamaican dollars and transfers it
                to your Jamaican bank account.
              </p>

              <br />
              <br />
            </Col>
            <Col sm={3}>
              <h5>QUICK LINKS</h5>
              <ul
                style={{
                  listStyleType: "none",
                  margin: "0px",
                  padding: "10px 0px 0px 0px"
                }}
              >
                <li>
                  <a href="/merchant-pay">Pay A Merchant</a>
                </li>
                <li style={{ paddingTop: "15px" }}>
                  <a href="/fees">Processing Fees</a>
                </li>
                <li style={{ paddingTop: "15px" }}>
                  <a href="/transfer-request">Request a Transfer</a>
                </li>
                <li style={{ paddingTop: "15px" }}>
                  <a href="/FAQs">FAQs</a>
                </li>
                <li style={{ paddingTop: "15px" }}>
                  <a href="/contact">Contact Us</a>
                </li>
              </ul>
            </Col>
            <Col sm={3}>
              <br className="d-block d-md-none" />
              <br className="d-block d-md-none" />

              <h5>YOUR ACCOUNT</h5>
              <ul
                style={{
                  listStyleType: "none",
                  margin: "0px",
                  padding: "10px 0px 0px 0px"
                }}
              >
                <li>
                  <a href="/">My Profile</a>
                </li>
                <li style={{ paddingTop: "15px" }}>
                  <a href="/">My Bank Account</a>
                </li>
                <li style={{ paddingTop: "15px" }}>
                  <a href="/">Track My Transfer</a>
                </li>
              </ul>

              <br className="d-block d-md-none" />
            </Col>
          </Row>
        </Container>
        <br />
      </div>
    )
  }
}

export default Footer
