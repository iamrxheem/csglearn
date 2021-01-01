import React from "react"
import { Link } from "gatsby"
import DELELayout from "../../../layouts/deleLayout"
import SEO from "../../../components/seo"
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Container,
  Row,
  Col
} from "shards-react"
import Faq from "react-faq-component"
import { MobileView } from "react-device-detect"
import { Table } from "react-bootstrap"

const Page = () => (
  <>
    <DELELayout>
      <SEO title="DELE Exam FAQs" description="" lang="en" />

      <Container>
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="/diplomas">Diplomas</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="/diplomas/dele">DELE</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>Tuition & Fees</BreadcrumbItem>
        </Breadcrumb>

        <h5>DELE Tuition & Fees</h5>
        <br />

        <Row>
          <Col sm={12} md={6}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Level</th>
                  <th>Tuition (in USD)</th>
                </tr>
              </thead>
              <tbody>
                {/* Level A1 */}
                <tr>
                  <td>Diploma A1 - Beginner</td>
                  <td>$500</td>
                </tr>

                {/* Level A2 */}
                <tr>
                  <td>Diploma A2</td>
                  <td>$550</td>
                </tr>

                {/* Level B1 */}
                <tr>
                  <td>Diploma B1 - Intermediate</td>
                  <td>$800</td>
                </tr>

                {/* Level B2 */}
                <tr>
                  <td>Diploma B2</td>
                  <td>$850</td>
                </tr>

                {/* Level C1 */}
                <tr>
                  <td>Diploma C1 - Advanced</td>
                  <td>$1050</td>
                </tr>

                {/* Level C2 */}
                <tr>
                  <td>Diploma C2 - Mastery</td>
                  <td>$1300</td>
                </tr>
              </tbody>
            </Table>

            <br />
            <Button
              style={{ width: "100%" }}
              outline
              href="/diplomas/dele/apply"
            >
              Apply Now
            </Button>
          </Col>
          <Col sm={12} md={6}></Col>
        </Row>

        <br />
        <span>
          Tuition shown are list prices and are subject to change without
          notice. Tuition does not include exam fees.
        </span>
      </Container>
    </DELELayout>
  </>
)

export default Page
