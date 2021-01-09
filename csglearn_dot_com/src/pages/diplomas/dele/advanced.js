import React from "react"
import { Link } from "gatsby"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import { MobileView, BrowserView } from "react-device-detect"
import {
  Breadcrumb,
  Row,
  Col,
  BreadcrumbItem,
  Button,
  Container
} from "shards-react"
import { useForm, useField, splitFormProps } from "react-form"
import DELELayout from "../../../layouts/deleLayout"
import { Tab, Tabs } from "react-bootstrap"
import ProgramSummary from "../../../common/programSummary"

const Page = () => (
  <DELELayout>
    <SEO title="Diploma de español nivel C1 y C2" description="" lang="en" />
    <Container>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="/diplomas/">Diplomas</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="/diplomas/dele">DELE</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Advanced</BreadcrumbItem>
      </Breadcrumb>

      <h5>Diploma de español nivel C1 y C2</h5>
      <br />
      <span>
        Students can choose between two diplomas at the advanced level - C1 and
        C2.
      </span>

      <br />
      <br />
      <Tabs defaultActiveKey="c1">
        <Tab eventKey="c1" title="Nivel C1">
          <br />
          <Row>
            <Col sm={12} md={12} lg={7}>
              <span>
                El Diploma de Español Nivel C1 garantiza que el progreso del
                estudiante en el idioma se ha producido con éxito y que posee un
                nivel más que avanzado de español (para participar en este
                examen necesitas tener al menos un nivel C1).
              </span>

              <br />
              <br />
              <h4>Entry Requirements</h4>

              <span>
                <a href="/diplomas/dele/apply">Regístrate</a> e indica tus
                calificaciones.
              </span>
              <br />
              <br />

              <Row>
                <Col sm={12} md={6} lg={6}>
                  <Button
                    style={{ width: "100%" }}
                    outline
                    href="/diplomas/dele/apply"
                  >
                    Regístrate ahora
                  </Button>
                </Col>
                <Col sm={12} md={6} lg={6}></Col>
              </Row>

              <MobileView>
                <br />
                <br />
              </MobileView>
            </Col>
            <Col sm={12} md={5} lg={5}>
              <ProgramSummary
                levelOfStudy="Diploma"
                numberOfCourses="4"
                modeOfStudy="Online"
                duration="1 year - 12 week terms"
                termBeginsOn="January 25, 2021"
                showCost
                cost="USD $500 per term"
              />
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="c2" title="Nivel C2">
          <br />
          <Row>
            <Col sm={12} md={12} lg={7}>
              <span>
                El Diploma de Español Nivel C2 acredita la competencia
                lingüística necesaria para desenvolverse en situaciones que
                requieran un uso elevado de la lengua y un conocimiento de los
                hábitos culturales que a través de ella se manifiestan.
              </span>
              <br />
              <br />
              <h4>Entry Requirements</h4>
              <br />
              <span>
                <a href="/diplomas/dele/apply">Regístrate</a> e indica tus
                calificaciones.
              </span>
              <br />
              <br />
              <Row>
                <Col sm={12} md={6} lg={6}>
                  <Button
                    style={{ width: "100%" }}
                    outline
                    href="/diplomas/dele/apply"
                  >
                    Regístrate ahora
                  </Button>
                </Col>
                <Col sm={12} md={6} lg={6}></Col>
              </Row>
              <MobileView>
                <br />
                <br />
              </MobileView>
            </Col>
            <Col sm={12} md={5} lg={5}>
              <ProgramSummary
                levelOfStudy="Diploma"
                numberOfCourses="4"
                modeOfStudy="Online"
                duration="1 year - 12 week terms"
                termBeginsOn="January 25, 2021"
                showCost
                cost="USD $650 per term"
              />
            </Col>
          </Row>
        </Tab>
      </Tabs>
    </Container>
  </DELELayout>
)

export default Page
