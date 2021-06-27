import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { isMobile } from "react-device-detect"
import { Table } from "react-bootstrap"

// View Components
import MobileView from "../common/mobileView"
import BrowserView from "../common/browserView"
import { Helmet } from "react-helmet"
import Swal from "sweetalert2"
import {
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Col,
  Alert,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "shards-react"

// Images
import Image from "../images/young-student.jpg"
import CSECImage from "../images/csec.png"
import CAPEImage from "../images/cape.png"
import DELEImage from "../images/dele.png"
import DELFImage from "../images/delf.png"
import SATImage from "../images/sat.jpg"
import ACCAImage from "../images/acca.jpg"
import KidsImage from "../images/kids-reading.jpeg"

// Data
import { deleData } from "../data/dele"
import { delfData } from "../data/delf"
import { csecData } from "../data/csec"
import { capeData } from "../data/cape"
import { literacyData } from "../data/literacy"
import { satData } from "../data/sat"

class Page extends React.Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = { open: false }
  }

  toggle() {
    this.setState(prevState => {
      return { open: !prevState.open }
    })
  }

  render() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    })

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

    return (
      <Layout hideAlert>
        <SEO title="Apply to CSG Learning Institute" description="" />

        <MobileView>
          <img src={Image} style={{ width: "100%" }} />
        </MobileView>

        <Container style={{ paddingTop: "10px" }}>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Apply</BreadcrumbItem>
          </Breadcrumb>

          <Row>
            <Col sm={6}>
              <h3>Apply Online</h3>

              <br />
              <span>
                We have been experiencing some technical difficulties with our
                online application forms, and have instead provided links below
                to apply.
              </span>

              <br />
              <br />

              <span>
                Please select the apprpriate application form to apply.
              </span>

              <br />
              <br />

              <div className="text-center">
                <Row>
                  <Col xs={6}>
                    <Alert theme="primary" className="text-center">
                      <a
                        onClick={() => {
                          Swal.fire({
                            title: "Are you doing CSEC or CAPE?",
                            showDenyButton: true,
                            confirmButtonText: `<a target='_blank' style='color:white;' href='https://zfrmz.com/8NtaYICxWP1kU0RE8n3H'>CSEC</a>`,
                            denyButtonText: `<a target='_blank' style='color:white;' href='https://zfrmz.com/qdGhigrwkYH0NX8uCySj'>CAPE</a>`
                          })
                        }}
                        target="_blank"
                        style={{ textDecoration: "none" }}
                      >
                        Summer School
                      </a>
                    </Alert>
                  </Col>
                  <Col xs={6}>
                    <Alert theme="danger" className="text-center">
                      <a
                        target="_blank"
                        href="https://forms.zohopublic.com/csglearninginstitute/form/LiteracyProgrammeApplicationForm/formperma/W2g46VpKRwDSR2fdlxUqhPTNYbf1XtXYqH06vYgz5h4"
                        style={{ textDecoration: "none" }}
                      >
                        Reading Classes
                      </a>
                    </Alert>
                  </Col>
                  <Col xs={6}>
                    <Alert theme="success" className="text-center">
                      <a
                        target="_blank"
                        href="https://zfrmz.com/PJjvTGbugUVYdQCDp35C"
                        style={{ textDecoration: "none" }}
                      >
                        CSEC Classes for September
                      </a>
                    </Alert>
                  </Col>
                  <Col xs={6}>
                    <Alert
                      theme="warning"
                      href="https://zfrmz.com/2ejkGTc78yoTd0G4m4E2"
                      className="text-center"
                    >
                      <a target="_blank" style={{ textDecoration: "none" }}>
                        CAPE Classes for September
                      </a>
                    </Alert>
                  </Col>
                </Row>
              </div>

              <br />
              <br />
              <Row>
                {/* Diplomas in Spanish */}
                <Col sm={12}>
                  <div id="delf"></div>
                  <img src={DELEImage} style={imgageStyle} />
                  <h5 className="text-center">Diploma in Spanish</h5>
                  <br />
                  <span>
                    Start learning Spanish from scratch for the accredited
                    Beginners Diploma in Spanish.
                  </span>

                  <br />
                  <br />
                  <br />
                  <Table>
                    <thead></thead>
                    <tbody>
                      {deleData.map((data, key) => {
                        return (
                          <>
                            <tr key={key}>
                              <td>
                                <strong>Tuition</strong>
                              </td>
                              <td>{data.tuition}</td>
                            </tr>

                            <tr>
                              <td>
                                <strong>Term Begins</strong>
                              </td>
                              <td>{data.term}</td>
                            </tr>

                            <tr>
                              <td>
                                <strong>Registration Closes</strong>
                              </td>
                              <td>{data.closes}</td>
                            </tr>
                          </>
                        )
                      })}
                    </tbody>
                  </Table>

                  <br />
                  <a
                    style={{ textDecoration: "none" }}
                    theme="dark"
                    className="center btn btn-outline-primary"
                    outline
                    href="https://forms.zohopublic.com/csglearninginstitute/form/DiplomainSpanishRegistrationForm/formperma/hzPuluNSrQgm_4HrsSVPXm1_lo1tVOd0wGWXU6i8g8M"
                    target="_blank"
                  >
                    Apply now
                  </a>
                </Col>

                {/* Diplomas in French */}
                <Col sm={12}>
                  <div id="delf"></div>
                  <br />
                  <br />

                  <img src={DELFImage} style={imgageStyle} />
                  <h5 className="text-center">Diploma in French</h5>
                  <br />
                  <span>
                    Start learning French from scratch for the accredited
                    Beginners Diploma in French.
                  </span>

                  <br />
                  <br />
                  <br />
                  <Table>
                    <thead></thead>
                    <tbody>
                      {delfData.map((data, key) => {
                        return (
                          <>
                            <tr key={key}>
                              <td>
                                <strong>Tuition</strong>
                              </td>
                              <td>{data.tuition}</td>
                            </tr>

                            <tr>
                              <td>
                                <strong>Term Begins</strong>
                              </td>
                              <td>{data.term}</td>
                            </tr>

                            <tr>
                              <td>
                                <strong>Registration Closes</strong>
                              </td>
                              <td>{data.closes}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>Course Duration</strong>
                              </td>
                              <td>{data.duration}</td>
                            </tr>
                          </>
                        )
                      })}
                    </tbody>
                  </Table>

                  <br />
                  <a
                    style={{ textDecoration: "none" }}
                    theme="dark"
                    className="center btn btn-outline-primary"
                    outline
                    href="https://forms.zohopublic.com/csglearninginstitute/form/DiplomainFrenchRegistrationForm/formperma/7LKz5bXmcfhTBbPpMrCoxYfRqEAhpIyq5AKB6Ba7eNk"
                    target="_blank"
                  >
                    Apply now
                  </a>
                </Col>

                {/* CSEC Online Classes */}
                <Col sm={12}>
                  <div id="csec"></div>
                  <br />
                  <br />

                  <img src={CSECImage} style={imgageStyle} />
                  <h5 className="text-center">Online CSEC Classes</h5>
                  <br />
                  <span>
                    Enroll in online CSEC classes for the September 2021 term,
                    and register for the January or May/ June 2022 exam sitting.
                    Sign up for group or private 1-on-1 classes.
                  </span>

                  <br />
                  <br />
                  <br />
                  <Table>
                    <thead></thead>
                    <tbody>
                      {csecData.map((data, key) => {
                        return (
                          <>
                            <tr key={key}>
                              <td>
                                <strong>Tuition</strong>
                              </td>
                              <td>{data.tuition}</td>
                            </tr>

                            <tr>
                              <td>
                                <strong>Term Begins</strong>
                              </td>
                              <td>{data.term}</td>
                            </tr>

                            <tr>
                              <td>
                                <strong>Registration Closes</strong>
                              </td>
                              <td>{data.closes}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>Course Duration</strong>
                              </td>
                              <td>{data.duration}</td>
                            </tr>
                          </>
                        )
                      })}
                    </tbody>
                  </Table>

                  <br />
                  <a
                    style={{ textDecoration: "none" }}
                    theme="dark"
                    className="center btn btn-outline-primary"
                    outline
                    href="https://forms.zohopublic.com/csglearninginstitute/form/CSECSummerProgrammeOnlineApplicationForm/formperma/ITXP9uDz1BFuoXLzZgWT102nyoJ-3uz_fKr8ERHBgJo"
                    target="_blank"
                  >
                    Apply now
                  </a>
                </Col>

                {/* Sixth Form Programme */}

                <Col sm={12}>
                  <div id="cape"></div>
                  <br />
                  <br />

                  <img src={CAPEImage} style={imgageStyle} />
                  <h5 className="text-center">Associate Sixth Form</h5>
                  <br />
                  <span>
                    Our 2-year Associate Sixth Form and Career Counselling
                    programme allows students to complete their preferred CAPE
                    subjects in preparation for university.
                  </span>

                  <br />
                  <br />
                  <br />
                  <Table>
                    <thead></thead>
                    <tbody>
                      {capeData.map((data, key) => {
                        return (
                          <>
                            <tr key={key}>
                              <td>
                                <strong>Tuition</strong>
                              </td>
                              <td>{data.tuition}</td>
                            </tr>

                            <tr>
                              <td>
                                <strong>Term Begins</strong>
                              </td>
                              <td>{data.term}</td>
                            </tr>

                            <tr>
                              <td>
                                <strong>Registration Closes</strong>
                              </td>
                              <td>{data.closes}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>Course Duration</strong>
                              </td>
                              <td>{data.duration}</td>
                            </tr>
                          </>
                        )
                      })}
                    </tbody>
                  </Table>

                  <br />
                  <a
                    style={{ textDecoration: "none" }}
                    theme="dark"
                    className="center btn btn-outline-primary"
                    outline
                    href="https://forms.zohopublic.com/csglearninginstitute/form/SixthFormApplicationForm/formperma/KzS0owBdPzi9_ukGpWYg6qshaeDOa3xT7rMkQjf3q24"
                    target="_blank"
                  >
                    Apply now
                  </a>
                </Col>
              </Row>
            </Col>
            <Col sm={6}>
              <Row>
                <Col sm={12}>
                  <div id="literacy"></div>
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
                  <br />
                  <Table>
                    <thead></thead>
                    <tbody>
                      {literacyData.map((data, key) => {
                        return (
                          <>
                            <tr key={key}>
                              <td>
                                <strong>Tuition</strong>
                              </td>
                              <td>{data.tuition}</td>
                            </tr>

                            <tr>
                              <td>
                                <strong>Term Begins</strong>
                              </td>
                              <td>{data.term}</td>
                            </tr>

                            <tr>
                              <td>
                                <strong>Registration Closes</strong>
                              </td>
                              <td>{data.closes}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>Course Duration</strong>
                              </td>
                              <td>{data.duration}</td>
                            </tr>
                          </>
                        )
                      })}
                    </tbody>
                  </Table>

                  <br />
                  <br />
                  <a
                    style={{ textDecoration: "none" }}
                    theme="dark"
                    className="center btn btn-outline-primary"
                    outline
                    href="https://forms.zohopublic.com/csglearninginstitute/form/LiteracyProgrammeApplicationForm/formperma/W2g46VpKRwDSR2fdlxUqhPTNYbf1XtXYqH06vYgz5h4"
                    target="_blank"
                  >
                    Apply now
                  </a>
                </Col>
                <Col sm={12}>
                  <div id="sat"></div>
                  <br />
                  <br />
                  <br />
                  <img src={SATImage} style={imgageStyle} />
                  <h5 className="text-center">SAT Programme</h5>
                  <br />
                  <span>
                    Enroll in online SAT preparation classes for the 2022
                    sitting of the exam.
                  </span>

                  <br />
                  <br />
                  <br />
                  <Table>
                    <thead></thead>
                    <tbody>
                      {satData.map((data, key) => {
                        return (
                          <>
                            <tr key={key}>
                              <td>
                                <strong>Tuition</strong>
                              </td>
                              <td>{data.tuition}</td>
                            </tr>

                            <tr>
                              <td>
                                <strong>Term Begins</strong>
                              </td>
                              <td>{data.term}</td>
                            </tr>
                          </>
                        )
                      })}
                    </tbody>
                  </Table>

                  <br />
                  <br />
                  <a
                    style={{ textDecoration: "none" }}
                    theme="dark"
                    className="center btn btn-outline-primary"
                    outline
                    href="https://forms.zohopublic.com/csglearninginstitute/form/CSECSummerProgrammeApplicationForm/formperma/2JyxgytsQew2u7HO6fISVzexEJksgpCTyHsS7Gz2KMs"
                    target="_blank"
                  >
                    Apply now
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Layout>
    )
  }
}

export default Page
