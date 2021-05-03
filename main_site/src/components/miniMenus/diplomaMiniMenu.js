import * as React from "react"
import { Link } from "gatsby"

// Shards-React Components
import { Row, Col, Container, Alert, Nav, NavItem, NavLink } from "shards-react"

const DiplomaMiniMenu = props => (
  <div className="container">
    <Row>
      <Col xs={6}>
        <Alert theme="primary" className="text-center">
          <Link style={{ textDecoration: "none" }} to={props.enroll}>
            ENROLL NOW
          </Link>
        </Alert>
      </Col>
      <Col xs={6}>
        <Alert theme="success" className="text-center">
          <Link style={{ textDecoration: "none" }} to={props.tuition}>
            TUITION & FEES
          </Link>
        </Alert>
      </Col>
    </Row>
  </div>
)

export default DiplomaMiniMenu
