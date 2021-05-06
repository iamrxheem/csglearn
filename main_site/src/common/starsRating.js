import * as React from "react"

const StarsRating = props => (
  <>
    <>
      {props.stars >= 1 ? (
        <i className="fas fa-star text-warning fa-sm"></i>
      ) : null}
      {props.stars >= 2 ? (
        <i className="fas fa-star text-warning fa-sm"></i>
      ) : null}
      {props.stars >= 3 ? (
        <i className="fas fa-star text-warning fa-sm"></i>
      ) : null}
      {props.stars >= 4 ? (
        <i className="fas fa-star text-warning fa-sm"></i>
      ) : null}
      {props.stars >= 5 ? (
        <i className="fas fa-star text-warning fa-sm"></i>
      ) : null}
      <br />
    </>
  </>
)

export default StarsRating
