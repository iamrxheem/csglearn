import * as React from "react"
import {
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Col,
  Alert
} from "shards-react"
import MobileView from "./mobileView"
import BrowserView from "./browserView"

const PickBox = props => (
  <Col xs={6} md={3}>
    <div>
      <br />
      <a href={props.href} target="_blank">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/718B6zl%2Bb6L._AC_SX679_.jpg"
          style={{ width: "50%" }}
          className="center"
        />
      </a>
      <br />
      <a href={props.href} target="_blank">
        <p className="text-center">{props.title}</p>
      </a>
    </div>
    <br />
  </Col>
)

export default PickBox
