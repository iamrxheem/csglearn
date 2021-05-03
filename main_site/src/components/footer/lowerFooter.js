import * as React from "react"
import { Link } from "gatsby"

// Shards-React Components
import { Row, Col, Container } from "shards-react"
import Copyright from "./copyright"
import JoinMailingList from "../joinMailingList/joinMailingList"

function LowerFooter() {
  return (
    <>
      <div className="bg-light container">
        <br />
        <Row>
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
        <br />
      </div>

      <br />
    </>
  )
}

export default LowerFooter
