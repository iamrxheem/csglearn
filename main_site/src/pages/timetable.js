import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// View Components
import MobileView from "../common/mobileView"
import BrowserView from "../common/browserView"
import moment from "moment"

import {
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Col,
  Button,
  Alert
} from "shards-react"

import Timetable from "react-timetable-events"

import StudentImage from "../images/black-college-student.jpg"
import { Table } from "react-bootstrap"

class PayNow extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <Layout hideAlert>
        <SEO title="Subject Timetable" description="" />

        <MobileView>
          <img style={{ width: "100%" }} src={StudentImage} />
        </MobileView>

        <Container>
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="/">Home</a>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to="/programmes">Programmes</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>SAT</BreadcrumbItem>
          </Breadcrumb>

          <h3>CSEC Timetable</h3>

          <br />
          <p>
            Due to the number of students enrolled in English A and Mathematics,
            classes will be divided into two (2) streams:
          </p>

          <br />
          <p>
            Stream 1 - students with last name A - M
            <br />
            Stream 2 - students with last name N - Z
          </p>

          <br />
          <br />
          <Row>
            <Col md={6}>
              <h5 className="text-primary">Mondays</h5>

              <br />
              <Table hover>
                <thead>
                  <tr>
                    <th>Subject</th>
                    <th>Time (EST)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      English A
                      <br />
                      <span className="text-primary">Stream 1 - Lecture</span>
                    </td>
                    <td>4PM - 6PM</td>
                  </tr>
                  <tr>
                    <td>
                      Physics <br />
                      <span className="text-primary">Lecture</span>
                    </td>
                    <td>6PM - 8PM</td>
                  </tr>
                  <tr>
                    <td>
                      Human & Social Biology <br />
                      <span className="text-primary">Lecture</span>
                    </td>
                    <td>6PM - 8PM</td>
                  </tr>
                </tbody>
              </Table>

              <br />
              <h5 className="text-primary">Tuesday</h5>

              <br />
              <Table hover>
                <thead>
                  <tr>
                    <th>Subject</th>
                    <th>Time (EST)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      Chemistry <br />
                      <span className="text-primary">Lecture</span>
                    </td>
                    <td>4PM - 6PM</td>
                  </tr>
                  <tr>
                    <td>
                      Physics <br />
                      <span className="text-primary">Tutorial</span>
                    </td>
                    <td>6PM - 7PM</td>
                  </tr>
                  <tr>
                    <td>
                      Information Technology <br />
                      <span className="text-primary">Lecture</span>
                    </td>
                    <td>6PM - 8PM</td>
                  </tr>
                </tbody>
              </Table>

              <br />
              <h5 className="text-primary">Wednesday</h5>

              <br />
              <Table hover>
                <thead>
                  <tr>
                    <th>Subject</th>
                    <th>Time (EST)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      Principles of Business <br />
                      <span className="text-primary">Lecture</span>
                    </td>
                    <td>3PM - 5PM</td>
                  </tr>
                  <tr>
                    <td>
                      English A
                      <br />
                      <span className="text-primary">Stream 1 - Tutorial</span>
                    </td>
                    <td>5PM - 6PM</td>
                  </tr>
                  <tr></tr>
                  <tr>
                    <td>
                      Mathematics
                      <br />
                      <span className="text-primary">
                        (Stream 1 - Lecture )
                      </span>
                    </td>
                    <td>5PM - 7PM</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
            <Col md={6}>
              <br />
              <h5 className="text-primary">Thursday</h5>

              <br />
              <Table hover>
                <thead>
                  <tr>
                    <th>Subject</th>
                    <th>Time (EST)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      Mathematics
                      <br />
                      <span className="text-primary">Stream 2 - Lecture</span>
                    </td>
                    <td>4PM - 6PM</td>
                  </tr>
                  <tr></tr>
                  <tr>
                    <td>
                      Biology
                      <br />
                      <span className="text-primary">Lecture</span>
                    </td>
                    <td>6PM - 8PM</td>
                  </tr>
                  <tr>
                    <td>
                      Principles of Accounts <br />
                      <span className="text-primary">Lecture</span>
                    </td>
                    <td>6PM - 8PM</td>
                  </tr>
                </tbody>
              </Table>

              <br />
              <h5 className="text-primary">Friday</h5>

              <br />
              <Table hover>
                <thead>
                  <tr>
                    <th>Subject</th>
                    <th>Time (EST)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      Mathematics
                      <br />
                      <span className="text-primary">Stream 2 - Tutorial</span>
                    </td>
                    <td>4PM - 5PM</td>
                  </tr>
                  <tr>
                    <td>
                      Chemistry <br />
                      <span className="text-primary">Tutorial</span>
                    </td>
                    <td>5PM - 6PM</td>
                  </tr>
                  <tr>
                    <td>
                      Office Administration <br />
                      <span className="text-primary">Lecture</span>
                    </td>
                    <td>5PM - 7PM</td>
                  </tr>
                  <tr>
                    <td>
                      Social Studies <br />
                      <span className="text-primary">Lecture</span>
                    </td>
                    <td>5PM - 7PM</td>
                  </tr>
                </tbody>
              </Table>

              <br />
              <h5 className="text-primary">Saturday</h5>

              <br />
              <Table hover>
                <thead>
                  <tr>
                    <th>Subject</th>
                    <th>Time (EST)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      Biology <br />
                      <span className="text-primary">Tutorial</span>
                    </td>
                    <td>3PM - 4PM</td>
                  </tr>
                  <tr>
                    <td>
                      Spanish <br />
                      <span className="text-primary">Lecture</span>
                    </td>
                    <td>4PM - 6PM</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>

          <br />
          <p className="text-danger">
            ** Note, timetable is subject to change.
          </p>
        </Container>
      </Layout>
    )
  }
}

export default PayNow
