import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Faq from "react-faq-component"

const data = {
  title: "",
  rows: [
    {
      title: "When does registration opens?",
      content: (
        <span>
          <br />
          Registration for our online SAT classes open in mid-February. Students
          will be able to enroll <a href="/enroll">here</a>.
          <br />
          <br />
        </span>
      )
    },
    {
      title: "How long are the classes?",
      content: (
        <span>
          <br />
          There are some changes coming to the SAT for 2021. Once those have
          been finalized, we'll post our class schedule and duration.
          <br />
          <br />
        </span>
      )
    },
    {
      title: "How much do the classes cost?",
      content: (
        <span>
          <br />
          Please review our <a href="/tuition">fees and tuition</a>.
          <br />
          <br />
        </span>
      )
    },
    {
      title: "Where will I sit the exam?",
      content: (
        <span>
          <br />
          You will sit the exam at a registered examination center near you.
          Please review a complete list of exam centers{" "}
          <a href="/exam-centers">here</a>.
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

const FAQs = () => (
  <>
    <Layout>
      <SEO
        title="Frequently Asked Questions"
        description="View a list of frequently asked questions for CSG Learning Institute online SAT classes. Enroll online today! Call or WhatsApp (876) 707-3443."
      />

      <img
        className="is-hidden-desktop"
        style={{ width: "100%" }}
        src="https://i.imgur.com/w626x26.jpg"
      />
      <br className="is-hidden-mobile" />

      <div class="container is-fluid">
        <nav className="breadcrumb" ariaLabel="breadcrumbs">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="">FAQs</a>
            </li>
          </ul>
        </nav>

        <h1 className="title is-4">Frequently Asked Questions</h1>

        <p>
          Here you'll find a complete list of our frequently asked questions.
          For regular updates, follow us on{" "}
          <a target="_blank" href="https://www.instagram.com/csglearn">
            Instagram
          </a>
          .
        </p>

        <br />
        <Faq data={data} styles={styles} config={config} />
      </div>
    </Layout>
  </>
)

export default FAQs
