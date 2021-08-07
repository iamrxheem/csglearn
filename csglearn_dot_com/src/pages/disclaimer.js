import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Breadcrumb, BreadcrumbItem, Container } from "shards-react"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Disclaimer"
      description="This note describes our desclaimers."
      lang="en"
    />
    <Container>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Disclaimer</BreadcrumbItem>
      </Breadcrumb>

      <h5>Disclaimer</h5>

      <br />
      <span>
        CSG Learning Institute is permitting the links provided by this official
        home page to other home pages as a service to its client community.
        However, CSG Learning Institute neither will not assume any
        responsibility or liability, either expressed or implied, for any such
        links or the accuracy or completeness or morality of any information or
        service provided by any home page or entity to which this home page is
        linked, or which results from a search query by the user.
      </span>

      <br />
      <br />
      <span>
        The use of the links provided by this home page is on an “as is” basis
        and at the user’s sole risk. The links provided by this homepage are not
        intended to be and are not an endorsement of any service, product,
        company or University position, nor do they necessarily reflect the
        views, philosophy, will, intent, values, or participation of CSG
        Learning Institute or any of its organizational entities.
      </span>
    </Container>
  </Layout>
)

export default IndexPage
