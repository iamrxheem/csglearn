import React from "react"

const PDFFile = props => (
  <div style={{ paddingBottom: "15px" }}>
    <i style={{ color: "red" }} className="fas fa-file-pdf mr-2"></i>
    <a download href={props.href}>
      {props.text}
    </a>
  </div>
)

export default PDFFile
