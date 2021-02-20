import React, { Component } from "react"
import {
  Breadcrumb,
  BreadcrumbItem,
  Alert,
  Container,
  Row,
  Col,
  Button
} from "shards-react"

class HomeRightPromoComponent extends Component {
  render() {
    return (
      <>
        <Alert theme="primary">
          <br />
          <h4>Online SAT Classes</h4>

          <span>
            Our SAT classes prepares students to take the 2021 format of the SAT
            exams, and opens a world of opportunities for international study.
          </span>

          <br />
          <br />
          <Button
            style={{ textDecoration: "none" }}
            href="/programmes/sat"
            theme="light"
            pill
            outline
          >
            Starting soon
          </Button>
          <br />
          <br />
        </Alert>

        <Alert theme="success">
          <br />
          <h4>Short Courses & Certification</h4>

          <span>
            Enroll in our 3-months certification courses and learn in-demand
            skills such as Project Management, Web Development, Mobile App
            Development and more!
          </span>

          <br />
          <br />
          <Button
            style={{ textDecoration: "none" }}
            href="/short-courses"
            outline
            theme="light"
          >
            Find a course -->
          </Button>
          <br />
          <br />
        </Alert>
      </>
    )
  }
}

export default HomeRightPromoComponent
