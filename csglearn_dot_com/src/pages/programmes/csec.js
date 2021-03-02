import React from "react"
import SEO from "../../components/seo"
import CSECSubjectTable from "../../common/csecSubjectTable"
import { Breadcrumb, BreadcrumbItem } from "shards-react"
import { Button, Row, Col, Container } from "shards-react"
import CSECLayout from "../../layouts/csecLayout"
import ProgramSummary from "../../common/programSummary"
import { Table } from "react-bootstrap"

const Page = () => (
  <CSECLayout>
    <Container>
      <SEO
        title="Online CSEC Classes"
        description="Enroll in online CSEC classes today with CSG Learning Institute. Study for CXC in a virtual clasroom from the comfort of your home with CSG Learning Institute."
        lang="en"
      />
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="/programmes/">Programmes</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>CSEC Classes</BreadcrumbItem>
      </Breadcrumb>

      <Row>
        <Col sm={12} md={7} lg={7}>
          <h3>CSEC Classes</h3>

          <br />
          <span>
            Our 3-months CSEC Online classes begin on Monday, March 8, 2021.
            Students can register for one-on-one or group classes, all major
            subjects included.
          </span>

          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <th>Course</th>
                <th>Cost (per month)</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>English A</td>
                <td>JMD $5,800</td>
              </tr>
              <tr>
                <td>Mathematics</td>
                <td>JMD $5,800</td>
              </tr>
              <tr>
                <td>All other subjects</td>
                <td>JMD $4,300</td>
              </tr>
            </tbody>
          </Table>

          <br />
          <span>
            <strong>
              Note, exam registration fees are not included in this amount.
            </strong>
          </span>

          <br />
          <br />
          <Button
            style={{ width: "100%" }}
            outline
            href="/programmes/csec/enroll"
          >
            Enroll now
          </Button>

          <br />
          <br />
          <h4>One-on-one Classes</h4>

          <br />
          <span>Please note the fees for 1:1 classes.</span>

          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <th>Course</th>
                <th>Cost (per month)</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>English A</td>
                <td>JMD $12,000</td>
              </tr>
              <tr>
                <td>Mathematics</td>
                <td>JMD $12,000</td>
              </tr>
              <tr>
                <td>All other subjects</td>
                <td>JMD $9,000</td>
              </tr>
            </tbody>
          </Table>

          <br />
          <Button
            style={{ width: "100%" }}
            outline
            href="/programmes/csec/enroll"
          >
            Enroll now
          </Button>

          <br />
          <br />
          <br />
        </Col>

        <Col sm={12} md={5} lg={5}>
          <ProgramSummary
            hasOptions
            options="One-on-One, Group"
            levelOfStudy="CSEC Certification"
            modeOfStudy="Online"
            duration="3 months"
            numberOfCourses="1"
            termBeginsOn="Monday, March 8, 2021"
          />
        </Col>
      </Row>
    </Container>
  </CSECLayout>
)

export default Page
