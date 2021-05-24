import * as React from "react"
import { Link } from "gatsby"

import {
  Row,
  Button,
  Col,
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormInput,
  FormGroup,
  FormSelect,
  FormRadio,
  FormCheckbox,
  Alert
} from "shards-react"
import MobileView from "../../common/mobileView"
import Swal from "sweetalert2/dist/sweetalert2.js"
import CostBreakdown from "../../components/costBreakdown"

class CsecEnrollment extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      gender: "",
      email: "",
      phone: "",
      oneOneOneAlert: false,
      subjects: []
    }

    this.manageSubjects = this.manageSubjects.bind(this)

    Array.prototype.remove = function() {
      var what,
        a = arguments,
        L = a.length,
        ax
      while (L && this.length) {
        what = a[--L]
        while ((ax = this.indexOf(what)) !== -1) {
          this.splice(ax, 1)
        }
      }
      return this
    }
  }

  manageSubjects(e) {
    const allSubjects = this.state.subjects

    if (!allSubjects.includes(e.target.value)) {
      allSubjects.push(e.target.value)
    } else {
      allSubjects.remove(e.target.value)
    }

    this.setState({
      subjects: allSubjects
    })
  }

  render() {
    return (
      <>
        <Form
          acceptCharset="UTF-8"
          action={this.props.action}
          encType="multipart/form-data"
          method="POST"
          name="form"
        >
          <FormGroup>
            <input name="zf_referrer_name" type="hidden" value="" />
            <input name="zf_redirect_url" type="hidden" value="" />
            <input name="zc_gad" type="hidden" value="" />
          </FormGroup>

          <h3>{this.props.title}</h3>

          <br />
          <span>{this.props.description}</span>

          <br />
          <br />
          <span className="">
            Please submit the application{" "}
            <strong className="text-danger">ONCE </strong>. If you have
            encountered an error, please{" "}
            <a
              href="https://api.whatsapp.com/send/?phone=18767073443&text&app_absent=0"
              target="_blank"
            >
              contact us
            </a>{" "}
            to verify your enrollment status, or try completeing the application
            directly{" "}
            <a target="_blank" href={this.props.formUrl}>
              here
            </a>
            .
          </span>

          <br />
          <br />
          <br />
          <label>
            Candidate Name <em style={{ color: "red" }}>*</em>
          </label>
          <Row>
            <Col sm={6}>
              <FormGroup>
                <FormInput
                  maxlength="255"
                  name="Name_First"
                  type="text"
                  placeHolder="First name"
                />
              </FormGroup>
            </Col>
            <Col sm={6}>
              <FormGroup>
                <FormInput
                  maxlength="255"
                  name="Name_Last"
                  type="text"
                  placeHolder="Last name"
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col sm={6}>
              <FormGroup>
                <label>
                  Gender <em style={{ color: "red" }}>*</em>
                </label>

                <Row>
                  <Col xs={6} md={4}>
                    <FormGroup>
                      <input name="Radio" type="radio" value="Male" />
                      <label className="ml-3" for="Radio_1">
                        Male
                      </label>
                    </FormGroup>
                  </Col>
                  <Col xs={6} md={4}>
                    <FormGroup>
                      <input name="Radio" type="radio" value="Female" />
                      <label className="ml-3" for="Radio_2">
                        Female
                      </label>
                    </FormGroup>
                  </Col>
                </Row>
              </FormGroup>
            </Col>
            <Col sm={6}>
              <FormGroup>
                <label>
                  Date of Birth <em style={{ color: "red" }}>*</em>
                </label>

                <FormInput type="text" name="SingleLine" />

                <small className="text-danger">
                  <strong>dd-MMM-yyyy</strong>
                </small>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col sm={6}>
              <FormGroup>
                <label>
                  Email <em style={{ color: "red" }}>*</em>
                </label>
                <FormInput name="Email" type="text" />
              </FormGroup>
            </Col>
            <Col sm={6}>
              <FormGroup>
                <label>
                  Phone <em style={{ color: "red" }}>*</em>
                </label>
                <FormInput name="PhoneNumber_countrycode" type="text" />
              </FormGroup>
            </Col>
          </Row>

          <FormGroup>
            <label>
              Address <em style={{ color: "red" }}>*</em>
            </label>

            <Row>
              <Col xs={12}>
                <FormGroup>
                  <FormInput
                    maxlength="255"
                    name="Address_AddressLine1"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col sm={6}>
                <FormGroup>
                  <FormInput maxlength="255" name="Address_City" type="text" />
                  <small>
                    City <em style={{ color: "red" }}>*</em>
                  </small>
                </FormGroup>
              </Col>
              <Col sm={6}>
                <FormGroup>
                  <FormInput
                    maxlength="255"
                    name="Address_Region"
                    type="text"
                  />
                  <small>State/Region/Province</small>
                </FormGroup>
              </Col>
              <Col sm={6}>
                <FormGroup>
                  <FormInput
                    maxlength="255"
                    name="Address_ZipCode"
                    type="text"
                  />
                  <small>Postal / Zip Code</small>
                </FormGroup>
              </Col>

              <Col sm={6}>
                <FormGroup>
                  <FormSelect name="Address_Country">
                    <option>Anguilla</option>
                    <option>Antigua and Barbuda</option>
                    <option>Barbados</option>
                    <option>Cayman Islands</option>
                    <option>Dominica</option>
                    <option>Grenada</option>
                    <option>Guyana</option>
                    <option selected>Jamaica</option>
                    <option>Saint Kitts and Nevis</option>
                    <option>Saint Lucia</option>
                    <option>Saint Vincent and the Grenadines</option>
                    <option>Trinidad and Tobago</option>
                    <option>United States</option>
                  </FormSelect>
                  <small>
                    Country <em style={{ color: "red" }}>*</em>
                  </small>
                </FormGroup>
              </Col>
              <Col sm={4}>
                <br />
                <label>
                  Class Type <em style={{ color: "red" }}>*</em>
                </label>
                <Row>
                  <Col xs={6}>
                    <FormGroup>
                      <input
                        type="radio"
                        id="Radio1_1"
                        name="Radio1"
                        value="Group&#x20;Class"
                        onClick={() => {
                          this.setState({
                            oneOneOneAlert: false
                          })
                        }}
                      />
                      <label for="Radio1_1" className="ml-2">
                        Group&#x20;Class
                      </label>
                    </FormGroup>
                  </Col>
                  <Col xs={6}>
                    <FormGroup>
                      <input
                        type="radio"
                        id="Radio1_2"
                        name="Radio1"
                        value="1-on-1&#x20;Class"
                        onClick={() => {
                          this.setState({
                            oneOneOneAlert: true
                          })
                        }}
                      />
                      <label for="Radio1_2" className="ml-2">
                        1-on-1&#x20;Class
                      </label>
                    </FormGroup>
                  </Col>
                </Row>

                <Alert theme="primary" hidden={!this.state.oneOneOneAlert}>
                  <h6>Head's up!</h6>

                  <span>
                    One-on-one classes are charged at a rate of
                    <strong> USD $70 per subject</strong>.
                  </span>
                </Alert>
              </Col>
            </Row>
          </FormGroup>

          <FormGroup>
            <label>
              Choose your subjects<em style={{ color: "red" }}>*</em>
            </label>

            <Row>
              <Col xs={12} md={3}>
                <FormGroup>
                  <FormCheckbox
                    name="Checkbox"
                    type="checkbox"
                    value="English A"
                    onClick={this.manageSubjects}
                  >
                    English A
                  </FormCheckbox>
                </FormGroup>
              </Col>
              <Col xs={12} md={3}>
                <FormGroup>
                  <FormCheckbox
                    name="Checkbox"
                    type="checkbox"
                    value="Mathematics"
                    onClick={this.manageSubjects}
                  >
                    Mathematics
                  </FormCheckbox>
                </FormGroup>
              </Col>
              <Col xs={12} md={3}>
                <FormGroup>
                  <FormCheckbox
                    name="Checkbox"
                    type="checkbox"
                    value="Biology"
                    onClick={this.manageSubjects}
                  >
                    Biology
                  </FormCheckbox>
                </FormGroup>
              </Col>
              <Col xs={12} md={3}>
                <FormGroup>
                  <FormCheckbox
                    name="Checkbox"
                    type="checkbox"
                    value="Chemistry"
                    onClick={this.manageSubjects}
                  >
                    Chemistry
                  </FormCheckbox>
                </FormGroup>
              </Col>
              <Col xs={12} md={3}>
                <FormGroup>
                  <FormCheckbox
                    name="Checkbox"
                    type="checkbox"
                    value="Physics"
                    onClick={this.manageSubjects}
                  >
                    Physics
                  </FormCheckbox>
                </FormGroup>
              </Col>
              <Col xs={12} md={3}>
                <FormGroup>
                  <FormCheckbox
                    name="Checkbox"
                    type="checkbox"
                    value="Human &amp; Social Biology"
                    onClick={this.manageSubjects}
                  >
                    Human &amp; Social Biology
                  </FormCheckbox>
                </FormGroup>
              </Col>
              <Col xs={12} md={3}>
                <FormGroup>
                  <FormCheckbox
                    name="Checkbox"
                    type="checkbox"
                    value="Principles of Accounts"
                    onClick={this.manageSubjects}
                  >
                    Principles of Accounts
                  </FormCheckbox>
                </FormGroup>
              </Col>
              <Col xs={12} md={3}>
                <FormGroup>
                  <FormCheckbox
                    name="Checkbox"
                    type="checkbox"
                    value="Principles of Business"
                    onClick={this.manageSubjects}
                  >
                    Principles of Business
                  </FormCheckbox>
                </FormGroup>
              </Col>
              <Col xs={12} md={3}>
                <FormGroup>
                  <FormCheckbox
                    name="Checkbox"
                    type="checkbox"
                    value="Information Technology"
                    onClick={this.manageSubjects}
                  >
                    Information Technology
                  </FormCheckbox>
                </FormGroup>
              </Col>
              <Col xs={12} md={3}>
                <FormGroup>
                  <FormCheckbox
                    name="Checkbox"
                    type="checkbox"
                    value="Social Studies"
                    onClick={this.manageSubjects}
                  >
                    Social Studies
                  </FormCheckbox>
                </FormGroup>
              </Col>
              <Col xs={12} md={3}>
                <FormGroup>
                  <FormCheckbox
                    type="checkbox"
                    id="Checkbox_8"
                    name="Checkbox"
                    value="Office&#x20;Administration"
                    onClick={this.manageSubjects}
                  >
                    Office&#x20;Administration
                  </FormCheckbox>
                </FormGroup>
              </Col>
              <Col xs={12} md={3}>
                <FormGroup>
                  <FormCheckbox
                    type="checkbox"
                    id="Checkbox_4"
                    name="Checkbox"
                    value="Geography"
                    onClick={this.manageSubjects}
                  >
                    Geography
                  </FormCheckbox>
                </FormGroup>
              </Col>
            </Row>
          </FormGroup>

          <br />
          <Button type="submit">Submit</Button>

          <br />
          <br />
          <span className="">
            Please submit the application{" "}
            <strong className="text-danger">ONCE </strong>. If you have
            encountered an error, please{" "}
            <a
              href="https://api.whatsapp.com/send/?phone=18767073443&text&app_absent=0"
              target="_blank"
            >
              contact us
            </a>{" "}
            to verify your enrollment status, or try completeing the form
            directly{" "}
            <a target="_blank" href={this.props.formUrl}>
              here
            </a>
            .
          </span>
        </Form>
      </>
    )
  }
}

export default CsecEnrollment
