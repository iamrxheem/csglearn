import React, { Component } from "react"
import axios from "axios"

class CurrencyShower extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countryName: "",
      countryCode: "",
      currency: "",
      country: ""
    }
  }

  getGeoInfo = () => {
    axios
      .get("https://ipapi.co/json/")
      .then(response => {
        let data = response.data
        this.setState({
          countryName: data.country_name,
          countryCode: data.country_code,
          currency: data.currency,
          country: data.country
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  componentDidMount() {
    this.getGeoInfo()
  }

  render() {
    return (
      <>
        <span>
          {/* Jamaica */}
          {this.state.country == "JM" ? this.props.JM : <></>}

          {/* United States */}
          {this.state.country == "US" ? this.props.US : <></>}

          {/* Country Trinidad and Tobago */}
          {this.state.country == "TT" ? this.props.TT : <></>}

          {/* Country Barbados */}
          {this.state.country == "BB" ? this.props.BB : <></>}

          {/* Country Guyana */}
          {this.state.country == "GY" ? this.props.GY : <></>}

          {/* Country St. Vincent and the Grenadines */}
          {this.state.country == "VC" ? this.props.VC : <></>}

          {/* Country Anguilla  */}
          {this.state.country == "AI" ? this.props.AI : <></>}

          {/* Country Belize */}
          {this.state.country == "BZ" ? this.props.BZ : <></>}

          {/* Country Dominica */}
          {this.state.country == "DM" ? this.props.DM : <></>}

          {/* Country Grenada */}
          {this.state.country == "GD" ? this.props.GD : <></>}

          {/* Country St. Lucia */}
          {this.state.country == "LC" ? this.props.JMD : <></>}

          {/* Country Antigua and Barbuda */}
          {this.state.country == "AG" ? this.props.AG : <></>}

          {/* Country Cayman Islands */}
          {this.state.country == "KY" ? this.props.KY : <></>}

          {/* Country */}
          {this.state.country == "" ? this.props.JMD : <></>}
        </span>
      </>
    )
  }
}

export default CurrencyShower
