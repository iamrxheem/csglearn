import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Breadcrumb, BreadcrumbItem, Container } from "shards-react"

import {
  Row,
  Col} from "shards-react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { isMobile } from "react-device-detect"

class Page extends Component {
  render() {
    return (
      <>
        <SEO
          title="Download the App"
          description="Use the app to learn on the go, access your course materials and much, much more. CSG Learning Institute uses the OpenLMS platform which allows us to to create, personalize and track instruction for students with simple online tools."
          lang="en"
        />
        <Layout>
          <Container>
            <Breadcrumb>
              <BreadcrumbItem>
                <a href="/">Home</a>
              </BreadcrumbItem>
              <BreadcrumbItem active>Download the App</BreadcrumbItem>
            </Breadcrumb>

            <Row>
              <Col sm={12} md={6} lg={6}>
                <h4>Get the App</h4>
                <br />
                <Row>
                  <Col md={8}>
                    <span>
                      Use the app to learn on the go, access your course
                      materials and much, much more. CSG Learning Institute uses
                      the OpenLMS platform which allows us to to create,
                      personalize and track instruction for students with simple
                      online tools.
                    </span>
                  </Col>
                  <Col md={4}>
                    <img
                      src="https://i.imgur.com/YdkoX31.png"
                      style={{ width: "100%" }}
                    />
                  </Col>
                </Row>

                <br />
                <br />

                {/* Mobile View */}
                <div className="d-block d-md-none">
                  <Row>
                    <Col xs={6}>
                      <a
                        src="https://apps.apple.com/us/app/open-lms/id1212149426"
                        target="_blank"
                      >
                        <img
                          src="https://i1.wp.com/incipia.co/wp-content/uploads/2017/10/app-store.png?fit=519%2C160&ssl=1"
                          style={{ width: "100%" }}
                        />
                      </a>
                    </Col>
                    <Col xs={6}>
                      <a
                        src="https://play.google.com/store/apps/details?id=com.mrooms.bbopen&hl=en&gl=US"
                        target="_blank"
                      >
                        <img
                          src="https://miro.medium.com/max/4000/1*OIIv4FEjJQMqh-zEPhtlYA.png"
                          style={{ width: "100%" }}
                        />
                      </a>
                    </Col>
                  </Row>
                </div>

                {/* Browser View */}
                <div className="d-none d-md-block">
                  <Row>
                    <Col xs={6}>
                      <a
                        href="https://apps.apple.com/us/app/open-lms/id1212149426"
                        target="_blank"
                      >
                        <img
                          src="https://i1.wp.com/incipia.co/wp-content/uploads/2017/10/app-store.png?fit=519%2C160&ssl=1"
                          style={{ width: "100%", height: "70px" }}
                        />
                      </a>
                    </Col>
                    <Col xs={6}>
                      {/* Mobile View */}
                      <div className="d-block d-md-none">
                        <br />
                      </div>
                      <a
                        href="https://play.google.com/store/apps/details?id=com.mrooms.bbopen&hl=en&gl=US"
                        target="_blank"
                      >
                        <img
                          src="https://miro.medium.com/max/4000/1*OIIv4FEjJQMqh-zEPhtlYA.png"
                          style={{
                            width: "100%",
                            height: isMobile ? "" : "70px"
                          }}
                        />
                      </a>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col sm={12} md={6} lg={6}>
                <div className="d-block d-md-none">
                  <br />
                  <br />
                </div>

                <h4>How to log in</h4>

                <br />
                <span>
                  First, you must be a registered student to access the
                  application. <a href="/programmes">Find a programme</a> and
                  enroll today.
                </span>

                <br />
                <br />

                <ol>
                  <li>
                    <span>
                      Download the app from the{" "}
                      <a
                        href="https://play.google.com/store/apps/details?id=com.mrooms.bbopen&hl=en&gl=US"
                        target="_blank"
                      >
                        Google Play
                      </a>{" "}
                      or{" "}
                      <a
                        href="https://apps.apple.com/us/app/open-lms/id1212149426"
                        target="_blank"
                      >
                        App Store
                      </a>
                      .
                    </span>
                  </li>

                  <li style={{ paddingTop: "15px" }}>
                    <span>
                      Enter the link to our online portal. Click the link to
                      copy and paste in the textbox:
                      https://www.hub.csglearn.com.{" "}
                      <CopyToClipboard text="https://www.hub.csglearn.com">
                        <a className="text-underline" href="#">
                          Click to copy
                        </a>
                      </CopyToClipboard>
                      .
                    </span>
                  </li>

                  <li style={{ paddingTop: "15px" }}>
                    <span>
                      Enter your username. Your username is normally the email
                      address your provided upon registration.
                    </span>
                  </li>

                  <li style={{ paddingTop: "15px" }}>
                    <span>
                      Enter your password. If you do not remember you password,
                      please use the 'Forgot password' option.
                    </span>
                  </li>

                  <li style={{ paddingTop: "15px" }}>
                    <span>Start learning!</span>
                  </li>
                </ol>
              </Col>
            </Row>
          </Container>
        </Layout>
      </>
    )
  }
}

export default Page
