import React from "react"
import { Link } from "gatsby"
import { Container } from "shards-react"
import { Row, Col } from "react-bootstrap"

// Images
import Img1 from "../../images/class-promo/1.png"
import Img2 from "../../images/class-promo/2.png"
import Img3 from "../../images/class-promo/3.png"
import Img4 from "../../images/class-promo/4.png"
import FaceToFace from "../../videos/face-to-face.mp4"

// View
import BrowserView from "../../common/browserView"
import MobileView from "../../common/mobileView"

import Carousel from "react-bootstrap/Carousel"
import { isMobile } from "react-device-detect"

const ProgrammesPromo = () => (
  <>
    <Row>
      <Col sm={6}>
        <BrowserView>
          <br />
          <br />
        </BrowserView>

        <h2 className="text-dark">A unique online learning experience</h2>

        <br />
        <span>
          Our unique approach to online learning increases the ease of access to
          quality education for Caribbean students.
        </span>
        <br />
        <br />
        <ul style={{ listStyleType: "none", marginLeft: "-20px" }}>
          <li>
            <i className="fas fa-check-circle mr-3 text-success"></i>
            <span>Smaller class sizes for individual student attention</span>
          </li>
          <li className="mt-3">
            <i className="fas fa-check-circle mr-3 text-success"></i>
            <span>Study notes and exercises on each topic covered</span>
          </li>
          <li className="mt-3">
            <i className="fas fa-check-circle mr-3 text-success"></i>
            <span>Recorded classes, accessible 24/7</span>
          </li>
        </ul>
        <br />
        <Link className="btn btn-primary" to="/programmes">
          Find a programme
        </Link>
      </Col>
      <Col sm={{ order: "last" }} xs={{ order: "first" }}>
        <Carousel
          style={isMobile ? { paddingTop: "" } : { paddingTop: "" }}
          fade
          className={isMobile ? "break-container" : ""}
          controls={false}
          indicators={false}
          slide
          touch
          wrap
        >
          <Carousel.Item>
            <video
              style={{ width: "100%" }}
              preload="auto"
              autoPlay={true}
              loop
              muted
            >
              <source src={FaceToFace} type="video/mp4" />
            </video>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={isMobile ? "break-container" : "d-block w-100"}
              style={{ width: "100%" }}
              src={Img1}
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ width: "100%" }}
              src={Img3}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ width: "100%" }}
              src={Img2}
            />
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  </>
)

export default ProgrammesPromo
