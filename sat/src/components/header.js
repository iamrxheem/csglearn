import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import $ from "jquery"

import MainNavigation from "./mainNavigation"

const Header = ({ siteTitle }) => (
  <>
    <>
      <header>
        <MainNavigation />
      </header>
    </>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
