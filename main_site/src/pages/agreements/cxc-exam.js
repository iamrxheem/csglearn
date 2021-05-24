import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import moment from "moment" // require
import $ from "jquery"

// View Components
import MobileView from "../../common/mobileView"
import BrowserView from "../../common/browserView"
import axios from "axios"
import { browserName, osName, getUA } from "react-device-detect"

import {
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormInput,
  FormGroup,
  Row,
  Col,
  Button
} from "shards-react"

import ShowMoreText from "react-show-more-text"

class Agreements extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      parent: "",
      version: "1",
      dateSigned: "",
      ip: "",
      deviceType: "",
      canSubmit: false
    }

    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.checkCanSubmit = this.checkCanSubmit.bind(this)
    this.isEmpty = this.isEmpty.bind(this)
  }

  isEmpty(str) {
    return str.length === 0 || !str.trim()
  }

  getGeoInfo = () => {
    axios
      .get("https://ipapi.co/json/")
      .then(response => {
        let data = response.data
        this.setState({
          ip: data.ip,
          deviceType: getUA
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  checkCanSubmit() {
    if (this.isEmpty(this.state.name)) {
      this.setState({ canSubmit: false })
      return false
    } else {
      this.setState({ canSubmit: true })
    }
  }

  handleSubmit(e) {
    e.preventDefault()
  }

  componentDidMount() {
    this.getGeoInfo()
  }

  executeOnClick(isExpanded) {
    console.log(isExpanded)
  }

  // Handles the input of the first name
  handleNameChange(e) {
    this.setState({ name: e.target.value })

    this.checkCanSubmit()
  }

  render() {
    var today = new Date()
    var date =
      today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate()

    return (
      <Layout hideAlert>
        <SEO title="CXC Examination Registration Agreement" description="" />

        <Container>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to="/agreements">Agreements</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Exam Registration</BreadcrumbItem>
          </Breadcrumb>

          <h3>CXC Examination Registration Agreement</h3>

          <br />
          <span>
            This CXC Examination Registration Agreement (the "Agreement") is
            made effective {moment().format("DD MMMM YYYY")}, between{" "}
            <b>CSG LEARNING INSTITUTE LIMITED</b> and{" "}
            <b>
              {this.state.name
                ? this.state.name.toUpperCase()
                : "[ENTER YOUR FULL NAME BELOW]"}
            </b>
            .
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
            <span></span>
          </ShowMoreText>

          <br />
          <br />
          <Form
            action="https://forms.zohopublic.com/csglearninginstitute/form/CXCExaminationRegistrationAgreement/formperma/8I_49gdn8i389y6ORKor9iIc9_d5BM7szeX03a_t1P0/htmlRecords/submit"
            name="form"
            id="form"
            method="POST"
            acceptCharset="UTF-8"
            encType="multipart/form-data"
          >
            <FormInput type="hidden" name="zf_referrer_name" defaultValue />
            {/* To Track referrals , place the referrer name within the " " in the above hidden input field */}
            <FormInput type="hidden" name="zf_redirect_url" defaultValue />
            {/* To redirect to a specific page after record submission , place the respective url within the " " in the above hidden input field */}
            <FormInput type="hidden" name="zc_gad" defaultValue />
            {/* If GCLID is enabled in Zoho CRM Integration, click details of AdWords Ads will be pushed to Zoho CRM */}

            <Row>
              <Col sm={4}>
                <FormGroup>
                  <label>
                    Candidate Name <span className="text-danger pl-1">*</span>
                  </label>

                  <FormInput
                    type="text"
                    name="SingleLine"
                    id="name"
                    defaultValue
                    fieldtype={1}
                    maxLength={255}
                    value={this.state.name}
                    onPaste={this.handleNameChange}
                    onChange={this.handleNameChange}
                    placeholder="Enter full legal name"
                  />
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
                    <b> Mandatory for minors under 18 yrs</b>
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
                  <FormInput
                    value={date}
                    type="text"
                    name="SingleLine1"
                    defaultValue
                    fieldtype={1}
                    maxLength={255}
                  />
                </FormGroup>
              </Col>
              <Col sm={4}>
                {/* Contract Version */}
                <FormInput
                  value={this.state.version}
                  type="text"
                  name="SingleLine4"
                  hidden
                />
              </Col>
              <Col sm={4}>
                {/* Date Signed */}
                <FormInput
                  type="text"
                  name="SingleLine1"
                  defaultValue
                  fieldtype={1}
                  maxLength={255}
                  value={date}
                  hidden
                />
              </Col>
              <Col sm={4}>
                {/* Device Type */}
                <FormInput
                  type="text"
                  name="SingleLine3"
                  defaultValue
                  fieldtype={1}
                  maxLength={255}
                  value={this.state.deviceType}
                  hidden
                />
              </Col>
              <Col sm={4}>
                {/* IP Address */}
                <FormInput
                  type="text"
                  name="SingleLine2"
                  defaultValue
                  fieldtype={1}
                  maxLength={255}
                  value={this.state.ip}
                  hidden
                />
              </Col>
              <Col sm={4}>
                <br />
                <FormGroup>
                  <Button
                    disabled={!this.state.canSubmit}
                    onSubmit={this.handleSubmit}
                    type="submit"
                    style={{ width: "100%" }}
                  >
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

export default Agreements
