import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import MobileView from "../../../common/mobileView"
import SixthFormLayout from "../../../layouts/sixthFormLayout"

import SEO from "../../../components/seo"
import { Carousel, Table, OverlayTrigger, Popover } from "react-bootstrap"

import SixthFormMiniMenu from "../../../components/miniMenus/sixthFormMiniMenu"

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
import CapeEnrollment from "../../../components/enrollments/capeEnrollment"

const Page = props => (
  <>
    <SEO
      title="CXC Sixth Form Application Form"
      description="Applications are now open! Enroll in our online CXC CAPE Sixth Form online classes, starting Semptember 13, 2021. SUbjects include Communication Studies, Caribbean Studies, Biology, Chemistry, Physics and more!"
    />

    <SixthFormLayout enroll="/programmes/sixth-form/enroll">
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

        <h4>Sixth Form Programme Online Application</h4>

        <MobileView>
          <br />
          <SixthFormMiniMenu />
          <br />
        </MobileView>

        <CapeEnrollment
          formUrl="https://forms.zohopublic.com/csglearninginstitute/form/SixthFormApplicationForm/formperma/KzS0owBdPzi9_ukGpWYg6qshaeDOa3xT7rMkQjf3q24"
          action="https://forms.zohopublic.com/csglearninginstitute/form/SixthFormApplicationForm/formperma/KzS0owBdPzi9_ukGpWYg6qshaeDOa3xT7rMkQjf3q24/htmlRecords/submit"
        />
      </Container>
    </SixthFormLayout>
  </>
)

export default Page
