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
                <Link to="/programmes/dele">Diploma in Spanish</Link>
              </li>
              <li>
                <Link to="/programmes/delf">Diploma in French</Link>
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
            <h5>RESOURCES</h5>

            <ul className="ul">
              <li>
                <Link to="/programmes/csec/resources/sba-guides">
                  SBA Guides
                </Link>
              </li>
              <li>
                <Link to="/programmes/cape/resources/ia-guides">IA Guides</Link>
              </li>
              <li>
                <Link to="/programmes/csec/syallabus">CXC Syllabus</Link>
              </li>
              <li>
                <Link to="/programmes/csec/timetables/">
                  CSEC & CAPE Timetables
                </Link>
              </li>
              <li>
                <Link to="/programmes/csec/resources/">
                  Multiple Choice Practice
                </Link>
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
