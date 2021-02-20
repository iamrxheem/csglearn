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
  Button
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

    <Container>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem active></BreadcrumbItem>
      </Breadcrumb>
    </Container>

    {isMobile ? <HomeCarousel /> : null}

    <Container fluid>
      <Row>
        <Col sm={12} md={8} lg={8}>
          {isMobile ? null : <HomeCarousel />}

          <br />
        </Col>
        <Col sm={12} md={4} lg={4}>
          <HomeRightPromoComponent />
        </Col>
      </Row>
    </Container>

    <Container>
      <br />
      <br />
      <Row className="text-center">
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
