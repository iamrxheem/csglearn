import * as React from "react"
import { Row, Col, Button, Container } from "shards-react"
import { isIOS } from "react-device-detect"

import StudentVideo from "../videos/exam-22-home.mp4"
import YouTube from "react-youtube"

class IELTS extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col md={6}></Col>
          <Col md={6}></Col>
        </Row>
      </div>
    )
  }
}

export default IELTS
