import * as React from "react"
import SEO from "../../components/seo"
import { Link } from "gatsby"

// Layout
import DeleLayout from "../../layouts/deleLayout"

// View Components
import MobileView from "../../common/mobileView"
import BrowserView from "../../common/browserView"

import DeleStudentVideo from "../../videos/dele-student-video.mp4"

// Shards-React Components
import {
  Row,
  Col,
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Button
} from "shards-react"
import { Tabs, Tab } from "react-bootstrap"
import ProgrammeSummary from "../../common/programmeSummary"

import { applyLinks } from "../../data/links"
let applyLink = ""

applyLinks.map(data => {
  return (applyLink = data.dele)
})

const Page = () => (
  <DeleLayout enroll={applyLink} tuition="/diplomas/dele/tuition">
    <Container>
      <SEO
        title="Diplomas de Español como Lengua Extranjera (DELE)"
        description=""
      />

      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="/programmes">Diplomas</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>Diplomas in Spanish</BreadcrumbItem>
      </Breadcrumb>

      <Row>
        <Col sm={7}>
          <h3>Diploma in Spanish as a Foreign Langauge</h3>
          <br />

          <span>
            The DELE (Diplomas de Español como Lengua Extranjera) is an
            accredited and prestigious qualification, proving the ability of the
            holder to have excellent Spanish communications skills. They are
            internationally recognised, so they are invaluable for professional
            documentation across the Spanish speaking world.
          </span>

          <br />
          <br />
          <span>
            CSG Learning Institute offers training in two (2) levels of the
            diplomas
          </span>

          <br />
          <br />
          <Tabs defaultActiveKey="beginners" id="main-tab">
            <Tab eventKey="beginners" title="Beginners">
              <Tab.Content>
                <br />
                <h4>Beginner's Diploma</h4>

                <br />
                <span>
                  The Diploma in Spanish A1 & A2 is an accredited and
                  internationally recognized diploma that connects people from
                  their first contact with Spanish and evaluates their level in
                  Spanish from the beginning of their studies. This course is
                  aimed at absolute beginners in Spanish as it starts the online
                  learning process from scratch and assumes no previous
                  knowledge or experience with Spanish.
                </span>

                <br />
                <br />
                <h4>Entry Requirements</h4>
                <span>No requirements.</span>
              </Tab.Content>
            </Tab>
            <Tab eventKey="intermediate" title="Intermediate">
              <Tab.Content>
                <br />
                <h4>Intermediate Diploma</h4>

                <br />
                <span>
                  CSG Learning's DELE B1 program equips students with the
                  necessary training and resources to take the B1 exam through
                  an intensive curriculum that focuses on expanding vocabulary
                  and developing fluency.
                </span>

                <br />
                <br />

                <span>
                  The DELE B1 diploma certifies candidates’ capacity to
                  understand the gist of clear texts, in standard language, if
                  they involve well-known topics related to work, studies or
                  leisure. It also certifies students’ ability to deal with most
                  situations that occur while travelling in areas where Spanish
                  is spoken; to produce simple and coherent texts about familiar
                  topics, or topics of personal interest; and lastly to be able
                  to describe experiences, events, wishes and hopes, as well as
                  to be able to briefly express opinions or explain plans.
                </span>

                <br />
                <br />
                <h4>Entry Requirements</h4>

                <br />
                <ul>
                  <li>At least the DELE A1 Diploma</li>
                  <li style={{ paddingTop: "15px" }}>
                    Five CSEC subjects (General Proficiency Grades I-III) and/or
                    GCE O'Levels/ BGCSE (Grades A-C) in English Language and{" "}
                    <b>Spanish</b>,
                  </li>
                  <li style={{ paddingTop: "15px" }}>
                    2 A- Level subjects including Spanish (Grades I-IV)
                  </li>
                </ul>
              </Tab.Content>
            </Tab>
          </Tabs>

          <br />
          <br />
          <Button href={applyLink} target="_blank" style={{ width: "100%" }}>
            Enroll now
          </Button>
        </Col>
        <Col sm={5}>
          <MobileView>
            <br />
            <br />
          </MobileView>

          <BrowserView>
            <video
              style={{ width: "100%" }}
              preload="auto"
              autoPlay={true}
              loop
              muted
            >
              <source src={DeleStudentVideo} type="video/mp4" />
            </video>
            <br />
            <br />
          </BrowserView>

          <ProgrammeSummary
            showCost
            cost="JMD $80,000"
            levelOfStudy="Accredited Diploma"
            modeOfStudy="Online"
            duration="8 months"
            numberOfCourses="4"
            termBeginsOn="July 12, 2021"
          />

          <MobileView>
            <br />
            <br />
            <Button href={applyLink} target="_blank" style={{ width: "100%" }}>
              Enroll now
            </Button>
          </MobileView>
        </Col>
      </Row>
    </Container>
  </DeleLayout>
)

export default Page
