import * as React from "react"
import { Link } from "gatsby"

import { Container, Breadcrumb, BreadcrumbItem, Row, Col } from "shards-react"

const StaffPreview = props => (
  <>
    <Col sm={12} md={3}>
      <img src={props.src} style={{ width: "100%" }} />
      <br />
      <br />
      <span>{props.name}</span>
      <br />
      <span>
        <strong style={{ color: "#8A2BE2" }}>{props.position}</strong>
      </span>

      <br />
      <br />
      <br />
      <br />
    </Col>
  </>
)

export default StaffPreview
