import * as React from "react"
import { Link } from "gatsby"

import CareersLayout from "../layouts/careersLayout"
import SEO from "../components/seo"

// View Components
import MobileView from "../common/mobileView"
import BrowserView from "../common/browserView"
import CareerBox from "../common/careerBox"

import {
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Col,
  Button,
  Alert
} from "shards-react"

class Careers extends React.Component {
  executeOnClick(isExpanded) {
    console.log(isExpanded)
  }

  render() {
    return (
      <CareersLayout hideAlert>
        <SEO title="Join the Team" description="" />

        <Container style={{ paddingTop: "15px" }}>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Careers</BreadcrumbItem>
          </Breadcrumb>
        </Container>

        <Container fluid>
          <ul class="cards">
            <CareerBox
              title="Adjunct Lecturer (Part Time)"
              description="Create fun and interactive lesson."
              status="Posted June 28, 2021"
            />
            <CareerBox
              title="Teacher (On Demand, Part Time)"
              description="Teach 1-on-1 classes for CSEC & CAPE students"
              status="Posted June 28, 2021"
            />
            <CareerBox
              title="Programme Coordinator (Part Time)"
              status="June 28, 2021"
            />
          </ul>
        </Container>
      </CareersLayout>
    )
  }
}

export default Careers
