import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import CSECLayout from "../../../../layouts/csecLayout"
import CsecMiniMenu from "../../../../components/miniMenus/csecMiniMenu"

import SEO from "../../../../components/seo"
import { Carousel, Table, OverlayTrigger, Popover } from "react-bootstrap"

// Shards-React Components
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
  FormCheckbox
} from "shards-react"

const Page = props => (
  <>
    <SEO
      title="CSEC Summer Programme Application Form"
      description="Applications are now open! Enroll in our online CXC CSEC Summer Programme, starting June 14. SUbjects include English A, Mathematics, Biology, Chemistry, Physics and more!"
    />

    <CSECLayout enroll="/programmes/csec/summer/enroll">
      <Container>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/programmes">Programmes</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/programmes/csec">CSEC</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Enroll</BreadcrumbItem>
        </Breadcrumb>

        <Form
          acceptCharset="UTF-8"
          action="https://forms.zohopublic.com/csglearninginstitute/form/CSECSummerProgrammeApplicationForm/formperma/2JyxgytsQew2u7HO6fISVzexEJksgpCTyHsS7Gz2KMs/htmlRecords/submit"
          encType="multipart/form-data"
          method="POST"
          name="form"
        >
          <FormGroup>
            <input name="zf_referrer_name" type="hidden" value="" />
            <input name="zf_redirect_url" type="hidden" value="" />
            <input name="zc_gad" type="hidden" value="" />
          </FormGroup>

          <h3>Summer Programme Application Form</h3>
          <span>
            Please use this form to apply for our online CSEC Summer Programme.
          </span>

          <br />
          <br />

          <label>
            Name <em style={{ color: "red" }}>*</em>
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

          <br />
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
                <FormInput
                  disabled
                  maxlength="25"
                  name="Date"
                  type="text"
                  value=""
                />
                <small>dd-MMM-yyyy</small>
              </FormGroup>
            </Col>
          </Row>

          <br />
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
                  <small>
                    Country <em style={{ color: "red" }}>*</em>
                  </small>
                </FormGroup>
              </Col>
            </Row>
          </FormGroup>

          <br />
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

          <br />
          <FormGroup>
            <label>
              Choose your subjects<em style={{ color: "red" }}>*</em>
            </label>

            <Row>
              <Col xs={12} md={3}>
                <FormCheckbox name="Checkbox" type="checkbox" value="English A">
                  English A
                </FormCheckbox>
              </Col>
              <Col xs={12} md={3}>
                <FormCheckbox
                  name="Checkbox"
                  type="checkbox"
                  value="Mathematics"
                >
                  Mathematics
                </FormCheckbox>
              </Col>
              <Col xs={12} md={3}>
                <FormCheckbox name="Checkbox" type="checkbox" value="Biology">
                  Biology
                </FormCheckbox>
              </Col>
              <Col xs={12} md={3}>
                <FormCheckbox name="Checkbox" type="checkbox" value="Chemistry">
                  Chemistry
                </FormCheckbox>
              </Col>
              <Col xs={12} md={3}>
                <FormCheckbox name="Checkbox" type="checkbox" value="Physics">
                  Physics
                </FormCheckbox>
              </Col>
              <Col xs={12} md={3}>
                <FormCheckbox
                  name="Checkbox"
                  type="checkbox"
                  value="Human &amp; Social Biology"
                >
                  Human &amp; Social Biology
                </FormCheckbox>
              </Col>

              <Col xs={12} md={3}>
                <FormCheckbox
                  name="Checkbox"
                  type="checkbox"
                  value="Principles of Accounts"
                >
                  Principles of Accounts
                </FormCheckbox>
              </Col>
              <Col xs={12} md={3}>
                <FormCheckbox
                  name="Checkbox"
                  type="checkbox"
                  value="Principles of Business"
                >
                  Principles of Business
                </FormCheckbox>
              </Col>
              <Col xs={12} md={3}>
                <FormCheckbox
                  name="Checkbox"
                  type="checkbox"
                  value="Information Technology"
                >
                  Information Technology
                </FormCheckbox>
              </Col>
              <Col xs={12} md={3}>
                <FormCheckbox
                  name="Checkbox"
                  type="checkbox"
                  value="Social Studies"
                >
                  Social Studies
                </FormCheckbox>
              </Col>
            </Row>

            <br />
            <span>
              From the list above, select the subjects you would like to enroll
              in.
            </span>
          </FormGroup>
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    </CSECLayout>
  </>
)

export default Page
