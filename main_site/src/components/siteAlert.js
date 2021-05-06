import * as React from "react"
import { Link } from "gatsby"
import Carousel from "react-bootstrap/Carousel"

import { Alert, Container } from "shards-react"

const SiteAlert = () => (
  <div className="text-center bg-dark text-white">
    <Container>
      <Carousel fade controls={false} keyboard={false} indicators={false}>
        <Carousel.Item>
          <br />
          <span>
            Joing our{" "}
            <a
              className="text-white"
              style={{ textDecoration: "underline" }}
              href="/mailing-list"
            >
              mailing list
            </a>{" "}
            for free weekly past papers, answers and study notes.
          </span>
          <br />
          <br />
        </Carousel.Item>

        <Carousel.Item>
          <br />
          <span>
            Enroll in our CSEC Summer Programme starting June 14.{" "}
            <Link
              className="text-white"
              style={{ textDecoration: "underline" }}
              to="/summer"
            >
              Learn more
            </Link>
          </span>
          <br />
          <br />
        </Carousel.Item>

        <Carousel.Item>
          <br />
          <span>
            Registration is now open for our online{" "}
            <Link
              className="text-white"
              style={{ textDecoration: "underline" }}
              to="/literacy"
            >
              Literacy & Numeracy
            </Link>{" "}
            Programme .
          </span>
          <br />
          <br />
        </Carousel.Item>
      </Carousel>
    </Container>
  </div>
)

export default SiteAlert
