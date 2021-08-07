import * as React from "react"
import SEO from "../../components/seo"
import { Link } from "gatsby"

// Layout
import DelfLayout from "../../layouts/delfLayout"

// View Components
import MobileView from "../../common/mobileView"
import BrowserView from "../../common/browserView"
import Faq from "react-faq-component"
import DelfStudentVideo from "../../videos/delf-student-video.mp4"

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
  return (applyLink = data.delf)
})

const Page = () => (
  <DelfLayout enroll={applyLink} tuition="/diplomas/delf/tuition">
    <Container>
      <SEO title="Diplôme d'Etudes en Langue Française (DELF)" description="" />

      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="/programmes">Diplomas</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>Diplomas in French</BreadcrumbItem>
      </Breadcrumb>

      <Row>
        <Col sm={7}>
          <h3>Diploma in French as a Foreign Langauge</h3>
          <br />

          <p>
            The Diploma in French as a Foreign Langauge (Diplôme d'Etudes en
            Langue Française) and DALF (Diplôme Approfondi de Langue Française)
            are the only French as a foreign language diplomas issued by the
            French Ministry of Education. They are valid for life and are
            recognized worldwide. They allow you to officially validate your
            French learning.
          </p>

          <br />
          <p>
            CSG Learning Institute offers training in two (2) levels of the
            diplomas
          </p>

          <br />
          <br />
          <Tabs defaultActiveKey="beginners" id="main-tab">
            <Tab eventKey="beginners" title="Beginners">
              <Tab.Content>
                <br />
                <h4>Beginner's Diploma</h4>

                <br />
                <p>
                  The Diploma in French (DELF) A1 is an accredited and
                  internationally recognized diploma that connects people from
                  their first contact with French and evaluates their level in
                  French from the beginning of their studies.
                </p>

                <br />
                <p>
                  This course is aimed at absolute beginners in French as it
                  starts the online learning process from scratch and assumes no
                  previous knowledge or experience with French.
                </p>

                <br />
                <br />
                <h4>Entry Requirements</h4>
                <p>
                  No requirements as this course starts the learning process
                  from scratch.
                </p>
              </Tab.Content>
            </Tab>
            <Tab eventKey="intermediate" title="Intermediate">
              <Tab.Content>
                <br />
                <h4>Intermediate Diploma</h4>

                <br />
                <p>
                  At level B1, the user becomes independent. He/she can maintain
                  interaction: he/she can understand and maintain a discussion
                  and give his/her opinion. He/she is capable of dealing with
                  situations likely to arise in daily life.
                </p>

                <br />
                <p>
                  Please note that DELF B1 is required to obtain the French
                  nationality. It is also necessary to validate some diplomas.
                  For example, it is the case for the diplomas of the AUF
                  (Agence Universitaire de la Francophonie) and of the PFIEV
                  (Programme de Formation des Ingénieurs d'Excellence au
                  Vietnam).
                </p>

                <br />
                <h4>Entry Requirements</h4>

                <br />
                <ul>
                  <li>At least the DELF A1 Diploma</li>
                  <li style={{ paddingTop: "15px" }}>
                    Five CSEC subjects (General Proficiency Grades I-III) and/or
                    GCE O'Levels/ BGCSE (Grades A-C) in English Language and{" "}
                    <b>French</b>,
                  </li>
                  <li style={{ paddingTop: "15px" }}>
                    2 A- Level subjects including French (Grades I-IV)
                  </li>
                </ul>
              </Tab.Content>
            </Tab>
          </Tabs>

          <br />
          <br />
          <Button href={applyLink} style={{ width: "100%" }}>
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
              <source src={DelfStudentVideo} type="video/mp4" />
            </video>
            <br />
            <br />
          </BrowserView>

          <ProgrammeSummary
            showCost
            cost="JMD $50,000"
            levelOfStudy="Accredited Diploma"
            modeOfStudy="Online"
            duration="3 months"
            numberOfCourses="4"
            termBeginsOn="August 30, 2021"
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

      <br />
      <br />
      <br />
      <h3 className="text-center">Frequently Asked Questions</h3>

      <br />
      <br />
      <Faq
        data={{
          title: "",
          rows: [
            {
              title: "Where are we located?",
              content: (
                <>
                  <br />
                  <p>
                    We're based in Kingston, Jamaica but our operations are
                    online, which allows us to not only provide valuable
                    educational training and materials to students across
                    Jamaica, but the entire Caribbean.
                  </p>
                  <br />
                </>
              )
            },
            {
              title: "How are classes held?",
              content: (
                <>
                  <br />
                  <p>
                    All classes are held online and are accessible through our{" "}
                    <a href="https://www.hub.csglearn.com/my" target="_blank">
                      Student Portal.
                    </a>
                  </p>
                  <br />
                </>
              )
            },
            {
              title: "How often are classes kept?",
              content: (
                <>
                  <br />
                  <p>
                    On average, students are provided 3-4 hours of classtime per
                    week. Additional classtime may be schedule by your teacher.
                  </p>
                  <br />
                </>
              )
            },
            {
              title: "Are payment plans available?",
              content: (
                <>
                  <br />
                  <p>Yes, payment plans are available for all students.</p>
                  <br />
                </>
              )
            },
            {
              title: "Where will I sit the exam?",
              content: (
                <>
                  <br />
                  <p>
                    The Diploma in French is an in-person exam with examination
                    centers in most Caribbean countries. Each student will be
                    assigned an examination center in their area based on their
                    address.
                  </p>
                  <br />
                </>
              )
            },
            {
              title:
                "What if I am in a country that does not have an examination center?",
              content: (
                <>
                  <br />
                  <p>
                    In the rare event that a candidate's country does not have
                    an examination center, special arrangements will be made for
                    the candidate to be flown in to Kingston, Jamaica to
                    complete the exam. Note: this may incur additional travel
                    fees and accomodations.
                  </p>
                  <br />
                </>
              )
            },
            {
              title: "How can I pay?",
              content: (
                <>
                  <br />
                  <p>Students are able to pay online or via bank transfer.</p>
                  <br />
                </>
              )
            }
          ]
        }}
      />
    </Container>
  </DelfLayout>
)

export default Page
