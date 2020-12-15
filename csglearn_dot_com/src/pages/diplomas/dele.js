import React from "react"
import { Link } from "gatsby"
import { Tabs, Tab } from "react-bootstrap"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import DownloadButton from "../../common/downloadButton"

import {
  Breadcrumb,
  Button,
  BreadcrumbItem,
  Row,
  Col,
  Alert,
  Container
} from "shards-react"
import { isMobile, MobileView, BrowserView } from "react-device-detect"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Diplomas in Spanish as a Foreign Language (DELE) in Jamaica"
      description="Study and take the International Spanish Language Certification (DELE Exam) in Jamaica with CSG Learning Institute. Call or WhatsApp (876) 707-3443 to get started."
      lang="en"
    />

    <Container>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="/diplomas/">Diplomas</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>DELE</BreadcrumbItem>
      </Breadcrumb>

      {/* Begin Mobile View */}
      <MobileView>
        <img
          style={{ width: "100%", height: "100%" }}
          src="https://dl.dropbox.com/s/x6jif2uyqnfzem8/dele%20full.png?dl=0"
        />

        <h5>Diplomas de Español como Lengua Extranjera</h5>

        <br />
        <span>
          The Diplomas in Spanish as a Foreign Language is an official,
          globally-recognized title certifying the holder’s competency and
          mastery of the Spanish language.
        </span>

        <br />
        <br />
        <span>
          There are three levels of this diploma, ranging from Absolute
          Beginners, where students are introduced to Spanish and begin learning
          the basics, to Advance, where students are able to express themselves
          fluently in the langauge.
        </span>

        <br />
        <br />
        <Tabs defaultActiveKey="a" id="uncontrolled-tab-example">
          <Tab
            eventKey="a"
            title={
              <>
                <span>
                  <i className="far fa-star mr-2 text-warning"></i>A Level
                </span>
              </>
            }
          >
            <div>
              <br />
              <img
                src="https://dl.dropbox.com/s/ilm2idyfdkkxcgt/Screenshot%202020-12-14%20at%201.24.07%20AM.png?dl=0"
                style={{ width: "100%" }}
              />
              <br />
              <br />
              <span>
                This certifications is for absolute beginners in Spanish and
                certifies that the student is able to communicate in a basic way
                in situations that have to do with immediate needs.
              </span>

              <br />
              <br />
              <span>
                This diploma is close to the CSEC Spanish but is more valuable
                as it is globally recognized.
              </span>

              <br />
              <br />
              <h6>Requirements</h6>

              <br />
              <ul>
                <li style={{ paddingTop: "5px" }}>
                  5 CSEC passes (including Math and English) or the equivalent.
                </li>
                <li style={{ paddingTop: "15px" }}>
                  Passes in CSEC or CAPE Spanish not required, but is a plus
                </li>
              </ul>

              <br />
              <Row>
                <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                  <DownloadButton text="Get Brochure"></DownloadButton>
                </Col>
                <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                  <Button href="/diplomas/dele/a1">Learn more</Button>
                </Col>
              </Row>
            </div>
          </Tab>
          <Tab eventKey="b" title="B Level">
            <div>
              <br />
              <img
                style={{ width: "100%" }}
                src="https://dl.dropbox.com/s/axi491d4orzcjl5/Screenshot%202020-12-14%20at%201.18.40%20AM.png?dl=0"
              />
              <br />
              <br />
              <span>
                The B1 and B2 diplomas are aimed at intermediate learners and
                assesses a wide range of the students’ capabilities in reading
                comprehension, written expressions, reading comprehension and
                oral expressions.
              </span>

              <br />
              <br />
              <h6>Requirements</h6>

              <br />
              <ul>
                <li style={{ paddingTop: "5px" }}>DELE A1 or A2 </li>
                <li style={{ paddingTop: "15px" }}>
                  5 CSEC passes (including Math and English) or the equivalent.
                </li>
                <li style={{ paddingTop: "15px" }}>
                  Passes in CSEC or CAPE Spanish not required, but is a plus
                </li>
              </ul>

              <br />
              <Row>
                <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                  <DownloadButton text="Get Brochure"></DownloadButton>
                </Col>
                <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                  <Button href="/diplomas/dele/b1">Learn more</Button>
                </Col>
              </Row>
            </div>
          </Tab>
          <Tab eventKey="c" title="C Level">
            <div>
              <br />
              <img
                src="https://dl.dropbox.com/s/iptnks2qzsh20xa/Screenshot%202020-12-14%20at%201.24.17%20AM.png?dl=0"
                style={{ width: "100%" }}
              />
              <br />
              <br />
              <span>
                A wide range of prior experience and certifications are accepted
                for admission, including, but not limited to,
              </span>
              <br />
              <br />
              <Row>
                <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                  <DownloadButton text="Get Overview"></DownloadButton>
                </Col>
                <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                  <Button href="/diplomas/dele/c1">Learn more</Button>
                </Col>
              </Row>
            </div>
          </Tab>
        </Tabs>
        <br />
        <hr />
      </MobileView>
      {/* End Mobile View */}
    </Container>
  </Layout>
)

export default IndexPage
