import * as React from "react"
import axios from "axios"
import PropTypes from "prop-types"

class View extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      current_country: this.props.current_country,
      allowed_country: this.props.allowed_country
    }
  }

  componentWillMount() {}

  render() {
    return (
      <>
        <>
          {this.state.current_country === this.state.allowed_country ? (
            <>{this.props.children}</>
          ) : (
            <></>
          )}
        </>
      </>
    )
  }
}

export default View
