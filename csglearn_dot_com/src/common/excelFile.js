import React from "react"

const ExcelFile = props => (
  <div style={{ paddingBottom: "15px" }}>
    <i style={{ color: "green" }} className="fas fa-file-excel mr-2"></i>
    <a download href={props.href}>
      {props.text}
    </a>
  </div>
)

export default ExcelFile
