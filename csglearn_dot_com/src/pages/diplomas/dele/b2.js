import React from "react"
import { Link } from "gatsby"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import { Breadcrumb, BreadcrumbItem, Row, Col } from "shards-react"
import { useForm, useField, splitFormProps } from "react-form"
import { MobileView } from "react-device-detect"

const Page = () => (
  <Layout>
    <SEO title="Diploma in Spanish (DELE) B2" description="" lang="en" />
    <Breadcrumb>
      <BreadcrumbItem>
        <a href="/">Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a href="/diplomas/">Diplomas</a>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a href="/diplomas/dele">DELE</a>
      </BreadcrumbItem>
      <BreadcrumbItem active>B2</BreadcrumbItem>
    </Breadcrumb>

    <Row>
      <Col sm={6} md={6} lg={6}>
        <h5>Diploma in Spanish B2</h5>

        <MobileView>
          <img
            src="https://cursosdeespanol.unizar.es/sites/cursosdeespanol.unizar.es/files/users/elecur/logo_dele_cmyk.jpg"
            style={{ width: "100%" }}
          />
        </MobileView>
        <br />
      </Col>

      <Col sm={6} md={6} lg={6}></Col>
    </Row>
  </Layout>
)

export default Page
