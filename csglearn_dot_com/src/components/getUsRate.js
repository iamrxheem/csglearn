import React, { Component } from "react"
import axios from "axios"

const EXCHANGE_RATE = 161

class GetUsRate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      country: "",
      amount: this.props.amount
    }

    this.formatAsCurrency = this.formatAsCurrency.bind(this)
  }

  getGeoInfo = () => {
    axios
      .get("https://ipapi.co/json/")
      .then(response => {
        let data = response.data
        this.setState({
          country: data.country
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  formatAsCurrency = amount => {
    return Intl.NumberFormat().format(amount)
  }

  componentDidMount() {
    this.getGeoInfo()
  }

  getConvertedAmount() {
    const amountInUsd = this.state.amount / EXCHANGE_RATE

    return Math.ceil(amountInUsd / 10) * 10
  }

  render() {
    if (this.state.country === "JM") {
      return (
        <>
          <>JMD ${this.formatAsCurrency(this.state.amount)}</>
        </>
      )
    } else if (this.state.country !== "JM") {
      return (
        <>
          <>USD ${this.formatAsCurrency(this.getConvertedAmount)}</>
        </>
      )
    } else {
      return (
        <>
          {/* If all else fails, which it shouldn't but it does, it will return the rate in JMD */}
          <>JMD ${this.formatAsCurrency(this.state.amount)}</>
        </>
      )
    }
  }
}

export default GetUsRate
