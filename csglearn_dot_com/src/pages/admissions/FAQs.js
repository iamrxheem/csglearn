import React from "react"
import { Link } from "gatsby"
import AdmissionsLayout from "../../layouts/admissionsLayout"
import SEO from "../../components/seo"
import { Breadcrumb, BreadcrumbItem, Container, Row, Col } from "shards-react"
import Faq from "react-faq-component"
import { MobileView } from "react-device-detect"

const data = {
  title: "",
  rows: [
    {
      title: "How do I apply?",
      content: (
        <span>
          <br />
          Prospective students can apply using our online portal found{" "}
          <a href="/apply">here</a>.
          <br />
          <br />
        </span>
      )
    },
    {
      title: "What are the requirements for admissions?",
      content: (
        <span>
          <br />
          Each programme or diploma has their own unique requirements for
          acceptace. Prospective students can review the general list of
          requirements <a href="/admissions/requirements">here</a>, or review
          our <a href="/programmes">programmes</a> or{" "}
          <a href="/diplomas">diplomas</a>.
          <br />
          <br />
        </span>
      )
    },
    {
      title: "What documents do I need for enrollment?",
      content: (
        <span>
          <br />
          Please refer to a list of admissions requirements{" "}
          <a href="/admissions/requirements">here</a>.
          <br />
          <br />
        </span>
      )
    },
    {
      title: "What is an academic portfolio?",
      content: (
        <span>
          <br />
          An academic portfolio is a compilation of verifiable documentation
          demonstrating learning gained through prior learning experiences which
          match the outcomes of university education or matriculation
          requirements.
          <br />
          <br />
        </span>
      )
    },
    {
      title: "Where will I sit the CSEC or CAPE exams?",
      content: (
        <span>
          <br />
          Candidates will be assigned an approved examination center based on
          their address. This is where they will sit their exams.
          <br />
          <br />
        </span>
      )
    },
    {
      title: "Where will I access my class notes?",
      content: (
        <span>
          <br />
          Current students can access their class materials on our online
          learning portal here{" "}
          <a target="_blank" href="https://www.hub.csglearn.com">
            here
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
  // bgColor: 'white',
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
    <AdmissionsLayout>
      <SEO title="Admissions FAQs" description="" lang="en" />

      <Container>
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="/admissions">Admissions</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>FAQs</BreadcrumbItem>
        </Breadcrumb>

        <Row>
          <Col sm={12} md={6} lg={6}>
            <Faq data={data} styles={styles} config={config} />
          </Col>
          <Col sm={12} md={6} lg={6}></Col>
        </Row>
      </Container>
    </AdmissionsLayout>
  </>
)

export default Page
