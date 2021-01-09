import React from "react"
import { Link } from "gatsby"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import { MobileView, BrowserView } from "react-device-detect"
import {
  Breadcrumb,
  Row,
  Col,
  BreadcrumbItem,
  Button,
  Container
} from "shards-react"
import { useForm, useField, splitFormProps } from "react-form"
import DELELayout from "../../../layouts/deleLayout"
import { Tab, Tabs } from "react-bootstrap"
import ProgramSummary from "../../../common/programSummary"

const Page = () => (
  <DELELayout>
    <SEO title="DELE Beginners Diploma - A1 & A2" description="" lang="en" />
    <Container>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="/diplomas/">Diplomas</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="/diplomas/dele">DELE</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Beginners</BreadcrumbItem>
      </Breadcrumb>

      <h5>DELE Beginners Diploma - A1 & A2</h5>
      <br />
      <span>
        Students can choose between two diplomas at the beginners level - A1 and
        A2.
      </span>

      <br />
      <br />
      <Tabs defaultActiveKey="a1">
        <Tab eventKey="a1" title="A1 Diploma">
          <br />
          <Row>
            <Col sm={12} md={12} lg={7}>
              <span>
                CSG Learning's DELE A1 program equips students with the
                necessary training and resources to take the A1 exam. The course
                is aimed at absolute beginners in Spanish as it starts the
                learning process from scratch and assumes no previous knowledge
                or experience with Spanish.
              </span>

              <br />
              <br />
              <h4>Entry Requirements</h4>

              <span>No requirements.</span>

              <br />
              <br />

              <Row>
                <Col sm={12} md={6} lg={6}>
                  <Button
                    style={{ width: "100%" }}
                    outline
                    href="/diplomas/dele/apply"
                  >
                    Apply Now
                  </Button>
                </Col>
                <Col sm={12} md={6} lg={6}></Col>
              </Row>

              <MobileView>
                <br />
                <br />
              </MobileView>
            </Col>
            <Col sm={12} md={5} lg={5}>
              <ProgramSummary
                levelOfStudy="Diploma"
                numberOfCourses="4"
                modeOfStudy="Online"
                duration="1 year"
                termBeginsOn="January 25, 2021"
                showCost
                cost="USD $250 per term"
              />
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="a2" title="A2 Diploma">
          <br />
          <Row>
            <Col sm={12} md={12} lg={7}>
              <span>
                CSG Learning's DELE A2 program equips students with the
                necessary training and resources to take the A2 exam. At this
                level, students are able to understand commonly used, everyday
                phrases and expressions related to areas of experience
                especially relevant to them (basic information about themselves
                and their families, shopping, places of interest, work, etc.).
              </span>
              <br />
              <br />
              <h4>Entry Requirements</h4>

              <span>No requirements.</span>

              <br />
              <br />
              <Row>
                <Col sm={12} md={6} lg={6}>
                  <Button
                    style={{ width: "100%" }}
                    outline
                    href="/diplomas/dele/apply"
                  >
                    Apply Now
                  </Button>
                </Col>
                <Col sm={12} md={6} lg={6}></Col>
              </Row>
              <MobileView>
                <br />
                <br />
              </MobileView>
            </Col>
            <Col sm={12} md={5} lg={5}>
              <ProgramSummary
                levelOfStudy="Diploma"
                numberOfCourses="4"
                modeOfStudy="Online"
                duration="10 months"
                termBeginsOn="January 25, 2021"
                showCost
                cost="USD $225 per term"
              />
            </Col>
          </Row>
        </Tab>
      </Tabs>
    </Container>
  </DELELayout>
)

export default Page
