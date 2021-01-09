import React from "react"
import {
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Col,
  Alert,
  Container
} from "shards-react"
import { BrowserView } from "react-device-detect"

const DELFMiniMenu = () => (
  <>
    <Row>
      <Col xs={6}>
        <Alert className="bg-info" theme="info">
          <div className="text-center">
            <a
              style={{ textDecoration: "none" }}
              href="/diplomas/delf/pre-register"
            >
              PRE-REGISTER
            </a>
          </div>
        </Alert>
      </Col>
      <Col xs={6}>
        <Alert className="bg-danger" theme="danger">
          <div className="text-center">
            <a style={{ textDecoration: "none" }} href="/diplomas/delf/forms">
              FORMS & DOCS
            </a>
          </div>
        </Alert>
      </Col>
      <Col xs={6}>
        <Alert className="bg-success" theme="success">
          <div className="text-center">
            <a style={{ textDecoration: "none" }} href="/diplomas/delf/tuition">
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
              href="/diplomas/delf/exam-centres"
            >
              EXAM CENTRES
            </a>
          </div>
        </Alert>
      </Col>
    </Row>

    <BrowserView>
      <br />
    </BrowserView>
  </>
)

export default DELFMiniMenu
