import * as React from "react"
import { PayPalButton } from "react-paypal-button-v2"
import Swal from "sweetalert2"

function PayPalPay(props) {
  return (
    <PayPalButton
      amount={props.amount}
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

export default PayPalPay
