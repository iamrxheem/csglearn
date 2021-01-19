import React from "react"

const ArchiveFile = props => (
  <div style={{ paddingBottom: "15px" }}>
    <i style={{ color: "gold" }} className="fas fa-file-archive mr-2"></i>
    <a download href={props.href}>
      {props.text}
    </a>
  </div>
)

export default ArchiveFile
