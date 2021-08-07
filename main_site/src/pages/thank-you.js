import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// View Components
import MobileView from "../common/mobileView"
import BrowserView from "../common/browserView"

// App Components
import AppSlider from "../home/appSlider/appSlider"
import AppPromo from "../home/appPromo"
import { Tabs, Tab } from "react-bootstrap"
import { Table } from "react-bootstrap"

import {
  Button,
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Col,
  FormGroup,
  Form,
  FormSelect,
  Alert,
  FormRadio
} from "shards-react"
import { PayPalButton } from "react-paypal-button-v2"
import Swal from "sweetalert2"

class Page extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    let queryString = ""
    let urlParams = ""
    let name = ""
    let programme = ""

    if (process.env.NODE_ENV == `production`) {
      if (process.browser) {
        queryString = window.location.search
      }

      urlParams = new URLSearchParams(queryString)

      name = urlParams.get("name")
      programme = urlParams.get("programme")
    }

    const message = name
      ? `Thank your for enrolling, ${name}`
      : "Thanks for enrolling"

    return (
      <>
        <Layout hideAlert>
          <SEO
            title="Thanks for Enrolling"
            description="Thanks for enrolling in one of our programmes. A representative will contact you shortly to complete the registration process."
          />

          <MobileView>
            <img
              src="https://torontocaribbean.com/wp-content/uploads/2016/02/caribbeanstudents.jpg"
              style={{ width: "100%" }}
            />
          </MobileView>

          <br />
          <Container>
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <Link to="/support">Support</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>Account</BreadcrumbItem>
            </Breadcrumb>

            <Row>
              <Col sm={12} md={6}>
                <h3>{message}</h3>

                <br />
                <p>
                  We've received your apllication! Our enrollment officers are
                  currently reviewing your application and will contact you with
                  the next steps.
                </p>

                <p>
                  To qualify for an enrollment plan, you are required to clear
                  your miscellaneous fees. Select your programme below.
                </p>

                <br />
                <Alert theme="success">
                  <i className="fas fa-info-circle mr-2"></i>
                  Miscellaneous fees are not included in your tuition. Course
                  materials are optional.
                </Alert>

                <br />
                <a
                  style={{ width: "100%" }}
                  href="https://buy.stripe.com/28o00F24c04A2uQ3cE"
                  target="_blank"
                >
                  Pay miscellaneous now >
                </a>
              </Col>
              <Col sm={12} md={6}></Col>
            </Row>
          </Container>
        </Layout>
      </>
    )
  }
}

export default Page
