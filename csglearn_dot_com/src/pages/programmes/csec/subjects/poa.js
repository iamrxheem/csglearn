import React from "react"

import SEO from "../../../../components/seo"
import { Breadcrumb, BreadcrumbItem } from "shards-react"
import {
  Button,
  Row,
  Col,
  Container} from "shards-react"
import CSECLayout from "../../../../layouts/csecLayout"
import { isBrowser } from "react-device-detect"
import ProgramSummary from "../../../../common/programSummary"
import { Tab, Tabs, TabContainer } from "react-bootstrap"

const subject = "Principles of Accounts"

const Page = () => (
  <CSECLayout
    hideLogo
    swapImg
    img="https://images.squarespace-cdn.com/content/v1/54c2b1afe4b0688a881a6e01/1600936576762-4B4I5GYIB1FRUC274O57/ke17ZwdGBToddI8pDm48kLkM6y4JkZw0UcECSUjKOfpZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxIxf1kQA6utKFInWPJKzy63gHWiTheVcfpbUq8J1RVNPuis_x0lctZNHNIm2DAEes/Accounting+for+Business_+A+guide+to+doing+your+small+business+accounting.png"
  >
    <Container>
      <SEO
        title={`CXC CSEC ${subject}`}
        description={`Enroll in online ${subject} classes with CSG Learning Institute`}
        lang="en"
      />
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>

        {isBrowser ? (
          <>
            <BreadcrumbItem>
              <a href="/programmes/">Programmes</a>
            </BreadcrumbItem>
          </>
        ) : null}

        <BreadcrumbItem>
          <a href="/programmes/csec">CSEC</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="/programmes/csec/subjects">Subjects</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>POA</BreadcrumbItem>
      </Breadcrumb>

      <Row>
        <Col md={7}>
          <h3>CSEC {subject}</h3>

          <br />

          <span>
            Here's all you need to know about our online CSEC {subject} classes
            and exam registration.
          </span>

          <br />
          <br />

          <Tabs defaultActiveKey="overview" id="main-tab">
            <Tab eventKey="overview" title="Overview">
              <TabContainer>
                <br />
                <br />

                <br />
                <br />
              </TabContainer>
            </Tab>
            <Tab eventKey="entry" title="Entry">
              <TabContainer>
                <br />
                <span>This is entry requirements</span>
              </TabContainer>
            </Tab>

            <Tab
              eventKey="resources"
              title={
                <>
                  <i
                    className="far fa-bookmark mr-2"
                    style={{ color: "red" }}
                  ></i>
                  Resources
                </>
              }
            >
              <TabContainer>
                <br />
                <span>This is resources</span>
              </TabContainer>
            </Tab>
          </Tabs>

          <br />
          <br />

          <Row>
            <Col xs={6}>
              <Button href="/programmes/csec/enroll" style={{ width: "100%" }}>
                Enroll now
              </Button>
            </Col>
            <Col xs={6}>
              <Button
                href="/programmes/csec/FAQs"
                theme="secondary"
                outline
                style={{ width: "100%" }}
              >
                Programme FAQs
              </Button>
            </Col>
          </Row>

          <br />
          <br />
        </Col>

        <Col md={5}>
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
