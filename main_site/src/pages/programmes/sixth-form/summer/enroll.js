import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import SixthFormLayout from "../../../../layouts/sixthFormLayout"

import SEO from "../../../../components/seo"
import { Carousel, Table, OverlayTrigger, Popover } from "react-bootstrap"

import SixthFormMiniMenu from "../../../../components/miniMenus/sixthFormMiniMenu"

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
import CapeEnrollment from "../../../../components/enrollments/capeEnrollment"

const Page = props => (
  <>
    <SEO
      title="CXC Sixth Form Summer Application Form"
      description="Applications are now open! Enroll in our online CXC CAPE Sixth Form Summer Programme online classes, starting Semptember 13, 2021. SUbjects include Communication Studies, Caribbean Studies, Biology, Chemistry, Physics and more!"
    />

    <SixthFormLayout enroll="/programmes/csec/summer/enroll">
      <Container>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/programmes">Programmes</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/programmes/sixth-form">Sixth Form</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Enroll</BreadcrumbItem>
        </Breadcrumb>
        <h4>Sixth Form Summer Programme Online Application</h4>
        <br />

        <CapeEnrollment
          formUrl="https://zfrmz.com/qdGhigrwkYH0NX8uCySj"
          action="https://forms.zohopublic.com/csglearninginstitute/form/SixthFormProgrammeApplicationForm/formperma/rluKk4PVLHpblW0raJvzXjgZq9Rq5An4Q49uzKZTboE/htmlRecords/submit"
        />
      </Container>
    </SixthFormLayout>
  </>
)

export default Page
