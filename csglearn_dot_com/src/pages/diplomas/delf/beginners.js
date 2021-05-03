import React from "react"
import { Link } from "gatsby"
import DELFLayout from "../../../layouts/delfLayout"
import SEO from "../../../components/seo"
import {
  Breadcrumb,
  BreadcrumbItem,
  Container,
  Row,
  Col,
  Button
} from "shards-react"
import Faq from "react-faq-component"
import { MobileView } from "react-device-detect"
import DELFAlternateMiniMenu from "../../../common/delfAlternateMiniMenu"
import ProgramSummary from "../../../common/programSummary"
import { Tab, Tabs } from "react-bootstrap"

const Page = () => (
  <>
    <DELFLayout>
      <SEO
        title="Diplomas in French (DELF) for Beginners"
        description="Enroll online in the accredited Diploma in French Beginners A1 or A2 today, and learn French from scratch. Study online with CSG Learning Institute in Jamaica."
        lang="en"
      />

      <Container>
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="/diplomas">Diplomas</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="/diplomas/delf">DELF</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>Beginners</BreadcrumbItem>
        </Breadcrumb>

        <Row>
          <Col md={7}>
            <h5>Diplomas in French for Beginners</h5>

            <br />
            <span>
              Students can choose between two diplomas at the beginners level -
              A1 and A2.
            </span>

            <br />
            <br />
            <DELFAlternateMiniMenu />

            <br />

            <Tabs defaultActiveKey="a1">
              <Tab eventKey="a1" title="A1 Diploma">
                <br />
                <span>
                  The Diploma in French (DELF) A1 is an accredited and
                  internationally recognized diploma that connects people from
                  their first contact with French and evaluates their level in
                  French from the beginning of their studies.
                </span>

                <br />
                <br />
                <span>
                  This course is aimed at absolute beginners in French as it
                  starts the online learning process from scratch and assumes no
                  previous knowledge or experience with French.
                </span>
              </Tab>
              <Tab eventKey="a2" title="A2 Diploma">
                <br />
                <span>
                  ​At level A2 (waystage), we will find the majority of
                  descriptors stating social functions are to be found, like use
                  simple everyday polite forms of greeting and address; greet
                  people, ask how they are and react to news; handle very short
                  social exchanges; ask and answer questions about what they do
                  at work and in free time; make and respond to invitations;
                  discuss what to do, where to go and make arrangements to meet;
                  make and accept offers.
                </span>

                <br />
                <br />
                <span>
                  At level A2, we will also find the descriptors on getting out
                  and about: the simpliﬁed cut-down version of the full set of
                  transactional speciﬁcations in ‘The Threshold Level’ for
                  adults living abroad, like: make simple transactions in shops,
                  post ofﬁces or banks; get simple information about travel; use
                  public transport: buses, trains, and taxis, ask for basic
                  information, ask and give directions, and buy tickets; ask for
                  and provide everyday goods and services.
                </span>
              </Tab>
            </Tabs>

            <br />
            <h4>Entry Requirements</h4>

            <span>No requirements.</span>

            <br />
            <br />
            <Row>
              <Col sm={12} md={6} lg={6}>
                <Button
                  style={{ width: "100%" }}
                  outline
                  href="/diplomas/delf/enroll"
                >
                  Enroll now
                </Button>
              </Col>
              <Col sm={12} md={6} lg={6}></Col>
            </Row>

            <br />
            <br />
          </Col>

          <Col md={5}>
            <ProgramSummary
              levelOfStudy="Diploma"
              numberOfCourses="4"
              modeOfStudy="Online"
              duration="10 months"
              termBeginsOn="March 29, 2021"
              showCost
              cost="JMD $37,500 per term, 2 terms"
            />
          </Col>
        </Row>
      </Container>
    </DELFLayout>
  </>
)

export default Page
