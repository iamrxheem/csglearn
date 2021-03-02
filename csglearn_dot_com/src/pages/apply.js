import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  Breadcrumb,
  BreadcrumbItem,
  Nav,
  NavLink,
  NavItem,
  Form
} from "shards-react"
import { Row, Col, Container } from "shards-react"

import YoungManSmilingImg from "../images/bbmsml.jpg"

class Page extends Component {
  constructor(props) {
    super(props)

    this.state = {
      programme: "",
      delf: false,
      term: "",
      faqLink: "",
      tuitionLink: ""
    }
  }

  render() {
    return (
      <>
        <SEO
          title={`Apply ${this.state.programme}`}
          description=""
          lang="en_US"
        />
        <Layout>
          <div className="d-block d-md-none">
            <img src={YoungManSmilingImg} style={{ width: "100%" }} />
          </div>
          <Nav
            fill
            style={{
              paddingTop: "15px",
              paddingBottom: "15px",
              backgroundColor: "#d9534f"
            }}
          >
            <NavItem>
              <Link
                className="nav-link"
                style={{ textDecoration: "none", color: "white" }}
                to={this.state.tuitionLink}
              >
                TUITION & FEES
              </Link>
            </NavItem>
            <NavItem style={{ textDecoration: "none" }} href="/inquire">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to={this.state.faqLink}
                className="nav-link"
              >
                READ FAQs
              </Link>
            </NavItem>
          </Nav>

          <Container>
            <Breadcrumb>
              <BreadcrumbItem>
                <a href="/">Home</a>
              </BreadcrumbItem>
              <BreadcrumbItem active>
                Apply {this.state.programme}
              </BreadcrumbItem>
            </Breadcrumb>

            <br />
            <Form>
              <Row>
                <Col sm={12} md={6} lg={6}></Col>
                <Col sm={12} md={6} lg={6}></Col>
              </Row>
            </Form>
          </Container>
        </Layout>
      </>
    )
  }
}

export default Page
