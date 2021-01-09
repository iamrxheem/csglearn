import React from "react"
import { Link } from "gatsby"
import DELELayout from "../../../layouts/deleLayout"
import SEO from "../../../components/seo"
import {
  Breadcrumb,
  BreadcrumbItem,
  Container,
  Row,
  Col,
  Button
} from "shards-react"
import Faq from "react-faq-component"
import { MobileView } from "react-device-detect"
import ProgramSummary from "../../../common/programSummary"

const data = {
  title: "",
  rows: [
    {
      title: "What is the Diploma in Spanish in general?",
      content: (
        <span>
          <br />
          The DELE Diplomas are official certificates, which prove the Spanish
          competence and command, given by Instituto Cervantes on behalf of the
          Spanish Ministry of Education and Science.
          <br />
          <br />
        </span>
      )
    },
    {
      title: "What does the exam measure?",
      content: (
        <span>
          <br />
          The A1 diploma proves that the students have the capacity of:
          <br />
          <br />
          <ul>
            <li>
              Understanding and using basic daily expressions in any Spanish
              speaking country.
            </li>
            <li style={{ paddingTop: "15px" }}>
              Asking and giving personal information about themselves and their
              daily routine.
            </li>
            <li style={{ paddingTop: "15px" }}>
              Interacting in a basic way with other speakers that speak slowly
              and clearly.
            </li>
          </ul>
          <br />
        </span>
      )
    },
    {
      title: "How long is the course?",
      content: (
        <span>
          <br />
          The course is for 10 months.{" "}
          <a href="/diplomas/dele/apply">Apply now</a>.
          <br />
          <br />
        </span>
      )
    }
  ]
}

const styles = {
  bgColor: "transparent",
  titleTextColor: "",
  rowTitleColor: ""
  // rowContentColor: 'grey',
  // arrowColor: "red",
}

const config = {
  animate: true
  // arrowIcon: "V",
  // tabFocus: true
}

const Page = () => (
  <>
    <DELELayout>
      <SEO
        title="Diploma in Spanish for Escolares (Minors)"
        description=""
        lang="en"
      />

      <Container>
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="/diplomas">Diplomas</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="/diplomas/dele">DELE</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>For Minors</BreadcrumbItem>
        </Breadcrumb>

        <Row>
          <Col sm={12} md={12} lg={7}>
            <h5>Diploma in Spanish for Minors</h5>

            <br />
            <span>
              The Diploma in Spanish (DELE) for Minors is aimed at students
              between the ages of 11 - 17 years of age.
            </span>

            <br />
            <br />
            <span>
              CSG Learning offers courses for children to prepare them for the
              exam, and also can advise on how to best reach the level necessary
              for your children to pass.
            </span>

            <br />
            <br />

            <Button
              style={{ width: "100%" }}
              outline
              href="/diplomas/dele/apply"
            >
              Apply Now
            </Button>

            <br />
            <br />
            <Faq data={data} styles={styles} config={config} />

            <br />
            <br />
          </Col>
          <Col sm={12} md={12} lg={5}>
            <ProgramSummary
              levelOfStudy="Diploma"
              numberOfCourses="4"
              modeOfStudy="Online"
              duration="10 months"
              termBeginsOn="January 25, 2021"
              showCost
              cost="USD $250 per term"
            />
          </Col>
        </Row>

        <br />
      </Container>
    </DELELayout>
  </>
)

export default Page
