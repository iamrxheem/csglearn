import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { isMobile, MobileView } from "react-device-detect"
import { Breadcrumb, BreadcrumbItem, Container } from "shards-react"

import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button,
  Row,
  Col
} from "shards-react"

const Page = () => (
  <Layout>
    <Container>
      <SEO
        title="Contact"
        description="Developing · Chat live with sales · Contact sales: 1-876-707-3443 · Looking for help & support? Click here."
        lang="en"
      />

      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
      </Breadcrumb>
      <br />

      <Row>
        <Col sm={6} md={6} lg={6}>
          <img
            style={{ height: "100px" }}
            src="https://cdn2.iconfinder.com/data/icons/customer-support-27/90/support_4_copy-512.png"
          />
          <br />
          <br />
          <h6>Customer Service</h6>

          <span>
            We're looking forward to hearing from you! Call, email, DM or tweet
            at us.
          </span>

          <br />
          <br />

          <Row>
            <Col xs={12} sm={6}>
              <span>
                <i
                  className="fas fa-phone-alt mr-3"
                  style={{ color: "green" }}
                ></i>
                (876) 707-3443
              </span>

              <br />
              <br />
              <span>
                <i
                  style={{ color: "#C0C0C0" }}
                  className="fas fa-envelope mr-3"
                ></i>
                <a href="mailto:info@csglearn.com">info@csglearn.com</a>
              </span>

              <br />
              <br />
              <span>
                <i
                  style={{ color: "#25D366" }}
                  className="fab fa-whatsapp mr-3"
                ></i>
                <a
                  href="https://api.whatsapp.com/send/?phone=18767073443&text&app_absent=0"
                  target="_blank"
                >
                  Start chatting
                </a>
              </span>
            </Col>

            <Col xs={12} sm={6}>
              <MobileView>
                <br />
              </MobileView>
              <span>
                <i
                  style={{ color: "purple" }}
                  className="fab fa-instagram mr-3"
                ></i>
                <a href="https://www.instagram.com/csglearn/" target="_blank">
                  @csglearn
                </a>
              </span>

              <br />
              <br />
              <span>
                <i
                  style={{ color: "#1DA1F2" }}
                  className="fab fa-twitter mr-3"
                ></i>
                <a href="https://www.twitter.com/csglearn/" target="_blank">
                  @csglearn
                </a>
              </span>
            </Col>
          </Row>
          <br />
          <br />
        </Col>
        <Col sm={6} md={6} lg={6}>
          <Card>
            <CardBody>
              <CardTitle>Have questions?</CardTitle>
              <span>
                Visit our Help Centre and get the answers to the most frequently
                asked questions.
              </span>

              <br />
              <br />
              <Button
                target="_blank"
                href="https://www.help.csglearn.com/docs/"
              >
                Check it out &rarr;
              </Button>
            </CardBody>
          </Card>

          <br />
          <img
            style={{ height: "100px" }}
            src="https://icon-library.com/images/corporate-icon-png/corporate-icon-png-8.jpg"
          />
          <br />
          <br />

          <h6>Corporate</h6>

          <br />
          <span>
            CSG Learning welcomes all partnerships with local and international
            institutions and organisations.
          </span>

          <br />
          <br />

          <span>
            <i
              style={{ color: "#C0C0C0" }}
              className="fas fa-envelope mr-3"
            ></i>
            <a href="mailto:corporate@csglearn.com">raheem@csglearn.com</a>
          </span>

          <hr />
          <h6>Legal</h6>

          <br />
          <span>
            <i
              style={{ color: "#C0C0C0" }}
              className="fas fa-envelope mr-3"
            ></i>
            <a href="mailto:info@csglearn.com">legal@csglearn.com</a>
          </span>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default Page
