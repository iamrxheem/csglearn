import * as React from "react"

import AppStoreIcon from "../custom-icons/appStoreIcon"
import PlayStoreIcon from "../custom-icons/playStoreIcon"

import { Row, Col } from "shards-react"
import { isMobile, isBrowser } from "react-device-detect"

const imgStyle = {
  width: isMobile ? "100%" : "70%",
  height: isMobile ? "" : "100%",
  float: isMobile ? "" : "",
  clear: "both"
}

const linkStyle = {}

const AppDownloadDraw = props => (
  <div style={props.style}>
    <Row>
      <Col xs={6}>
        <AppStoreIcon
          linkStyle={linkStyle}
          imgStyle={imgStyle}
          href={props.ios}
        />
      </Col>
      <Col xs={6}>
        <PlayStoreIcon
          linkStyle={linkStyle}
          imgStyle={imgStyle}
          href={props.google}
        />
      </Col>
    </Row>
  </div>
)

export default AppDownloadDraw
