import * as React from "react"
import { Row, Col, Container, Button } from "shards-react"

import DeleVideo from "../videos/dele-student-video.mp4"

import MobileView from "../common/mobileView"
import BrowserView from "../common/browserView"
import { isMobile } from "react-device-detect"
import LazyLoad from "react-lazyload"
import Img from "../images/black-college-student.jpg"

const DelePromotion = () => (
  <Container fluid>
    <>
      <Row>
        <Col md={6}>
          <MobileView>
            <img
              src={Img}
              style={{ width: "100%" }}
              className="break-container"
            />
          </MobileView>

          <BrowserView>
            <img src={Img} style={{ width: "100%" }} />
          </BrowserView>
        </Col>
        <Col md={6}>
          <br />
          <h4>Accredited Diploma in Spanish</h4>

          <br />
          <span>
            Start learning Spanish from scratch for the accredited and
            internationally recognised Diplomas in Spanish,{" "}
            <strong className="text-primary">
              no experience and no subjects required
            </strong>
            .
          </span>

          <br />
          <br />
          <div className="text-center">
            <Row>
              <Col xs={4}>
                <i className="fas fa-calendar-alt fa-2x text-secondary"></i>
                <br />
                <br />
                <span>
                  <strong>June, 21</strong>
                </span>
              </Col>
              <Col xs={4}>
                <i className="far fa-clock fa-2x text-secondary"></i>
                <br />
                <br />
                <span>
                  <strong>8 Months</strong>
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
              <Button
                theme="secondary"
                outline
                href="/dele"
                style={{ width: "100%" }}
              >
                Learn more
              </Button>
            </Col>
            <Col xs={6}>
              <Button href="/apply" style={{ width: "100%" }}>
                Enroll now
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
    <br />
  </Container>
)

export default DelePromotion
