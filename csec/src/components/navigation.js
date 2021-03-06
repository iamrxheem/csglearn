import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Navigation from "./navigation"
import TopContent from "./topContent"

const Header = ({ siteTitle }) => (
  <>
    <header className="header">
      <TopContent />
      <Navigation />
    </header>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
