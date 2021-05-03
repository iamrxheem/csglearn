import * as React from "react"

import { Alert, Row, Col, Button } from "shards-react"
import { Link } from "gatsby"

const ProgrammeMarketing = () => (
  <>
    <Row className="pt-5">
      <Col md={6}>
        <Alert theme="success">
          <br />
          <h6>STARTING JUNE 14</h6>

          <h4 className="pt-2">Diploma in Spanish</h4>

          <br />
          <span>
            Start learning Spanish{" "}
            <Link to="/diplomas/dele/a1">from scratch</Link>, for the accredited
            and internationally recognized Diploma in Spanish, no experience
            required. Review our{" "}
            <Link to="/diplomas/dele/c1">Master's Programme</Link>.
          </span>
          <br />
          <br />
          <Link
            className="hover-on-underline"
            to="/diplomas/dele"
            style={{ textDecoration: "none" }}
          >
            Learn more <i className="fas fa-long-arrow-alt-right ml-1"></i>
          </Link>
          <br />
          <br />
        </Alert>
      </Col>
      <Col md={6}>
        <Alert>
          <br />
          <h6>EARLY REGISTRATION NOW OPEN</h6>
          <h4 className="pt-2">SAT Classes</h4>

          <br />
          <span>
            Study for the SAT entrance exam for international universities and
            pre-qualify for scholarships in the fields of Technology, Business,
            Law and Medicine.
          </span>
          <br />
          <br />
          <Link
            className="hover-on-underline"
            to="/programmes/sat"
            style={{ textDecoration: "none" }}
          >
            Enroll now <i className="fas fa-long-arrow-alt-right ml-1"></i>
          </Link>
          <br />
          <br />
        </Alert>
      </Col>
    </Row>
  </>
)

export default ProgrammeMarketing
