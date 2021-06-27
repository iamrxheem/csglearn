import React from "react"
import { Row, Col, Container } from "shards-react"

const ProgrammeSummary = props => (
  <>
    <h3>Programme Summary</h3>

    <br />
    <Row style={{ paddingLeft: "20px" }}>
      {/* Level of Study */}
      <Col xs={3} md={3}>
        <i
          style={{ width: "100%", height: "100%" }}
          className="fas fa-graduation-cap fa-3x"
        ></i>
      </Col>
      <Col xs={9} md={9}>
        <span>
          <b>LEVEL OF STUDY</b>
        </span>

        <br />
        <span style={{ marginTop: "10px" }}>{props.levelOfStudy}</span>
      </Col>

      {props.hideCourses ? (
        <></>
      ) : (
        <>
          <br />
          <br />
          <br />
          <br />
          {/* Number of Courses */}
          <Col xs={3} md={3}>
            <i className="fas fa-list-ul fa-3x"></i>
          </Col>
          <Col xs={9} md={9}>
            <span>
              <b>NUMBER OF COURSES</b>
            </span>

            <br />
            <span style={{ marginTop: "10px" }}>{props.numberOfCourses}</span>
          </Col>
        </>
      )}

      <br />
      <br />
      <br />
      <br />

      {/* Options */}
      {props.hasOptions ? (
        <>
          {/* Number of Courses */}
          <Col xs={3} md={3}>
            <i className="fas fa-cogs  fa-3x"></i>
          </Col>
          <Col xs={9} md={9}>
            <span>
              <b>OPTIONS</b>
            </span>

            <br />
            <span style={{ marginTop: "10px" }}>{props.options}</span>
          </Col>

          <br />
          <br />
          <br />
          <br />
          {/* End options */}
        </>
      ) : (
        <></>
      )}

      {props.showCost ? (
        <>
          {/* Duration */}
          <Col xs={3} sm={3} md={3}>
            <i className="fas fa-money-check-alt fa-3x"></i>
          </Col>
          <Col xs={9} sm={9} md={9}>
            <span>
              <b>COST</b>
            </span>

            <br />
            <span style={{ marginTop: "10px" }}>{props.cost}</span>
          </Col>

          <br />
          <br />
          <br />
          <br />
        </>
      ) : (
        <></>
      )}

      {/* Mode of Study */}
      <Col xs={3} sm={3} md={3}>
        <i className="fas fa-laptop fa-3x"></i>
      </Col>
      <Col xs={9} sm={9} md={9}>
        <span>
          <b>MODE OF STUDY</b>
        </span>

        <br />
        <span style={{ marginTop: "10px" }}>{props.modeOfStudy}</span>
      </Col>

      <br />
      <br />
      <br />
      <br />
      {/* Duration */}
      <Col xs={3} sm={3} md={3}>
        <i className="far fa-clock fa-3x"></i>
      </Col>
      <Col xs={9} sm={9} md={9}>
        <span>
          <b>DURATION</b>
        </span>

        <br />
        <span style={{ marginTop: "10px" }}>{props.duration}</span>
      </Col>

      <br />
      <br />
      <br />
      <br />

      {props.frequency ? (
        <>
          {/* Duration */}
          <Col xs={3} sm={3} md={3}>
            <i className="fas fa-money-check-alt fa-3x"></i>
          </Col>
          <Col xs={9} sm={9} md={9}>
            <span>
              <b>COST</b>
            </span>

            <br />
            <span style={{ marginTop: "10px" }}>{props.cost}</span>
          </Col>

          <br />
          <br />
          <br />
          <br />
        </>
      ) : (
        <></>
      )}

      {/* Term Begins On */}
      <Col xs={3} sm={3} md={3}>
        <i className="fas fa-calendar-alt fa-3x"></i>
      </Col>
      <Col xs={9} sm={9} md={9}>
        <span>
          <b>TERM BEGINS ON</b>
        </span>

        <br />
        <span style={{ marginTop: "10px" }}>{props.termBeginsOn}</span>
      </Col>
    </Row>
  </>
)

export default ProgrammeSummary
