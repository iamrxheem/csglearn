import * as React from "react"
import { Link } from "gatsby"
import {
  Row,
  Col,
  Container,
  Alert,
  Card,
  CardBody,
  CardFooter
} from "shards-react"

const alertStyle = {
  width: "400px",
  margin: "20px"
}

const theme = ""

const Reviews = () => (
  <>
    <div className="bulma-tabs">
      <ul>
        <li>
          <Card outline theme="secondary" style={alertStyle}>
            <CardBody></CardBody>
          </Card>
        </li>
      </ul>
    </div>
  </>
)

export default Reviews
