import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Breadcrumb, BreadcrumbItem } from "shards-react"
import { Alert, Button, Row, Col, Container } from "shards-react"
import ComingSoon from "react-coming-soon"

const IndexPage = () => (
  <Layout>
    {/* Mobile View */}
    <div className="d-block d-md-none">
      <img
        style={{ width: "100%", height: "100%" }}
        src="https://i.imgur.com/w626x26.jpg"
      />
    </div>

    <Container>
      <SEO
        title="Sixth Form Programme"
        description="CSG Learning Institute is a private training institution that offers a range of examination preparation programmes."
        lang="en"
      />

      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="/programmes/">Programmes</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Sixth Form</BreadcrumbItem>
      </Breadcrumb>

      <h4>Sixth Form Programme</h4>

      <br />
      <span>
        Our mission is to revolutionise education and provide world-class
        training to anyone, anywhere.
      </span>

      <br />
      <br />
      <span>
        Our Sixth Form Programme is launching in September, 2021. While we
        smooth out the edges, follow us on{" "}
        <a target="_blank" href="https://www.instagram.com/csglearn">
          Instagram
        </a>{" "}
        for more updates.
      </span>
    </Container>
  </Layout>
)

export default IndexPage
