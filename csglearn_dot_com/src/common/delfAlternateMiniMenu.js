import React from "react"
import {
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Col,
  Alert,
  Container
} from "shards-react"

const DELFAlternateMiniMenu = () => (
  <>
    <Row>
      <Col xs={6}>
        <Alert className="bg-info" theme="info">
          <div className="text-center">
            <a style={{ textDecoration: "none" }} href="/diplomas/delf/enroll">
              ENROLL NOW
            </a>
          </div>
        </Alert>
      </Col>
      <Col xs={6}>
        <Alert className="bg-danger" theme="danger">
          <div className="text-center">
            <a
              style={{ textDecoration: "none" }}
              href="mailto:info@csglearn.com"
            >
              INQUIRE
            </a>
          </div>
        </Alert>
      </Col>
    </Row>

    <div className="d-none d-md-block">
      <br />
    </div>
  </>
)

export default DELFAlternateMiniMenu
