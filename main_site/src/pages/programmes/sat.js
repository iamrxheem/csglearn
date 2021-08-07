import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import CsecMiniMenu from "../../components/miniMenus/csecMiniMenu"

// View Components
import MobileView from "../../common/mobileView"
import BrowserView from "../../common/browserView"
import Faq from "react-faq-component"
import View from "../../components/view/view"
import SEO from "../../components/seo"

import StudentVideo from "../../videos/sat.mp4"

// Data
import { satData } from "../../data/sat"

import {
  Carousel,
  Table,
  OverlayTrigger,
  Popover,
  Button
} from "react-bootstrap"

// Shards-React Components
import {
  Row,
  Col,
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Alert
} from "shards-react"

import ProgrammeSummary from "../../common/programmeSummary"

// Images
import Img1 from "../../images/young-student.jpg"
import Image from "../../images/black-college-student.jpg"

import { applyLinks } from "../../data/links"

let applyLink = ""

applyLinks.map(data => {
  return (applyLink = data.sat)
})

const Page = props => (
  <>
    <SEO
      title="Online SAT Classes"
      description="Our online SAT are coming soon!"
    />

    <Layout hideAlert>
      <MobileView>
        <video
          style={{ width: "100%" }}
          preload="auto"
          autoPlay={true}
          loop
          muted
        >
          <source src={StudentVideo} type="video/mp4" />
        </video>
      </MobileView>

      <Container>
        <div style={{ paddingTop: "10px" }}>
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="/">Home</a>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to="/programmes">Programmes</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>SAT</BreadcrumbItem>
          </Breadcrumb>
        </div>

        <Row>
          <Col md={7}>
            <h3>SAT Programme</h3>
            <br />

            <div className="text-center">
              <Row>
                <Col xs={6}>
                  <Alert theme="danger">
                    <a
                      target="_blank"
                      href={applyLink}
                      style={{ textDecoration: "none" }}
                    >
                      ENROLL NOW
                    </a>
                  </Alert>
                </Col>
                <Col xs={6}>
                  <Alert theme="primary">
                    <a style={{ textDecoration: "none" }}>EXAM CENTRES</a>
                  </Alert>
                </Col>
              </Row>
            </div>
            <br />

            <span>
              Registration for our online SAT classes are now open. Our full
              course includes:
            </span>

            <br />
            <br />
            <ul>
              <li>3-4 hours of class time weekly for each subject</li>
              <li style={{ paddingTop: "15px" }}>Weekly assignments</li>
              <li style={{ paddingTop: "15px" }}>Monthly mock exams</li>
              <li style={{ paddingTop: "15px" }}>
                Monthly progress reports for parents
              </li>
              <li style={{ paddingTop: "15px" }}>Virtual textbooks</li>
              <li style={{ paddingTop: "15px" }}>
                Additional virtual class materials
              </li>
            </ul>

            <br />
            <h4>Plus</h4>

            <br />
            <p>All enrolled students get access to</p>

            <ul>
              <li style={{ paddingBottom: "15px" }}>
                College Application Master Class
              </li>
              <li style={{ paddingBottom: "15px" }}>
                Monthly Live Q&A with CSG Learning College Experts
              </li>
              <li style={{ paddingBottom: "15px" }}>
                Downloadable worksheets and templates
              </li>
              <li style={{ paddingBottom: "15px" }}>Financial Aid Workshop</li>
              <li style={{ paddingBottom: "15px" }}>
                Research hub for college searches
              </li>
            </ul>

            <br />
            <h4>Fees & Tuition</h4>

            <br />
            <Table hover>
              <tbody>
                <tr>
                  <td>Course</td>
                  <td>USD $900</td>
                </tr>
                <tr>
                  <td>Miscellaneous Fee</td>
                  <td>USD $100</td>
                </tr>
              </tbody>
            </Table>

            <br />

            <Button target="_blank" href={applyLink} style={{ width: "100%" }}>
              Enroll now
            </Button>

            <br />
            <br />
            <br />
          </Col>
          <Col md={5}>
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

              <br />
              <br />
            </BrowserView>

            <ProgrammeSummary
              levelOfStudy="Accredited Certification"
              numberOfCourses="English, Mathematics, Essay "
              modeOfStudy="Online"
              showCost
              cost="USD $900"
              duration="3 months"
              termBeginsOn="August 30, 2021"
            />

            <MobileView>
              <br />
              <br />
            </MobileView>
          </Col>
        </Row>

        <br />
        <br />
        <h3 className="text-center">Frequently Asked Questions</h3>

        <br />
        <Faq
          data={{
            title: "",
            rows: [
              {
                title: "Where are we located?",
                content: (
                  <>
                    <br />
                    <p>
                      We're based in Kingston, Jamaica but our operations are
                      online, which allows us to not only provide valuable
                      educational training and materials to students across
                      Jamaica, but the entire Caribbean.
                    </p>
                    <br />
                  </>
                )
              },
              {
                title: "Who can enroll in this programme?",
                content: (
                  <>
                    <br />
                    <p>
                      Please see our full list of{" "}
                      <a href="#requirements">requirements</a>.
                    </p>
                    <br />
                  </>
                )
              },
              {
                title: "How are classes held?",
                content: (
                  <>
                    <br />
                    <p>
                      All classes are held online and are accessible through our{" "}
                      <a href="https://www.hub.csglearn.com/my" target="_blank">
                        Student Portal.
                      </a>
                    </p>
                    <br />
                  </>
                )
              },
              {
                title: "How often are classes kept?",
                content: (
                  <>
                    <br />
                    <p>
                      On average, students are provided 3-4 hours of classtime
                      per week. Additional classtime may be schedule by your
                      teacher.
                    </p>
                    <br />
                  </>
                )
              },
              {
                title: "Are payment plans available?",
                content: (
                  <>
                    <br />
                    <p>
                      Yes, payment plans are available for all students. Please
                      see a list of <a href="#tuition">fees here</a>.
                    </p>
                    <br />
                  </>
                )
              },
              {
                title: "Where will I sit the exam?",
                content: (
                  <>
                    <br />
                    <p>
                      You will be assigned an exmination center based on your
                      address.
                    </p>
                    <br />
                  </>
                )
              },
              {
                title: "How can I pay?",
                content: (
                  <>
                    <br />
                    <p>Students are able to pay online or via bank transfer.</p>
                    <br />
                  </>
                )
              }
            ]
          }}
        />
        <br />
        <br />
      </Container>

      <MobileView>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQserNMP-GKESvWF4ew_U4igPKX-peq_wKFPJoJ27k85JruP9URw_Ond_q7yPbOt0Esfg&usqp=CAU"
          style={{ width: "100%" }}
        />
      </MobileView>
    </Layout>
  </>
)

export default Page
