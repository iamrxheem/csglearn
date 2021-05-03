import React from "react"
import uuidv4 from "uuid"
import { Link } from "gatsby"

import { Row, Col, Container } from "shards-react"
import AppDownloadDraw from "../../common/appDownloadDraw/appDownloadDraw"
import { isMobile } from "react-device-detect"

// Images
import MainImage from "../../images/double-app.png"

// CSS

const AppPreview = () => (
  <>
    <Row>
      <Col sm={6}>
        <img style={{ width: "100%" }} src={MainImage} />
      </Col>
      <Col sm={6}>
        <br />
        <br />
        <h2 className="text-dark">Study on the go</h2>

        <br />
        <span>
          Take your online learning experience offline with the CSG Learning
          app. Use the app to
        </span>
        <br />
        <br />
        <ul style={{ listStyleType: "none", marginLeft: "-20px" }}>
          <li>
            <i className="fas fa-check-circle mr-3 text-success"></i>
            <span>Join your classes directly from your phone</span>
          </li>
          <li className="mt-3">
            <i className="fas fa-check-circle mr-3 text-success"></i>
            <span>Get class notifications and reminders</span>
          </li>
          <li className="mt-3">
            <i className="fas fa-check-circle mr-3 text-success"></i>
            <span>Upload assignments and homework</span>
          </li>
        </ul>
        <br />
        <Link className="btn btn-primary" to="/app">
          Learn more
        </Link>
      </Col>
    </Row>
  </>
)

export default AppPreview
