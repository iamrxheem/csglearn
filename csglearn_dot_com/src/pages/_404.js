import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  Breadcrumb,
  BreadcrumbItem,
  Alert,
  Container,
  Row,
  Col,
  Button,
  Card,
  CardFooter,
  CardBody,
  CardTitle,
  CardImg
} from "shards-react"
import ComingSoonPromotion from "../components/comingSoonPromotion"

const NotFoundPage = () => (
  <Layout>
    <Container>
      <SEO
        title="Page Not Found"
        description="CSG Learning Institute is a Jamaica-based private training institution that offers a range of examination preparation programmes and learning certifications, and extends is services to online learning in the Caribbean."
        lang="en"
      />
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Page Not Found</BreadcrumbItem>
      </Breadcrumb>

      <img
        src="https://doyouconvert.com/wp-content/uploads/2018/04/404_Error.jpg"
        style={{ width: "100%" }}
      />

      <ComingSoonPromotion />
    </Container>
  </Layout>
)

export default NotFoundPage
