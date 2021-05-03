import * as React from "react"
import SEO from "../../components/seo"
import { Link } from "gatsby"

// Layout
import DiplomaLayout from "../../layouts/diplomaLayout"

// View Components
import MobileView from "../../common/mobileView"
import BrowserView from "../../common/browserView"

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

const Page = () => (
  <DiplomaLayout
    enroll="/diplomas/delf/enroll"
    tuition="/diplomas/delf/tuition"
  >
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

          <span>
            The Diploma in French as a Foreign Langauge (Diplôme d'Etudes en
            Langue Française) and DALF (Diplôme Approfondi de Langue Française)
            are the only French as a foreign language diplomas issued by the
            French Ministry of Education. They are valid for life and are
            recognized worldwide. They allow you to officially validate your
            French learning.
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
                  The Diploma in French (DELF) A1 is an accredited and
                  internationally recognized diploma that connects people from
                  their first contact with French and evaluates their level in
                  French from the beginning of their studies.
                </span>

                <br />
                <br />
                <span>
                  This course is aimed at absolute beginners in French as it
                  starts the online learning process from scratch and assumes no
                  previous knowledge or experience with French.
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
                  At level B1, the user becomes independent. He/she can maintain
                  interaction: he/she can understand and maintain a discussion
                  and give his/her opinion. He/she is capable of dealing with
                  situations likely to arise in daily life.
                </span>

                <br />
                <br />
                <span>
                  Please note that DELF B1 is required to obtain the French
                  nationality. It is also necessary to validate some diplomas.
                  For example, it is the case for the diplomas of the AUF
                  (Agence Universitaire de la Francophonie) and of the PFIEV
                  (Programme de Formation des Ingénieurs d'Excellence au
                  Vietnam).
                </span>
                <br />
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
          <Button href="/diplomas/delf/enroll" style={{ width: "100%" }}>
            Enroll now
          </Button>
        </Col>
        <Col sm={5}>
          <MobileView>
            <br />
            <br />
          </MobileView>

          <ProgrammeSummary
            showCost
            cost="JMD $80,000"
            levelOfStudy="Accredited Diploma"
            modeOfStudy="Online"
            duration="1 year"
            numberOfCourses="4"
            termBeginsOn="May 3, 2021"
          />

          <MobileView>
            <br />
            <br />
            <Button href="/diplomas/delf/enroll" style={{ width: "100%" }}>
              Enroll now
            </Button>
          </MobileView>
        </Col>
      </Row>
    </Container>
  </DiplomaLayout>
)

export default Page
