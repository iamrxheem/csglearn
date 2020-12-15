import React from "react"
import { Button } from "shards-react"

const DownloadButton = props => {
  return (
    <>
      <Button theme="dark" outline download href={props.href}>
        <i className="fas fa-file-pdf mr-2 text-danger"></i>
        {props.text}
      </Button>
    </>
  )
}

export default DownloadButton
