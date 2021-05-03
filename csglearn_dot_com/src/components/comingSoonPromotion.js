import React from "react"
import { Alert, Container, Row, Col, Button } from "shards-react"
import { isMobile } from "react-device-detect"
import LazyLoad from "react-lazyload"

const ComingSoonPromotion = () => (
  <LazyLoad offset={100}>
    <Container fluid className="mt-5">
      <Row>
        <Col sm={12} md={4}>
          <Alert theme="light" className={isMobile ? "break-out" : ""}>
            <br />
            <h6>STARTING IN SEPTEMBER</h6>

            <br />
            <h3>Associate Sixth Form</h3>
            <br />
            <span>
              Our Sixth Form Programme engages students in a 2-year study of
              their preferred CAPE subjects.
            </span>
            <br />
            <br />

            <Button
              style={{ textDecoration: "none" }}
              href="/programmes/sixth-form"
              outline
              theme="secondary"
            >
              Learn more
            </Button>

            <br />
            <br />
          </Alert>
        </Col>
        <Col sm={12} md={4}>
          <Alert
            theme="primary"
            //    style={{ backgroundColor: "#38b6ff" }}
            className={isMobile ? "break-out" : ""}
          >
            <br />
            <h6>BEGINNING APRIL 5</h6>

            <br />
            <h3>SAT Programme</h3>
            <br />
            <span>
              Enroll in our online SAT Programme and increase your chances of
              studying at international universities.
            </span>
            <br />
            <br />

            <Button
              style={{ textDecoration: "none" }}
              href="/programmes/sat"
              outline
              theme="light"
            >
              Enroll now
            </Button>

            <br />
            <br />
          </Alert>
        </Col>
        <Col sm={12} md={4}>
          <Alert theme="success" className={isMobile ? "break-out" : ""}>
            <br />
            <h6>SHORT COURSES</h6>

            <br />
            <h3>Grow your skills today</h3>
            <br />
            <span>
              Learn business, creative, and technology skills to achieve your
              personal and professional goals. Join today to get access to
              hundreds of courses.
            </span>
            <br />
            <br />

            <Button
              style={{ textDecoration: "none" }}
              href="/programmes/short-courses"
              outline
              theme="light"
            >
              Learn more
            </Button>

            <br />
            <br />
          </Alert>
        </Col>
      </Row>
    </Container>
  </LazyLoad>
)

export default ComingSoonPromotion
