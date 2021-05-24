import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import CSECLayout from "../../../../layouts/csecLayout"
import CsecMiniMenu from "../../../../components/miniMenus/csecMiniMenu"
import SEO from "../../../../components/seo"
import { Carousel, Table, OverlayTrigger, Popover } from "react-bootstrap"

import CsecEnrollment from "../../../../components/enrollments/csecEnrollment"

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
      title="CSEC Summer Programme Application Form"
      description="Applications are now open! Enroll in our online CXC CSEC Summer Programme, starting June 14. SUbjects include English A, Mathematics, Biology, Chemistry, Physics and more!"
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
          formUrl="https://zfrmz.com/GoC3hKZXdVJacxIyAflE"
          title="Summer Programme Application Form"
          description="Please use this form to apply for our online CSEC Summer Programme."
          action="https://forms.zohopublic.com/csglearninginstitute/form/CSECSummerProgrammeApplicationForm/formperma/2JyxgytsQew2u7HO6fISVzexEJksgpCTyHsS7Gz2KMs/htmlRecords/submit"
        />
      </Container>
    </CSECLayout>
  </>
)

export default Page
