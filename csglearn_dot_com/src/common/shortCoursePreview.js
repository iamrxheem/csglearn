import React from "react"
import {
  Breadcrumb,
  BreadcrumbItem,
  Alert,
  Container,
  Row,
  Col,
  CardHeader,
  CardTitle,
  CardSubtitle,
  Card,
  CardImg,
  Button,
  CardFooter,
  CardBody,
  Nav,
  NavItem,
  NavLink
} from "shards-react"

class ShortCoursePreview extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Col sm={12} md={6}>
        <Card>
          {/* Featured Short Course */}
          {this.props.featured ? (
            <>
              <CardHeader className="bg-success text-white">
                {this.props.headerTitle}
              </CardHeader>
            </>
          ) : (
            <></>
          )}

          {/* Upcoming short course  */}
          {this.props.started ? (
            <>
              <CardHeader className="bg-danger text-danger">
                {this.props.headerTitle}
              </CardHeader>
            </>
          ) : (
            <></>
          )}

          {this.props.hideImg ? (
            <></>
          ) : (
            <>
              <CardImg
                style={{ width: "100%" }}
                src={this.props.imgSrc}
                alt="image of the short course"
              />
            </>
          )}

          <CardBody>
            <CardTitle>{this.props.title}</CardTitle>

            <br />
            <span>{this.props.description}</span>

            <br />
            <br />
            <Button
              disabled={this.props.disabled}
              href={"/short-courses/" + this.props.href}
            >
              {this.props.action}
            </Button>
          </CardBody>

          {this.props.showFooter ? (
            <>
              <CardFooter></CardFooter>
            </>
          ) : (
            <></>
          )}
        </Card>
        <br />
      </Col>
    )
  }
}

export default ShortCoursePreview
