import React from "react"
import DELFLayout from "../../../layouts/delfLayout"
import SEO from "../../../components/seo"
import { Breadcrumb, BreadcrumbItem, Container, Row, Col } from "shards-react"
import Faq from "react-faq-component"
import DELFMiniMenu from "../../../common/delfMiniMenu"

const data = {
  title: "",
  rows: [
    {
      title: "Who organizes the Diplomas in French?",
      content: (
        <span>
          <br />
          The Diplomas in French (DELF and DALF) are diplomas awarded by the
          French Ministry of Education to prove the French-language skills of
          non-French candidates
          <br />
          <br />
        </span>
      )
    },
    {
      title: "Does the diploma expire?",
      content: (
        <span>
          <br />
          The diplomas are valid permanently. Once you have attained one, the
          certification never expires, regardless of which country you are in –
          it’s a constant asset, in terms of job hunting and much more.
          <br />
          <br />
        </span>
      )
    },
    {
      title: "Where are the classes kept?",
      content: (
        <span>
          <br />
          Classes are fully online. Students will be able to access their
          classes and class resources online on our{" "}
          <a target="_blank" href="https://www.hub.csglearn.com/login">
            portal
          </a>
          .
          <br />
          <br />
        </span>
      )
    },
    {
      title: "Who can take the DELF & DALF exams?",
      content: (
        <span>
          <br />
          Any person who wishes to register for a DELE exam is eligible to do
          so, regardless of their nationality or country of origin. For the
          beginners’ course, no prior experience or knowledge is required –
          students start learning French from scratch!
          <br />
          <br />
        </span>
      )
    },
    {
      title: "How is the exam conducted?",
      content: (
        <span>
          <br />
          The DELF is a face-to-face exam. However, due to the current COVID-19
          pandemic, some or all of the exams may be conducted online. Please see
          our <a href="/diplomas/delf/exam-centres">exam centres</a> to find the
          closest in your area.
          <br />
          <br />
        </span>
      )
    },
    {
      title: "Which exam should I take?",
      content: (
        <span>
          <br />
          It depends on your level. Select the relevant diploma to learn more
          and preview sample exams.
          <br />
          <br />
          <ul>
            <li>
              <a href="/diplomas/delf/beginners">Absolute Beginner</a>
            </li>
            <li style={{ paddingTop: "10px" }}>
              <a href="/diplomas/delf/intermediate">Intermediate</a>
            </li>
            <li style={{ paddingTop: "10px" }}>
              <a href="/diplomas/delf/advanced">Advanced/ Master</a>
            </li>
          </ul>
          <br />
          <br />
        </span>
      )
    },
    {
      title: "When will I get my certificate?",
      content: (
        <span>
          <br />
          Students can pick up their certificates at their examination center
          five (5) weeks after taking the exam or can choose to have it sent by
          mail to the address they provided at registration.
          <br />
          <br />
          See{" "}
          <a href="/diplomas/dele/examination-centers">
            list of examination centers
          </a>
          .
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
    <DELFLayout>
      <SEO
        title="Diplomas in French FAQs"
        description="View a complete list of frequently asked questions for the Diplomas in French (DELF). Enroll today and start learning French with CSG Learning Institute."
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
            <a href="/diplomas/delf">DELF</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>FAQs</BreadcrumbItem>
        </Breadcrumb>

        <h5>Frequently Asked Questions</h5>

        <Row>
          <Col xs={12} md={6}>
            <br />
            <DELFMiniMenu />
          </Col>
          <Col xs={12} md={6}></Col>
        </Row>

        <br />
        <Faq data={data} styles={styles} config={config} />

        <br />
      </Container>
    </DELFLayout>
  </>
)

export default Page
