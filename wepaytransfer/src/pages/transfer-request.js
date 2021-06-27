import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import {
  Alert,
  Button,
  Container,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  UncontrolledAlert
} from "reactstrap"
import {
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Col,
  FormInput,
  FormSelect
} from "shards-react"
import Swal from "sweetalert2"

const Page = () => (
  <>
    <Layout>
      <Seo title="Create Transfer Request" />

      <Container>
        <Breadcrumb style={{ backgroundColor: "" }}>
          <BreadcrumbItem>
            <a href="/">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>Transfer Request</BreadcrumbItem>
        </Breadcrumb>

        <br />
        <Row>
          <Col sm={6}>
            <h3>Request Transfer</h3>

            <p>
              Before you request a transfer, please ensure that you have already
              submitted your <a href="/create-account">banking details</a>.
            </p>

            <p>
              Transfer request form can be completed{" "}
              <a
                href="https://forms.zohopublic.com/csglearninginstitute/form/WePayMoneyTransferAlert/formperma/SLpvcIa7cNe7lQE7QiRvtsOzZtx3wQpMjyiKQKhTZXM"
                target="_blank"
              >
                here
              </a>
              .
            </p>

            <br />
            <br />
          </Col>
          <Col sm={6}>
            <Alert className="alert-default">
              <h4 className="text-white">Send Money Online</h4>
              <p>
                Pay via credit or debit card securely and send money to anyone
                in Jamaica online.
              </p>
              <p>
                Simply pay online <a href="/merchant-pay">here</a>, and create
                create a Money Transfer Alert.
              </p>

              <br />
              <Button href="/merchant-pay" type="button">
                Send today
              </Button>
              <br />
            </Alert>
          </Col>
        </Row>
      </Container>
    </Layout>
  </>
)

export default Page
