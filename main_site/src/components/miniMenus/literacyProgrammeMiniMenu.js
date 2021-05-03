import * as React from "react"
import { Link } from "gatsby"

// Shards-React Components
import { Row, Col, Container, Alert, Nav, NavItem, NavLink } from "shards-react"

const LiteracyProgrammeMiniMenu = () => (
  <>
    <Row>
      <Col xs={6}>
        <Alert theme="primary" className="text-center">
          <Link
            style={{ textDecoration: "none" }}
            to="/programmes/literacy/enroll"
          >
            ENROLL NOW
          </Link>
        </Alert>
      </Col>
      <Col xs={6}>
        <Alert theme="success" className="text-center">
          <Link
            style={{ textDecoration: "none" }}
            to="/programmes/literacy/faqs"
          >
            FAQs
          </Link>
        </Alert>
      </Col>
    </Row>
  </>
)

export default LiteracyProgrammeMiniMenu
