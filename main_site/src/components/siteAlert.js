import * as React from "react"
import { Link } from "gatsby"

const SiteAlert = () => (
  <>
    <div className="bg-dark text-center">
      <div className="container">
        <br />
        <span className="text-white">
          Enroll in our CSEC Summer Programme starting June 14.{" "}
          <Link
            to="/programmes/csec/summer"
            className="text-white"
            style={{ textDecoration: "underline" }}
          >
            Learn more
          </Link>
        </span>

        <br />
        <br />
      </div>
    </div>
  </>
)

export default SiteAlert
