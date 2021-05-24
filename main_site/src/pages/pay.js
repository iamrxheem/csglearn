import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// View Components
import MobileView from "../common/mobileView"
import BrowserView from "../common/browserView"
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

class Pay extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      amount: "",
      show: false,
      currency: "JMD",
      toBeConvertedAmount: "",
      usdAmount: ""
    }

    this.handleAmountChange = this.handleAmountChange.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleShow = this.handleShow.bind(this)
    this.payThis = this.payThis.bind(this)
    this.onToConvertChange = this.onToConvertChange.bind(this)
    this.calculateUSD = this.calculateUSD.bind(this)
    this.onCurrencyChange = this.onCurrencyChange.bind(this)
  }

  calculateUSD(e) {
    if (this.state.currency === "JMD") {
      this.setState({
        usdAmount:
          Math.round((this.state.toBeConvertedAmount / 14.5) * 100) / 100
      })
    } else {
      this.setState({
        usdAmount: Math.round(this.state.toBeConvertedAmount * 0.15 * 100) / 100
      })
    }
  }

  onCurrencyChange(e) {
    this.setState({ currency: e.target.value })

    this.calculateUSD()
  }

  onToConvertChange(e) {
    this.setState({ toBeConvertedAmount: e.target.value })

    this.calculateUSD()
  }

  payThis(e) {
    this.setState({ amount: this.state.usdAmount })

    this.handleClose()
  }

  handleAmountChange(e) {
    this.setState({ amount: e.target.value })

    PayPalButton.forceUpdate()
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
        <SEO
          title="Pay Online"
          description="Make an online payment for your CSG Learning Account."
        />

        <Container>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Payment</BreadcrumbItem>
          </Breadcrumb>

          <h3>Make a Payment</h3>
          <br />

          <Row>
            <Col sm={6}>
              <div className="text-center">
                <Row>
                  <Col xs={6}>
                    <Alert theme="primary">
                      <a
                        onClick={() => {
                          this.setState({ amount: "35" })
                        }}
                      >
                        Exam Marathon
                      </a>
                    </Alert>
                  </Col>
                  <Col xs={6}>
                    <Alert theme="success">
                      <a
                        onClick={() => {
                          this.setState({ amount: "70" })
                        }}
                      >
                        1-on-1 Class
                      </a>
                    </Alert>
                  </Col>
                  <Col xs={6}>
                    <Alert theme="danger">
                      <a
                        onClick={() => {
                          this.setState({ amount: "80" })
                        }}
                      >
                        Pay USD $50
                      </a>
                    </Alert>
                  </Col>
                  <Col xs={6}>
                    <Alert theme="warning">
                      <a
                        onClick={() => {
                          this.setState({ amount: "100" })
                        }}
                      >
                        Pay USD $100
                      </a>
                    </Alert>
                  </Col>
                </Row>
              </div>

              <br />
              <br />
              <Form>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <InputGroup className="mb-2">
                        <InputGroupAddon type="prepend">
                          <InputGroupText>
                            <i className="fas fa-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <FormInput placeHolder="Student ID or email" />
                      </InputGroup>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <InputGroup className="mb-2">
                        <InputGroupAddon type="prepend">
                          <InputGroupText>
                            <i className="fas fa-dollar-sign"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <FormInput
                          onChange={this.handleAmountChange}
                          value={this.state.amount}
                          placeHolder="Enter payment amount"
                        />
                      </InputGroup>
                      <small>
                        <strong>Please enter the amount in USD</strong>
                      </small>
                    </FormGroup>
                  </Col>
                </Row>
              </Form>

              <br />
              <a href="#" theme="primary" onClick={this.handleShow}>
                Use our currency converter
              </a>

              <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Currency Converter</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Row>
                    <Col md={8}>
                      <FormGroup>
                        <Row>
                          <Col xs={5}>
                            <FormSelect onChange={this.onCurrencyChange}>
                              <option
                                onChange={this.onCurrencyChange}
                                selected
                                value="JMD"
                              >
                                JMD
                              </option>
                              <option
                                onChange={this.onCurrencyChange}
                                value="TTD"
                              >
                                TTD
                              </option>
                            </FormSelect>
                          </Col>
                          <Col xs={7}>
                            <FormGroup>
                              <FormInput
                                value={this.state.toBeConvertedAmount}
                                onChange={this.onToConvertChange}
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                      </FormGroup>
                    </Col>

                    {/* This field will show the value of the USD amount */}
                    <Col md={4}>
                      <FormGroup>
                        <InputGroup className="mb-2">
                          <InputGroupAddon type="prepend">
                            <InputGroupText>US</InputGroupText>
                          </InputGroupAddon>
                          <FormInput value={this.state.usdAmount} />
                        </InputGroup>
                      </FormGroup>
                    </Col>
                  </Row>
                </Modal.Body>
                <Modal.Footer>
                  <Button theme="danger" onClick={this.handleClose}>
                    Close
                  </Button>
                  <Button theme="primary" onClick={this.payThis}>
                    Pay this amount
                  </Button>
                </Modal.Footer>
              </Modal>

              <MobileView>
                <br />
                <br />
              </MobileView>
            </Col>
            <Col sm={6}>
              <PayPalButton
                amount={this.state.amount * 1.07}
                // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                onSuccess={(details, data) => {
                  alert(
                    "Transaction completed by " + details.payer.name.given_name
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
                    "AWSNp5vB92XLnyeNLore9vTj7iXOhe9td45d_wJomi0Au1tv94zAM0RN5yLAQt6iNCqoJQpOLNlYffwC",
                  currency: "USD"
                }}
              />
            </Col>
          </Row>
        </Container>
      </Layout>
    )
  }
}

export default Pay
