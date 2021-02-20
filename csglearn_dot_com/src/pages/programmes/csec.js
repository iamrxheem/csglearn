import React from "react"
import { Link } from "gatsby"

import SEO from "../../components/seo"
import CSECSubjectTable from "../../common/csecSubjectTable"
import { Breadcrumb, BreadcrumbItem } from "shards-react"
import { Table } from "react-bootstrap"
import { Alert, Button, Row, Col, Container } from "shards-react"
import CSECLayout from "../../layouts/csecLayout"
import ProgramSummary from "../../common/programSummary"

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
            Our weekly online classes are taught by qualified, experienced and
            qualified teachers with 95% passes. CSG Learning offers a wide range
            of extra classes for students looking to sit the CSEC examination in
            January or May/ June 2022.
          </span>

          <br />
          <br />

          <h3>Subjects Offered</h3>

          <br />
          <CSECSubjectTable />

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
        </Col>

        <Col sm={12} md={5} lg={5}>
          <ProgramSummary
            levelOfStudy="CSEC Certification"
            modeOfStudy="Online"
            duration="1 year"
            numberOfCourses="Minimum 3"
            termBeginsOn="Monday, September 13, 2021"
            showCost
            cost="Depends on the number of subjects"
          />
        </Col>
      </Row>
    </Container>
  </CSECLayout>
)

export default Page
