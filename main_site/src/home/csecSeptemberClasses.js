import * as React from "react"
import { Row, Col, Button, Container } from "shards-react"
import { isIOS } from "react-device-detect"

import StudentVideo from "../videos/exam-22-home.mp4"
import MobileView from "../common/mobileView"

class CsecSeptemberClasses extends React.Component {
  render() {
    return (
      <div style={{ width: "100%" }}>
        <Row>
          <Col sm={6}>
            <video
              style={{ width: "100%" }}
              preload="auto"
              autoPlay={true}
              loop
              muted
            >
              <source src={StudentVideo} type="video/mp4" />
            </video>
          </Col>
          <Col sm={6}>
            <MobileView>
              <br />
            </MobileView>

            <Container>
              <h4>Join our online CXC Classes</h4>

              <br />
              <span>
                Registration for the January and May/ June 2022 exams are now
                open! Enroll online now and start learning from the comfort of
                your home.
              </span>

              <br />
              <br />
              <br />
              <div className="text-center">
                <Row>
                  <Col xs={4}>
                    <i className="fas fa-calendar-alt fa-2x text-secondary"></i>
                    <br />
                    <br />
                    <span>
                      <strong>August 2</strong>
                    </span>
                  </Col>
                  <Col xs={4}>
                    <i className="fas fa-users fa-2x text-secondary"></i>
                    <br />
                    <br />
                    <span>
                      <strong>Small Class Sizes</strong>
                    </span>
                  </Col>
                  <Col xs={4}>
                    <i className="fas fa-laptop fa-2x text-secondary"></i>
                    <br />
                    <br />
                    <span>
                      <strong>Online</strong>
                    </span>
                  </Col>
                </Row>
              </div>

              <br />
              <br />
              <Row>
                <Col xs={6}>
                  <Button style={{ width: "100%" }} pill href="/csec">
                    Register for CSEC
                  </Button>
                </Col>
                <Col xs={6}>
                  <Button style={{ width: "100%" }} outline href="/sixth-form">
                    Register for CAPE
                  </Button>
                </Col>
              </Row>

              <br />
              <p>
                See special offers for students in{" "}
                <a href="/tt/exam22">Trinidad & Tobago</a> and{" "}
                <a href="/bb/exam22">Barbados</a>.
              </p>
            </Container>
          </Col>
        </Row>

        <br />
      </div>
    )
  }
}

export default CsecSeptemberClasses
