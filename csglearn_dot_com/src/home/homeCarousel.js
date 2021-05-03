import React from "react"
import { Carousel } from "react-bootstrap"
import LazyLoad from "react-lazyload"

// Images
import DelfImage from "../images/delf-mini-flyer.jpeg"
import DeleImage from "../images/dele-mini-flyer.jpeg"
import OrangeBackground from "../images/orange-notice.png"
import BlueNoticeSign from "../images/blue-notice-sign.png"
import DELEImageLarge from "../images/dele-img-large.jpeg"
import CSECPreRegisterFlyerImage from "../images/csec-preregister.jpeg"
import SixthFormProgrammeImage from "../images/sixth-form-programme.jpeg"

// Slider
import AwesomeSlider from "react-awesome-slider"
import "react-awesome-slider/dist/styles.css"

import { isMobile } from "react-device-detect"

const HomeCarousel = props => {
  return (
    <>
      <Carousel>
        {/* CSEC Online Classes */}
        <Carousel.Item>
          <a href="/diplomas/dele">
            <img
              className="d-block w-100"
              style={{ width: "100%" }}
              src={CSECPreRegisterFlyerImage}
              alt="CSEC online classes flyer"
            />
          </a>
        </Carousel.Item>
      </Carousel>
      <br />
    </>
  )
}

export default HomeCarousel
