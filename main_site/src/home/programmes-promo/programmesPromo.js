import React from "react"
import { Link } from "gatsby"
import { Container, Button } from "shards-react"
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
        </BrowserView>

        <h2 className="text-dark">A unique online learning experience</h2>

        <br />
        <p>
          Our unique approach to online learning increases the ease of access to
          quality education for Caribbean students.
        </p>

        <br />
        <p>
          <i className="fas fa-check text-success pr-2"></i>
          <span>Smaller class sizes for individual student attention</span>
        </p>
        <p className="mt-3">
          <i className="fas fa-check text-success pr-2"></i>
          <span>Study notes and exercises on each topic covered</span>
        </p>
        <p className="mt-3">
          <i className="fas fa-check text-success pr-2"></i>
          <span>Weekly assessments, monthly progress reports</span>
        </p>
        <p className="mt-3">
          <i className="fas fa-check text-success pr-2"></i>
          <span>Recorded classes, accessible 24/7</span>
        </p>

        <br />
        <Button theme="primary" style={{ width: "100%" }} href="/programmes">
          Find a programme
        </Button>
      </Col>
      <Col sm={{ order: "last" }} xs={{ order: "first" }}>
        <img style={{ width: "100%" }} src={Img1} />
      </Col>
    </Row>
  </>
)

export default ProgrammesPromo
