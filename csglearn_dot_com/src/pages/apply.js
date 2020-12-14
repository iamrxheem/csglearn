import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Breadcrumb, BreadcrumbItem } from "shards-react"
import { useForm, useField, splitFormProps } from "react-form"

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
  Badge
} from "shards-react"

class Page extends Component {
  render() {
    return (
      <>
        <SEO title="Apply" description="" lang="en" />

        <Layout>
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="/">Home</a>
            </BreadcrumbItem>
            <BreadcrumbItem active>Apply to CSG</BreadcrumbItem>
          </Breadcrumb>

          <Row>
            <Col sm={12} md={6} lg={6}>
              ...
            </Col>
            <Col sm={12} md={6} lg={6}>
              ...
            </Col>
          </Row>
        </Layout>

        <br />
      </>
    )
  }
}

export default Page
