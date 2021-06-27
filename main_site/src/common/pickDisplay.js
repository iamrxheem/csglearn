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

const PickDisplay = props => (
  <Col sm={4}>
    <br />
    <div>
      <a href={props.href}>
        <img src={props.src} style={{ width: "50%" }} className="center" />
      </a>
      <br />
      <p className="text-center" style={{ fontSize: "30px" }}>
        {props.title}
      </p>

      <br />
      <p>{props.description}</p>

      <br />
      <br />
      <a className="center" href={props.href}>
        View selection
      </a>
    </div>

    <br />
  </Col>
)

export default PickDisplay
