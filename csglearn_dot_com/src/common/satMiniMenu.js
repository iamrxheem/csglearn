import React from "react"
import {
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Col,
  Alert,
  Container
} from "shards-react"

const SATMiniMenu = () => (
  <>
    <Row>
      <Col xs={6}>
        <Alert className="bg-info" theme="info">
          <div className="text-center">
            <a style={{ textDecoration: "none" }} href="/programmes/sat/apply">
              APPLY NOW
            </a>
          </div>
        </Alert>
      </Col>
      <Col xs={6}>
        <Alert className="bg-danger" theme="danger">
          <div className="text-center">
            <a style={{ textDecoration: "none" }} href="/programmes/sat/forms">
              FORMS & DOCS
            </a>
          </div>
        </Alert>
      </Col>
      <Col xs={6}>
        <Alert className="bg-success" theme="success">
          <div className="text-center">
            <a
              style={{ textDecoration: "none" }}
              href="/programmes/sat/tuition"
            >
              FEES & TUITION
            </a>
          </div>
        </Alert>
      </Col>
      <Col xs={6}>
        <Alert className="bg-primary" theme="primary">
          <div className="text-center">
            <a
              style={{ textDecoration: "none" }}
              href="/programmes/sat/exam-centres"
            >
              EXAM CENTRES
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

export default SATMiniMenu
