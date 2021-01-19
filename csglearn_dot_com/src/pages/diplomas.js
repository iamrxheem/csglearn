import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
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
  Breadcrumb,
  Container,
  BreadcrumbItem,
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  CardSubtitle
} from "shards-react"

const Page = () => (
  <Layout>
    <SEO
      title="Accredited Degrees & Diplomas"
      description="Enroll in overseas accredited and recognised diploma and give your career a head start. Visit CSG Learning Institute today to find out how."
      lang="en"
    />

    <div className="d-block d-md-none">
      <img
        style={{ width: "100%" }}
        className="d-block w-100"
        src="https://d2eehagpk5cl65.cloudfront.net/img/q60/uploads/assets/mc/2017_09/StudentofColor.jpg"
        alt="Third slide"
      />
      <br />
    </div>

    <Container>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Diplomas</BreadcrumbItem>
      </Breadcrumb>

      <h5>Accredited Degrees & Diplomas</h5>

      <br />
    </Container>
  </Layout>
)

export default Page
