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

class CapeEnrollment extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      gender: "",
      email: "",
      phone: "",
      oneOneOneAlert: false
    }
  }

  render() {
    return (
      <>
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
        <Form
          action={this.props.action}
          name="form"
          method="POST"
          onsubmit='javascript:document.charset="UTF-8"; return zf_ValidateAndSubmit();'
          acceptCharset="UTF-8"
          encType="multipart/form-data"
          id="form"
        >
          <input type="hidden" name="zf_referrer_name" defaultValue />
          <input type="hidden" name="zf_redirect_url" defaultValue />
          <input type="hidden" name="zc_gad" defaultValue />
          <div className="zf-templateWrapper">
            <div className="zf-subContWrap zf-topAlign">
              <label className="zf-labelName">
                Name
                <em className="zf-important text-danger ml-1">*</em>
              </label>

              <Row>
                <Col sm={6}>
                  <FormGroup>
                    <FormInput
                      type="text"
                      maxLength={255}
                      name="Name_First"
                      fieldtype={7}
                    />
                    <small>First</small>
                  </FormGroup>
                </Col>
                <Col sm={6}>
                  <FormGroup>
                    <FormInput
                      type="text"
                      maxLength={255}
                      name="Name_Last"
                      fieldtype={7}
                    />
                    <small>Last</small>
                  </FormGroup>
                </Col>
              </Row>

              <br />
              <Row>
                <Col sm={6}>
                  <FormGroup>
                    <label className="zf-labelName">
                      Gender
                      <em className="zf-important text-danger ml-1">*</em>
                    </label>

                    <Row>
                      <Col xs={6} md={6}>
                        <FormGroup>
                          <input
                            className="zf-radioBtnType"
                            type="radio"
                            id="Radio_1"
                            name="Radio"
                            checktype="c1"
                            defaultValue="Male"
                          />
                          <label
                            htmlFor="Radio_1"
                            className="zf-radioChoice ml-3"
                          >
                            Male
                          </label>
                        </FormGroup>
                      </Col>
                      <Col xs={6} md={6}>
                        <FormGroup>
                          <input
                            className="zf-radioBtnType"
                            type="radio"
                            id="Radio_2"
                            name="Radio"
                            checktype="c1"
                            defaultValue="Female"
                          />
                          <label
                            htmlFor="Radio_2"
                            className="zf-radioChoice ml-3"
                          >
                            Female
                          </label>
                        </FormGroup>
                      </Col>
                    </Row>
                  </FormGroup>
                </Col>
                <Col sm={6}>
                  <label className="zf-labelName">
                    Phone
                    <em className="zf-important text-danger ml-1">*</em>
                  </label>
                  <FormInput
                    type="text"
                    compname="PhoneNumber"
                    name="PhoneNumber_countrycode"
                    maxLength={20}
                  />
                </Col>
              </Row>

              <br />
              <Row>
                <Col sm={6}>
                  <FormGroup>
                    <label className="zf-labelName">
                      Email
                      <em className="zf-important text-danger ml-1">*</em>
                    </label>

                    <FormInput type="email" maxLength={255} name="Email" />
                  </FormGroup>
                </Col>
                <Col sm={6}>
                  <FormGroup>
                    <label className="zf-labelName">Date of Birth</label>
                    <FormInput />
                    <small>dd-MMM-yyyy</small>
                  </FormGroup>
                </Col>
              </Row>

              <br />
              <label className="zf-labelName">
                Address
                <em className="zf-important text-danger ml-1">*</em>
              </label>
              <Row>
                <Col sm={12}>
                  <FormGroup>
                    <FormInput
                      type="text"
                      maxLength={255}
                      name="Address_AddressLine1"
                      checktype="c1"
                    />
                    <label>Street Address</label>
                  </FormGroup>
                </Col>
                <Col sm={6}>
                  <FormGroup>
                    <FormInput
                      type="text"
                      maxLength={255}
                      name="Address_AddressLine2"
                      checktype="c1"
                    />
                    <label>Address Line 2</label>
                  </FormGroup>
                </Col>
                <Col sm={6}>
                  <FormGroup>
                    <FormInput
                      type="text"
                      maxLength={255}
                      name="Address_City"
                      checktype="c1"
                    />
                    <label>City</label>
                  </FormGroup>
                </Col>
                <Col sm={6}>
                  <FormGroup>
                    <FormInput
                      type="text"
                      maxLength={255}
                      name="Address_ZipCode"
                      checktype="c1"
                    />
                    <label>Postal / Zip Code</label>
                  </FormGroup>
                </Col>
                <Col sm={6}>
                  <FormGroup>
                    <FormSelect
                      className="zf-form-sBox"
                      name="Address_Country"
                      checktype="c1"
                    >
                      <option>-Select-</option>
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
                    <label>Country</label>
                  </FormGroup>
                </Col>
              </Row>

              <br />

              <Row>
                <Col sm={6}>
                  <label className="zf-labelName">
                    Choose your unit
                    <em className="zf-important text-danger ml-1">*</em>
                  </label>

                  <Row>
                    <Col xs={6}>
                      <FormGroup>
                        <input
                          className="zf-radioBtnType"
                          type="radio"
                          id="Radio1_1"
                          name="Radio1"
                          checktype="c1"
                          defaultValue="Unit 1"
                        />
                        <label
                          htmlFor="Radio1_1"
                          className="zf-radioChoice  ml-3"
                        >
                          Unit 1
                        </label>
                      </FormGroup>
                    </Col>
                    <Col xs={6}>
                      <FormGroup>
                        <input
                          className="zf-radioBtnType"
                          type="radio"
                          id="Radio1_2"
                          name="Radio1"
                          checktype="c1"
                          defaultValue="Unit 2"
                        />
                        <label
                          htmlFor="Radio1_2"
                          className="zf-radioChoice ml-3"
                        >
                          Unit 2
                        </label>
                      </FormGroup>
                    </Col>
                  </Row>
                </Col>
                <Col sm={6}>
                  <label className="zf-labelName">
                    Are you enrolling for exatra classes or exam registration
                    <em className="zf-important text-danger ml-1">*</em>
                  </label>

                  <Row>
                    <Col xs={6}>
                      <FormGroup>
                        <input
                          className="zf-radioBtnType"
                          type="radio"
                          id="Radio2_1"
                          name="Radio2"
                          checktype="c1"
                          defaultValue="Extra Classes"
                          checked
                        />
                        <label
                          htmlFor="Radio2_1"
                          className="zf-radioChoice ml-3"
                        >
                          Extra Classes
                        </label>
                      </FormGroup>
                    </Col>
                    <Col xs={6}>
                      <FormGroup>
                        <input
                          className="zf-radioBtnType"
                          type="radio"
                          id="Radio2_2"
                          name="Radio2"
                          checktype="c1"
                          defaultValue="Classes + Exam Registration"
                        />
                        <label
                          htmlFor="Radio2_2"
                          className="zf-radioChoice ml-3"
                        >
                          Classes + Exam
                        </label>
                      </FormGroup>
                    </Col>
                  </Row>

                  <div className="zf-tempContDiv">
                    <div className="zf-overflow">
                      <span className="zf-multiAttType"></span>
                      <span className="zf-multiAttType"></span>
                    </div>
                  </div>
                </Col>
              </Row>

              <br />
              <FormGroup>
                <label className="zf-labelName">
                  Choose your subjects
                  <em className="zf-important text-danger ml-1">*</em>
                </label>

                <Row>
                  <Col sm={3}>
                    <FormGroup>
                      <FormCheckbox
                        className="zf-checkBoxType"
                        type="checkbox"
                        id="Checkbox_1"
                        name="Checkbox"
                        checktype="c1"
                        defaultValue="Accounting"
                      >
                        Accounting
                      </FormCheckbox>
                    </FormGroup>
                  </Col>
                  <Col sm={3}>
                    <FormGroup>
                      <FormCheckbox
                        className="zf-checkBoxType"
                        type="checkbox"
                        id="Checkbox_2"
                        name="Checkbox"
                        checktype="c1"
                        defaultValue="Biology"
                      >
                        Biology
                      </FormCheckbox>
                    </FormGroup>
                  </Col>
                  <Col sm={3}>
                    <FormGroup>
                      <FormCheckbox
                        className="zf-checkBoxType"
                        type="checkbox"
                        id="Checkbox_3"
                        name="Checkbox"
                        checktype="c1"
                        defaultValue="Caribbean Studies"
                      >
                        Caribbean Studies
                      </FormCheckbox>
                    </FormGroup>
                  </Col>
                  <Col sm={3}>
                    <FormGroup>
                      <FormCheckbox
                        className="zf-checkBoxType"
                        type="checkbox"
                        id="Checkbox_4"
                        name="Checkbox"
                        checktype="c1"
                        defaultValue="Chemistry"
                      >
                        Chemistry
                      </FormCheckbox>
                    </FormGroup>
                  </Col>
                  <Col sm={3}>
                    <FormGroup>
                      <FormCheckbox
                        className="zf-checkBoxType"
                        type="checkbox"
                        id="Checkbox_5"
                        name="Checkbox"
                        checktype="c1"
                        defaultValue="Communication Studies"
                      >
                        Communication Studies
                      </FormCheckbox>
                    </FormGroup>
                  </Col>
                  <Col sm={3}>
                    <FormGroup>
                      <FormCheckbox
                        className="zf-checkBoxType"
                        type="checkbox"
                        id="Checkbox_6"
                        name="Checkbox"
                        checktype="c1"
                        defaultValue="Computer Science"
                      >
                        Computer Science
                      </FormCheckbox>
                    </FormGroup>
                  </Col>
                  <Col sm={3}>
                    <FormGroup>
                      <FormCheckbox
                        className="zf-checkBoxType"
                        type="checkbox"
                        id="Checkbox_7"
                        name="Checkbox"
                        checktype="c1"
                        defaultValue="Economics"
                      >
                        Economics
                      </FormCheckbox>
                    </FormGroup>
                  </Col>
                  <Col sm={3}>
                    <FormGroup>
                      <FormCheckbox
                        className="zf-checkBoxType"
                        type="checkbox"
                        id="Checkbox_8"
                        name="Checkbox"
                        checktype="c1"
                        defaultValue="Entrepreneurship"
                      >
                        Entrepreneurship
                      </FormCheckbox>
                    </FormGroup>
                  </Col>
                  <Col sm={3}>
                    <FormGroup>
                      <FormCheckbox
                        className="zf-checkBoxType"
                        type="checkbox"
                        id="Checkbox_9"
                        name="Checkbox"
                        checktype="c1"
                        defaultValue="Geography"
                      >
                        Geography
                      </FormCheckbox>
                    </FormGroup>
                  </Col>
                  <Col sm={3}>
                    <FormGroup>
                      <FormCheckbox
                        className="zf-checkBoxType"
                        type="checkbox"
                        id="Checkbox_10"
                        name="Checkbox"
                        checktype="c1"
                        defaultValue="Information Technology"
                      >
                        Information Technology
                      </FormCheckbox>
                    </FormGroup>
                  </Col>
                  <Col sm={3}>
                    <FormGroup>
                      <FormCheckbox
                        className="zf-checkBoxType"
                        type="checkbox"
                        id="Checkbox_11"
                        name="Checkbox"
                        checktype="c1"
                        defaultValue="Law"
                      >
                        Law
                      </FormCheckbox>
                    </FormGroup>
                  </Col>
                  <Col sm={3}>
                    <FormGroup>
                      <FormCheckbox
                        className="zf-checkBoxType"
                        type="checkbox"
                        id="Checkbox_12"
                        name="Checkbox"
                        checktype="c1"
                        defaultValue="Management of Business"
                      >
                        Management of Business
                      </FormCheckbox>
                    </FormGroup>
                  </Col>
                  <Col sm={3}>
                    <FormGroup>
                      <FormCheckbox
                        className="zf-checkBoxType"
                        type="checkbox"
                        id="Checkbox_13"
                        name="Checkbox"
                        checktype="c1"
                        defaultValue="Pure Mathematics"
                      >
                        Pure Mathematics
                      </FormCheckbox>
                    </FormGroup>
                  </Col>
                  <Col sm={3}>
                    <FormGroup>
                      <FormCheckbox
                        className="zf-checkBoxType"
                        type="checkbox"
                        id="Checkbox_14"
                        name="Checkbox"
                        checktype="c1"
                        defaultValue="Sociology"
                      >
                        Sociology
                      </FormCheckbox>
                    </FormGroup>
                  </Col>
                </Row>
              </FormGroup>
            </div>
            <Button type="submit" className="zf-submitColor">
              Submit
            </Button>
          </div>
          {/* 'zf-templateWrapper' ends */}
        </Form>
      </>
    )
  }
}

export default CapeEnrollment
