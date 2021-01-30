import React, { Component } from "react"
import MainMenu from "../menus/mainMenu"
import TopNav from "../components/topNav"
import { MobileView, BrowserView } from "react-device-detect"
import "../components/layout.css"
// import "shards-ui/dist/css/shards.min.css"
import Footer from "../components/footer"
import {
  Breadcrumb,
  BreadcrumbItem,
  Alert,
  Container,
  Row,
  Col,
  CardHeader,
  CardTitle,
  Card,
  CardFooter,
  CardBody,
  Nav,
  NavItem,
  NavLink
} from "shards-react"

class SupportLayout extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <MainMenu />

        <div style={{ backgroundColor: "#f6f6f6", marginTop: "-15px" }}>
          <br />
          <Container fluid>
            {/* Content */}

            {this.props.children}

            <br />
            <Card>
              <CardBody>
                <CardTitle>Prefer to call us?</CardTitle>

                <br />
                <Row>
                  <Col md={6}>
                    <span>
                      <strong>Customer Service</strong>: +1 (876) 707-3443
                    </span>
                  </Col>
                  <Col md={6}>
                    <div className="d-block d-md-none">
                      <br />
                    </div>
                    <span>
                      <strong>Email us instead</strong>:{" "}
                      <a
                        style={{ textDecoration: "none" }}
                        href="mailto:info@csglearn.com"
                      >
                        info@csglearn.com
                      </a>
                    </span>
                  </Col>
                </Row>
              </CardBody>
            </Card>
            <br />
            <br />
          </Container>
        </div>

        {/* General footer */}
        <Footer />
      </>
    )
  }
}

export default SupportLayout
