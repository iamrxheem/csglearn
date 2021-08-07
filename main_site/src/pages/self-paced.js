import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// View Components
import MobileView from "../common/mobileView"
import BrowserView from "../common/browserView"

// Images & Media

import {
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Col,
  Button,
  Alert,
  Form
} from "shards-react"

import StudentImage from "../images/student.jpg"

class SelfPaced extends React.Component {
  render() {
    return (
      <>
        <Layout hideAlert>
          <SEO title={`Self-Paced Learning`} description={``} />

          <MobileView>
            <img src={StudentImage} style={{ width: "100%" }} />
          </MobileView>

          <Container>
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>Self-Paced Learning</BreadcrumbItem>
            </Breadcrumb>

            <Row>
              <Col md={6}>
                <h3>Self-Paced Learning</h3>
                <br />

                <div className="text-center">
                  <Row>
                    <Col xs={6}>
                      <Alert theme="primary">
                        <a
                          style={{ textDecoration: "none" }}
                          href="/self-paced/courses"
                        >
                          Browse Courses
                        </a>
                      </Alert>
                    </Col>
                    <Col xs={6}>
                      <Alert theme="danger">
                        <a style={{ textDecoration: "none" }} href="/csec">
                          Online Classes
                        </a>
                      </Alert>
                    </Col>
                  </Row>
                  <br />
                </div>

                <p>
                  Self-paced courses offer the most inexpensive and flexible
                  option for students who may not have the time to attend
                  classes but still require resources and guidance to supplement
                  their independent or school-based learning.
                </p>

                <p>
                  This study option is ideal for everyone- school students,
                  school leavers and adult learners. Our self-paced courses
                  include
                </p>

                <p className="pt-3">
                  <i className="fas fa-check text-success pr-2"></i>
                  Pre-recorded class on all exam topics
                </p>

                <p className="pt-1">
                  <i className="fas fa-check text-success pr-2"></i>
                  Exam past paper solutions and explanations
                </p>

                <p className="pt-1">
                  <i className="fas fa-check text-success pr-2"></i>
                  Practice assignment and online quizzes with instant grading
                  feedback
                </p>

                <p className="pt-1">
                  <i className="fas fa-check text-success pr-2"></i>
                  Contact information for teachers to clairify questions or
                  request assignment review.
                </p>

                <br />
                <div className="text-center">
                  <Row>
                    <Col xs={6}>
                      <Alert>
                        <a
                          href="/self-paced/english-a"
                          style={{ textDecoration: "none" }}
                        >
                          English A
                        </a>
                      </Alert>
                    </Col>
                    <Col xs={6}>
                      <Alert>
                        <a
                          href="/self-paced/english-a"
                          style={{ textDecoration: "none" }}
                        >
                          Mathematics
                        </a>
                      </Alert>
                    </Col>
                    <Col xs={4}>
                      <Alert>
                        <a
                          style={{ textDecoration: "none" }}
                          href="/self-paced/biology"
                        >
                          Biology
                        </a>
                      </Alert>
                    </Col>
                    <Col xs={4}>
                      <Alert>
                        <a
                          style={{ textDecoration: "none" }}
                          href="/self-paced/chemistry"
                        >
                          Chemistry
                        </a>
                      </Alert>
                    </Col>
                    <Col xs={4}>
                      <Alert>
                        <a
                          style={{ textDecoration: "none" }}
                          href="/self-paced/physics"
                        >
                          Physics
                        </a>
                      </Alert>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col md={6}></Col>
            </Row>
          </Container>
        </Layout>
      </>
    )
  }
}

export default SelfPaced
