import React from "react"
import { Link } from "gatsby"
import { Tabs, Tab } from "react-bootstrap"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import DownloadButton from "../../common/downloadButton"
import DELELayout from "../../layouts/deleLayout"
import ProgramSummary from "../../common/programSummary"
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
  <>
    <SEO
      title="Diplomas in Spanish as a Foreign Language (DELE) in Jamaica"
      description="Study and take the International Spanish Language Certification (DELE Exam) in Jamaica with CSG Learning Institute. Call or WhatsApp (876) 707-3443 to get started."
      lang="en"
    />

    <DELELayout>
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

        <Row>
          <Col sm={12} md={7} lg={7}>
            <h4>Diploma in Spanish as a Foreign Language</h4>
            <br />
            <span>
              The DELE is an accredited and prestigious qualification, proving
              the ability of the holder to have excellent Spanish communications
              skills. They are internationally recognised, so they are
              invaluable for professional documentation across the Spanish
              speaking world. The diploma is particularly highly regarded in the
              business and commercial sphere. As such, the DELE is an
              advantageous addition to any CV, enabling you to develop career
              prospects in Spanish speaking countries. There are three (3) main
              levels of the diploma:
            </span>

            <br />
            <br />
            <ul>
              <li>
                <a href="/diplomas/dele/beginners">Absolute Beginner</a>
              </li>
              <li style={{ paddingTop: "10px" }}>
                <a href="/diplomas/dele/intermediate">Intermediate</a>
              </li>
              <li style={{ paddingTop: "10px" }}>
                <a href="/diplomas/dele/advance">Advanced/ Master</a>
              </li>
            </ul>

            <br />
            <span>
              CSG Learning offers training for all levels of the diploma.
              Courses offered are 100% online, allowing students to complete
              coursework in a timeframe that fits their schedule. This also
              requires that the student has the appropriate technology and
              connectivity to sustain constant participation in class
              activities.
            </span>

            <br />
            <br />
            <Row>
              <Col xs={6} sm={6} lg={6}>
                <Button href="/diplomas/dele/apply">Apply Now</Button>
              </Col>
              <Col xs={6} sm={6} lg={6}>
                <Button href="/diplomas/dele/FAQs" pill theme="dark" outline>
                  Program FAQs
                </Button>
              </Col>
            </Row>

            <MobileView>
              <br />
              <br />
            </MobileView>
          </Col>
          <Col md={5} lg={5}>
            <ProgramSummary
              levelOfStudy="Diploma"
              numberOfCourses="4"
              modeOfStudy="Online"
              duration="1 year - 12 week terms"
              termBeginsOn="January 25, 2021"
            />
          </Col>
        </Row>
      </Container>
    </DELELayout>
  </>
)

export default IndexPage
