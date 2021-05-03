import * as React from "react"

import Icon from "../../images/google-play-icon.png"

const PlayStoreIcon = props => (
  <a target="_blank" style={props.linkStyle} className="btn " href={props.href}>
    <img style={props.imgStyle} src={Icon} />
  </a>
)

export default PlayStoreIcon
