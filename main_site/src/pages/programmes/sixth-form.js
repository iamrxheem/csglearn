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

import { isMobile } from "react-device-detect"

import ProgrammeSummary from "../../common/programmeSummary"
import SixthFormMiniMenu from "../../components/miniMenus/sixthFormMiniMenu"

// Images
import Img1 from "../../images/young-student.jpg"

const Page = props => (
  <>
    <SEO
      title="Sixth Form Programme"
      description="Enroll online in our online sixth form programme, beginning on September 14, 2021. Subjects include Communication Studies, Caribbean Studies, Management of Business and more!"
    />

    <SixthFormLayout enroll="/programmes/sixth-form/enroll">
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

            <SixthFormMiniMenu />

            <br />
            <span>
              Our Sixth Form Programme allows students to complete their
              preferred CAPE subjects in a two-year study. Students are able
              enroll in online classes and exam registration.
            </span>

            <br />
            <br />
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

            <br />
            <Row>
              <Col sm={6}>
                <Button
                  href="/programmes/sixth-form/enroll"
                  style={{ width: "100%" }}
                >
                  Enroll now
                </Button>
              </Col>
              <Col sm={6}></Col>
            </Row>
          </Col>
          <Col md={5}>
            <MobileView>
              <br />
              <br />
            </MobileView>

            <ProgrammeSummary
              hasOptions
              options="1-on-1, Group"
              levelOfStudy="CAPE Certification"
              modeOfStudy="Online"
              duration="8 months"
              numberOfCourses="As many"
              termBeginsOn="Monday, Spetember 13, 2021"
            />

            <MobileView>
              <br />
              <br />
              <Row>
                <Col sm={6}>
                  <Button
                    href="/programmes/sixth-form/enroll"
                    style={{ width: "100%" }}
                  >
                    Enroll now
                  </Button>
                </Col>
                <Col sm={6}></Col>
              </Row>
            </MobileView>
          </Col>
        </Row>

        <br />
        <br />
        <br />
        <Row>
          <Col md={4}>
            <img
              className="center"
              style={{ width: "30%" }}
              src={BusinessIcon}
            />

            <h4 className="text-center">Business</h4>

            <br />
            <span style={{ fontSize: "15px" }}>
              Review the options for our Sixth Form Business Programme and
              select the best one that matches your desired career. Note the
              subjects needed to study at the University of the West Indies.
            </span>

            <br />
            <br />
            <Card className={isMobile ? "break-container" : ""}>
              <CardHeader>
                <h6>Option 1 - Business Only</h6>
                <br />

                <span style={{ fontSize: "15px" }}>
                  Minimum two (2) out of the following following subjects
                </span>

                <br />
                <br />
                <ul>
                  <li>
                    <span style={{ fontSize: "15px" }}>
                      Management of Business
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "15px" }}>Entrepreneurship</span>
                  </li>
                  <li>
                    <span style={{ fontSize: "15px" }}>Economics</span>
                  </li>
                  <li>
                    <span style={{ fontSize: "15px" }}>Accounting</span>
                  </li>
                </ul>
                <span style={{ fontSize: "15px" }}>
                  + Communication Studies <b>(yr 1)</b> and Caribbean Studies{" "}
                  <b>(yr 2)</b>
                </span>
                <br />
                <br />
              </CardHeader>
              <CardBody>
                <h6>Option 2 - Business & Law</h6>
                <br />
                <span style={{ fontSize: "15px" }}>
                  Minimum two (2) out of the following following subjects
                </span>

                <br />
                <br />
                <ul>
                  <li>
                    <span style={{ fontSize: "15px" }}>
                      Management of Business
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "15px" }}>Entrepreneurship</span>
                  </li>
                  <li>
                    <span style={{ fontSize: "15px" }}>Sociology</span>
                  </li>
                  <li>
                    <span style={{ fontSize: "15px" }}>Caribbean Studies</span>
                  </li>
                </ul>
                <span style={{ fontSize: "15px" }}>
                  + Communication Studies <b>(yr 1 or 2)</b> and <b>Law</b>.
                </span>
                <br />
                <br />
              </CardBody>
              <CardFooter>
                <h6>Option 3 - Business & Technology</h6>
                <br />
                <span style={{ fontSize: "15px" }}>
                  Minimum two (2) out of the following following subjects
                </span>

                <span style={{ fontSize: "15px" }}>
                  Minimum two (2) out of the following following subjects
                </span>

                <br />
                <br />
                <ul>
                  <li>
                    <span style={{ fontSize: "15px" }}>
                      Management of Business
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: "15px" }}>Entrepreneurship</span>
                  </li>
                  <li>
                    <span style={{ fontSize: "15px" }}>Sociology</span>
                  </li>
                  <li>
                    <span style={{ fontSize: "15px" }}>Economics</span>
                  </li>
                  <li>
                    <span style={{ fontSize: "15px" }}>Caribbean Studies</span>
                  </li>
                </ul>
                <span style={{ fontSize: "15px" }}>
                  + Communication Studies <b>(yr 1 or 2)</b> and Computer
                  Science <strong>or</strong> Information Technology.
                </span>
                <br />
                <br />
              </CardFooter>
            </Card>
          </Col>
          <Col md={4}>
            <MobileView>
              <br />
              <br />
            </MobileView>

            <img
              className="center"
              style={{ width: "10%" }}
              src="https://cdn2.iconfinder.com/data/icons/medicine-84/1000/Medicine-color-04-512.png"
            />

            <h4 className="text-center">Science & Medicine</h4>

            <br />
            <span style={{ fontSize: "15px" }}>
              Our Sixth Form Science and Medicine Programme enables students to
              sit their preferred CAPE science subjects in preparation for
              studying medicine or a related field.
            </span>

            <br />
            <br />
            <Card className={isMobile ? "break-container" : ""}>
              <CardHeader>
                <h6>Option 1 - Pure Science</h6>
                <br />

                <span style={{ fontSize: "15px" }}>
                  Minimum two (2) out of the following following subjects
                </span>

                <br />
                <br />

                <ul>
                  <li>
                    <span style={{ fontSize: "15px" }}>Biology</span>
                  </li>
                  <li>
                    <span style={{ fontSize: "15px" }}>Chemistry</span>
                  </li>
                  <li>
                    <span style={{ fontSize: "15px" }}>Physics</span>
                  </li>
                </ul>
                <span style={{ fontSize: "15px" }}>
                  + Communication Studies <strong>(yr 1 or 2)</strong>
                </span>
                <br />
                <br />
              </CardHeader>
              <CardBody>
                <h6>Option 2 - Science & Business</h6>
                <br />

                <span style={{ fontSize: "15px" }}>
                  Minimum two (2) out of the following following subjects
                </span>

                <br />
                <br />
                <ul>
                  <li>
                    <span style={{ fontSize: "15px" }}>Biology</span>
                  </li>
                  <li>
                    <span style={{ fontSize: "15px" }}>Chemistry</span>
                  </li>
                  <li>
                    <span style={{ fontSize: "15px" }}>Physics</span>
                  </li>
                  <li>
                    <span style={{ fontSize: "15px" }}>Caribbean Studies</span>
                  </li>
                </ul>
                <span style={{ fontSize: "15px" }}>
                  + Communication Studies <strong>(yr 1 or 2) </strong> and
                  Management of Business or Entrepreneurship
                </span>
                <br />
                <br />
              </CardBody>
              <CardFooter>
                <h6>Option 3 - Science & Technology</h6>
                <br />

                <span style={{ fontSize: "15px" }}>
                  Minimum two (2) out of the following following subjects
                </span>

                <br />
                <br />

                <ul>
                  <li>
                    <span style={{ fontSize: "15px" }}>Biology</span>
                  </li>
                  <li>
                    <span style={{ fontSize: "15px" }}>Chemistry</span>
                  </li>
                  <li>
                    <span style={{ fontSize: "15px" }}>Physics</span>
                  </li>
                  <li>
                    <span style={{ fontSize: "15px" }}>Caribbean Studies</span>
                  </li>
                </ul>
                <span style={{ fontSize: "15px" }}>
                  + Communication Studies <b>(yr 1 or 2)</b> and Computer
                  Science <strong>or</strong> Information Technology
                </span>
                <br />
                <br />
              </CardFooter>
            </Card>
          </Col>
          <Col md={4}>
            <MobileView>
              <br />
              <br />
            </MobileView>
            <img
              className="center"
              style={{ width: "30%" }}
              src="https://previews.123rf.com/images/cowpland/cowpland1705/cowpland170500016/77165419-sociology-science-concept.jpg"
            />

            <h4 className="text-center">Humanities</h4>

            <br />
            <span style={{ fontSize: "15px" }}>
              Study Law, Sociology, Communi Studies and more in our Humanities
              Programme. Students can select from a list of required for
              studying Law or other university entry requirements.
            </span>

            <br />
            <br />
            <Card className={isMobile ? "break-container" : ""}>
              <CardHeader>
                <h6>Option 1 - Lawyer Up</h6>
                <br />

                <span style={{ fontSize: "15px" }}>
                  Must do all of the following
                </span>

                <br />
                <br />
                <ul>
                  <li>
                    <span style={{ fontSize: "15px" }}>Law</span>
                  </li>
                  <li>
                    <span style={{ fontSize: "15px" }}>Sociology</span>
                  </li>
                </ul>

                <br />
                <span style={{ fontSize: "15px" }}>
                  + Communication Studies <strong> (yr 1) and</strong>{" "}
                  Communication Studies <strong> (yr 2)</strong>
                </span>
                <br />
                <br />
              </CardHeader>
              <CardBody>
                <h6>Option 2</h6>
                <br />

                <span style={{ fontSize: "15px" }}>
                  Minimum two (2) out of the following following subjects
                </span>

                <br />
                <br />

                <ul>
                  <li>
                    <span style={{ fontSize: "15px" }}>Sociology</span>
                  </li>
                  <li>
                    <span style={{ fontSize: "15px" }}>Entrepreneurship</span>
                  </li>
                  <li>
                    <span style={{ fontSize: "15px" }}>Physics</span>
                  </li>
                  <li>
                    <span style={{ fontSize: "15px" }}>Caribbean Studies</span>
                  </li>
                </ul>

                <span style={{ fontSize: "15px" }}>
                  + Communication Studies <b>(yr 1 or 2)</b>
                </span>
                <br />
                <br />
              </CardBody>
            </Card>
          </Col>
        </Row>

        <MobileView>
          <br />
          <br />
          <Row>
            <Col sm={6}>
              <Button
                href="/programmes/sixth-form/enroll"
                style={{ width: "100%" }}
              >
                Enroll now
              </Button>
            </Col>
            <Col sm={6}></Col>
          </Row>
        </MobileView>
      </Container>
    </SixthFormLayout>
  </>
)

export default Page
