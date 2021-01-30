import React from "react"
import { Link } from "gatsby"
import DELELayout from "../../../layouts/deleLayout"
import SEO from "../../../components/seo"
import CurrencyShower from "../../../common/currencyShower"
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Container,
  Row,
  Col
} from "shards-react"
import Faq from "react-faq-component"
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

        <Row>
          <Col sm={12} md={6}>
            <h5>DELE Tuition & Fees</h5>
            <br />

            <span>
              Tuition covers courses which begin on January 25, 2021 to October
              29, 2021.
            </span>

            <br />
            <br />
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Level</th>
                  <th>Tuition</th>
                </tr>
              </thead>
              <tbody>
                {/* Level A1 */}
                <tr>
                  <td>Diploma A1 - Beginners</td>
                  <td>
                    <CurrencyShower
                      JM="JMD $75,000"
                      US="USD $500"
                      TT="TTD $3,400"
                      BB="BBD $1000"
                      GY="GYD $105,000"
                      VC="EC $1,400"
                      AI="EC $1,400"
                      DM="EC $1,400"
                      BZ="BZD $1,000"
                      GD="EC $1,400"
                      LC="EC $1,400"
                      AG="EC $1,400"
                      KY="KYD $420"
                    />
                  </td>
                </tr>

                {/* Level A2 */}
                <tr>
                  <td>Diploma A2</td>
                  <td>
                    <CurrencyShower
                      JM="JMD $75,000"
                      US="USD $500"
                      TT="TTD $3,400"
                      BB="BBD $1000"
                      GY="GYD $105,000"
                      VC="EC $1,400"
                      AI="EC $1,400"
                      DM="EC $1,400"
                      BZ="BZD $1,000"
                      GD="EC $1,400"
                      LC="EC $1,400"
                      AG="EC $1,400"
                      KY="KYD $420"
                    />
                  </td>
                </tr>

                {/* Level B1 */}
                <tr>
                  <td>Diploma B1 - Intermediate</td>
                  <td>
                    <CurrencyShower
                      JM="JMD $115,000"
                      US="USD $800"
                      TT="TTD $5,500"
                      BB="BBD $,600"
                      GY="GYD $167,500"
                      VC="EC $2,200"
                      AI="EC $2,400"
                      DM="EC $2,400"
                      BZ="BZD $1,600"
                      GD="EC $2,200"
                      LC="EC $2,200"
                      AG="EC $2,200"
                      KY="KYD $650"
                    />
                  </td>
                </tr>

                {/* Level B2 */}
                <tr>
                  <td>Diploma B2</td>
                  <td>
                    <CurrencyShower
                      JM="JMD $115,000"
                      US="USD $800"
                      TT="TTD $5,500"
                      BB="BBD $,600"
                      GY="GYD $167,500"
                      VC="EC $2,200"
                      AI="EC $2,400"
                      DM="EC $2,400"
                      BZ="BZD $1,600"
                      GD="EC $2,200"
                      LC="EC $2,200"
                      AG="EC $2,200"
                      KY="KYD $650"
                    />
                  </td>
                </tr>

                {/* Level C1 */}
                <tr>
                  <td>Diploma C1 - Advanced</td>
                  <td>USD $1050</td>
                </tr>

                {/* Level C2 */}
                <tr>
                  <td>Diploma C2 - Mastery</td>
                  <td>USD $1300</td>
                </tr>
              </tbody>
            </Table>

            <span>Payment plans are available for all students.</span>
            <br />
            <br />
            <Button
              style={{ width: "100%" }}
              outline
              href="/diplomas/dele/apply"
            >
              Apply Now
            </Button>

            <br />
            <br />
          </Col>
          <Col sm={12} md={6}>
            <h5>DELE para Escolares</h5>
            <br />

            <span>
              Below indicates the fees for the{" "}
              <a href="/diplomas/dele/escolares">
                Diploma in Spanish Escolares
              </a>{" "}
              which are aimed at studens between the ages of 11 and 17 years
              old.
            </span>

            <br />
            <br />
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Level</th>
                  <th>Tuition</th>
                </tr>
              </thead>
              <tbody>
                {/* Level A1 */}
                <tr>
                  <td>Diploma A1 - Beginners</td>
                  <td>
                    <CurrencyShower
                      JM="JMD $75,000"
                      US="USD $500"
                      TT="TTD $3,400"
                      BB="BBD $1000"
                      GY="GYD $105,000"
                      VC="EC $1,400"
                      AI="EC $1,400"
                      DM="EC $1,400"
                      BZ="BZD $1,000"
                      GD="EC $1,400"
                      LC="EC $1,400"
                      AG="EC $1,400"
                      KY="KYD $420"
                    />
                  </td>
                </tr>

                {/* Level A2 */}
                <tr>
                  <td>Diploma A2 </td>
                  <td>
                    <CurrencyShower
                      JM="JMD $75,000"
                      US="USD $500"
                      TT="TTD $3,400"
                      BB="BBD $1000"
                      GY="GYD $105,000"
                      VC="EC $1,400"
                      AI="EC $1,400"
                      DM="EC $1,400"
                      BZ="BZD $1,000"
                      GD="EC $1,400"
                      LC="EC $1,400"
                      AG="EC $1,400"
                      KY="KYD $420"
                    />
                  </td>
                </tr>

                {/* Level B1 */}
                <tr>
                  <td>Diploma B1 - Intermediate</td>
                  <td>
                    <CurrencyShower
                      JM="JMD $115,000"
                      US="USD $800"
                      TT="TTD $5,500"
                      BB="BBD $1,600"
                      GY="GYD $167,500"
                      VC="EC $2,200"
                      AI="EC $2,400"
                      DM="EC $2,400"
                      BZ="BZD $1,600"
                      GD="EC $2,200"
                      LC="EC $2,200"
                      AG="EC $2,200"
                      KY="KYD $650"
                    />
                  </td>
                </tr>

                {/* Level B2 */}
                <tr>
                  <td>Diploma B2 </td>
                  <td>
                    <CurrencyShower
                      JM="JMD $120,000"
                      US="USD $850"
                      TT="TTD $5,600"
                      BB="BBD $1,600"
                      GY="GYD $167,500"
                      VC="EC $2,200"
                      AI="EC $2,400"
                      DM="EC $2,400"
                      BZ="BZD $1,600"
                      GD="EC $2,200"
                      LC="EC $2,200"
                      AG="EC $2,200"
                      KY="KYD $650"
                    />
                  </td>
                </tr>
              </tbody>
            </Table>

            <br />
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
