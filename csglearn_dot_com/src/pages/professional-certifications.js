import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  Alert,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Row,
  Col
} from "shards-react"
import { MobileView } from "react-device-detect"
import { Tabs, Tab, TabContainer, Carousel } from "react-bootstrap"

const IndexPage = () => (
  <Layout>
    <SEO
      title="CSG Professional Certifications - Skills To Land Your Promotion"
      description="Learn business, creative, and technology skills to achieve your personal and professional goals. Join today to get access to hundreds of courses."
      lang="en"
    />
    <Breadcrumb>
      <BreadcrumbItem>
        <a href="/">Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem active>Professional Certifications</BreadcrumbItem>
    </Breadcrumb>

    <Row>
      <Col sm={12} md={6} lg={6}>
        <MobileView>
          <img
            src="https://i2.wp.com/shfoodfactory.com/wp-content/uploads/2019/01/icon-certified-1.png?fit=800%2C337"
            style={{ width: "100%" }}
          />
        </MobileView>
        <br />
        <h5>Professional Certifications</h5>

        <br />
        <span>
          CSG Learning Institute is proud to offer Professional Certifications
          to students who complete courses with us.
        </span>

        <br />
        <br />
        <span>
          Professional Certificates are career credentials that aid candidates
          in securing a better job, a promotion, or a college application
        </span>

        <br />
        <br />

        <Carousel controls={false} indicators={false}>
          <Carousel.Item>
            <Alert theme="success">
              <Row>
                <Col xs={3}>
                  <br />
                  <img
                    src="https://www.edx.org/images/certificates/ico-rocket.png"
                    style={{ width: "75%" }}
                  />
                </Col>
                <Col xs={9}>
                  <h6>Build skills and your career</h6>
                  Impress your employer with a verified professional certificate
                  and diploma that documents your learning.
                </Col>
              </Row>
            </Alert>
          </Carousel.Item>
          <Carousel.Item>
            <Alert theme="info">
              <Row>
                <Col xs={8}>
                  <h6>Challenge yourself</h6>
                  <span>
                    Sometimes we all need that extra push. Working towards a
                    certificate keeps you motivated.
                  </span>
                </Col>
                <Col xs={4}>
                  <br />
                  <img
                    src="https://www.edx.org/images/certificates/ico-road.png"
                    style={{ width: "75%" }}
                  />
                </Col>
              </Row>
            </Alert>
          </Carousel.Item>
          <Carousel.Item>
            <Alert theme="primary">
              <Row>
                <Col xs={4}>
                  <br />
                  <img
                    src="https://www.edx.org/images/certificates/ico-trophy.png"
                    style={{ width: "75%" }}
                  />
                </Col>
                <Col xs={8}>
                  <h6>Share it with the world</h6>
                  Share your verified certificate on your resume or your
                  LinkedIn profile as an accomplishment.
                </Col>
              </Row>
            </Alert>
          </Carousel.Item>
        </Carousel>

        <br />
        <br />
      </Col>
      <Col sm={12} md={6} lg={6}>
        <Tabs defaultActiveKey="technology" id="uncontrolled-tab-example">
          <Tab eventKey="technology" title="Technology">
            <TabContainer>
              <br />
              <h5>Certifications in Technology</h5>
            </TabContainer>
          </Tab>
          <Tab eventKey="skills" title="Skills">
            <TabContainer>
              <br />
              <h5>Learn a new skill</h5>
            </TabContainer>
          </Tab>
          <Tab eventKey="contact" title="Contact">
            <TabContainer>
              <img
                src="https://i2.wp.com/shfoodfactory.com/wp-content/uploads/2019/01/icon-certified-1.png?fit=800%2C337"
                style={{ width: "100%" }}
              />
            </TabContainer>
          </Tab>
        </Tabs>
      </Col>
    </Row>
  </Layout>
)

export default IndexPage
