import React from "react"
import { Link } from "gatsby"

import SEO from "../../../components/seo"
import { Breadcrumb, BreadcrumbItem } from "shards-react"
import { Alert, Button, Row, Col, Container } from "shards-react"
import CSECLayout from "../../../layouts/csecLayout"
import { Table } from "react-bootstrap"

const Page = () => (
  <CSECLayout>
    <Container>
      <SEO
        title="Subject Offerings - CSEC Classes"
        description="See all the CSEC subjects we offer, fees and tuitions. Enroll into online classes beginning September 13, 2021."
        lang="en"
      />
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="/programmes/">Programmes</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="/programmes/">CSEC</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Subjects</BreadcrumbItem>
      </Breadcrumb>

      <Row>
        <Col sm={12} md={7} lg={7}>
          <h5>Subjects Offerings</h5>

          <br />
          <span>
            Below is a complete list of all the available subjects offered at
            CSG Learning Institute.
          </span>

          <br />
          <br />
          <Table striped bordered hover>
            <tbody>
              <tr>
                <td>English Language</td>
                <td>English Literature</td>
              </tr>
              <tr>
                <td>Mathemtics</td>
                <td>Additional Mathemtics</td>
              </tr>
              <tr>
                <td>Spanish</td>
                <td>French</td>
              </tr>
              <tr>
                <td>Chemistry</td>
                <td>Biology</td>
              </tr>
              <tr>
                <td>Physics</td>
                <td>Human & Social Biology</td>
              </tr>
              <tr>
                <td>Integrated Science</td>
                <td>Information Technology</td>
              </tr>
              <tr>
                <td>Social Studies</td>
                <td>Caribbean History</td>
              </tr>
              <tr>
                <td>Principles of Accounts</td>
                <td>Principles of Business</td>
              </tr>
              <tr>
                <td>Office Administration</td>
                <td>Economics</td>
              </tr>
              <tr>
                <td>Geography</td>
                <td>Electronic Document Preparation </td>
              </tr>
            </tbody>
          </Table>

          <br />
          <Button
            style={{ width: "100%" }}
            outline
            href="/programmes/csec/apply"
          >
            Apply now
          </Button>
        </Col>

        <Col sm={12} md={5} lg={5}></Col>
      </Row>
    </Container>
  </CSECLayout>
)

export default Page
