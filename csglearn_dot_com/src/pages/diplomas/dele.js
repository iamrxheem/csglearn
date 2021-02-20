import React from "react"
import SEO from "../../components/seo"
import DELELayout from "../../layouts/deleLayout"
import ProgramSummary from "../../common/programSummary"
import {
  Breadcrumb,
  Button,
  BreadcrumbItem,
  Row,
  Col,
  Container
} from "shards-react"

const DELEPage = () => (
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
          <BreadcrumbItem active>Diplomas in Spanish</BreadcrumbItem>
        </Breadcrumb>

        <Row>
          <Col sm={12} md={7} lg={7}>
            <h4>Diploma in Spanish as a Foreign Language</h4>
            <br />
            <span>
              The DELE (Diplomas de Español como Lengua Extranjera) is an
              accredited and prestigious qualification, proving the ability of
              the holder to have excellent Spanish communications skills. They
              are internationally recognised, so they are invaluable for
              professional documentation across the Spanish speaking world.
            </span>

            <br />
            <br />
            <span>
              This internationally recognised diploma is particularly highly
              regarded in the business and commercial sphere. As such, the DELE
              is an advantageous addition to any CV, enabling you to develop
              career prospects in Spanish speaking countries. There are three
              (3) main levels of the diploma:
            </span>

            <br />
            <br />
            <ul>
              <li>
                <a href="/diplomas/dele/beginners">Beginner's Diploma</a>
              </li>
              <li style={{ paddingTop: "10px" }}>
                <a href="/diplomas/dele/intermediate">Intermediate</a>
              </li>
              <li style={{ paddingTop: "10px" }}>
                <a href="/diplomas/dele/advanced">Advanced/ Master</a>
              </li>
              <li style={{ paddingTop: "10px" }}>
                <a href="/diplomas/dele/escolares">
                  Diploma in Spanish for Minors
                </a>
              </li>
            </ul>

            <br />
            <span>
              CSG Learning offers training for all levels of the diploma.
              Courses offered are 100% online, allowing students to complete
              coursework in a timeframe that fits their schedule. This requires
              that the student has the appropriate technology and connectivity
              to sustain constant participation in class activities.
            </span>

            <br />
            <br />
            <Row>
              <Col xs={6} sm={6} lg={6}>
                <Button href="/diplomas/dele/apply">Apply Now</Button>
              </Col>
              <Col xs={6} sm={6} lg={6}>
                <Button href="/diplomas/dele/FAQs" pill theme="dark" outline>
                  Programme FAQs
                </Button>
              </Col>
            </Row>
            <div className="d-block d-md-none">
              <img
                src="https://www.eurekamadrid.com/images/Logo_DELE_CMYK.png"
                style={{ width: "100%" }}
              />
            </div>
          </Col>
          <Col md={5} lg={5}>
            <ProgramSummary
              levelOfStudy="Diploma"
              numberOfCourses="4"
              modeOfStudy="Online"
              duration="10 months"
              termBeginsOn="January 25, 2021"
            />
          </Col>
        </Row>
      </Container>
    </DELELayout>
  </>
)

export default DELEPage
