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
import Swal from "sweetalert2"

import { loadStripe } from "@stripe/stripe-js"

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51JCl21KT5BOCrp9qa5vQWbGLXZb1Fukyam6BXarKQ1bQRPtqrbqLIB517TZ1NW6j6engcR2BTwJz4SqTVDUlFI0j00aQMrjP10"
)

class PayNow extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      amount: 0
    }
  }

  render() {
    const handleClick = async event => {
      // When the customer clicks on the button, redirect them to Checkout.
      const stripe = await stripePromise
      const { error } = await stripe.redirectToCheckout({
        lineItems: [
          {
            price: "price_1JELKfKT5BOCrp9qwmH3B9CS", // Replace with the ID of your price
            quantity: 1
          }
        ],
        mode: "payment",
        successUrl: "https://www.csglearn.com/success",
        cancelUrl: "https://www.csglearn.com/cancel"
      })
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `error.message`.
    }

    return (
      <Layout hideAlert>
        <SEO title="Make a Payment" description="" />

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
              <button role="link" onClick={handleClick}>
                Checkout
              </button>
            </Col>
            <Col sm={6}></Col>
          </Row>
        </Container>
      </Layout>
    )
  }
}

export default PayNow
