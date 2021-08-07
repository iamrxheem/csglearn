import * as React from "react"
import { Link } from "gatsby"
import Logo from "../images/logo.png"
import {
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Col,
  Button,
  Alert
} from "shards-react"

const CareerBox = props => (
  <li>
    <a href className="d-card">
      <img
        src="https://kaisershotel.com/wp-content/uploads/2020/07/pure-white-background-85a2a7fd.jpg"
        className="card__image"
        alt=""
      />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
            <path />
          </svg>
          <img className="card__thumb" src={Logo} alt="" />
          <div className="card__header-text">
            <h3 className="card__title">{props.title}</h3>
            <span className="card__status">{props.status}</span>
          </div>
        </div>
        <p className="card__description">{props.description}</p>
      </div>
    </a>
  </li>
)

export default CareerBox
