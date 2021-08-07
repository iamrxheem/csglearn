import * as React from "react"
import { Link } from "gatsby"

import { Row, Col, Button } from "shards-react"
import { Carousel, Alert, OverlayTrigger, Tooltip } from "react-bootstrap"
import Modal from "react-bootstrap/Modal"
import PayPalPay from "../components/paypalPay"

import { isMobile } from "react-device-detect"

import MobileView from "../common/mobileView"

import { loadStripe } from "@stripe/stripe-js"
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_live_51JCl21KT5BOCrp9qIerTucu9gFYuWU5aRwzsrG4RWD8h0CUpJeqMVXtzaDnepESvsQU32UaghaAyyEfzk7RwZBgC00c1MUo6Ey"
)

const handleClick = async event => {
  // When the customer clicks on the button, redirect them to Checkout.
  const stripe = await stripePromise
  const { error } = await stripe.redirectToCheckout({
    lineItems: [
      {
        price: "price_1JLc3zKT5BOCrp9qCo65pAEb", // Replace with the ID of your price
        quantity: 1
      }
    ],
    mode: "payment",
    successUrl: "https://csglearn.com/success",
    cancelUrl: "https://csglearn.com/cancel"
  })
  // If `redirectToCheckout` fails due to a browser or network
  // error, display the localized error message to your customer
  // using `error.message`.
}

function StoreItemPreview(props) {
  return (
    <Col xs={6} md={2}>
      <a
        target="_blank"
        /* href={`/store/` + props.href}*/ onClick={handleClick}
      >
        <img className="center" src={props.imgSrc} style={{ width: "100%" }} />
      </a>

      <br />
      <Button target="_blank" theme="light" role="link" onClick={handleClick}>
        Checkout
      </Button>

      <MobileView>
        <br />
      </MobileView>
      <br />
    </Col>
  )
}

export default StoreItemPreview
