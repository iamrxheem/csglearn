import React from "react"
import { Link } from "gatsby"
import AdmissionsLayout from "../layouts/admissionsLayout"
import SEO from "../components/seo"
import { Breadcrumb, BreadcrumbItem, Container } from "shards-react"

const Admissions = () => (
  <>
    <AdmissionsLayout>
      <SEO title="Admissions" description="" lang="en" />

      <Container>
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>Admissions</BreadcrumbItem>
        </Breadcrumb>

        <br />
        <br />
      </Container>
    </AdmissionsLayout>
  </>
)

export default Admissions
