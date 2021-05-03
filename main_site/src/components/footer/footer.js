import * as React from "react"
import PropTypes from "prop-types"

// All Footers
import UpperFooter from "./upperFooter"
import MidFooter from "./midFooter"
import LowerFooter from "./lowerFooter"
import Copyright from "./copyright"

// Corresponding CSS file, which covers all the files for the
// footer
import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <UpperFooter />
        <MidFooter />
        <Copyright />
      </footer>
    </>
  )
}

Footer.propTypes = {
  children: PropTypes.string
}

export default Footer
