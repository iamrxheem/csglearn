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
                <Link to="/programmes/sat">SAT Classes</Link>
              </li>
              <li>
                <Link to="/diplomas/dele">Diploma in Spanish</Link>
              </li>
              <li>
                <Link to="/diplomas/delf">Diploma in French</Link>
              </li>
              <li>
                <Link to="/programmes/csec">CSEC Classes</Link>
              </li>
              <li>
                <Link to="/programmes/sixth-form">Sixth Form Programme</Link>
              </li>
            </ul>

            {/* Adds an break on Mobile Devices  */}
            <br className="d-block d-md-none" />
          </Col>
          <Col md={3}>
            <h5>UPCOMING COURSES</h5>

            <ul className="ul">
              <li>
                <Link to="/programmes/literacy">Literacy Classes</Link>
              </li>
              <li>
                <Link to="/short-courses/webdev">Web Design</Link>
              </li>
              <li>
                <Link to="/short-courses/">Customer Service</Link>
              </li>
              <li>
                <Link to="/short-courses/">Project Management</Link>
              </li>
              <li>
                <Link to="/short-courses/">CSEC & CAPE Timetables</Link>
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
