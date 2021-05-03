import * as React from "react"

import Icon from "../../images/apple-app-store-icon.png"

const AppStoreIcon = props => (
  <a target="_blank" style={props.linkStyle} className="btn" href={props.href}>
    <img style={props.imgStyle} src={Icon} />
  </a>
)

export default AppStoreIcon
