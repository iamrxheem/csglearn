/*
  The Copyright Component displays the Company and website's Copyright
  information and is located at the lower-most of the page.
*/

import * as React from "react"
import { Link } from "gatsby"

function Copyright() {
  return (
    <>
      <div className="text-center bg-light">
        <br />
        <br />
        <span>
          &#xa9; Copyright 2021 <Link to="/">CSG Learning Institute Ltd</Link>.
          <br />
          All rights reserved.
        </span>
        <br />
        <br />
        <br />
      </div>
    </>
  )
}

export default Copyright
