import React from "react"
import { Carousel } from "react-bootstrap"

// Images
import DelfImage from "../images/delf-mini-flyer.jpeg"
import DeleImage from "../images/dele-mini-flyer.jpeg"

const HomeCarousel = props => {
  return (
    <>
      <Carousel>
        {/* CSEC online classes */}
        <Carousel.Item>
          <a href="/programmes/csec">
            Hello from slide 1
            <img src="" style={{ width: "100%" }} />
          </a>
        </Carousel.Item>

        {/* Diploma in Spanish */}
        <Carousel.Item>
          <a href="/diplomas/dele">
            <img
              alt="Flyer for the Diplomas in Spanish"
              src={DeleImage}
              style={{ width: "100%", height: "100%" }}
            />
          </a>
        </Carousel.Item>

        {/* Diploma in French */}
        <Carousel.Item>
          <a href="/diplomas/delf">
            <img
              alt="Flyer for the Diplomas in French"
              src={DelfImage}
              style={{ width: "100%", height: "100%" }}
            />
          </a>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default HomeCarousel
