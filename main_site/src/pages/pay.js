import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// View Components
import MobileView from "../common/mobileView"
import BrowserView from "../common/browserView"
import { PayPalButton } from "react-paypal-button-v2"

import StudentImage from "../images/black-college-student.jpg"

import {
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Col,
  Button,
  Form,
  FormInput,
  FormGroup,
  Alert,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  FormSelect,
  DropdownItem
} from "shards-react"

import { isMobile } from "react-device-detect"
import Faq from "react-faq-component"

import CSECImage from "../images/csec.png"
import CAPEImage from "../images/cape.png"

const data = {
  title: "",
  rows: [
    {
      title: "Pay Another Amount",
      content: (
        <>
          <br />
          <p>
            Pay an atlernate or miscellaneous amount, which can include tuition
            advance payment, late fees etc.
          </p>

          <br />
          <Row>
            <Col xs={6}>
              <Button
                style={{ width: "100%" }}
                href="https://buy.stripe.com/bIY8xbaAI8B64CYdRd"
                target="_blank"
                theme="primary"
              >
                $50
              </Button>
            </Col>
            <Col xs={6}>
              <Button
                style={{ width: "100%" }}
                href="https://buy.stripe.com/00g7t7gZ68B67Pa3cB"
                target="_blank"
                theme="info"
              >
                $100
              </Button>
            </Col>
            <Col xs={6}>
              <br />
              <Button
                style={{ width: "100%" }}
                href="https://buy.stripe.com/14k9Bf5go9Fa6L65kK"
                target="_blank"
                theme="success"
              >
                $200
              </Button>
            </Col>
            <Col xs={6}>
              <br />
              <Button
                style={{ width: "100%" }}
                href="https://buy.stripe.com/28o14J9wEbNi5H2bJ9"
                target="_blank"
                theme="warning"
              >
                $500
              </Button>
            </Col>
            <Col xs={12}>
              <br />
              <Button
                style={{ width: "100%" }}
                href="https://buy.stripe.com/9AQcNraAI04AfhC8wU"
                target="_blank"
                theme="light"
              >
                <i className="fas fa-credit-card mr-2"></i>
                Pay $1,000
              </Button>
            </Col>
          </Row>

          <br />
          <br />
        </>
      )
    }
  ]
}

const styles = {
  // bgColor: 'white',
  titleTextColor: "",
  rowTitleColor: ""
  // rowContentColor: 'grey',
  // arrowColor: "red",
}

const config = {
  animate: true,
  tabFocus: true
}

class Pay extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <Layout hideAlert>
        <SEO
          title="Pay Online"
          description="Pay online using a valid debit or credit card. Choose the subjects you wish to pay for or request an electronic invoice."
        />

        <MobileView>
          <img src={StudentImage} style={{ width: "100%" }} />
        </MobileView>

        <Container>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Payment</BreadcrumbItem>
          </Breadcrumb>

          <h4>Make a Payment</h4>
          <br />

          <Row>
            <Col md={6}>
              <Row>
                <Col xs={6}>
                  <Button
                    href="https://buy.stripe.com/bIYfZDaAI5oUfhC3cq"
                    style={{ width: "100%" }}
                    target="_blank"
                    theme="info"
                  >
                    Misc. Fees
                  </Button>
                </Col>
                <Col xs={6}>
                  <Button
                    href="https://buy.stripe.com/3csbJn4ck04AglGdR5"
                    style={{ width: "100%" }}
                    target="_blank"
                    theme="danger"
                  >
                    1-on-1 Class
                  </Button>
                </Col>
                <Col xs={6}>
                  <br />

                  <Button
                    href="https://buy.stripe.com/4gw6p338g7x26L65kA"
                    style={{ width: "100%" }}
                    target="_blank"
                    theme="success"
                  >
                    SAT Misc. Fee
                  </Button>
                </Col>
                <Col xs={6}>
                  <br />

                  <Button
                    href="https://buy.stripe.com/eVacNrbEMbNiglGdR7"
                    style={{ width: "100%" }}
                    target="_blank"
                    theme="primary"
                  >
                    SAT Installments
                  </Button>
                </Col>
                <Col xs={12}>
                  <br />

                  <Button
                    href="https://wa.link/k4bg6m"
                    style={{ width: "100%" }}
                    target="_blank"
                    theme="light"
                  >
                    <i className="fas fa-file-alt mr-2"></i>
                    Request an Invoice
                  </Button>
                </Col>
              </Row>

              {/* CSEC Payment Buttons */}
              <>
                <br />
                <br />

                <img
                  className="center"
                  style={{ width: "25%" }}
                  src={CSECImage}
                />
                <br />

                <h5 className="text-center">CSEC Payments</h5>

                <br />
                <p>
                  Pay your tuition on your CSEC subjects online. If you're not
                  sure how much to pay,{" "}
                  <a href="https://wa.link/js8zg0" target="_blank">
                    let us know
                  </a>
                  .
                </p>

                <br />
                <Row>
                  <Col xs={6}>
                    <Button
                      href="https://buy.stripe.com/bIY5kZ8sA6sY4CY3cv"
                      style={{ width: "100%" }}
                      target="_blank"
                      theme="primary"
                    >
                      English & Math
                    </Button>
                  </Col>
                  <Col xs={6}>
                    <Button
                      href="https://buy.stripe.com/8wM8xb8sA7x20mI7sM"
                      style={{ width: "100%" }}
                      target="_blank"
                      theme="light"
                    >
                      All other subjects
                    </Button>
                  </Col>
                </Row>
              </>

              {/* CAPE Payment Buttons */}
              <>
                <br />
                <br />

                <img
                  className="center"
                  style={{ width: "25%" }}
                  src={CAPEImage}
                />
                <br />

                <MobileView>
                  <h5 className="text-center">CAPE Payments</h5>
                </MobileView>
                <BrowserView>
                  <h5>CAPE Payments</h5>
                </BrowserView>
                <br />
                <p>
                  Pay your tuition on your CAPE subjects online. If you're not
                  sure how much to pay,{" "}
                  <a href="https://wa.link/js8zg0" target="_blank">
                    let us know
                  </a>
                  .
                </p>

                <br />
                <Row>
                  <Col xs={6}>
                    <Button
                      href="https://buy.stripe.com/14keVz4ckg3y5H28wS"
                      style={{ width: "100%" }}
                      target="_blank"
                      theme="primary"
                    >
                      Comm. Studies
                    </Button>
                  </Col>
                  <Col xs={6}>
                    <Button
                      href="https://buy.stripe.com/00geVz7ow2cId9u4gB"
                      style={{ width: "100%" }}
                      target="_blank"
                      theme="light"
                    >
                      All other subjects
                    </Button>
                  </Col>
                </Row>
              </>

              <br />
              <br />
            </Col>
            <Col sm={6}>
              <MobileView>
                <h5 className="text-center">Course Materials</h5>
              </MobileView>
              <BrowserView>
                <h5>Course Materials</h5>
              </BrowserView>
              <br />
              <p>
                Pay your course material fee and adjust the quantity for the
                number of subjects you're paying for.
              </p>
              <br />
              <Button
                href="https://buy.stripe.com/4gw8xb5go7x27Pa8wO"
                style={{ width: "100%" }}
                target="_blank"
                theme="info"
              >
                <i className="fas fa-bookmark mr-2"></i>
                Pay Course Materials
              </Button>
              <br />
              <br />
              <Faq data={data} styles={styles} config={config} />
            </Col>
          </Row>
        </Container>
      </Layout>
    )
  }
}

export default Pay
