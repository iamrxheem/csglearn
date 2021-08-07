import * as React from "react"
import { Link } from "gatsby"
import { Row, Col, Container, Alert, Button } from "shards-react"

import { isMobile } from "react-device-detect"
import MobileView from "../common/mobileView"
import BrowserView from "../common/browserView"

// Images
import CSECImage from "../images/csec.png"
import CAPEImage from "../images/cape.png"
import DELEImage from "../images/dele.png"
import DELFImage from "../images/delf.png"
import SATImage from "../images/sat.jpg"
import ACCAImage from "../images/acca.jpg"
import IELTSImage from "../images/ielts.png"
import KidsImage from "../images/kids-reading.jpeg"

const imgageStyle = {
  width: isMobile ? "30%" : "25%",
  height: isMobile ? "" : "",
  align: "center",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  paddingBottom: "20px"
}

const btnStyle = {
  width: "50%",
  align: "center",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto"
}

const OnlineClasses = () => (
  <>
    <br />
    <Alert theme="light" style={{ width: "100%" }}>
      <br />
      <Container>
        <Row>
          {/* CSEC */}
          <Col md={4}>
            <img src={CSECImage} style={imgageStyle} />
            <h5 className="text-center">Online CSEC Classes</h5>
            <br />
            <span>
              Enroll in online CSEC classes for the September 2021 term, and
              register for the January or May/ June 2022 exam sitting. Sign up
              for group or private 1-on-1 classes.
            </span>

            <br />
            <br />
            <Button
              style={{ textDecoration: "none" }}
              theme="dark"
              className="center btn btn-outline-primary"
              outline
              href="/programmes/csec"
            >
              Learn more
            </Button>
          </Col>

          {/* Sixth Form */}
          <Col md={4}>
            <MobileView>
              <br />
              <br />
              <br />
            </MobileView>
            <img src={CAPEImage} style={imgageStyle} />
            <h5 className="text-center">Online CAPE Classes</h5>
            <br />
            <span>
              Our 2-year Associate Sixth Form and Career Counselling programme
              allows students to complete their preferred CAPE subjects in
              preparation for university.
            </span>
            <br />
            <br />
            <Button
              style={{ textDecoration: "none" }}
              theme="dark"
              className="center btn btn-outline-dark"
              outline
              href="/programmes/sixth-form"
            >
              Learn more
            </Button>
          </Col>

          {/* IELTS */}
          <Col md={4}>
            <MobileView>
              <br />
              <br />
              <br />
              <br />
            </MobileView>
            <img src={IELTSImage} style={imgageStyle} />
            <h5 className="text-center">English Language Certification</h5>
            <br />
            <span>
              IELTS is an English language test for study, migration or work.
              Millions take the test every year, and is accepted by employers,
              universities and immigration bodies around the world.
            </span>

            <br />
            <br />
            <Button
              style={{ textDecoration: "none" }}
              theme="dark"
              className="center btn btn-outline-dark"
              outline
              href="/diplomas/ielts"
            >
              Learn more
            </Button>
            <MobileView>
              <br />
              <br />
            </MobileView>
          </Col>

          {/* Diploma in Spanish */}
          <Col md={4}>
            <br />
            <br />
            <br />

            <img src={DELEImage} style={imgageStyle} />
            <h5 className="text-center">Diploma in Spanish</h5>
            <br />
            <span>
              Start learning Spanish from scratch for the accredited Beginners
              Diploma in Spanish, starting in September.
            </span>

            <br />
            <br />
            <Button
              style={{ textDecoration: "none" }}
              theme="dark"
              className="center btn btn-outline-primary"
              outline
              href="/diplomas/dele"
            >
              Learn more
            </Button>
          </Col>

          {/* Diploma in French */}
          <Col md={4}>
            <br />
            <br />
            <br />

            <img src={DELFImage} style={imgageStyle} />
            <h5 className="text-center">Diploma in French</h5>
            <br />
            <span>
              Start learning French from scratch for the accredited Beginners
              Diploma in French.
            </span>

            <br />
            <br />
            <Button
              style={{ textDecoration: "none" }}
              theme="dark"
              className="center btn btn-outline-primary"
              outline
              href="/diplomas/delf"
            >
              Learn more
            </Button>
          </Col>

          {/* Literacy class */}
          <Col md={4}>
            <br />
            <br />
            <br />

            <img
              src={KidsImage}
              style={{
                width: "40%",
                align: "center",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                paddingBottom: "20px"
              }}
            />
            <h5 className="text-center">Literacy Programme</h5>
            <br />
            <span>
              Enroll in our online Literacy Programme, made available for
              students and adults.
            </span>

            <br />
            <br />
            <Row>
              <Col xs={6}>
                <Button
                  style={{ textDecoration: "none", width: "100%" }}
                  theme="dark"
                  className="center btn btn-outline-primary"
                  outline
                  href="/programmes/literacy/kids"
                >
                  Kids
                </Button>
              </Col>
              <Col xs={6}>
                <Button
                  style={{ textDecoration: "none", width: "100%" }}
                  theme="dark"
                  className="center btn btn-outline-primary"
                  outline
                  href="/programmes/literacy/adults"
                >
                  Adults
                </Button>
              </Col>
            </Row>
          </Col>
          <Col md={4}>
            <br />
            <br />
            <br />
            <img src={SATImage} style={imgageStyle} />
            <h5 className="text-center">SAT Programme</h5>
            <br />
            <span>
              Enroll in online SAT preparation classes for the 2022 sitting of
              the exam.
            </span>

            <br />
            <br />
            <Button
              style={{ textDecoration: "none" }}
              theme="dark"
              className="center btn btn-outline-primary"
              outline
              href="/programmes/sat"
            >
              Learn more
            </Button>
          </Col>
        </Row>

        <br />
      </Container>
    </Alert>
  </>
)

export default OnlineClasses
