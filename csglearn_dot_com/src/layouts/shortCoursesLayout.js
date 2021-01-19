import React, { Component } from "react"
import AdmissionsMenu from "../menus/admissionsMenu"
import TopNav from "../components/topNav"
import { MobileView, BrowserView } from "react-device-detect"
import "../components/layout.css"
import Footer from "../components/footer"
import Layout from "../components/layout"
import "../assets/css/bulma-tabs.css"
import "../components/layout.css"
import {
  Breadcrumb,
  BreadcrumbItem,
  Alert,
  Container,
  Row,
  Col,
  CardHeader,
  CardTitle,
  Card,
  CardBody,
  Nav,
  NavItem,
  NavLink
} from "shards-react"
import { Accordion, Table, Button } from "react-bootstrap"

const ShortCoursesLayout = props => (
  <>
    <Layout>
      <div style={{ backgroundColor: "#f6f6f6" }}>
        <div className="d-block d-md-none">
          <img
            style={{ width: "100%", height: "100%" }}
            src="https://i.imgur.com/w626x26.jpg"
          />

          <Nav
            fill
            style={{
              paddingTop: "15px",
              paddingBottom: "15px",
              backgroundColor: "#d9534f"
            }}
          >
            <NavItem>
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                href="/diplomas/dele/beginners"
              >
                DIPLOMAS
              </NavLink>
            </NavItem>
            <NavItem style={{ textDecoration: "none" }} href="/inquire">
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                href="/short-courses/intro-to-public-speaking/"
              >
                UPCOMING
              </NavLink>
            </NavItem>
          </Nav>
          <br />
        </div>

        <Container>
          <Row>
            <Col sm={12} md={8}>
              {props.children}
            </Col>

            <Col sm={12} md={4}>
              <br />
              <div className="d-none d-md-block">
                <br />
                <br />
              </div>

              <br />
              <Alert theme="primary">
                <br />
                <h5>Accredited Diploma in Spanish</h5>

                <br />
                <span>
                  Study online for an accredited diploma in Spanish with no
                  entry requirements.
                </span>

                <br />
                <br />
                <Button
                  className="bg-white text-dark"
                  style={{ textDecoration: "none" }}
                  outline
                  href="/diplomas/dele/beginners"
                  secondary
                >
                  Beginner's course
                </Button>
                <br />
                <br />
              </Alert>

              <Alert theme="success">
                <br />
                <h5>Accredited Diploma in French</h5>

                <br />
                <span>
                  Learn French from scratch for an accredited diploma, with no
                  entry requirements.
                </span>

                <br />
                <br />
                <Button
                  outline
                  className="bg-white text-dark"
                  style={{ textDecoration: "none" }}
                  href="/diplomas/delf/beginners"
                  theme="light"
                >
                  Apply now
                </Button>

                <br />
                <br />
              </Alert>

              <br />
              <h5>Search by Course Category </h5>

              <br />
              <Accordion>
                {/* Entrepreneurship */}
                <Card>
                  <CardHeader>
                    <Accordion.Toggle
                      className="text-dark"
                      as={Button}
                      variant="link"
                      eventKey="0"
                    >
                      Entrepreneurship & Management
                    </Accordion.Toggle>
                  </CardHeader>
                  <Accordion.Collapse eventKey="0">
                    <CardBody>
                      <ul>
                        <li>
                          <a href="/short-courses/entrepreneurship">
                            <span>Entrepreneurship</span>
                          </a>
                        </li>
                        <li style={{ paddingTop: "15px" }}>
                          <a href="#">Introduction to Marketing</a>
                        </li>
                        <li style={{ paddingTop: "15px" }}>
                          <a href="#">Marketing Management</a>
                        </li>
                        <li style={{ paddingTop: "15px" }}>
                          <a href="#">Product Management</a>
                        </li>
                      </ul>
                    </CardBody>
                  </Accordion.Collapse>
                </Card>
                {/* End Category */}

                {/* Marketing & Finance */}
                <Card>
                  <CardHeader>
                    <Accordion.Toggle
                      className="text-dark"
                      as={Button}
                      variant="link"
                      eventKey="1"
                    >
                      Marketing & Finance
                    </Accordion.Toggle>
                  </CardHeader>
                  <Accordion.Collapse eventKey="1">
                    <CardBody>
                      <span>More courses coming soon.</span>
                    </CardBody>
                  </Accordion.Collapse>
                </Card>
                {/* End Category */}

                {/* Human Resources */}
                <Card>
                  <CardHeader>
                    <Accordion.Toggle
                      className="text-dark"
                      as={Button}
                      variant="link"
                      eventKey="2"
                    >
                      Human Resources & Communication
                    </Accordion.Toggle>
                  </CardHeader>
                  <Accordion.Collapse eventKey="2">
                    <CardBody>
                      <ul>
                        <li>
                          <a href="/short-courses/intro-to-public-speaking">
                            <span>Introduction to Public Speaking</span>
                          </a>
                        </li>
                      </ul>
                    </CardBody>
                  </Accordion.Collapse>
                </Card>
                {/* End Category */}

                {/* Computer Science */}
                <Card>
                  <CardHeader>
                    <Accordion.Toggle
                      className="text-dark"
                      as={Button}
                      variant="link"
                      eventKey="3"
                    >
                      Computer Science
                    </Accordion.Toggle>
                  </CardHeader>
                  <Accordion.Collapse eventKey="3">
                    <CardBody>
                      <ul>
                        <li>
                          <a href="#">
                            <span>IT Product Management</span>
                          </a>
                        </li>
                        <li style={{ paddingTop: "15px" }}>
                          <a href="#">Introduction to Web Development</a>
                        </li>
                        <li style={{ paddingTop: "15px" }}>
                          <a href="#">Introduction to ReactJS</a>
                        </li>
                        <li style={{ paddingTop: "15px" }}>
                          <a href="#">Swift/ iOS App Development</a>
                        </li>
                      </ul>
                    </CardBody>
                  </Accordion.Collapse>
                </Card>
                {/* End Category */}

                {/* Law & Political Science */}
                <Card>
                  <CardHeader>
                    <Accordion.Toggle
                      className="text-dark"
                      as={Button}
                      variant="link"
                      eventKey="5"
                    >
                      Law & Political Science
                    </Accordion.Toggle>
                  </CardHeader>
                  <Accordion.Collapse eventKey="5">
                    <CardBody>
                      <span>More courses coming soon.</span>
                    </CardBody>
                  </Accordion.Collapse>
                </Card>
                {/* End Category */}
              </Accordion>
            </Col>
          </Row>

          <br />
          <br />
        </Container>
      </div>
    </Layout>
    {/* General footer */}
    <Footer />
  </>
)

export default ShortCoursesLayout
