import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import CSECLayout from "../../../layouts/csecLayout"
import CsecMiniMenu from "../../../components/miniMenus/csecMiniMenu"

import SEO from "../../../components/seo"
import { Carousel, Table, OverlayTrigger, Popover } from "react-bootstrap"

// Shards-React Components
import {
  Row,
  Button,
  Col,
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormInput,
  FormGroup,
  FormSelect,
  FormRadio,
  FormCheckbox
} from "shards-react"

const Page = props => (
  <>
    <SEO
      title="CSEC Online Classes Application Form"
      description="Applications are now open! Enroll in our online CXC CSEC online classes, starting Semptember 13, 2021. SUbjects include English A, Mathematics, Biology, Chemistry, Physics and more!"
    />

    <CSECLayout enroll="/programmes/csec/summer/enroll">
      <Container>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/programmes">Programmes</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/programmes/csec">CSEC</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Enroll</BreadcrumbItem>
        </Breadcrumb>

        <h3>CSEC Online Application</h3>
        <br />
        <span>Applications are not yet open.</span>
      </Container>
    </CSECLayout>
  </>
)

export default Page
