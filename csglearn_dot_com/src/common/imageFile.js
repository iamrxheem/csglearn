import React from "react"

const ImageFile = props => (
  <div style={{ paddingBottom: "15px" }}>
    <i className="fas fa-file-image mr-2"></i>
    <a download href={props.href}>
      {props.text}
    </a>
  </div>
)

export default ImageFile
