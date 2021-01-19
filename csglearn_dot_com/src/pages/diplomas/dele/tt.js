import React from "react"
import { Link } from "gatsby"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import CurrencyShower from "../../../common/currencyShower"
import {
  Breadcrumb,
  Row,
  Col,
  BreadcrumbItem,
  Button,
  Container
} from "shards-react"
import DELELayout from "../../../layouts/deleLayout"
import { Tab, Tabs } from "react-bootstrap"
import ProgramSummary from "../../../common/programSummary"

const Page = () => (
  <DELELayout>
    <SEO
      title="Diploma in Spanish (DELE) Beginners - A1 & A2 for Trinidad and Tobago"
      description=""
      lang="en"
    />
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

      <h5>Diploma in Spanish for Beginners - Trinidad & Tobago</h5>

      <br />
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
                The Diploma in Spanish A1 & is an accredited and internationally
                recognized diploma that connects people from their first contact
                with Spanish and evaluates their level in Spanish from the
                beginning of their studies. This course is aimed at absolute
                beginners in Spanish as it starts the online learning process
                from scratch and assumes no previous knowledge or experience
                with Spanish.
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

              <div className="d-block d-md-none">
                <br />
                <br />
              </div>
            </Col>
            <Col sm={12} md={5} lg={5}>
              <ProgramSummary
                levelOfStudy="Diploma"
                numberOfCourses="4"
                modeOfStudy="Online"
                duration="10 months"
                termBeginsOn="January 25, 2021"
                showCost
                cost="TTD $1,800 per term"
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
              <div className="d-block d-md-none">
                <br />
                <br />
              </div>
            </Col>
            <Col sm={12} md={5} lg={5}>
              <ProgramSummary
                levelOfStudy="Diploma"
                numberOfCourses="4"
                modeOfStudy="Online"
                duration="10 months"
                termBeginsOn="January 25, 2021"
                showCost
                cost="TTD $1,800 per term"
              />
            </Col>
          </Row>
        </Tab>
      </Tabs>

      <div className="d-block d-md-none">
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
      </div>
    </Container>
  </DELELayout>
)

export default Page
