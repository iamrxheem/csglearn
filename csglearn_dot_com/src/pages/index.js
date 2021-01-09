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
import { isMobile, MobileView, BrowserView } from "react-device-detect"

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

    <MobileView>
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
    </MobileView>

    <BrowserView>
      <a
        style={{ margin: "0 auto" }}
        className="text-center"
        href="/diplomas/dele"
      >
        <img
          src="https://dl.dropbox.com/s/ddh0rfj7swit71a/WhatsApp%20Image%202021-01-05%20at%2011.15.59%20AM.jpeg?dl=0"
          style={{
            height: "70%",
            marginRight: "auto",
            marginLeft: "auto",
            display: "block",
            width: "100%"
          }}
        />
      </a>

      <Carousel>
        <Carousel.Item>
          <a href="/" style={{ height: "70%" }}></a>
        </Carousel.Item>
      </Carousel>
    </BrowserView>

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
          <MobileView>
            <br />
            <br />
          </MobileView>

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
          <MobileView>
            <br />
            <br />
          </MobileView>

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
