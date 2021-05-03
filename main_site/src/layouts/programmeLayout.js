import * as React from "react"
import Layout from "../components/layout"

// Header and Footer
import Header from "../components/header"
import Footer from "../components/footer/footer"

import { Container, Breadcrumb, BreadcrumbItem, Row, Col } from "shards-react"

// CSS and imports
import "../components/layout.css"

import ProgrammeInfoRequest from "../components/programmeInfoRequest/ProgrammeInfoRequest"

const ProgrammeLayout = props => (
  <>
    <Header />
    <Container>
      {props.children}

      <Row>
        <Col></Col>
        <Col md={4}>
          <ProgrammeInfoRequest />
        </Col>
      </Row>
    </Container>
    <Footer />
  </>
)

export default ProgrammeLayout
