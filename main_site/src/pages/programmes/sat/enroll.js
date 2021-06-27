import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../../components/layout"
import CsecMiniMenu from "../../../components/miniMenus/csecMiniMenu"

// View Components
import MobileView from "../../../common/mobileView"
import BrowserView from "../../../common/browserView"

import View from "../../../components/view/view"
import SEO from "../../../components/seo"
import { Carousel, Table, OverlayTrigger, Popover } from "react-bootstrap"

// Shards-React Components
import {
  Row,
  Col,
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Alert,
  Button,
  Form,
  FormInput,
  FormGroup,
  FormSelect,
  FormRadio,
  FormCheckbox
} from "shards-react"

import ProgrammeSummary from "../../../common/programmeSummary"

// Images
import Img1 from "../../../images/young-student.jpg"
import Image from "../../../images/black-college-student.jpg"

const Page = props => (
  <>
    <SEO
      title="Enroll in SAT Classes"
      description="Registration is now open! Enroll in our online SAT classes today and take advantage of the 20% off early bird discount!"
    />

    <Layout hideAlert>
      <MobileView>
        <img src={Image} style={{ width: "100%" }} />
      </MobileView>

      <Container>
        <div style={{ paddingTop: "10px" }}>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to="/programmes">Programmes</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to="/programmes/sat">SAT</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Enroll</BreadcrumbItem>
          </Breadcrumb>
        </div>

        <Form
          action="https://forms.zohopublic.com/csglearninginstitute/form/SATProgrammeApplication/formperma/mcCeO8dWmaeH7g2UvxztaP_N7MRECrLJyUdWnPNJMfY/htmlRecords/submit"
          name="form"
          id="form"
          method="POST"
          acceptCharset="UTF-8"
          encType="multipart/form-data"
        >
          <input type="hidden" name="zf_referrer_name" defaultValue />
          {/* To Track referrals , place the referrer name within the " " in the above hidden input field */}
          <input type="hidden" name="zf_redirect_url" defaultValue />
          {/* To redirect to a specific page after record submission , place the respective url within the " " in the above hidden input field */}
          <input type="hidden" name="zc_gad" defaultValue />
          {/* If GCLID is enabled in Zoho CRM Integration, click details of AdWords Ads will be pushed to Zoho CRM */}
          <h2>SAT Programme Application</h2>

          <br />
          <span>
            This form is to be completed by students enrolling in our online SAT
            Programme.
          </span>

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
            <a target="_blank" href="https://zfrmz.com/oTaLB16yeNY4e9pzIj3a">
              here
            </a>
            .
          </span>

          <br />
          <br />
          <br />
          <Row>
            <Col sm={12}>
              <Row>
                <Col sm={6}>
                  <FormGroup>
                    <FormInput
                      type="text"
                      maxLength={255}
                      name="Name_First"
                      fieldtype={7}
                      placeHolder="First name"
                    />
                  </FormGroup>
                </Col>

                <Col sm={6}>
                  <FormGroup>
                    <FormInput
                      type="text"
                      maxLength={255}
                      name="Name_Last"
                      fieldtype={7}
                      placeHolder="Last name"
                    />
                  </FormGroup>
                </Col>
              </Row>
            </Col>
            <Col sm={6}>
              {/*Radio*/}
              <label>
                Gender
                <b className="text-danger ml-1">*</b>
              </label>

              <Row>
                <Col xs={6}>
                  <FormGroup>
                    <input
                      type="radio"
                      id="Radio1_1"
                      name="Radio1"
                      defaultValue="Male"
                    />
                    <label className="ml-2" htmlFor="Radio1_1">
                      Male
                    </label>
                  </FormGroup>
                </Col>

                <Col xs={6}>
                  <FormGroup>
                    <input
                      type="radio"
                      id="Radio1_2"
                      name="Radio1"
                      defaultValue="Femal"
                    />
                    <label className="ml-2" htmlFor="Radio1_2">
                      Female
                    </label>
                  </FormGroup>
                </Col>
              </Row>
            </Col>
            <Col sm={6}>
              <FormGroup>
                {/*Single Line*/}
                <label>
                  Date of Birth
                  <b className="text-danger ml-1">*</b>
                </label>
                <FormInput type="text" name="SingleLine" />
                <small>dd-mm-yyyy</small>
              </FormGroup>
            </Col>
            <Col sm={6}>
              <FormGroup>
                {/*Phone*/}
                <label>
                  Phone
                  <b className="text-danger ml-1">*</b>
                </label>
                <FormInput
                  type="text"
                  compname="PhoneNumber"
                  name="PhoneNumber_countrycode"
                  id="international_PhoneNumber_countrycode"
                />
              </FormGroup>
            </Col>
            <Col sm={6}>
              <FormGroup>
                {/*Email*/}
                <label>
                  Email
                  <b className="text-danger ml-1">*</b>
                </label>
                <FormInput type="text" name="Email" />
              </FormGroup>
            </Col>
            <Col sm={12}>
              <FormGroup>
                {/*Address*/}
                <label>
                  Address
                  <b className="text-danger ml-1">*</b>
                </label>
                <FormInput
                  type="text"
                  maxLength={255}
                  name="Address_AddressLine1"
                />
                <small>Street Address</small>
              </FormGroup>
            </Col>
            <Col sm={6}>
              <FormGroup>
                <FormInput type="text" maxLength={255} name="Address_City" />
                <small>City</small>
              </FormGroup>
            </Col>
            <Col sm={6}>
              <FormGroup>
                <FormInput type="text" maxLength={255} name="Address_Region" />
                <small>State/Region/Province</small>
              </FormGroup>
            </Col>
            <Col sm={6}>
              <FormGroup>
                <FormInput type="text" maxLength={255} name="Address_ZipCode" />
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
                <small>Country</small>
              </FormGroup>
            </Col>

            <Col sm={6}>
              <br />
              <label>
                Class Preference
                <b className="text-danger ml-1">*</b>
              </label>
              <Row>
                <Col xs={6}>
                  <FormGroup>
                    <input
                      type="radio"
                      id="Radio_1"
                      name="Radio"
                      defaultValue="Morning Classes"
                    />
                    <label className="ml-2" htmlFor="Radio_1">
                      Morning Classes
                    </label>
                  </FormGroup>
                </Col>
                <Col xs={6}>
                  <FormGroup>
                    <input
                      type="radio"
                      id="Radio_2"
                      name="Radio"
                      defaultValue="Evening Classes"
                    />
                    <label className="ml-2" htmlFor="Radio_2">
                      Evening Classes
                    </label>
                  </FormGroup>
                </Col>
              </Row>
            </Col>
          </Row>

          <br />
          {/*Terms and Conditions*/}
          <FormGroup>
            <h5>
              Terms and Conditions
              <b className="text-danger ml-1">*</b>
            </h5>

            <br />
            <span>
              All students will be required to clear their miscellaneous fee of
              <strong>JMD $15,000 (USD $100)</strong> payment online before they
              can be allowed to enter their class.&nbsp; Fees can be paid online{" "}
              <a
                href="https://www.csglearn.com/pay"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              . Please click the mentioned link, enter $100 for your payment
              amount and proceed with payment using any valid credit or debit
              card.&nbsp;
            </span>
            <br />
            <br />
            <FormCheckbox
              className="checkBoxType flLeft"
              name="TermsConditions"
              type="checkbox"
            >
              I accept the Terms and Conditions.
            </FormCheckbox>
          </FormGroup>

          <br />
          <br />
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    </Layout>
  </>
)

export default Page
