import React from "react"

class HideInProduction extends React.Component {
  render() {
    if (this.props.bypass === true) {
      return (
        <>
          <></>
        </>
      )
    } else {
      return (
        <>
          {process.env.NODE_ENV !== "production" ? (
            <>{this.props.children}</>
          ) : (
            <React.Fragment />
          )}
        </>
      )
    }
  }
}

export default HideInProduction

/* /menus - /mainMenu */
