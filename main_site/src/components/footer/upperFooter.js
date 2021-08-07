import * as React from "react"
import { Link } from "gatsby"

// Shards-React Components
import { Row, Col, Container } from "shards-react"

// Social Media Navigation & other components
import SocialMediaNavigation from "../socialMediaNavigation/socialMediaNavigation"

// Device detection
import { isMobile } from "react-device-detect"

function UpperFooter() {
  return (
    <div className="bg-light mt-5">
      <br />
      <Container>
        <Row>
          <Col md={6}>
            <h5>OUR MISSION</h5>

            <br />
            <span>
              CSG Learning Institute is an online institution dedicated to
              revolutionising education in Jamaica, and by extension, the
              Caribbean, and foster a new and improved alternative to the
              already established education standard.
            </span>

            <SocialMediaNavigation />
            <br />
            <br />
          </Col>
          <Col md={3}>
            <h5>PROGRAMMES</h5>

            <ul className="ul">
              <li>
                <a href="/programmes/sat">SAT Classes</a>
              </li>
              <li>
                <a href="/diplomas/dele">Diploma in Spanish</a>
              </li>
              <li>
                <a href="/diplomas/delf">Diploma in French</a>
              </li>
              <li>
                <a href="/programmes/csec">CSEC Classes</a>
              </li>
              <li>
                <a href="/programmes/sixth-form">Sixth Form Programme</a>
              </li>
            </ul>

            {/* Adds an break on Mobile Devices  */}
            <br className="d-block d-md-none" />
          </Col>
          <Col md={3}>
            <h5>UPCOMING COURSES</h5>

            <ul className="ul">
              <li>
                <a href="/programmes/literacy">Literacy Classes</a>
              </li>
              <li>
                <a href="/short-courses/webdev">Web Design</a>
              </li>
              <li>
                <a href="/short-courses/">Customer Service</a>
              </li>
              <li>
                <a href="/short-courses/">Project Management</a>
              </li>
              <li>
                <a href="/short-courses/">CSEC & CAPE Timetables</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <br />
    </div>
  )
}

export default UpperFooter
