import React from "react"
import { Link } from "gatsby"
import DELELayout from "../../../layouts/deleLayout"
import SEO from "../../../components/seo"
import { Breadcrumb, BreadcrumbItem, Container, Row, Col } from "shards-react"
import Faq from "react-faq-component"
import { MobileView } from "react-device-detect"

const data = {
  title: "",
  rows: [
    {
      title: "Who organizes the DELE exams?",
      content: (
        <span>
          <br />
          The DELE exams are organized by the{" "}
          <a
            target="_blank"
            href="https://examenes.cervantes.es/es/dele/que-es"
          >
            Instituto Cervantes
          </a>{" "}
          and the Spanish Government, through the Ministry of Education, Culture
          and Sports.
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
      title: "Who can take the DELE exam?",
      content: (
        <span>
          <br />
          Since 2015, any person who wishes to register for a DELE exam is
          eligible to do so, regardless of their nationality or country of
          origin. For the beginners’ course, no prior experience or knowledge is
          required – students start learning Spanish from scratch!
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
          The DELE is a face-to-face exam. However, due to the current COVID-19
          pandemic, some or all of the exams may be conducted online. The exam
          is corrected by the Universidad de Salamanca in Spain.
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
          There are also two exams specifically for young learners between 11
          and 17 years old. <a href="/diplomas/dele/escolar">Learn more</a>.
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
          three (3) months after taking the exam or can choose to have it sent
          by mail to the address they provided at registration.
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
    <DELELayout>
      <SEO title="DELE Exam FAQs" description="" lang="en" />

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
          <BreadcrumbItem active>FAQs</BreadcrumbItem>
        </Breadcrumb>

        <h5>Frequently Asked Questions</h5>

        <br />
        <span>
          Find out more about the prestigious DELE diploma and examination, and
          career opportunities.
        </span>

        <br />
        <br />
        <Faq data={data} styles={styles} config={config} />
      </Container>
    </DELELayout>
  </>
)

export default Page
