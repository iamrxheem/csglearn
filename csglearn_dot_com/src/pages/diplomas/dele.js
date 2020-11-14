import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import {
  Breadcrumb,
  Button,
  BreadcrumbItem,
  Row,
  Col,
  Alert
} from "shards-react"
import { MobileView } from "react-device-detect"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Diplomas in Spanish as a Foreign Language (DELE) in Jamaica"
      description="Study and take the International Spanish Language Certification (DELE Exam) in Jamaica with CSG Learning Institute. Call or WhatsApp (876) 707-3443 to get started."
      lang="en"
    />
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
      <Col sm={6} md={6} lg={6}>
        <h5>Diplomas in Spanish (DELE)</h5>

        <br />
        <span>
          Diplomas in Spanish as a Foreign Language (DELE) Exam is an official
          title certifying the degree of competence and mastery of the Spanish
          language, granted by Spain’s Ministry of Education, Culture and
          Sports.
        </span>

        <br />
        <br />
        <span>
          CSG Learning Institute offers training for all six (6) level of the
          Diplomas. Students are able to enroll in a blend of online and
          face-to-face classes and will take the exam at a registered local
          examination centre.
        </span>

        <br />
        <br />

        <Alert theme="info">A1 & A2 Diploma - Absolute Beginners</Alert>

        <img
          style={{ width: "100%" }}
          src="https://dl.dropbox.com/s/sqxn2z219kuj3id/1.png?dl=0"
        />
        <span>
          This course and diploma are aimed at absolute beginners in Spanish as
          it starts the learning process from scratch, and certifies that the
          student is able to communicate in a basic way in situations that have
          to do with immediate needs. This diploma is close to the CSEC Spanish
          but is more valuable as it is globally recognized.
        </span>

        <br />
        <br />
        <h6>Admissions</h6>

        <span>
          The DELE A1 course is for absolute beginners. Therefors,{" "}
          <b style={{ color: "purple" }}>
            no requirements or prior experience in Spanish is required
          </b>
          . Students who wish to pursue the <b>DELE A2</b> diploma is required
          to pass a proficiency test administered by CSG Learning.
        </span>

        <br />
        <br />
        <Row>
          <Col xs={6} sm={6} md={6} lg={6}>
            <Button href="/diplomas/dele/register">Register Now</Button>
          </Col>
          <Col xs={6} sm={6} md={6} lg={6}>
            <Button href="/diplomas/dele/a1">
              Learn more <i className="fas ml-2 fa-long-arrow-alt-right"></i>
            </Button>
          </Col>
        </Row>

        <br />
        <br />
        <Alert theme="warning">B1 & B2 Diploma - Intermediate</Alert>
        <br />
        <img
          style={{ width: "100%" }}
          src="https://dl.dropbox.com/s/onuebbo0sg9vbjp/2.png?dl=0"
        />
        <span>
          The B1 exam is aimed at intermediate learners and assesses a wide
          range of the students’ capabilities in reading comprehension, written
          expressions, reading comprehension and oral expressions. Additional
          components include:
        </span>

        <br />
        <br />
        <ul>
          <li style={{ paddingBottom: "10px" }}>
            Understand the gist of clear texts in standard language
          </li>
          <li style={{ paddingBottom: "10px" }}>
            Engage in conversational Spanish
          </li>
          <li style={{ paddingBottom: "10px" }}>
            Deal with most situations that occur when travelling to areas where
            Spanish is spoken
          </li>
          <li style={{ paddingBottom: "10px" }}>
            Product simple and coherent texts
          </li>
          <li style={{ paddingBottom: "10px" }}>
            Describe experiences, events, wishes, and hopes, as well as to be
            able to briefly express opinions or explain plans.
          </li>
        </ul>

        <br />
        <h6>Admissions</h6>

        <span>
          A wide range of prior experience and certifications are accepted for
          admission, including, but not limited to,
        </span>
        <br />
        <br />

        <ul>
          <li style={{ paddingBottom: "10px" }}>DELE A1 or A2 diploma</li>
          <li style={{ paddingBottom: "10px" }}>
            CSEC Spanish (+ assessment by CSG Learning)
          </li>
          <li style={{ paddingBottom: "10px" }}>
            CAPE Spanish Unit 1 or Unit 2, or
          </li>
          <li style={{ paddingBottom: "10px" }}>
            Students who have lived in a Spanish-speaking country for more than
            1 year
          </li>
          <li style={{ paddingBottom: "10px" }}>
            Other approved certifications
          </li>
        </ul>

        <span>
          Students who wish to pursue the <b>DELE B2</b> diploma is required to
          pass a proficiency test administered by CSG Learning.{" "}
        </span>
        <br />
        <br />

        <Row>
          <Col xs={6} sm={6} md={6} lg={6}>
            <Button href="/diplomas/dele/register">Register Now</Button>
          </Col>
          <Col xs={6} sm={6} md={6} lg={6}>
            <Button href="/diplomas/dele/b1">
              Learn more <i className="fas ml-2 fa-long-arrow-alt-right"></i>
            </Button>
          </Col>
        </Row>
        <br />
        <br />

        <Alert style={{ backgroundColor: "#8a3ab9" }}>
          C1 & C2 Diploma - Fluent
        </Alert>
        <img
          style={{ width: "100%" }}
          src="https://dl.dropbox.com/s/bamb3nard1amr14/3.png?dl=0"
        />

        <span>
          The Diploma of Spanish level C1 accredits the ability of the user of
          the language to:
        </span>

        <br />
        <br />
        <ul>
          <li style={{ paddingBottom: "10px" }}>
            Cope with ease when processing a wide variety of oral and written
            text of some length in any variant of the language,
          </li>
          <li style={{ paddingBottom: "10px" }}>
            Express yourself fluently, spontaneously and with any apparent
            effort
          </li>
          <li style={{ paddingBottom: "10px" }}>
            Always find the appropriate expression for the situation and
            context, whether it is framed in a social, work or academic sphere
          </li>
          <li style={{ paddingBottom: "10px" }}>
            \Use the language flexibly and efficiently, demonstrating a correct
            use in the elaboration of complex texts and the use of the
            organization and cohesion mechanisms that allow articulate them.
          </li>
        </ul>

        <br />
        <h6>Admissions</h6>

        <span>
          A wide range of prior experience and certifications are accepted for
          admission, including. To enroll and confirm eligibility, students are
          required to contact CSG Learning Institute.
        </span>
        <br />
        <br />

        <span>
          Students who wish to enroll in the DELE C2 (Master) course do not need
          to take an assessment.{" "}
        </span>
        <br />
        <br />
        <br />

        <Row>
          <Col xs={6} sm={6} md={6} lg={6}>
            <Button href="/diplomas/dele/register">Register Now</Button>
          </Col>
          <Col xs={6} sm={6} md={6} lg={6}>
            <Button href="/diplomas/dele/c1">
              Learn more <i className="fas ml-2 fa-long-arrow-alt-right"></i>
            </Button>
          </Col>
        </Row>
        <br />
      </Col>
      <Col sm={6} md={6} lg={6}>
        <span></span>
      </Col>
    </Row>
  </Layout>
)

export default IndexPage
