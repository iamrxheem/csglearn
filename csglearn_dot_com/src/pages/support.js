import React from "react"
import { Link } from "gatsby"
import SupportQuickArticles from "../supportComponents/supportQuickArticles"
import SupportListItem from "../supportComponents/supportListItem"
import SupportLayout from "../layouts/supportLayout"
import SEO from "../components/seo"
import {
  Breadcrumb,
  BreadcrumbItem,
  Alert,
  Container,
  Row,
  Col,
  CardHeader,
  CardTitle,
  Card,
  CardFooter,
  CardBody,
  Nav,
  NavItem,
  NavLink
} from "shards-react"

const Page = () => (
  <SupportLayout>
    <SEO
      title="Customer Support & Self-service"
      description="Get help for your CSG Learning account with our support options. Fix many of your issues online with our new tools. Contact an CSG Learning customer service representative."
      lang="en"
    />
    <Container fluid>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Support</BreadcrumbItem>
      </Breadcrumb>

      <Row>
        <Col md={8}>
          <h3>Welcome to Customer Support & Self-Service</h3>

          <br />

          <Row>
            <Col md={6}>
              <Card>
                <CardBody>
                  <Row>
                    <Col xs={8}>
                      <CardTitle>Manage Account & Settinigs</CardTitle>
                    </Col>
                    <Col xs={4}>
                      <i className="fas fa-user-alt fa-3x"></i>
                    </Col>
                  </Row>

                  <br />
                  <ul
                    style={{
                      listStyleType: "none",
                      marginLeft: "-40px",
                      marginBottom: "20px"
                    }}
                  >
                    <SupportListItem
                      title="How to Change Profile Picture"
                      href="KM10000"
                    />
                    <SupportListItem
                      title="Correct First and Last Name"
                      href="KM10001"
                    />
                    <SupportListItem
                      title="Correct / Update Email"
                      href="KM10002"
                    />

                    <SupportListItem
                      title="How to Reset Your Password"
                      href="KM10004"
                    />
                  </ul>
                </CardBody>
              </Card>
            </Col>
            <Col md={6}>
              <div className="d-block d-md-none">
                <br />
              </div>

              <Card>
                <CardBody>
                  <Row>
                    <Col xs={8}>
                      <CardTitle>Online Classroom</CardTitle>
                    </Col>
                    <Col xs={4}>
                      <i className="fas fa-chalkboard-teacher fa-3x"></i>
                    </Col>
                  </Row>

                  <br />
                  <ul
                    style={{
                      listStyleType: "none",
                      marginLeft: "-40px",
                      marginBottom: "20px"
                    }}
                  >
                    <SupportListItem
                      href="KM10005"
                      title="How To Access Online Portal"
                    />
                    <SupportListItem
                      href="KM10006"
                      title="Incorrect Course Listed"
                    />
                    <SupportListItem
                      href="KM10007"
                      title="Request Course Transfer"
                    />
                  </ul>
                </CardBody>
              </Card>
            </Col>

            <Col md={6}>
              <br />
              <Card>
                <CardBody>
                  <Row>
                    <Col xs={8}>
                      <CardTitle>Tuition & Payments</CardTitle>
                    </Col>
                    <Col xs={4}>
                      <i className="fas fa-credit-card fa-3x"></i>
                    </Col>
                  </Row>

                  <br />
                  <ul
                    style={{
                      listStyleType: "none",
                      marginLeft: "-40px",
                      marginBottom: "20px"
                    }}
                  >
                    <SupportListItem
                      title="How To Pay Tuition Online"
                      href="KM10010"
                    />
                    <SupportListItem
                      title="How Pay Via Bank Transfer"
                      href="KM10011"
                    />
                    <SupportListItem
                      title="Query Oustanding Tuition"
                      href="KM10019"
                    />
                    <SupportListItem
                      title="How to Enroll In A Payment Plan"
                      href="KM10012"
                    />
                  </ul>
                </CardBody>
              </Card>
            </Col>
            <Col md={6}>
              <br />
              <Card>
                <CardBody>
                  <Row>
                    <Col xs={8}>
                      <CardTitle>Mobile App How-to</CardTitle>
                    </Col>
                    <Col xs={4}>
                      <i className="fas fa-mobile-alt fa-3x"></i>
                    </Col>
                  </Row>

                  <br />
                  <ul
                    style={{
                      listStyleType: "none",
                      marginLeft: "-40px",
                      marginBottom: "20px"
                    }}
                  >
                    <SupportListItem
                      title="How To Log In The App"
                      href="KM10016"
                    />
                    <SupportListItem
                      title="Submit An Assignment"
                      href="KM10017"
                    />
                    <SupportListItem
                      title="Message Or Email Your Teacher"
                      href="KM10013"
                    />
                    <SupportListItem
                      title="Download Course Materials"
                      href="KM10014"
                    />
                    <SupportListItem
                      title="Take A Multiple Choice Quiz"
                      href="KM10015"
                    />
                  </ul>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col md={4}>
          <SupportQuickArticles theme="trending" />
        </Col>
      </Row>
    </Container>
  </SupportLayout>
)

export default Page
