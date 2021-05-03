import * as React from "react"
import $ from "jquery"
import axios from "axios"

import {
  Row,
  Col,
  Container,
  Tooltip,
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button
} from "shards-react"

class JamaicaView extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      country_code: "",
      display: false
    }

    this.setIP = this.setIP.bind(this)
  }

  componentWillMount() {
    axios
      .get(
        "https://ipgeolocation.abstractapi.com/v1/?api_key=23fcb43b2ca44f8a8a8a92466656f934"
      )
      .then(resp => {
        this.setIP(resp.data.country_code)
      })
  }

  setIP(country_code) {
    this.setState({
      country_code: country_code
    })
  }

  render() {
    return (
      <>
        {this.state.country_code === "JM" ? <>{this.props.children}</> : <></>}
      </>
    )
  }
}

export default JamaicaView
