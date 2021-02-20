import React from "react"
import { Link } from "gatsby"

import SEO from "../../../components/seo"
import { Breadcrumb, BreadcrumbItem } from "shards-react"
import { Alert, Button, Row, Col, Container } from "shards-react"
import CSECLayout from "../../../layouts/csecLayout"
import Faq from "react-faq-component"

const data = {
  title: "",
  rows: [
    {
      title: "",
      content: (
        <span>
          <br />

          <br />
          <br />
        </span>
      )
    },
    {
      title: "",
      content: (
        <span>
          <br />

          <br />
          <br />
        </span>
      )
    },
    {
      title: "",
      content: (
        <span>
          <br />

          <br />
          <br />
        </span>
      )
    },
    {
      title: "",
      content: (
        <span>
          <br />

          <br />
          <br />
        </span>
      )
    },
    {
      title: "",
      content: (
        <span>
          <br />

          <br />
          <br />
        </span>
      )
    },
    {
      title: "",
      content: (
        <span>
          <br />

          <br />
          <br />
        </span>
      )
    },
    {
      title: "",
      content: (
        <span>
          <br />

          <br />
          <br />
        </span>
      )
    },
    {
      title: "",
      content: (
        <span>
          <br />

          <br />
          <br />
        </span>
      )
    },
    {
      title: "",
      content: (
        <span>
          <br />

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
  <CSECLayout>
    <Container>
      <SEO
        title="Frequently Asked Questions | CSEC Classes"
        description=""
        lang="en"
      />
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="/programmes/">Programmes</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="/programmes/csec">CSEC</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>FAQs</BreadcrumbItem>
      </Breadcrumb>

      <h5>Frequently Asked Questions</h5>

      <br />
      <span>Find out more about our online CSEC classes and fees.</span>

      <br />
      <br />
      <Faq data={data} styles={styles} config={config} />
    </Container>
  </CSECLayout>
)

export default Page
