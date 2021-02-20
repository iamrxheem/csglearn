import React, { Component } from "react"


import SATPage from "./programmes/sat"
/*
if (process.browser) {
  window.location.replace("http://www.csglearn.com/diplomas/delf")
}
*/

class Page extends Component {
  render() {
    return (
      <>
        <SATPage />
      </>
    )
  }
}

export default Page
