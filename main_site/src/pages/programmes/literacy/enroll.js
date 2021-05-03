import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import LiteracyProgrammeLayout from "../../../layouts/literacyProgrammeLayout"
import CsecMiniMenu from "../../../components/miniMenus/csecMiniMenu"

import SEO from "../../../components/seo"
import { Carousel, Table, OverlayTrigger, Popover } from "react-bootstrap"
import KidsImage from "../../../images/kids-reading.jpeg"

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
      title="Literacy Programme Application Form"
      description="Applications are now open! Enroll in our online literacy and numeracy classes, starting June 7. SUbjects include English A, Mathematics, Biology, Chemistry, Physics and more!"
    />

    <LiteracyProgrammeLayout
      showBreak
      enroll="/programmes/literacy/enroll"
      image={KidsImage}
    >
      <br />
      <Container>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/programmes">Programmes</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/programmes/literacy">Literacy</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Enroll</BreadcrumbItem>
        </Breadcrumb>

        {/* Change or deletion of the name attributes in the input tag will lead to empty values on record submission*/}
        <Form
          action="https://forms.zohopublic.com/csglearninginstitute/form/LiteracyProgrammeApplicationForm/formperma/W2g46VpKRwDSR2fdlxUqhPTNYbf1XtXYqH06vYgz5h4/htmlRecords/submit"
          name="form"
          id="form"
          method="POST"
          acceptCharset="UTF-8"
          encType="multipart/form-data"
        >
          <FormGroup>
            <input type="hidden" name="zf_referrer_name" defaultValue />
            {/* To Track referrals , place the referrer name within the " " in the above hidden input field */}
            <input type="hidden" name="zf_redirect_url" defaultValue />
            {/* To redirect to a specific page after record submission , place the respective url within the " " in the above hidden input field */}
            <input type="hidden" name="zc_gad" defaultValue />
            {/* If GCLID is enabled in Zoho CRM Integration, click details of AdWords Ads will be pushed to Zoho CRM */}
          </FormGroup>

          <h3>Literacy Programme Application Form</h3>

          <br />
          <br />

          <FormGroup>
            {/*Name*/}
            <label>
              Name
              <em>*</em>
            </label>
            <Row>
              <Col md={6}>
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
              <Col md={6}>
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
          </FormGroup>

          <br />
          <Row>
            <Col md={6}>
              <FormGroup>
                {/*Date*/}
                <label>Date of Birth</label>
                <FormInput
                  disabled
                  type="text"
                  name="Date"
                  defaultValue
                  maxLength={25}
                />
                <small>dd-MMM-yyyy</small>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <br />
                {/*Radio*/}
                <label>
                  Gender
                  <em>*</em>
                </label>
                <Row>
                  <Col xs={6}>
                    <FormGroup>
                      <input
                        type="radio"
                        id="Radio_1"
                        name="Radio"
                        defaultValue="Male"
                      />
                      <label className="ml-3" htmlFor="Radio_1">
                        Male
                      </label>
                    </FormGroup>
                  </Col>
                  <Col xs={6}>
                    <FormGroup>
                      <input
                        type="radio"
                        id="Radio_2"
                        name="Radio"
                        defaultValue="Female"
                      />
                      <label className="ml-3" htmlFor="Radio_2">
                        Female
                      </label>
                    </FormGroup>
                  </Col>
                </Row>
              </FormGroup>
            </Col>
          </Row>

          <br />
          <Row>
            <Col md={6}>
              <FormGroup>
                {/*Phone*/}
                <label>
                  Phone Number
                  <em>*</em>
                </label>
                <FormInput
                  type="text"
                  compname="PhoneNumber"
                  name="PhoneNumber_countrycode"
                  id="international_PhoneNumber_countrycode"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                {/*Email*/}
                <label>
                  Email
                  <em>*</em>
                </label>
                <FormInput type="email" maxLength={255} name="Email" />
              </FormGroup>
            </Col>
          </Row>

          <br />
          <Row>
            <Col md={12}>
              <FormGroup>
                {/*Address*/}
                <label>
                  Address
                  <em>*</em>
                </label>
                <FormInput
                  type="text"
                  maxLength={255}
                  name="Address_AddressLine1"
                />
                <small>Street Address</small>
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup>
                <FormInput type="text" maxLength={255} name="Address_City" />
                <small>City</small>
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup>
                <FormInput type="text" maxLength={255} name="Address_Region" />
                <small>State / Parish / Region</small>
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup>
                <FormInput type="text" maxLength={255} name="Address_ZipCode" />
                <small>Postal Code</small>
              </FormGroup>
            </Col>

            <Col md={6}>
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
                <small>Country</small>
              </FormGroup>
            </Col>
          </Row>

          <br />
          <Row>
            <label>Choose your programme</label>
            <Col sm={6}>
              <FormGroup>
                <Row>
                  <Col sm={6}>
                    <input
                      type="radio"
                      id="Radio1_1"
                      name="Radio1"
                      value="Kid&#x27;s&#x20;Classes"
                    />
                    <label className="ml-3" for="Radio1_1">
                      Kid&#x27;s&#x20;Classes
                    </label>
                  </Col>
                  <Col sm={6}>
                    <input
                      type="radio"
                      id="Radio1_2"
                      name="Radio1"
                      value="Adult&#x20;Classes"
                    />
                    <label className="ml-3" for="Radio1_2">
                      Adult&#x20;Classes
                    </label>
                  </Col>
                </Row>
              </FormGroup>
            </Col>
            <Col sm={6}></Col>
          </Row>

          <Button target="_blank" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </LiteracyProgrammeLayout>
  </>
)

export default Page
