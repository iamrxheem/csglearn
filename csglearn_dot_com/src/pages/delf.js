import React, { Component } from "react"

import DELFPage from "./diplomas/delf"
/*
if (process.browser) {
  window.location.replace("http://www.csglearn.com/diplomas/delf")
}
*/

class Page extends Component {
  render() {
    return (
      <>
        <DELFPage />
      </>
    )
  }
}

export default Page
