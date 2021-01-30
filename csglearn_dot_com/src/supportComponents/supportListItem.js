import React from "react"
import { Link } from "gatsby"

const SupportListItem = props => (
  <>
    <li style={{ paddingBottom: "15px" }}>
      <i style={{ color: "#9932CC" }} className="far fa-file mr-3"></i>
      <Link to={"/support/article/" + props.href}>{props.title}</Link>
    </li>
  </>
)

export default SupportListItem
