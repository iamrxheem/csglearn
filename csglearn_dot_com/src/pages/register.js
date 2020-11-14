import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Breadcrumb, BreadcrumbItem } from "shards-react"
import { useForm, useField, splitFormProps } from "react-form"

const Page = () => (
  <Layout>
    <SEO title="Register" description="" lang="en" />
    <Breadcrumb>
      <BreadcrumbItem>
        <a href="/">Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem active>Register</BreadcrumbItem>
    </Breadcrumb>

    <h5>Register</h5>
    <br />
  </Layout>
)

export default Page
