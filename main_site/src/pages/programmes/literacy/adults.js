import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import LiteracyProgrammeLayout from "../../../layouts/literacyProgrammeLayout"
import CsecMiniMenu from "../../../components/miniMenus/csecMiniMenu"
import LiteracyProgrammeMiniMenu from "../../../components/miniMenus/literacyProgrammeMiniMenu"

// View Components
import MobileView from "../../../common/mobileView"
import BrowserView from "../../../common/browserView"

import View from "../../../components/view/view"
import SEO from "../../../components/seo"
import {
  Carousel,
  Table,
  OverlayTrigger,
  Popover,
  Button
} from "react-bootstrap"

// Shards-React Components
import {
  Row,
  Col,
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Alert
} from "shards-react"

import ProgrammeSummary from "../../../common/programmeSummary"

const Page = props => (
  <>
    <SEO
      title="Online Children Literacy Programme"
      description="Online adult literacy and reading classes in Jamaica. Enroll today for special discounts for adults."
    />

    <LiteracyProgrammeLayout
      container={false}
      enroll="/programmes/literacy/enroll"
      image="https://www.unfpa.org/sites/default/files/home-banner-news/jamaica_youngmothers.jpg"
    >
      <Container>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/programmes">Programmes</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/programmes/literacy">Literacy</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Adults</BreadcrumbItem>
        </Breadcrumb>

        <Row>
          <Col md={7}>
            <h3>Adult Reading Classes</h3>
            <br />

            <LiteracyProgrammeMiniMenu />

            <br />
            <span>
              Our online Adult Literacy and Numeracy Programme provides training
              and developent in the areas of
            </span>

            <br />
            <br />
            <ul>
              <li>Reading</li>
              <li style={{ paddingTop: "15px" }}>Writing</li>
              <li style={{ paddingTop: "15px" }}>Vocabulary Development</li>
              <li style={{ paddingTop: "15px" }}>Numeracy</li>
            </ul>

            <br />
            <span>
              Our programme last for three (3) months and are conducted
              completely online.
            </span>

            <br />
            <br />
            <h5>Fees & Tuition</h5>

            <br />
            <Table>
              <tbody>
                <tr>
                  <td>Course Fee</td>
                  <td>JMD $35,000</td>
                </tr>
                <tr>
                  <td>Registration Fee</td>
                  <td>JMD $2,000</td>
                </tr>
              </tbody>
            </Table>

            <br />
            <Button
              style={{ width: "100%" }}
              href="/programmes/literacy/enroll"
            >
              Enroll now
            </Button>
          </Col>
          <Col md={5}>
            <MobileView>
              <br />
              <br />
            </MobileView>
            <ProgrammeSummary
              hasOptions
              options="Group"
              levelOfStudy="Literacy Certification"
              modeOfStudy="Online"
              duration="3 months"
              numberOfCourses="1"
              termBeginsOn="Monday, June 7, 2021"
            />

            <MobileView>
              <br />
              <br />
              <Button
                style={{ width: "100%" }}
                href="/programmes/literacy/enroll"
              >
                Enroll now
              </Button>
            </MobileView>
          </Col>
        </Row>
      </Container>
    </LiteracyProgrammeLayout>
  </>
)

export default Page
