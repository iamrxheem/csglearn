import React from "react"
import { Link } from "gatsby"

import SEO from "../../../components/seo"
import { Breadcrumb, BreadcrumbItem } from "shards-react"
import { Alert, Button, Row, Col, Container } from "shards-react"
import CSECLayout from "../../../layouts/csecLayout"
import JotformEmbed from "react-jotform-embed"
import GeneralProgrammeApplicationComponent from "../../../components/generalProgrammeApplicationComponent"

const Page = () => (
  <CSECLayout>
    <Container>
      <SEO
        title="Enroll in Online CSEC Classes"
        description="Enroll in online CSEC classes with CSEC classes and exam registration with CSG Learning Institute in Jamaica for September 2021."
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
        <BreadcrumbItem active>Enroll</BreadcrumbItem>
      </Breadcrumb>

      <h3>Enroll in Online CSEC Classes</h3>

      <br />
      <span>
        Our 3-months crash course begins on Monday, March 8, 2021. Please use
        this form to enroll. If you wish to inquire only , please
        <a
          target="_blank"
          href="https://api.whatsapp.com/send/?phone=18767073443&text&app_absent=0"
        >
          {" "}
          contact us on WhatsApp
        </a>
      </span>

      <br />
      <br />

      {/*
      <GeneralProgrammeApplicationComponent
        firstName=""
        lastName=""
        email=""
        note=""
        address=""
        csec
        programme="CSEC Online Classes"
        term="September 18, 2021"
        hasFee
        term="Regular"
        costOfMathAndEnglish={5800}
        costOfGeneralSubjects={4300}
        costOfScienceSubjects={5300}
        csecCourseMaterialFee={4500}
        administrationFee={1500}
      />

      */}

      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSf4Z5Z96007V4SoRc4yhAxjQPt3AoFN5ywRFvFuKVTLHnxjGA/viewform?embedded=true"
        width="640"
        height="2380"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
      >
        Loading…
      </iframe>
    </Container>
  </CSECLayout>
)

export default Page
