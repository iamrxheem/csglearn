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
import LazyLoad from "react-lazyload"

import AwesomeSlider from "react-awesome-slider"
import "react-awesome-slider/dist/styles.css"

// Images
import MaleStudentImageCropped from "../images/male-cropped-out.png"

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

    <br />
    <AppPromo />

    <ComingSoonPromotion />

    <Container fluid className="mt-4">
      <Row>
        <Col md={6}>
          <Alert theme="light">
            <Row>
              <Col md={6}>
                <LazyLoad>
                  <img
                    style={{ width: "100%" }}
                    src={MaleStudentImageCropped}
                  />
                </LazyLoad>
              </Col>
              <Col md={6}>
                <br />
                <h3>Accredited Diploma in French</h3>

                <br />
                <span>
                  Start learning French from scratch for the accredited Diplomas
                  in French, or the Diploma in French Master's Certification for
                  fluent speakers.
                </span>

                <br />
                <br />

                <Button
                  style={{ textDecoration: "none" }}
                  href="/diplomas/delf/beginners"
                  outline
                  theme="secondary"
                >
                  Beginner's Diploma
                </Button>

                <br />
                <br />
                <span>
                  Learn about the{" "}
                  <a className="text-primary" href="/diplomas/dalf/advanced">
                    master's certification
                  </a>
                  .
                </span>
                <br />
                <br />
              </Col>
            </Row>
          </Alert>
        </Col>

        <Col md={6}>
          <HomeCarousel />
        </Col>
      </Row>
    </Container>

    <br />
  </Layout>
)

export default IndexPage
