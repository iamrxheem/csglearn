import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Table from "react-bootstrap/Table"
import {
  Alert,
  Button,
  Container,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  UncontrolledAlert
} from "reactstrap"
import {
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Col,
  FormInput,
  FormSelect
} from "shards-react"
import { PayPalButton } from "react-paypal-button-v2"
import Swal from "sweetalert2"

class Page extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      amount: ""
    }

    this.handleAmountChange = this.handleAmountChange.bind(this)
  }

  handleAmountChange(e) {
    this.setState({
      amount: e.target.value
    })
  }

  render() {
    return (
      <>
        <>
          <Layout>
            <Seo title="Pay a Merchant" />

            <Container>
              <Breadcrumb style={{ backgroundColor: "" }}>
                <BreadcrumbItem>
                  <a href="/">Home</a>
                </BreadcrumbItem>
                <BreadcrumbItem active>Pay Online</BreadcrumbItem>
              </Breadcrumb>

              <br />
              <Row>
                <Col sm={6}>
                  <h3>Merchant Pay</h3>

                  <p>
                    Merchant Pay allows companies to offer online credit or
                    debit card payment to clients.
                  </p>

                  <br />
                  <Form>
                    <Row>
                      <Col sm={6}>
                        <FormGroup>
                          <label>Merchant Code</label>
                          <Input />
                        </FormGroup>
                      </Col>
                      <Col sm={6}>
                        <FormGroup>
                          <label>Payment Amount (in USD)</label>
                          <Input
                            value={this.state.amount}
                            onChange={this.handleAmountChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <br />
                    <Alert className="alert-default">
                      Enter the amount you wish to pay, then choose if wish to
                      pay by card or PayPal.
                    </Alert>
                  </Form>

                  <br />
                  <br />
                </Col>
                <Col sm={6}>
                  <PayPalButton
                    amount={this.state.amount * 1.07}
                    shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                    onSuccess={(details, data) => {
                      Swal.fire(
                        `$${this.state.amount} Paid`,
                        `${details.payer.name.given_name}, your payment has been processed successfully`,
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
                        "AWSNp5vB92XLnyeNLore9vTj7iXOhe9td45d_wJomi0Au1tv94zAM0RN5yLAQt6iNCqoJQpOLNlYffwC",
                      currency: "USD"
                    }}
                  />
                </Col>
              </Row>
            </Container>
          </Layout>
        </>
      </>
    )
  }
}

export default Page
