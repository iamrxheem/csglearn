import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import SixthFormLayout from "../../layouts/sixthFormLayout"
import CsecMiniMenu from "../../components/miniMenus/csecMiniMenu"

// View Components
import MobileView from "../../common/mobileView"
import BrowserView from "../../common/browserView"

import View from "../../components/view/view"
import SEO from "../../components/seo"
import BusinessIcon from "../../images/business-icon.png"

import {
  Carousel,
  Table,
  OverlayTrigger,
  Popover,
  Button
} from "react-bootstrap"
import ProgrammeVideo from "../../videos/cape.mp4"

// Shards-React Components
import {
  Row,
  Col,
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter
} from "shards-react"
import Faq from "react-faq-component"

import { isMobile } from "react-device-detect"

import ProgrammeSummary from "../../common/programmeSummary"
import SixthFormMiniMenu from "../../components/miniMenus/sixthFormMiniMenu"

// Images
import Img1 from "../../images/young-student.jpg"

import { applyLinks } from "../../data/links"
let applyLink = "https://wa.link/20mktm"

const Page = props => (
  <>
    <SEO
      title="Sixth Form Programme"
      description="Enroll online in our online sixth form programme, beginning on September 14, 2021. Subjects include Communication Studies, Caribbean Studies, Management of Business and more!"
    />

    <SixthFormLayout enroll={applyLink}>
      <Container>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/programmes">Programmes</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Sixth Form</BreadcrumbItem>
        </Breadcrumb>

        <Row>
          <Col md={7}>
            <h3>Sixth Form Programme</h3>
            <br />

            <SixthFormMiniMenu enroll={applyLink} />

            <br />
            <p>
              Our Sixth Form Programme allows students to complete their
              preferred CAPE subjects in a one-year study. Students are able
              enroll in online classes and exam registration.
            </p>

            <br />
            <p>Enrolled students get access to:</p>

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

            <p>
              See special offers for international students in{" "}
              <a href="/tt/exam22">Trinidad & Tobago</a> and{" "}
              <a href="/bb/exam22">Barbados</a>.
            </p>

            <br />
            <h5>Subjects Offered</h5>
            <br />
            <Table light hover responsive style={{ width: "100%" }}>
              <thead>
                <tr></tr>
              </thead>
              <tbody>
                <tr>
                  <td>Accounting</td>
                  <td>Biology</td>
                </tr>
                <tr>
                  <td>Caribbean Studies</td>
                  <td>Chemistry</td>
                </tr>
                <tr>
                  <td>Communication Studies</td>
                  <td>Computer Science</td>
                </tr>
                <tr>
                  <td>Economics</td>
                  <td>Entrepreneurship</td>
                </tr>
                <tr>
                  <td>Geography</td>
                  <td>Information Technology</td>
                </tr>
                <tr>
                  <td>Law</td>
                  <td>Management of Business</td>
                </tr>
                <tr>
                  <td>Pure Mathematics</td>
                  <td>Sociology</td>
                </tr>
              </tbody>
            </Table>

            <MobileView>
              <br />
              <br />
              <video
                className="break-container"
                style={{ width: "100%" }}
                preload="auto"
                autoPlay={true}
                loop
                muted
              >
                <source src={ProgrammeVideo} type="video/mp4" />
              </video>
            </MobileView>
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
                <source src={ProgrammeVideo} type="video/mp4" />
              </video>
              <br />
            </BrowserView>

            <br />
            <br />

            <ProgrammeSummary
              hasOptions
              options="1-on-1, Group"
              levelOfStudy="CAPE Certification"
              modeOfStudy="Online"
              duration="8 months"
              numberOfCourses="As many"
              termBeginsOn="Monday, August 2, 2021"
            />
          </Col>
        </Row>

        <MobileView>
          <br />
          <br />

          <Button href={applyLink} style={{ width: "100%" }}>
            Enroll now
          </Button>
        </MobileView>

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
                    <p>Yes, payment plans are available for all students.</p>
                    <br />
                  </>
                )
              },
              {
                title: "Am I able to register for the CXC Examination as well?",
                content: (
                  <>
                    <br />
                    <p>
                      Yes, students can indicate whether they are registering
                      for extra classes only or classes and exam registration.
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
                      You will be assigned an exmination center based in your
                      address by your local Ministry of Education.
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
      </Container>
    </SixthFormLayout>
  </>
)

export default Page
