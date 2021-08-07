import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// View Components
import MobileView from "../common/mobileView"
import BrowserView from "../common/browserView"
import { PayPalButton } from "react-paypal-button-v2"

import {
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Col,
  Button,
  Form,
  FormInput,
  FormGroup,
  Alert,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  FormSelect,
  DropdownItem
} from "shards-react"
import Modal from "react-bootstrap/Modal"
import Swal from "sweetalert2"

class PayNow extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <Layout hideAlert>
        <SEO title="Recommended Textbooks" description="" />

        <Container>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Textbooks</BreadcrumbItem>
          </Breadcrumb>

          <h3></h3>
          <br />

          <Row>
            <Col sm={6}></Col>
            <Col sm={6}></Col>
          </Row>
        </Container>
      </Layout>
    )
  }
}

export default PayNow
