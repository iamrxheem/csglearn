import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import LiteracyProgrammeLayout from "../../layouts/literacyProgrammeLayout"
import CsecMiniMenu from "../../components/miniMenus/csecMiniMenu"

// View Components
import MobileView from "../../common/mobileView"
import BrowserView from "../../common/browserView"

import View from "../../components/view/view"
import SEO from "../../components/seo"
import {
  Carousel,
  Table,
  OverlayTrigger,
  Popover,
  Button
} from "react-bootstrap"
import $ from "jquery"

import KidsImage from "../../images/kids-reading.jpeg"
import LiteracyProgrammeMiniMenu from "../../components/miniMenus/literacyProgrammeMiniMenu"

// Shards-React Components
import {
  Row,
  Col,
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Alert
} from "shards-react"
import Swal from "sweetalert2"

import ProgrammeSummary from "../../common/programmeSummary"

import { applyLinks } from "../../data/links"
let applyLink = ""

applyLinks.map(data => {
  return (applyLink = data.literacy)
})

const Page = props => (
  <>
    <SEO
      title="Online Literacy Programme"
      description="Enroll in our online reading and numeracy classes beginning on June 7, 2021. Get your child up to speed for the upcoming school term."
    />

    <LiteracyProgrammeLayout
      container
      showBreak
      enroll={applyLink}
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

          <BreadcrumbItem active>Literacy</BreadcrumbItem>
        </Breadcrumb>

        <Row>
          <Col sm={7}>
            <h3>Children Reading Classes</h3>

            <br />
            <LiteracyProgrammeMiniMenu enroll={applyLink} />

            <br />
            <span>
              Our online Adult Literacy and Numeracy Programme is offered for
              students age 5 - 17, and provides early childhood and developent
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
                  <td>JMD $30,000</td>
                </tr>
                <tr>
                  <td>Registration Fee</td>
                  <td>JMD $2,000</td>
                </tr>
              </tbody>
            </Table>

            <br />
            <Button style={{ width: "100%" }} target="_blank" href={applyLink}>
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
              <Button
                style={{ width: "100%" }}
                target="_blank"
                href={applyLink}
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
