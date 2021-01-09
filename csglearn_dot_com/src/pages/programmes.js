import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Breadcrumb, BreadcrumbItem } from "shards-react"
import { useForm, useField, splitFormProps } from "react-form"
import { MobileView } from "react-device-detect"
import ProgrammeInfoRequest from "../components/programmeInfoRequest"
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
  Collapse,
  Button,
  Row,
  Col,
  Container,
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter
} from "shards-react"

class Page extends Component {
  render() {
    return (
      <>
        <SEO title="Programmes" description="" lang="en" />
        <Layout>
          <Container>
            <Breadcrumb>
              <BreadcrumbItem>
                <a href="/">Home</a>
              </BreadcrumbItem>
              <BreadcrumbItem active>Programmes</BreadcrumbItem>
            </Breadcrumb>

            <Row>
              <Col sm={12} md={7}>
                <h5>Programmes</h5>
                <br />
                <span>
                  We offer training for a wide range of accredited diplomas and
                  certifications.
                </span>
                <br />
                <br />
              </Col>
              <Col sm={12} md={5}>
                <ProgrammeInfoRequest />
              </Col>
            </Row>

            <br />
            <br />
            <div className="text-center">
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
                    Use your diploma wherever you go and boost your employment
                    prospects
                  </span>
                  <br />
                  <br />
                  <Button
                    target="_blank"
                    href="https://journals.sagepub.com/doi/full/10.1177/1475240911422139"
                  >
                    View Study
                  </Button>
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
                    Learn from the comfort of your home in a timeframe that fits
                    your schedule.
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
                    Trusted by over 25,000 yearly students across the Caribbean
                    for online resources.
                  </span>

                  <br />
                  <br />
                  <Button>Find out why</Button>
                </Col>
              </Row>
            </div>
          </Container>

          <br />
          <br />
        </Layout>
      </>
    )
  }
}

export default Page
