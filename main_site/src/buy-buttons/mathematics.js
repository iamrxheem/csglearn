import * as React from "react"
import { useEffect } from "react"
import ShopifyBuy from "@shopify/buy-button-js"

const shopifyClient = ShopifyBuy.buildClient({
  domain: "csg-learning-institute-ltd.myshopify.com",
  storefrontAccessToken: "97d9437f2ebc45804c5e329b25f0cedb"
})

const ui = ShopifyBuy.UI.init(shopifyClient)

export default function BuyNowMathematics({ id }) {
  useEffect(() => {
    ui.createComponent("product", {
      id,
      node: document.getElementById(`buy-now-${id}`)
    })
  })

  return <div id={`buy-now-${id}`} />
}
