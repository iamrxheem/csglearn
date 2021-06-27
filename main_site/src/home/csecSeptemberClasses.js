import * as React from "react"
import { Row, Col, Button, Container } from "shards-react"
import { isIOS } from "react-device-detect"

import StudentVideo from "../videos/exam-22-home.mp4"

class CsecSeptemberClasses extends React.Component {
  render() {
    return (
      <div style={{ width: "100%" }}>
        <Row>
          <Col sm={6}>
            {isIOS ? (
              <>
                <img
                  src="https://www.csglearn.com/static/young-student-b2c1a34bf40be9cf30e4cc000e21e6c3.jpg"
                  style={{ width: "100%" }}
                />
              </>
            ) : (
              <>
                <video
                  style={{ width: "100%" }}
                  preload="auto"
                  autoPlay={true}
                  loop
                  muted
                >
                  <source src={StudentVideo} type="video/mp4" />
                </video>
              </>
            )}
          </Col>
          <Col sm={6}>
            <br />
            <Container>
              <h4>Register for the CSEC & CAPE May/ June 2022 Exams</h4>

              <br />
              <span>
                Registration for the January and May/ June exams are now open!
                Register online now and start learning from the comfort of your
                home.
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
                      <strong>September 6</strong>
                    </span>
                  </Col>
                  <Col xs={4}>
                    <i className="far fa-clipboard fa-2x text-secondary"></i>
                    <br />
                    <br />
                    <span>
                      <strong>Materials Included</strong>
                    </span>
                  </Col>
                  <Col xs={4}>
                    <i className="fas fa-laptop fa-2x text-secondary"></i>
                    <br />
                    <br />
                    <span>
                      <strong>Online Only</strong>
                    </span>
                  </Col>
                </Row>
              </div>

              <br />
              <br />
              <Row>
                <Col xs={6}>
                  <Button pill href="/csec">
                    Register for CSEC
                  </Button>
                </Col>
                <Col xs={6}>
                  <Button outline href="/sixth-form">
                    Register for CAPE
                  </Button>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>

        <br />
        <br />
      </div>
    )
  }
}

export default CsecSeptemberClasses
