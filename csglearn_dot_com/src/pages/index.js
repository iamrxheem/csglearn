import React from "react"
import { Link } from "gatsby"
import AppPromo from "../promos/appPromo"
import HomeRightPromoComponent from "../promos/homeRightPromoComponent"
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
import HomeCarousel from "../home/homeCarousel"
import ComingSoonPromotion from "../components/comingSoonPromotion"
import { MobileView, BrowserView, isMobile } from "react-device-detect"
import { Helmet } from "react-helmet"

const IndexPage = () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>The CSG Learning Institute, Jamaica</title>
      <link rel="canonical" href="http://csglearn.com/" />
      <meta
        name="description"
        content="The CSG Learning Institute is the premier provider of online education and training for accredited certifications, diplomas and education services"
      />
      <meta
        name="keywords"
        content="cxc, csec, cxcguide, csglearn, Raheem McDonald, CSG Learning Institute, CSG Learning, Kerwin Springer, Kerwin Springer Youtube, jamaica star, raheem mcdonald uwi student, DELE, diplomas de espanol, jamaica, education, online, online learning, accredited university, accredited, exam, CAPE, cape exam, csec past papers, cxc past peprs, paperbin, paperbin xyz, cxc textbooks, the student hub"
      />
    </Helmet>

    <AppPromo />

    <Container fluid className="mt-5">
      <Row>
        <Col md={6}>
          <Alert theme="primary">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </Alert>
        </Col>

        <Col md={6}>
          <Alert theme="warning">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </Alert>
        </Col>
      </Row>
    </Container>

    <br />
  </Layout>
)

export default IndexPage
