import React from "react"
import SATLayout from "../../layouts/satLayout"
import SEO from "../../components/seo"
import SATMiniMenu from "../../common/satMiniMenu"
import { Breadcrumb, BreadcrumbItem, Button } from "shards-react"
import { Row, Col, Container } from "shards-react"
import Faq from "react-faq-component"
import ProgramSummary from "../../common/programSummary"

const data = {
  title: "",
  rows: [
    {
      title: "Who can take the SAT?",
      content: (
        <span>
          <br />
          Anyone can take the SAT.
          <br />
          <br />
        </span>
      )
    },
    {
      title: "How are the classes held?",
      content: (
        <span>
          <br />
          Our classes are fully online, allowing students to complete coursework
          in a timeframe that fits their schedule.
          <br />
          <br />
        </span>
      )
    },
    {
      title: "I wish to study abroad. Which countires accept the SAT?",
      content: (
        <span>
          <br />
          Students who wish to study abroad can apply to universities in the
          following countires using their SAT score:
          <br />
          <br />
          <ul>
            <li>
              <a href="#">United States</a>
            </li>
            <li style={{ paddingTop: "15px" }}>
              <a href="#">United Kingdom</a>
            </li>
            <li style={{ paddingTop: "15px" }}>
              <a href="#">Singapore</a>
            </li>
            <li style={{ paddingTop: "15px" }}>
              <a href="#">Canada</a>
            </li>
            <li style={{ paddingTop: "15px" }}>
              <a href="#">Australia</a>
            </li>
          </ul>
          <br />
        </span>
      )
    }
  ]
}

const config = {
  animate: true
  // arrowIcon: "V",
  // tabFocus: true
}

const styles = {
  bgColor: "transparent",
  titleTextColor: "",
  rowTitleColor: ""
  // rowContentColor: 'grey',
  // arrowColor: "red",
}

const SATPage = () => (
  <SATLayout>
    <Container>
      <SEO
        title="SAT Classes"
        description="Find out today why CSG Learning Institute's renowned SAT online course is considered the best in Jamaica. Enroll today and start learning from the comform of your home."
        lang="en"
      />
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="/programmes/">Programmes</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>SAT</BreadcrumbItem>
      </Breadcrumb>

      <Row>
        <Col sm={7}>
          <SATMiniMenu />
          <br />
          <h4>SAT Classes</h4>

          <br />
          <span>
            The SAT is an entrance exam used by most American colleges and
            universities to make admissions decisions. The purpose of the SAT is
            to measure a high school student's readiness for college, and
            provide colleges with one common data point that can be used to
            compare all applicants.
          </span>

          <br />
          <br />
          <span>
            Caribbean students can take the SAT exam and use their score to
            apply for universities in the United States and other countries,
            including the UK, Canada, Singapore and more.
          </span>

          <br />
          <br />
          <span></span>

          <br />

          <Faq data={data} styles={styles} config={config} />
          <br />
          <br />

          <Row>
            <Col xs={4}>
              <Button href="/programmes/sat/apply">Apply now</Button>
            </Col>
            <Col xs={8}>
              <Button href="/programmes/sat/FAQs" outline>
                Frequently Asked Questions
              </Button>
            </Col>
          </Row>

          <br />
          <br />
        </Col>

        <Col sm={5}>
          <ProgramSummary
            levelOfStudy="SAT Certification"
            modeOfStudy="Online"
            duration="6 months"
            hideCourses
            termBeginsOn="April 1, 2020"
            showCost
            cost="JMD $130,000"
          />
        </Col>
      </Row>
    </Container>
  </SATLayout>
)

export default SATPage
