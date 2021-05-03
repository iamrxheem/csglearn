import * as React from "react"
import { Link } from "gatsby"
import { Row, Col, Container, Alert } from "shards-react"

let Show = props => (
  <>
    <Alert theme="dark" style={{ width: "100%" }}>
      <Container>
        <Row>
          <Col md={4}>
            <h5></h5>
          </Col>
          <Col md={4}></Col>
          <Col md={4}></Col>
        </Row>
      </Container>

      <br />
      <br />
    </Alert>
  </>
)

export default Show
