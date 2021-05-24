import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import CSECLayout from "../../../layouts/csecLayout"
import CsecMiniMenu from "../../../components/miniMenus/csecMiniMenu"

import SEO from "../../../components/seo"
import { Carousel, Table, OverlayTrigger, Popover } from "react-bootstrap"

import CsecEnrollment from "../../../components/enrollments/csecEnrollment"

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

        <CsecEnrollment
          formUrl="https://forms.zohopublic.com/csglearninginstitute/form/CSECOnlineApplicationForm/formperma/bbk1vsbzM5VTw_TtMO64z8tSUXizqwvmapMtc7umL6E"
          action="https://forms.zohopublic.com/csglearninginstitute/form/CSECOnlineApplicationForm/formperma/bbk1vsbzM5VTw_TtMO64z8tSUXizqwvmapMtc7umL6E/htmlRecords/submit"
          title="CSEC Online Application"
          description="Please use this form to apply for our online CSEC online classes. Note, this is only to be completed by students beginning classes in September, 2021."
        />
      </Container>
    </CSECLayout>
  </>
)

export default Page
