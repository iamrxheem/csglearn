import * as React from "react"
import { Link } from "gatsby"

// Shards-React Components
import { Row, Col, Container, Alert, Nav, NavItem, NavLink } from "shards-react"

const CsecMiniMenu = props => (
  <>
    <div className="text-center">
      <Row>
        <Col xs={6}>
          <Alert theme="info">
            <a
              style={{ textDecoration: "none" }}
              href="/programmes/csec/summer"
            >
              SUMMER
            </a>
          </Alert>
        </Col>
        <Col xs={6}>
          <Alert theme="danger">
            <a style={{ textDecoration: "none" }} href="/cape">
              FOR CAPE
            </a>
          </Alert>
        </Col>
        <Col xs={6}>
          <Alert theme="success">
            <a
              style={{ textDecoration: "none" }}
              href="/programmes/csec/tuition"
            >
              TUITION
            </a>
          </Alert>
        </Col>
        <Col xs={6}>
          <Alert theme="primary">
            <a
              style={{ textDecoration: "none" }}
              target="_blank"
              href={props.enroll}
            >
              ENROLL NOW
            </a>
          </Alert>
        </Col>
      </Row>
    </div>
  </>
)

export default CsecMiniMenu
