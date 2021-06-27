import * as React from "react"
import { Link } from "gatsby"

// Shards-React Components
import { Row, Col, Container, Alert, Nav, NavItem, NavLink } from "shards-react"

const LiteracyProgrammeMiniMenu = props => (
  <>
    <Row>
      <Col xs={6}>
        <Alert theme="primary" className="text-center">
          <a
            style={{ textDecoration: "none" }}
            target="_blank"
            href={props.enroll}
          >
            ENROLL NOW
          </a>
        </Alert>
      </Col>
      <Col xs={6}>
        <Alert theme="danger" className="text-center">
          <Link
            style={{ textDecoration: "none" }}
            to="/programmes/literacy/adults"
          >
            FOR ADULTS
          </Link>
        </Alert>
      </Col>
    </Row>
  </>
)

export default LiteracyProgrammeMiniMenu
