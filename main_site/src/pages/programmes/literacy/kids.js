import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import LiteracyProgrammeLayout from "../../../layouts/literacyProgrammeLayout"
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

import KidsImage from "../../../images/kids-reading.jpeg"

const Page = props => (
  <>
    <SEO
      title="Online Children Literacy Programme"
      description="Online literacy and numeracy programme for children ages 5 through 17. Enroll online today or contact us at (876) 707-3443 or info@csglearn.com."
    />

    <LiteracyProgrammeLayout
      container
      showBreak
      enroll="/apply"
      image={KidsImage}
    >
      <br />
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
          <BreadcrumbItem active>Kids</BreadcrumbItem>
        </Breadcrumb>

        <Row>
          <Col sm={7}>
            <h3>Children Reading Classes</h3>

            <br />
            <LiteracyProgrammeMiniMenu />

            <br />
            <span>
              Our online Adult Literacy and Numeracy Programme is offered for
              students age 4 - 17, and provides early childhood and developent
              with special focus on
            </span>

            <br />
            <br />
            <ul>
              <li>reading</li>
              <li style={{ paddingTop: "15px" }}>writing</li>
              <li style={{ paddingTop: "15px" }}>vocabulary Development</li>
              <li style={{ paddingTop: "15px" }}>numeracy</li>
            </ul>

            <br />
            <span>
              This programme lasts for three (3) months and are conducted
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
                  <td>JMD $30,000</td>
                </tr>
                <tr>
                  <td>Registration Fee</td>
                  <td>JMD $2,000</td>
                </tr>
              </tbody>
            </Table>

            <br />
            <Button style={{ width: "100%" }} href="/apply">
              Enroll now
            </Button>
          </Col>
          <Col sm={5}>
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
              termBeginsOn="Monday, August 2nd, 2021"
            />

            <MobileView>
              <br />
              <br />
              <Button style={{ width: "100%" }} href="/apply">
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
