import React from "react"
import { Link } from "gatsby"
import AppPromo from "../promos/appPromo"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  Breadcrumb,
  BreadcrumbItem,
  Alert,
  Container,
  Row,
  Col,
  Button
} from "shards-react"
import { Carousel } from "react-bootstrap"
import ComingSoonPromotion from "../components/comingSoonPromotion"
import { MobileView, BrowserView, isMobile } from "react-device-detect"
import { mobile } from "is-mobile"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      description="CSG Learning Institute is a Jamaica-based private training institution that offers a range of examination preparation programmes and learning certifications, and extends is services to online learning in the Caribbean."
      lang="en"
    />
    <Container>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem active></BreadcrumbItem>
      </Breadcrumb>
    </Container>

    {/* Mobile View  */}
    <div className="d-block d-md-none">
      <Carousel>
        <Carousel.Item>
          <a href="/programmes/csec">
            <img
              style={{ width: "100%", height: "280px" }}
              className="d-block w-100"
              src="https://i.imgur.com/zF53ip0.jpg"
              alt="Third slide"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="/programmes/sixth-form">
            <img
              style={{ width: "100%", height: "280px" }}
              className="d-block w-100"
              src="https://dl.dropbox.com/s/ovzl2mwivfim5n1/WhatsApp%20Image%202021-01-08%20at%202.13.57%20PM.jpeg?dl=0"
              alt="Third slide"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="/diplomas/dele/beginners">
            <img
              style={{ width: "100%", height: "280px" }}
              className="d-block w-100"
              src="https://i.imgur.com/5k31EOB.jpg"
              alt="First slide"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="/diplomas/delf">
            <img
              style={{ width: "100%", height: "280px" }}
              className="d-block w-100"
              src="https://dl.dropbox.com/s/m3k97c8149s3omt/WhatsApp%20Image%202021-01-08%20at%201.59.29%20PM.jpeg?dl=0"
              alt="First slide"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="/diplomas/dele/advanced">
            <img
              style={{ width: "100%", height: "280px" }}
              className="d-block w-100"
              src="https://i.imgur.com/S3FRxtC.jpg"
              alt="Third slide"
            />
          </a>
        </Carousel.Item>
      </Carousel>
    </div>

    {/* Broswer view */}
    <div className="d-none d-md-block">
      <Container fluid>
        <Row>
          <Col sm={12} md={8}>
            <Carousel>
              {/* CSEC online classes */}
              <Carousel.Item>
                <a href="/programmes/csec">
                  <img
                    src="https://dl.dropbox.com/s/wwwiafaz55s6dhs/WhatsApp%20Image%202021-01-08%20at%208.42.44%20PM.jpeg?dl=0"
                    style={{ width: "100%" }}
                  />
                </a>
              </Carousel.Item>

              {/* Diploma in Spanish */}
              <Carousel.Item>
                <a href="/diplomas/dele">
                  <img
                    src="https://dl.dropbox.com/s/am5jl3bbdnsm8hk/WhatsApp%20Image%202021-01-05%20at%2010.33.15%20AM.jpeg?dl=0"
                    style={{ width: "100%" }}
                  />
                </a>
              </Carousel.Item>

              {/* Diploma in French */}
              <Carousel.Item>
                <a href="/diplomas/delf">
                  <img
                    src="https://dl.dropbox.com/s/m3k97c8149s3omt/WhatsApp%20Image%202021-01-08%20at%201.59.29%20PM.jpeg?dl=0"
                    style={{ width: "100%" }}
                  />
                </a>
              </Carousel.Item>
            </Carousel>
          </Col>

          <Col sm={12} md={4}>
            <Alert theme="warning">
              <br />
              <h4 className="text-dark">Learn Spanish Online</h4>

              <span className="text-dark">
                Study for the prestegious Diploma in Spanish (DELE)
                certification online, whether you're a beginner, intermediate or
                advanced.
              </span>

              <br />
              <br />
              <Button
                style={{ textDecoration: "none" }}
                className="w-o-h"
                href="/diplomas/dele/beginners"
                outline
                theme="dark"
              >
                Beginner's Diploma -->
              </Button>
              <br />
              <br />
            </Alert>

            <Alert theme="primary">
              <br />
              <h4>Reseach and Innovation</h4>

              <span>
                We are committed to impacting our nation, region and the globe
                with world leading solutions. Coming soon.
              </span>

              <br />
              <br />
              <Button theme="light" pill outline>
                Coming in September
              </Button>
              <br />
              <br />
            </Alert>
          </Col>
        </Row>
      </Container>
    </div>

    <br />
    <br />
    <Container className="text-center">
      <Row>
        <Col md={4} lg={4} xl={4}>
          <img
            style={{ width: "100px" }}
            className="rounded-circle"
            src="https://www.languagescientific.com/wp-content/uploads/2016/02/translationaccreditationprocess-e1481228309605.jpg"
          />

          <br />
          <br />
          <h5>Accredited</h5>
          <br />

          <span>
            Study for accredited certifications and diplomas including SATs, CXC
            and more!
          </span>

          <br />
          <br />
          <Button href="/programmes">Find a programme</Button>
        </Col>

        <Col md={4}>
          <div className="d-block d-md-none">
            <br />
            <br />
          </div>

          <img
            className="rounded-circle"
            style={{ width: "100px" }}
            src="https://i.imgur.com/F42WuKZ.jpg"
          />

          <br />
          <br />
          <h5>Fully Online</h5>
          <br />

          <span>
            Learn from the comfort of your home in a timeframe that fits your
            schedule.
          </span>

          <br />
          <br />
          <Button>Learn more</Button>
        </Col>
        <Col md={4}>
          <div className="d-block d-md-none">
            <br />
            <br />
          </div>

          <img
            style={{ width: "100px" }}
            className="rounded-circle"
            src="https://www.kindpng.com/picc/m/469-4690660_trusted-by-kitchen-bath-professionals-everywhere-quality-free.png"
          />
          <br />
          <br />
          <h5>Trusted</h5>
          <br />

          <span>
            Trusted by over 25,000 yearly students across the Caribbean for
            online resources.
          </span>

          <br />
          <br />
          <Button>Find out why</Button>
        </Col>
      </Row>
    </Container>

    <br />
    <br />
    <ComingSoonPromotion />

    <AppPromo />
    <br />
    <br />
  </Layout>
)

export default IndexPage
