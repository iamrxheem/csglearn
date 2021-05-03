import * as React from "react"
import { Row, Col, Container } from "shards-react"

// images
import NewApproachImg from "../images/home/new-approach.png"
import LearnAtYourOwnPaceImg from "../images/home/own-pace.png"
import LiteracyJamaicaImg from "../images/home/literacy-jamaica.png"

const LowerShow = props => (
  <>
    <>
      <br />
      <Row>
        <Col md={6}>
          <img
            style={{ float: "left" }}
            src={LiteracyJamaicaImg}
            style={{ width: "100%" }}
          />
        </Col>
        <Col md={6}></Col>
      </Row>
    </>
  </>
)

export default LowerShow
