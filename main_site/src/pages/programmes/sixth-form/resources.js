import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import SixthFormLayout from "../../../layouts/sixthFormLayout"

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

import SixthFormMiniMenu from "../../../components/miniMenus/sixthFormMiniMenu"

const Page = props => (
  <>
    <SEO title="Sixth Form Resources" description="" />

    <SixthFormLayout enroll="/programmes/csec/enroll">
      <Container>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/programmes/sixth-form">Sixth Form</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Resources</BreadcrumbItem>
        </Breadcrumb>

        <Row>
          <Col sm={6}>
            <h4>Sixth Form Resources</h4>

            <br />
            <SixthFormMiniMenu />
          </Col>
          <Col sm={6}>...</Col>
        </Row>
      </Container>
    </SixthFormLayout>
  </>
)

export default Page