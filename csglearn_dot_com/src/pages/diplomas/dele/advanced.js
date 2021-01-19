import React from "react"
import { Link } from "gatsby"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
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
              <span>
                Quien aprueba este diploma es capaz de comprender una amplia
                variedad de textos extensos y con cierto nivel de exigencia, así
                como reconocer en ellos sentidos implícitos; cuando sabe
                expresarse de forma fluida y espontánea sin muestras muy
                evidentes de esfuerzo para encontrar la expresión adecuada;
                cuando puede hacer un uso flexible y efectivo del idioma español
                para fines sociales, académicos y profesionales y cuando puede
                producir textos claros, bien estructurados y detallados sobre
                temas de cierta complejidad, mostrando un uso correcto de los
                mecanismos de organización, articulación y cohesión del texto.​
              </span>

              <br />
              <br />
              <h4>Requisitos</h4>

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

              <div className="d-block d-md-none">
                <br />
                <br />
              </div>
            </Col>
            <Col sm={12} md={5} lg={5}>
              <ProgramSummary
                levelOfStudy="Diploma"
                numberOfCourses="4"
                modeOfStudy="Online"
                duration="10 months"
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
              <span>
                Quien aprueba este diploma es capaz de comprender con facilidad
                prácticamente todo lo que oye o lee; cuando sabe reconstruir la
                información y los argumentos procedentes de diversas fuentes, ya
                sean en idioma español hablado o escrito, y presentarlos de
                manera coherente y resumida y cuando puede expresarse
                espontáneamente, con gran fluidez y con un grado de precisión
                que le permite diferenciar pequeños matices de significado
                incluso en situaciones de mayor complejidad.1
              </span>

              <br />
              <br />
              <h4>Requisitos</h4>
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
              <div className="d-block d-md-none">
                <br />
                <br />
              </div>
            </Col>
            <Col sm={12} md={5} lg={5}>
              <ProgramSummary
                levelOfStudy="Diploma"
                numberOfCourses="4"
                modeOfStudy="Online"
                duration="10 months"
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
