import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

// View Components
import MobileView from "../../common/mobileView"
import BrowserView from "../../common/browserView"
import { PayPalButton } from "react-paypal-button-v2"
import Modal from "react-bootstrap/Modal"

import {
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Col,
  Button,
  Alert,
  Form,
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter
} from "shards-react"

import Swal from "sweetalert2"
import BiologyImage from "../../images/self-paced/biology-wide.png"

// Media
import StudentImage from "../../images/student.jpg"
import SelfPacedVideo from "../../videos/self-paced/english-a.mp4"

function PayPalComponent() {
  return (
    <PayPalButton
      amount={120}
      // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
      onSuccess={(details, data) => {
        Swal.fire(
          `Thanks, ${details.payer.name.given_name}!`,
          `Your payment has been processed successfully and applied to your student account.`,
          "success"
        )

        // OPTIONAL: Call your server to save the transaction
        return fetch("/paypal-transaction-complete", {
          method: "post",
          body: JSON.stringify({
            orderId: data.orderID
          })
        })
      }}
      options={{
        clientId:
          "AemVDjWkD5QVsAv7RNKcF-HxMf7V_vksSdDWA-i2NBeVZhj6qd8UWXluk2LYlMsPMMgOsSdTFM7h0cTe",
        currency: "USD"
      }}
      shippingPreference="NO_SHIPPING"
    />
  )
}

class Page extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "CSEC Biology",
      show: false
    }

    this.handleClose = this.handleClose.bind(this)
    this.handleShow = this.handleShow.bind(this)
  }

  handleClose(e) {
    this.setState({ show: false })
  }

  handleShow(e) {
    this.setState({ show: true })
  }

  render() {
    return (
      <Layout hideAlert>
        <SEO title={`${this.state.title} Self-Paced Course`} description={``} />

        <BrowserView>
          <img src={BiologyImage} style={{ width: "100%" }} />
        </BrowserView>

        <MobileView>
          <video
            style={{ width: "100%" }}
            preload="auto"
            autoPlay={true}
            loop
            muted
          >
            <source src={SelfPacedVideo} type="video/mp4" />
          </video>
        </MobileView>

        <br />
        <br />
        <Container>
          <div className="text-center">
            <h3>{this.state.title} Self-Paced Course</h3>

            <br />
            <p>
              This self-paced course is specifically designed for Caribbean
              students preparing for the January or May/ June {this.state.title}{" "}
              examinations. It is ideal for school students, school leavers or
              adult learner who need study tools to assist in their learning and
              preparation for exams.
            </p>

            <br />
            <a
              className="btn btn-primary"
              style={{ width: "50%" }}
              role="link"
              href="https://buy.stripe.com/28o4gVeQYbNi3yUbII"
              target="_blank"
            >
              <i className="fas fa-shopping-cart mr-2"></i>
              Purchase Course
            </a>

            <br />
            <small>
              Or use an{" "}
              <a href="#" onClick={this.handleShow}>
                alternate payment method
              </a>
              .
            </small>
          </div>

          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Alternate Payment Methods</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                Please note that students residing outside of Jamaica can only
                pay online. If you do not have access to a credit/ debit card,
                please contact us on WhatsApp at{" "}
                <a target="_blank" href="https://wa.me/18767073443">
                  +1 (876) 707-4334
                </a>{" "}
                or email info@csglearn.com.
              </p>

              <br />
              <p>Other payment methods include:</p>

              <ul>
                <li>PayPal</li>
                <li className="pt-2">
                  Bank transfers <strong>(Jamaican students only)</strong>
                </li>
              </ul>

              <br />
              <br />
              <PayPalComponent />
            </Modal.Body>
          </Modal>

          <br />
          <br />
          <Row>
            <Col sm={4}>
              <Card>
                <CardImg src="https://place-hold.it/300x200" />
                <CardBody>
                  <CardTitle>Lorem Ipsum</CardTitle>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <Button>Read more &rarr;</Button>
                </CardBody>
              </Card>
            </Col>

            <Col sm={4}>
              <MobileView>
                <br />
                <br />
              </MobileView>
              <Card>
                <CardImg src="https://place-hold.it/300x200" />
                <CardBody>
                  <CardTitle>Lorem Ipsum</CardTitle>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <Button>Read more &rarr;</Button>
                </CardBody>
              </Card>
            </Col>

            <Col sm={4}>
              <MobileView>
                <br />
                <br />
              </MobileView>

              <Card>
                <CardImg src="https://place-hold.it/300x200" />
                <CardBody>
                  <CardTitle>Lorem Ipsum</CardTitle>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <Button>Read more &rarr;</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <br />
          <br />
          <h5>Refund Policy</h5>

          <br />
          <p>
            All online course purchases are final and non-refundable. Once the
            course is purchased and accessed, no refund will be approved.
          </p>
        </Container>
      </Layout>
    )
  }
}

export default Page
