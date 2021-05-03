import React from "react"
import {
  Breadcrumb,
  BreadcrumbItem,
  Alert,
  Container,
  Row,
  Col,
  Button
} from "shards-react"

import { isMobile, isBrowser } from "react-device-detect"

import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader

import { Animated } from "react-animated-css"

// images
import AppPromoImageFull from "../images/new-app-promo-2.png"
import MobileAppImageOne from "../images/app-promo-imgs/1.png"
import MobileAppImageTwo from "../images/app-promo-imgs/2.png"
import MobileAppImageThree from "../images/app-promo-imgs/3.png"

// View Components
import MobileView from "../common/mobileView"
import BrowserView from "../common/browserView"

import AppDownloadDraw from "../common/appDownloadDraw/appDownloadDraw"
import AwesomeSlider from "react-awesome-slider"

const AppPromo = () => (
  <>
    <Container>
      <div className={isBrowser ? "pl-5" : ""}>
        <span>
          Take your online learning experience offline with the CSG Learning app{" "}
          <sup>1</sup>. Study online for accredited diplomas and certifications,
          and use the app to stay connected with your peers, communicate with
          teachers and more!
        </span>

        <br />
        <br />
        <br />
        <Row>
          <Col md={6}>
            <ul style={{ listStyleType: "none", marginLeft: "-20px" }}>
              <li>
                <i className="fas fa-check-circle mr-3 text-success"></i>
                <span>Join your classes from your phone</span>
              </li>
              <li className="mt-3">
                <i className="fas fa-check-circle mr-3 text-success"></i>
                <span>Get class notifications and reminders</span>
              </li>
              <li className="mt-3">
                <i className="fas fa-check-circle mr-3 text-success"></i>
                <span>Access class materials both online and offline</span>
              </li>
              <li className="mt-3">
                <i className="fas fa-check-circle mr-3 text-success"></i>
                <span>Upload assignments and homework</span>
              </li>
              <li className="mt-3">
                <i className="fas fa-check-circle mr-3 text-success"></i>
                <span>Communicate with teachers and peers</span>
              </li>
            </ul>
          </Col>
          <Col md={6}>
            <MobileView>
              <br />
            </MobileView>

            <span>
              Simply download the Open LMS app and follow the on-screen
              instructions. Visit our{" "}
              <a target="_blank" href="https://www.support.csglearn.com/">
                Support Center
              </a>{" "}
              for account help and self-service.
            </span>

            <br />
            <br />
            <AppDownloadDraw
              style={{
                width: isMobile ? "100%" : "500px"
              }}
              ios="https://apps.apple.com/us/app/open-lms/id1553337282"
              google="https://play.google.com/store/apps/details?id=com.openlms.openlmsmobile&hl=en&gl=US"
            />

            <small>
              <sup>1</sup>Must be a registered student of CSG Learning Institute
              for access to specified features.
            </small>
          </Col>
        </Row>
      </div>

      <br />
    </Container>
    <br />
  </>
)

export default AppPromo
