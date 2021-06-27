import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// View Components
import MobileView from "../common/mobileView"
import BrowserView from "../common/browserView"
import { Helmet } from "react-helmet"
import {
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Col,
  Alert
} from "shards-react"
import { isIOS } from "react-device-detect"
import StudentVideo from "../videos/exam22.mp4"
import Image from "../images/young-student.jpg"

const Page = () => (
  <Layout hideAlert>
    <SEO title="CXC May/ June 2022" description="" />

    <MobileView>
      {isIOS ? (
        <>
          <img src={Image} style={{ width: "100%" }} />
        </>
      ) : (
        <>
          <video
            style={{ width: "100%" }}
            preload="auto"
            autoPlay={true}
            loop
            muted
          >
            <source src={StudentVideo} type="video/mp4" />
          </video>
        </>
      )}
    </MobileView>

    <Container style={{ paddingTop: "10px" }}>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>CXC May/ June 2022</BreadcrumbItem>
      </Breadcrumb>

      <Row>
        <Col sm={6}>
          <h4>CSEC & CAPE January and June 2022 Exams</h4>

          <br />
          <span>
            Registration for online classes are now open! Students can register
            for both online classes and exam registration for both{" "}
            <a href="/csec">CXC (CSEC)</a> and <a href="/6form">CAPE</a>.
          </span>

          <br />
          <br />

          <div className="text-center">
            <Row>
              <Col xs={6}>
                <Alert theme="primary">
                  <a style={{ textDecoration: "none" }} href="/programmes/csec">
                    FOR CXC
                  </a>
                </Alert>
              </Col>
              <Col xs={6}>
                <Alert theme="danger">
                  <a
                    style={{ textDecoration: "none" }}
                    href="/programmes/sixth-form"
                  >
                    FOR CAPE
                  </a>
                </Alert>
              </Col>
            </Row>
          </div>

          <br />
        </Col>
        <Col sm={6}>
          <BrowserView>
            <video
              style={{ width: "100%" }}
              preload="auto"
              autoPlay={true}
              loop
              muted
            >
              <source src={StudentVideo} type="video/mp4" />
            </video>
          </BrowserView>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default Page
