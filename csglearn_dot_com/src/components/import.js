import React from "react"
import { Helmet } from "react-helmet"

function ImportPage() {
  return (
    <>
      <Helmet>
        <script src="https://www.paypal.com/sdk/js?client-id=AWF2k7JHihz8QzSt9ivellRbG2hNj_fOHF0PkZsv3u6qcuHtZJX33pXJWPEpR4CXsJC4fZ_Vf3JKe1aM&currency=USD" />

        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap"
          rel="stylesheet"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          src="https://kit.fontawesome.com/3b83e0293b.js"
          crossOrigin="anonymous"
        />
      </Helmet>
    </>
  )
}

export default ImportPage
