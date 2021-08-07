import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

// View Components
import MobileView from "../../common/mobileView"
import BrowserView from "../../common/browserView"

// App Components
import AppSlider from "../../home/appSlider/appSlider"
import AppPromo from "../../home/appPromo"

import { Container, Breadcrumb, BreadcrumbItem, Row, Col } from "shards-react"
import ShowMoreText from "react-show-more-text"

// Images
import UserIcon from "../../images/user-icon.jpeg"

const ContactPage = () => (
  <Layout hideAlert>
    <SEO title="Customer Support & Self Service" description="" />

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

      <MobileView>
        <img className="center" src={UserIcon} style={{ width: "50%" }} />
      </MobileView>
      <BrowserView>
        <img className="center" src={UserIcon} style={{ width: "10%" }} />
      </BrowserView>
      <h3 className="text-center">Account Help</h3>

      <br />
      <br />
      <Row>
        <Col xs={12} md={4}>
          <h5>Password & Recovery</h5>

          <br />
          <p>
            Learn how to update your password and change your account details.
          </p>

          <br />
          <ul style={{ listStyleType: "none", marginLeft: "-30px" }}>
            <li>
              <i className="far fa-bookmark mr-2 text-secondary"></i>
              <a href="/support/account/KM1001">How to reset your password</a>
            </li>
            <li style={{ paddingTop: "15px" }}>
              <i className="far fa-bookmark mr-2 text-secondary"></i>
              <a href="/support/account/KM1002">How to recover your username</a>
            </li>
            <li style={{ paddingTop: "15px" }}>
              <i className="far fa-bookmark mr-2 text-secondary"></i>
              <a href="/support/account/KM1003">How to update your email</a>
            </li>
            <li style={{ paddingTop: "15px" }}>
              <i className="far fa-bookmark mr-2 text-secondary"></i>
              <a href="/support/account/KM1004">Request name change</a>
            </li>
            <li style={{ paddingTop: "15px" }}>
              <i className="far fa-bookmark mr-2 text-secondary"></i>
              <a href="/support/account/KM1005">
                Recover suspended/ disabled account
              </a>
            </li>
          </ul>

          <br />
          <br />
        </Col>
        <Col xs={12} md={4}>
          <h5>Student Web Portal</h5>

          <br />
          <p>Top articles and questions asked by students like you.</p>

          <br />
          <ul style={{ listStyleType: "none", marginLeft: "-30px" }}>
            <li>
              <i className="far fa-bookmark mr-2 text-secondary"></i>
              <a href="/support/account/KM1006">How to access your classes</a>
            </li>
            <li style={{ paddingTop: "15px" }}>
              <i className="far fa-bookmark mr-2 text-secondary"></i>
              <a href="/support/account/KM1007">How to upload an assignment</a>
            </li>
            <li style={{ paddingTop: "15px" }}>
              <i className="far fa-bookmark mr-2 text-secondary"></i>
              <a href="/support/account/KM1008">How to complete a quiz</a>
            </li>
            <li style={{ paddingTop: "15px" }}>
              <i className="far fa-bookmark mr-2 text-secondary"></i>
              <a href="/support/account/KM1009">How to review your grades</a>
            </li>
          </ul>

          <br />
          <br />
        </Col>
        <Col xs={12} md={4}>
          <h5>Mobile App Support</h5>

          <br />
          <p></p>

          <br />
          <ul style={{ listStyleType: "none", marginLeft: "-30px" }}>
            <li>
              <i className="far fa-bookmark mr-2 text-secondary"></i>
              <a href="/support/account/KM1010">How to log into the app</a>
            </li>
            <li style={{ paddingTop: "15px" }}>
              <i className="far fa-bookmark mr-2 text-secondary"></i>
              <a href="/support/account/KM1011">
                How to download course materials
              </a>
            </li>
            <li style={{ paddingTop: "15px" }}>
              <i className="far fa-bookmark mr-2 text-secondary"></i>
              <a href="/support/account/KM1012">How to submit an assignment</a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default ContactPage
