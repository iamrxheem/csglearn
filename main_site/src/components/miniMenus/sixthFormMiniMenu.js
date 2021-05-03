import * as React from "react"

// Shards-React Components
import { Row, Col, Alert } from "shards-react"
import { Link } from "gatsby"

const SixthFormMiniMenu = props => (
  <div className="text-center">
    <Row>
      <Col xs={6}>
        <Alert theme="info">
          <Link
            style={{ textDecoration: "none" }}
            to="/programmes/sixth-form/enroll"
          >
            ENROLL NOW
          </Link>
        </Alert>
      </Col>
      <Col xs={6}>
        <Alert theme="danger">
          <Link
            style={{ textDecoration: "none" }}
            to="/programmes/sixth-form/packages"
          >
            PACKAGES
          </Link>
        </Alert>
      </Col>
      <Col xs={6}>
        <Alert theme="success">
          <Link
            style={{ textDecoration: "none" }}
            to="/programmes/sixth-form/resources"
          >
            RESOURCES
          </Link>
        </Alert>
      </Col>
      <Col xs={6}>
        <Alert theme="primary">
          <Link
            style={{ textDecoration: "none" }}
            to="/programmes/sixth-form/exam"
          >
            EXAMINATION
          </Link>
        </Alert>
      </Col>
    </Row>
  </div>
)

export default SixthFormMiniMenu
