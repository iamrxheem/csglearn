import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// View Components
import MobileView from "../common/mobileView"
import BrowserView from "../common/browserView"

import {
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button,
  Row,
  Col,
  Alert
} from "shards-react"
import OnlineClasses from "../home/onlineClasses"
import { isIOS } from "react-device-detect"

import SummerProgrammeVideo from "../videos/summer-programme.mp4"

const SumerPage = () => (
  <Layout>
    <SEO title="CSEC and CAPE Summer Programme" description="" />
    <MobileView>
      {isIOS ? (
        <img
          src="https://loopnewslive.blob.core.windows.net/liveimage/sites/default/files/2020-09/Di3GpPFEwP.jpg"
          style={{ width: "100%" }}
        />
      ) : (
        <video
          style={{ width: "100%" }}
          preload="auto"
          autoPlay={true}
          loop
          muted
        >
          <source src={SummerProgrammeVideo} type="video/mp4" />
        </video>
      )}
    </MobileView>
    <Container>
      <br />
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>Summer Programme</BreadcrumbItem>
      </Breadcrumb>

      <Row>
        <Col sm={6}>
          <h3>CSEC & CAPE Summer Programme</h3>
          <br />

          <div className="text-center">
            <Row>
              <Col xs={6}>
                <Alert theme="primary">
                  <Link
                    style={{ textDecoration: "none" }}
                    to="/programmes/csec/summer"
                  >
                    CSEC
                  </Link>
                </Alert>
              </Col>
              <Col xs={6}>
                <Alert theme="danger">
                  <Link
                    style={{ textDecoration: "none" }}
                    to="/programmes/sixth-form/summer"
                  >
                    CAPE
                  </Link>
                </Alert>
              </Col>
            </Row>
          </div>

          <br />
          <span>
            Our CXC and Sixth Form Summer Programme offer extra classes for
            students sitting the May/ June 2022 exams or the January 2022.
          </span>

          <br />
          <br />
          <span>
            Learn more about our Summer Programme for{" "}
            <a href="/programmes/csec/summer">CSEC students</a> or for{" "}
            <a href="/programmes/sixth-form/summer">CAPE students</a>.{" "}
          </span>
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
              <source src={SummerProgrammeVideo} type="video/mp4" />
            </video>
          </BrowserView>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default SumerPage
