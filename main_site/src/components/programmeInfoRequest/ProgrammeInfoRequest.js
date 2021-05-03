import * as React from "react"

import {
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Col,
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button
} from "shards-react"

class ProgrammeInfoRequest extends React.Component {
  render() {
    return (
      <>
        <Card>
          <CardHeader>Get Programme Details</CardHeader>
          <CardBody>
            <span>This is the Card body.</span>
          </CardBody>
          <CardFooter></CardFooter>
        </Card>
      </>
    )
  }
}

export default ProgrammeInfoRequest
