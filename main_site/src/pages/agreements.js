import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// View Components
import MobileView from "../common/mobileView"
import BrowserView from "../common/browserView"

import {
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Col,
  Button,
  Alert
} from "shards-react"

class Agreements extends React.Component {
  executeOnClick(isExpanded) {
    console.log(isExpanded)
  }

  render() {
    return (
      <Layout hideAlert>
        <SEO title="Agreements" description="" />

        <Container>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Agreements</BreadcrumbItem>
          </Breadcrumb>

          <h3>Agreements</h3>
          <br />

          <Row>
            <Col md={6}>
              <MobileView>
                <div className="text-center">
                  <Row>
                    <Col xs={6}>
                      <Alert theme="primary">
                        <a
                          href="/agreements/payment-plan"
                          style={{ textDecoration: "none" }}
                        >
                          Payment Plan
                        </a>
                      </Alert>
                    </Col>
                    <Col xs={6}>
                      <Alert theme="success">
                        <a
                          href="/agreements/cxc-exam"
                          style={{ textDecoration: "none" }}
                        >
                          CXC Exam
                        </a>
                      </Alert>
                    </Col>
                    <Col xs={6}>
                      <Alert theme="danger">
                        <a
                          href="/agreements/code-of-conduct"
                          style={{ textDecoration: "none" }}
                        >
                          Code of Conduct
                        </a>
                      </Alert>
                    </Col>
                    <Col xs={6}>
                      <Alert theme="warning">
                        <a
                          href="/agreements/FAQs"
                          style={{ textDecoration: "none" }}
                        >
                          FAQs
                        </a>
                      </Alert>
                    </Col>
                  </Row>
                </div>
              </MobileView>
            </Col>
            <Col md={6}></Col>
          </Row>
          <br />

          <Row>
            <Col sm={6}>
              <span>
                Our online Terms of Service and Agreements offers a simple, easy
                and contact-free method of signing key enrollment documents
                electronically. Please select and sign all required documents as
                outlined by your enrollment officer.
              </span>
            </Col>
            <Col sm={6}>
              <BrowserView>
                <div className="text-center">
                  <Row>
                    <Col xs={6}>
                      <Alert theme="primary">
                        <a
                          href="/agreements/payment-plan"
                          style={{ textDecoration: "none" }}
                        >
                          Payment Plan
                        </a>
                      </Alert>
                    </Col>
                    <Col xs={6}>
                      <Alert theme="success">
                        <a
                          href="/agreements/cxc-exam"
                          style={{ textDecoration: "none" }}
                        >
                          CXC Exam
                        </a>
                      </Alert>
                    </Col>
                    <Col xs={6}>
                      <Alert theme="danger">
                        <a
                          href="/agreements/code-of-conduct"
                          style={{ textDecoration: "none" }}
                        >
                          Code of Conduct
                        </a>
                      </Alert>
                    </Col>
                    <Col xs={6}>
                      <Alert theme="warning">
                        <a
                          href="/agreements/FAQs"
                          style={{ textDecoration: "none" }}
                        >
                          FAQs
                        </a>
                      </Alert>
                    </Col>
                  </Row>
                </div>
              </BrowserView>
            </Col>
          </Row>
        </Container>
      </Layout>
    )
  }
}

export default Agreements
