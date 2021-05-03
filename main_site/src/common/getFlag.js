import * as React from "react"
import axios from "axios"

class GetFlag extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      url: ""
    }

    this.setFlag = this.setFlag.bind(this)
  }

  componentWillMount() {
    axios
      .get(
        "https://ipgeolocation.abstractapi.com/v1/?api_key=23fcb43b2ca44f8a8a8a92466656f934"
      )
      .then(resp => {
        this.setFlag(resp.data.flag.png)
      })
  }

  setFlag(url) {
    this.setState({
      url: url
    })
  }

  render() {
    return (
      <>
        <img
          style={{ width: "2%", marginLeft: "5px" }}
          src={this.state.url}
          alt="Flag Image"
        />
      </>
    )
  }
}

export default GetFlag
