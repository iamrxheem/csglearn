import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// View Components
import MobileView from "../common/mobileView"
import BrowserView from "../common/browserView"

import {
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Col,
  Button
} from "shards-react"

const applyLink =
  "https://forms.zohopublic.com/csglearninginstitute/form/MentalHealthGroupConsultation/formperma/EOz0u9BjEv14ABpJryoQ8FBP9KL8QhMoGlNEZmFkhbs"

const ContactPage = () => (
  <Layout hideAlert hideApplyButton>
    <SEO
      title="Mental Health Conaultations"
      description="Free mental health consultation for students sitting the CSEC or CAPE June/ July 2021 examinations."
    />

    <MobileView>
      <img
        src="https://images.squarespace-cdn.com/content/v1/5452d441e4b0c188b51fef1a/1608653779312-P3IM7SVB5IRPRTHXYKZ7/ke17ZwdGBToddI8pDm48kIccgNGGgfpKs08cGVv-XlkUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKciLG7cBbgefliGIcmT01dUlME4Lf22goPymY_zF4uEzkSz2X7kDY7psAD6hfVwgY8/mental-health-wellness-during-covid-19.jpg"
        style={{ width: "100%" }}
      />
    </MobileView>

    <br />
    <Container>
      <Row>
        <Col md={6}>
          <h3 className="">Your mental health matters</h3>

          <br />
          <span>
            According to{" "}
            <a target="_blank" href="">
              Ministry of Health & Wellness
            </a>
            , mental health includes our emotional, psychological, and social
            well-being. It affects how we think, feel, and act. It also helps
            determine how we handle stress, relate to others, and make choices.
          </span>

          <br />
          <br />
          <span>
            Mental health is important at every stage of life, from childhood
            and adolescence through adulthood.
          </span>

          <br />
          <br />
          <br />
          <h4 className="">Free Group Consultation</h4>

          <br />
          <span>
            As a result of Covid-19 and the upcoming CSEC and CAPE examinations,
            and at the request of a large number of students, we have made the
            decision to offer free group mental health consultation for students
            in need.
          </span>

          <br />
          <br />
          <span>
            Please apply using the link below and select the date most
            convenient to you.
          </span>

          <br />
          <br />
          <Button href={applyLink} target="_blank" style={{ width: "100%" }}>
            Sign up
          </Button>

          <br />
          <br />
          <span>
            Note, group sessions are held for two hours for a{" "}
            <strong className="text-danger">MAXIMUM</strong> of 10 students.
          </span>
        </Col>
        <Col md={6}></Col>
      </Row>
    </Container>
  </Layout>
)

export default ContactPage
