import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import SixthFormLayout from "../../../layouts/sixthFormLayout"

import SEO from "../../../components/seo"
import { Carousel, Table, OverlayTrigger, Popover } from "react-bootstrap"

// View Components
import MobileView from "../../../common/mobileView"
import BrowserView from "../../../common/browserView"

import { isMobile } from "react-device-detect"

import BusinessIcon from "../../../images/business-icon.png"

// Shards-React Components
import {
  Row,
  Button,
  Col,
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormInput,
  FormGroup,
  FormSelect,
  FormRadio,
  FormCheckbox,
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter
} from "shards-react"

import SixthFormMiniMenu from "../../../components/miniMenus/sixthFormMiniMenu"

const Page = props => (
  <>
    <SEO title="Sixth Form Discount Packages" description="" />

    <SixthFormLayout enroll="/programmes/csec/enroll">
      <Container>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/programmes/sixth-form">Sixth Form</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Packages</BreadcrumbItem>
        </Breadcrumb>

        <MobileView>
          <h4>Sixth Form Packages</h4>
          <br />

          <SixthFormMiniMenu />
        </MobileView>

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
                <Link
                  to="/programmes/sixth-form/enroll"
                  style={{ width: "100%", fontSize: "15px" }}
                >
                  Enroll now
                </Link>
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

                <Link
                  to="/programmes/sixth-form/enroll"
                  style={{ width: "100%", fontSize: "15px" }}
                >
                  Enroll now
                </Link>
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
                <Link
                  to="/programmes/sixth-form/enroll"
                  style={{ width: "100%", fontSize: "15px" }}
                >
                  Enroll now
                </Link>
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
                <Link
                  to="/programmes/sixth-form/enroll"
                  style={{ width: "100%", fontSize: "15px" }}
                >
                  Enroll now
                </Link>
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
                <Link
                  to="/programmes/sixth-form/enroll"
                  style={{ width: "100%", fontSize: "15px" }}
                >
                  Enroll now
                </Link>
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
                <Link
                  to="/programmes/sixth-form/enroll"
                  style={{ width: "100%", fontSize: "15px" }}
                >
                  Enroll now
                </Link>
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
                <Link
                  to="/programmes/sixth-form/enroll"
                  style={{ width: "100%", fontSize: "15px" }}
                >
                  Enroll now
                </Link>
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
                <Link
                  to="/programmes/sixth-form/enroll"
                  style={{ width: "100%", fontSize: "15px" }}
                >
                  Enroll now
                </Link>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </SixthFormLayout>
  </>
)

export default Page
