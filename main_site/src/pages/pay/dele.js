import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

// View Components
import MobileView from "../../common/mobileView"
import BrowserView from "../../common/browserView"
import { PayPalButton } from "react-paypal-button-v2"

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
import Modal from "react-bootstrap/Modal"
import Swal from "sweetalert2"

class Pay extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      programme: `Diplomas in Spanish`,
      amount: ``,
      userAmount: ``,
      misFeeAmount: 100,
      show: false
    }

    this.handleClose = this.handleClose.bind(this)
    this.handleShow = this.handleShow.bind(this)
    this.onUserAmountChange = this.onUserAmountChange.bind(this)
  }

  handleClose(e) {
    this.setState({ show: false })
  }

  handleShow(e) {
    this.setState({ show: true })
  }

  onUserAmountChange(e) {
    this.setState({ userAmount: e.target.value })
  }

  render() {
    return (
      <Layout hideAlert>
        <SEO
          title="Pay DELE Miscellaneous Fee"
          description="Make an online payment for your CSG Learning Account."
        />

        <MobileView>
          <img src="" style={{ width: "100%" }} />
        </MobileView>

        <Container>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Payment</BreadcrumbItem>
          </Breadcrumb>

          <Row>
            <Col sm={6}>
              <h3>Misc Fee Payment</h3>

              <br />
              <p>
                Students enrolling for the {this.state.programme} programme are
                required to clear their Miscellaneous Fee of USD $
                {this.state.misFeeAmount} upon registration.
              </p>

              <br />
              <br />

              <div className="text-center">
                <h5>Select Fee to Pay</h5>

                <br />
                <Row>
                  <Col xs={6}>
                    <Alert theme="info">
                      <a
                        onClick={() => {
                          this.setState({ amount: 100 })
                        }}
                      >
                        Misc Fee
                      </a>
                    </Alert>
                  </Col>

                  <Col xs={6}>
                    <Alert theme="danger">
                      <a
                        onClick={() => {
                          this.setState({ amount: 120 })
                        }}
                      >
                        Exam Fee
                      </a>
                    </Alert>
                  </Col>

                  {/* Course Materials */}
                  <Col xs={6}>
                    <Alert theme="success">
                      <a
                        onClick={() => {
                          this.setState({ amount: 35 })
                        }}
                      >
                        Course Materials
                      </a>
                    </Alert>
                  </Col>

                  {/* Pay Another Amount */}
                  <Col xs={6}>
                    <Alert theme="primary">
                      <a
                        style={{ textDecoration: "none" }}
                        href="#"
                        onClick={this.handleShow}
                      >
                        Other Amount
                      </a>
                    </Alert>

                    <Modal show={this.state.show} onHide={this.handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Pay Another Amount</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Form>
                          <FormGroup>
                            <InputGroup className="mb-2">
                              <InputGroupAddon type="prepend">
                                <InputGroupText>USD $</InputGroupText>
                              </InputGroupAddon>
                              <FormInput
                                value={this.state.userAmount}
                                onChange={this.onUserAmountChange}
                              />
                            </InputGroup>
                          </FormGroup>
                        </Form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button theme="danger" onClick={this.handleClose}>
                          Close
                        </Button>
                        <Button
                          theme="primary"
                          onClick={() => {
                            this.setState({ amount: this.state.userAmount })
                            this.handleClose()
                          }}
                        >
                          Pay this amount
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </Col>
                </Row>
              </div>

              <br />
              <h5>How to Pay</h5>

              <br />
              <p>
                Pay via PayPal or with a valid credit or debit card. PayPal is a
                fast and secure way to make online payments while proteting your
                card information.
              </p>

              <br />
              <ul>
                <li style={{ paddingBottom: "15px" }}>
                  Select the amount you wish to pay above
                </li>
                <li style={{ paddingBottom: "15px" }}>
                  Select payment method below - PayPal or with a debit or credit
                  card
                </li>
                <li style={{ paddingBottom: "15px" }}>
                  Proceed to checkout and enter your payment and billing
                  information. You can also create a free Paypal account at this
                  step for faster checkout on future purchases.
                </li>
              </ul>

              <MobileView>
                <br />
                <br />
              </MobileView>
            </Col>
            <Col sm={6}>
              <PayPalButton
                amount={this.state.amount + 15}
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
            </Col>
          </Row>
        </Container>

        <MobileView>
          <br />
          <br />
          <img
            src="https://www.seekpng.com/png/detail/321-3212352_secure-payments-mcafee-and-norton-secured.png"
            style={{ width: "100%" }}
          />
        </MobileView>
      </Layout>
    )
  }
}

export default Pay
