import * as React from "react"
import { Link } from "gatsby"

// Shards-React Components
import { Row, Col, Container, Alert, Nav, NavItem, NavLink } from "shards-react"

const CsecMiniMenu = () => (
  <>
    <Alert theme="danger">
      <Nav fill justified>
        <NavItem>
          <Link
            className="nav-link active"
            style={{ textDecoration: "none" }}
            active
            to="/programmes/csec/summer"
          >
            SUMMER SCHOOL
          </Link>
        </NavItem>
        <NavItem>
          <Link
            className="nav-link active"
            style={{ textDecoration: "none" }}
            to="/programmes/csec/enroll"
          >
            ENROLL NOW
          </Link>
        </NavItem>
      </Nav>
    </Alert>
  </>
)

export default CsecMiniMenu
