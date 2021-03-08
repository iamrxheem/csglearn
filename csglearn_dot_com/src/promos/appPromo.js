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
import { isMobile } from "react-device-detect"
import { Carousel } from "react-bootstrap"
import { Animated } from "react-animated-css"

// images
import MobileAppPromoImage from "../images/app-promo.png"
import MobileAppPromoImage2 from "../images/app-promo-2.png"
import MobileAppPromoMobile from "../images/app-promo-mobile.png"

// Logos and icons
import GooglePlayIcon from "../images/google-play-icon.png"

const AppPromo = () => (
  <>
    <Container>
      <Row>
        <Col sm={6}>
          {isMobile ? (
            <>
              <Animated
                animationIn="bounceInLeft"
                animationOut="fadeOut"
                isVisible={true}
              >
                <img
                  className="d-block w-100"
                  style={{ width: "100%" }}
                  src={MobileAppPromoMobile}
                />
              </Animated>
            </>
          ) : (
            <>
              <Animated
                animationIn="bounceInUp"
                animationOut="fadeOut"
                isVisible={true}
              >
                <Carousel slide={false}>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      style={{ width: "100%" }}
                      src={MobileAppPromoImage}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      style={{ width: "100%" }}
                      src={MobileAppPromoImage2}
                    />
                  </Carousel.Item>
                </Carousel>
              </Animated>
            </>
          )}
        </Col>
        <Col sm={6}>
          <div>
            {isMobile ? (
              <></>
            ) : (
              <>
                <br />
              </>
            )}
            <br />
            <h1>Study from the comfort of your home</h1>

            <br />
            <span>
              Study online for accredited diplomas and certifications, and use
              the app to stay connected with your peers, communicate with
              teachers and more!
            </span>

            <br />
            <br />
            <ul style={{ listStyleType: "none", marginLeft: "-20px" }}>
              <li>
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
          </div>

          <br />
          {/* Mobile View */}
          <div className="d-block d-md-none">
            <Row>
              <Col xs={6}>
                <a
                  src="https://apps.apple.com/us/app/open-lms/id1212149426"
                  target="_blank"
                >
                  <img
                    src="https://i1.wp.com/incipia.co/wp-content/uploads/2017/10/app-store.png?fit=519%2C160&ssl=1"
                    style={{ width: "100%" }}
                  />
                </a>
              </Col>
              <Col xs={6}>
                <a
                  src="https://play.google.com/store/apps/details?id=com.mrooms.bbopen&hl=en&gl=US"
                  target="_blank"
                >
                  <img src={GooglePlayIcon} style={{ width: "95%" }} />
                </a>
              </Col>
            </Row>
          </div>

          {/* Browser View */}
          <div className="d-none d-md-block">
            <Row>
              <Col xs={6}>
                <a
                  href="https://apps.apple.com/us/app/open-lms/id1212149426"
                  target="_blank"
                >
                  <img
                    src="https://i1.wp.com/incipia.co/wp-content/uploads/2017/10/app-store.png?fit=519%2C160&ssl=1"
                    style={{ width: "70%" }}
                  />
                </a>
              </Col>
              <Col xs={6}>
                {/* Mobile View */}
                <div className="d-block d-md-none">
                  <br />
                </div>
                <a
                  href="https://play.google.com/store/apps/details?id=com.mrooms.bbopen&hl=en&gl=US"
                  target="_blank"
                >
                  <img
                    src={GooglePlayIcon}
                    style={{
                      width: "65%"
                    }}
                  />
                </a>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  </>
)

export default AppPromo
