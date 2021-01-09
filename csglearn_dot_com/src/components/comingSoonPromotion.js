import React from "react"
import {
  Breadcrumb,
  BreadcrumbItem,
  Alert,
  Container,
  Row,
  Col,
  Button
} from "shards-react"
import { MobileView, isMobile } from "react-device-detect"

const ComingSoonPromotion = () => (
  <Container fluid>
    <Row>
      <Col sm={12} md={8}>
        <Alert theme="primary" className={isMobile ? "break-out" : ""}>
          <br />
          <h6>BEGINNING IN MARCH</h6>

          <br />
          <h3>Diploma in French</h3>
          <br />
          <span>
            Study online for an accredited and globally recognised Diploma in
            French as a Foreign Langauage administered by the International
            Centre for French Studies in France. Our online classes begin in
            March.
          </span>

          <br />
          <br />
          <Button
            style={{ textDecoration: "none" }}
            href="/diplomas/delf"
            outline
            theme="light"
          >
            Learn more
          </Button>
          <br />
          <br />
        </Alert>
      </Col>
      <Col sm={12} md={4}>
        <Alert theme="info" className={isMobile ? "break-out" : ""}>
          <br />
          <h6>COMING IN APRIL</h6>

          <br />
          <h3>Associate Sixth Form</h3>
          <br />
          <span>
            Our Sixth Form Programme engages students in a 2-year study of their
            preferred CAPE subjects.
          </span>
          <br />
          <br />
          <Button
            style={{ textDecoration: "none" }}
            href="/programmes/sixth-form"
            outline
            theme="light"
          >
            Learn more
          </Button>

          <br />
          <br />
        </Alert>
      </Col>
    </Row>
  </Container>
)

export default ComingSoonPromotion
