import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import moment from "moment" // require

// View Components
import MobileView from "../../common/mobileView"
import BrowserView from "../../common/browserView"
import $ from "jquery"

import {
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormInput,
  FormGroup,
  Row,
  Col,
  Button,
  InputGroup,
  InputGroupText,
  InputGroupAddon
} from "shards-react"
import ShowMoreText from "react-show-more-text"

class PaymentPlanAgreement extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      guardian: "",
      tuition: 0,
      months: 8,
      installments: 0.0,
      currecny: "JMD"
    }

    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleTuitionChange = this.handleTuitionChange.bind(this)
    this.handleMonthsToPay = this.handleMonthsToPay.bind(this)
    this.calculateDownPayments = this.calculateDownPayments.bind(this)
  }

  calculateDownPayments() {
    this.setState({
      installments: (this.state.tuition / this.state.months) * 10
    })
  }

  handleTuitionChange(e) {
    if (!e) {
      this.setState({ tuition: 0 })
    } else {
      this.setState({ tuition: parseInt(e.target.value) })
    }

    this.calculateDownPayments()
  }

  handleMonthsToPay(e) {
    if (!e) {
      this.setState({ months: 0 })
    } else {
      this.setState({ months: parseInt(e.target.value) })
    }

    this.calculateDownPayments()
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value })
  }

  executeOnClick(isExpanded) {
    console.log(isExpanded)
  }

  render() {
    var today = new Date()
    var date =
      today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate()

    var formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "JMD"
    })

    return (
      <Layout hideAlert>
        <SEO title="Payment Plan Agreement" description="" />

        <Container>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to="/agreements">Agreements</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Payment Plan</BreadcrumbItem>
          </Breadcrumb>

          <h3>Tuition Payment Plan Agreement</h3>

          <Form>
            <br />

            <span className="text-danger">
              PLEASE ENTER THE CREDENTIALS PROVIDED BY YOUR ENROLLMENT OFFICER.{" "}
              <strong>DO NOT COPY AND PASTE THE INFORMATION.</strong>
            </span>

            <br />
            <br />
            <Row>
              <Col sm={4}>
                <FormGroup>
                  <InputGroup className="mb-2">
                    <InputGroupAddon type="prepend">
                      <InputGroupText>
                        <i className="fas fa-user"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <FormInput
                      value={this.state.name}
                      onPaste={this.handleNameChange}
                      onChange={this.handleNameChange}
                      placeholder="Enter your full legal name"
                    />
                  </InputGroup>
                </FormGroup>
              </Col>
              <Col sm={4}>
                <MobileView>
                  <br />
                </MobileView>

                <FormGroup>
                  <InputGroup className="mb-2">
                    <InputGroupAddon type="prepend">
                      <InputGroupText>$</InputGroupText>
                    </InputGroupAddon>
                    <FormInput
                      value={this.state.tuition}
                      onChange={this.handleTuitionChange}
                      placeholder="Enter the provided tuition"
                    />
                  </InputGroup>
                </FormGroup>
              </Col>
              <Col sm={4}>
                <MobileView>
                  <br />
                </MobileView>
                <FormGroup>
                  <InputGroup className="mb-2">
                    <InputGroupAddon type="prepend">
                      <InputGroupText>
                        <span>MONTHS TO PAY</span>
                      </InputGroupText>
                    </InputGroupAddon>
                    <FormInput
                      value={this.state.months}
                      onChange={this.handleMonthsToPay}
                      placeholder=""
                    />
                  </InputGroup>
                </FormGroup>
              </Col>
            </Row>

            <br />
            <span>
              This Payment Plan Agreement (the "Agreement") is made effective{" "}
              {moment().format("DD MMMM YYYY")}.
            </span>

            <br />
            <br />
            <ShowMoreText
              /* Default options */
              lines={3}
              more="Show more"
              less="Show less"
              className="content-css"
              anchorClass="my-anchor-css-class"
              onClick={this.executeOnClick}
              expanded={false}
            >
              <span>
                By this contract, I, <b>{this.state.name.toUpperCase()}</b>,
                hereafter known as "I", agree to pay for the services rendered
                by <b>CSG LEARNING INSTITUTE LIMITED</b>, hereafter known as
                "Institution", by the following in exchange for educational
                classes and any other products and/ or services provided.
              </span>

              <br />
              <br />
              <span>
                By this agreement, it is agreed that a payment of{" "}
                <b>{formatter.format(this.state.installments)}</b> will be
                surrendered to Institution <b>EVERY MONTH</b> for the next{" "}
                <b>{this.state.months} MONTHS</b> or until the last Friday in
                April of the year of the scheduled examination, not includng
                examinations that were deferred, or whichever comes first, until
                the total of the payment required, which is{" "}
                <b>{formatter.format(this.state.tuition)}</b>, has been cleared.
                The first payment will start on{" "}
                {25 + " " + moment().format("MMMM YYYY")} and is due on the 25th
                of each month, ending on the last Friday in April of the year of
                the scheduled examination, not includng examinations that were
                deferred.
              </span>

              <br />
              <br />
              <span>
                These payments include any interest and other charges that may
                apply.
              </span>

              <br />
              <br />
              <span>
                This agreement is binding, and failure to meet its terms will
                allow the Institution to take recoruse. I will be given a grace
                period of two (2) days to make payments, and understand that a
                late payment incure will incur a fee of{" "}
                <strong>1% OF THE REMAINING BALANCE</strong> every{" "}
                <strong>10 DAYS</strong>. I understand that insufficient payment
                and bounced checks will incur a fee of{" "}
                <strong>1% OF THE REMAINING BALANCE</strong>.
              </span>

              <br />
              <br />
              <span>
                By entering my information and submitting this form, I agree to
                the terms as described above. Alteration to this agreement can
                only be made by Institution and I will be notified by at least
                five (5) business days in advance of the alteration's effective
                date. Both parties will receive a copy of this agreement and
                will be respobsible for upholding its terms.
              </span>

              <br />
              <br />
            </ShowMoreText>

            <br />
            <br />
            <br />
            <br />
            <Row>
              <Col sm={4}>
                <FormGroup>
                  <label>
                    Candidate Name <span className="text-danger pl-1">*</span>
                  </label>
                  <FormInput placeholder="Enter full legal name again" />
                </FormGroup>
              </Col>
              <Col sm={4}>
                <MobileView>
                  <br />
                </MobileView>

                <FormGroup>
                  <label>Parent's / Guardian's Name</label>
                  <FormInput placeholder="Enter full legal name" />
                  <small className="text-danger">
                    Mandatory for minors under 18 yrs
                  </small>
                </FormGroup>
              </Col>
              <Col sm={4}>
                <MobileView>
                  <br />
                </MobileView>
                <FormGroup>
                  <label>
                    Taody's Date <span className="text-danger pl-1">**</span>
                  </label>
                  <FormInput value={date} />
                </FormGroup>
              </Col>
              <Col sm={4}>
                <MobileView>
                  <br />
                </MobileView>
                <FormGroup>
                  <Button type="submit" style={{ width: "100%" }}>
                    I agree
                  </Button>
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </Container>
      </Layout>
    )
  }
}

export default PaymentPlanAgreement
