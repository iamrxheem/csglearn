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

import { Container, Breadcrumb, BreadcrumbItem, Row, Col } from "shards-react"
import ShowMoreText from "react-show-more-text"

// Images
import CashCardIcon from "../images/cash-card.png"
import UserIcon from "../images/user-icon.jpeg"
import MultiUserIcon from "../images/multi-user.png"
import ShoppingCartIcon from "../images/shopping-icon.png"

const ContactPage = () => (
  <Layout hideAlert>
    <SEO title="Customer Support & Self Service" description="" />

    <Container>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>Customer Support</BreadcrumbItem>
      </Breadcrumb>

      <img src="" style={{ width: "100%" }} />
      <h3 className="text-center">How can I help you?</h3>

      <div className="text-center">
        <Row>
          <Col xs={6} md={4} lg={3} xl={3}>
            <br />
            <img src={MultiUserIcon} style={{ width: "50%" }} />
            <p>
              <a href="/support/classes">Classes</a>
            </p>
          </Col>
          <Col xs={6} md={4} lg={3} xl={3}>
            <br />
            <img src={UserIcon} style={{ width: "50%" }} />
            <p>
              <a href="/support/account">Account</a>
            </p>
          </Col>
          <Col xs={6} md={4} lg={3} xl={3}>
            <br />
            <img src={CashCardIcon} style={{ width: "50%" }} />

            <p>
              <a href="/support/payments">Payments</a>
            </p>
          </Col>
          <Col xs={6} md={4} lg={3} xl={3}>
            <br />
            <img src={ShoppingCartIcon} style={{ width: "50%" }} />
            <p>
              <a href="/support/store">Online Store</a>
            </p>
          </Col>
        </Row>
      </div>

      <br />
      <br />
      <h4>Top Support Articles</h4>

      <br />
      <p>Top articles and questions asked by students like you.</p>

      <br />
      <ul>
        <li></li>
      </ul>
    </Container>
  </Layout>
)

export default ContactPage
