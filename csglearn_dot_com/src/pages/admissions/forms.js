import React from "react"
import { Link } from "gatsby"
import AdmissionsLayout from "../../layouts/admissionsLayout"
import SEO from "../../components/seo"
import { Breadcrumb, BreadcrumbItem, Container } from "shards-react"

const Page = () => (
  <>
    <AdmissionsLayout>
      <SEO title="Forms and Documents | Admissions" description="" lang="en" />

      <Container>
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="/admissions">Admissions</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>Forms and Documents</BreadcrumbItem>
        </Breadcrumb>
      </Container>
    </AdmissionsLayout>
  </>
)

export default Page
