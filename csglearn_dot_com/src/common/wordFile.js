import React from "react"

const WordFile = props => (
  <div style={{ paddingBottom: "15px" }}>
    <i style={{ color: "#00a2ed" }} className="fas fa-file-word mr-2"></i>
    <a download href={props.href}>
      {props.text}
    </a>
  </div>
)

export default WordFile
