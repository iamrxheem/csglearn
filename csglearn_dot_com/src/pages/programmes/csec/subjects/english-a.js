import React from "react"
import { Link } from "gatsby"

import SEO from "../../../../components/seo"
import { Breadcrumb, BreadcrumbItem } from "shards-react"
import { Alert, Button, Row, Col, Container } from "shards-react"
import CSECLayout from "../../../../layouts/csecLayout"
import JotformEmbed from "react-jotform-embed"
import { Table } from "react-bootstrap"
import { isBrowser } from "react-device-detect"
import ProgramSummary from "../../../../common/programSummary"
import { Tab, Tabs, TabContainer } from "react-bootstrap"

const subject = "English A"

const Page = () => (
  <CSECLayout
    hideLogo
    swapImg
    img="https://media.istockphoto.com/vectors/diverse-people-holding-letters-word-english-learn-foreign-language-vector-id1148636267?k=6&m=1148636267&s=612x612&w=0&h=OmAVIqzj7BIPSD8Bp55XFC4EAvVqBhqsw--DbUghV-k="
  >
    <Container>
      <SEO
        title={`CXC CSEC ${subject}`}
        description={`Enroll in online ${subject} classes with CSG Learning Institute and prepare for your e. Call or WhatsApp (876) 707-3443 or email info@csglearn.com`}
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
                <span>This is overview</span>
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
