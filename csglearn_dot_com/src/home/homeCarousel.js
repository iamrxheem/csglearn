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
            <img
              src="https://dl.dropbox.com/s/wwwiafaz55s6dhs/WhatsApp%20Image%202021-01-08%20at%208.42.44%20PM.jpeg?dl=0"
              style={{ width: "100%" }}
            />
          </a>
        </Carousel.Item>

        {/* Diploma in Spanish */}
        <Carousel.Item>
          <a href="/diplomas/dele">
            <img
              alt="Flyer for the Diplomas in Spanish"
              src="https://dl.dropbox.com/s/am5jl3bbdnsm8hk/WhatsApp%20Image%202021-01-05%20at%2010.33.15%20AM.jpeg?dl=0"
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
