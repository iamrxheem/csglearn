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

const subject = "Economics"

const Page = () => (
  <CSECLayout
    hideLogo
    swapImg
    img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0DxTv0KsM4pRNoNoquZyyGtyA-nyG5ord_w&usqp=CAU"
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
        <BreadcrumbItem active>{subject}</BreadcrumbItem>
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
