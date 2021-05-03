import * as React from "react"
import SEO from "../../../components/seo"
import { Link } from "gatsby"

// Layout
import DiplomaLayout from "../../../layouts/diplomaLayout"

// View Components
import MobileView from "../../../common/mobileView"
import BrowserView from "../../../common/browserView"

// Shards-React Components
import {
  Row,
  Col,
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Button
} from "shards-react"
import { Tabs, Tab } from "react-bootstrap"
import ProgrammeSummary from "../../../common/programmeSummary"

const Page = () => (
  <DiplomaLayout
    enroll="/diplomas/dele/enroll"
    tuition="/diplomas/dele/tuition"
  >
    <Container>
      <SEO
        title="Apply Online - Diplôme d'Etudes en Langue Française"
        description=""
      />

      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="/programmes">Diplomas</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="/diplomas/delf">DELF</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>Enroll</BreadcrumbItem>
      </Breadcrumb>

      <h3>DELF Application Form</h3>
      <br />

      <span>Application has not yet opened for the Diploma in French.</span>
    </Container>
  </DiplomaLayout>
)

export default Page
