import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Table from "react-bootstrap/Table"

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
import ThreeStepProcess from "../components/threeStepProcess"

class CalcPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      amount: "",
      jmd: ``,
      fee: ``,
      received: ``,
      rate: 140,
      percentage: 0.88
    }

    this.handleAmountChange = this.handleAmountChange.bind(this)
  }

  componentDidMount() {}

  handleAmountChange(e) {
    this.setState({
      amount: e.target.value,
      jmd: e.target.value * this.state.rate,
      received: e.target.value * this.state.rate * 0.88
    })

    this.setState({ fee: this.state.jmd - this.state.received })

    this.setState({})
  }

  render() {
    var formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"

      // These options are needed to round to whole numbers if that's what you want.
      //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
      //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    })

    return (
      <>
        <Layout>
          <Seo title="Calculator" />

          <Container>
            <Breadcrumb style={{ backgroundColor: "" }}>
              <BreadcrumbItem>
                <a href="/">Home</a>
              </BreadcrumbItem>
              <BreadcrumbItem active>Calculator</BreadcrumbItem>
            </Breadcrumb>

            <br />

            <Row>
              <Col sm={6}>
                <h4>Calculator</h4>

                <br />
                <Form>
                  <Row>
                    <Col sm={6}>
                      <FormGroup>
                        <label>
                          Source of Funds
                          <span className="ml-1 text-danger">*</span>
                        </label>
                        <FormSelect>
                          <option>Remote Work</option>
                          <option>Friends & Family</option>
                          <option>Client Payment</option>
                          <option>Other</option>
                        </FormSelect>
                      </FormGroup>
                    </Col>
                    <Col sm={6}>
                      <FormGroup>
                        <label>
                          Amount (in USD)
                          <span className="ml-1 text-danger">*</span>
                        </label>

                        <Input
                          onChange={this.handleAmountChange}
                          value={this.state.amount}
                          placeholder=""
                        />
                      </FormGroup>
                    </Col>
                    <Col sm={6}>
                      <FormGroup>
                        <label>
                          Payment Service
                          <span className="ml-1 text-danger">*</span>
                        </label>
                        <FormSelect>
                          <option>PayPal</option>
                          <option>CashApp</option>
                          <option>Zelle</option>
                          <option>Venmo</option>
                          <option>Online Payment</option>
                        </FormSelect>
                      </FormGroup>
                    </Col>
                    <Col sm={6}></Col>
                  </Row>
                </Form>
                <br />
              </Col>

              <Col sm={6}>
                <h4>What You Get</h4>

                <br />
                <Table>
                  <tbody>
                    <tr>
                      <td>Amount in JMD</td>
                      <td>{formatter.format(this.state.jmd)}</td>
                    </tr>
                    <tr>
                      <td>Conversion Rate</td>
                      <td>{formatter.format(this.state.rate)}</td>
                    </tr>
                    <tr>
                      <td>Processing Fee</td>
                      <td>
                        {formatter.format(this.state.jmd - this.state.received)}
                      </td>
                    </tr>
                  </tbody>
                </Table>

                <h5>
                  Amount Received: JMD {formatter.format(this.state.received)}
                </h5>

                <br />
                <Row>
                  <Col xs={6}>
                    <Button
                      style={{ width: "100%" }}
                      color="light"
                      size="md"
                      href="/create-account"
                    >
                      Create Account
                    </Button>
                  </Col>
                  <Col xs={6}>
                    <Button
                      style={{ width: "100%" }}
                      color="primary"
                      size="md"
                      href="/transfer-request"
                    >
                      Create Transfer
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>

            <br />
            <br />
            <ThreeStepProcess />
          </Container>
          <br />
          <br />
        </Layout>
      </>
    )
  }
}

export default CalcPage
