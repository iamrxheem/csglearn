import * as React from "react"
import SEO from "../../../components/seo"
import { Link } from "gatsby"

// Layout
import DiplomaLayout from "../../../layouts/diplomaLayout"

// View Components
import MobileView from "../../../common/mobileView"
import BrowserView from "../../../common/browserView"

// Shards-React Components
import {
  Row,
  Col,
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Form,
  FormGroup,
  FormSelect,
  FormCheckbox,
  FormInput
} from "shards-react"

import { Tabs, Tab } from "react-bootstrap"
import ProgrammeSummary from "../../../common/programmeSummary"

const Page = () => (
  <DiplomaLayout enroll="/apply" tuition="/diplomas/dele/tuition">
    <Container>
      <SEO
        title="Apply Online - Diplomas de Español como Lengua Extranjera (DELE)"
        description=""
      />
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="/programmes">Diplomas</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="/diplomas/dele">DELE</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>Enroll</BreadcrumbItem>
      </Breadcrumb>

      <Form
        action="https://forms.zohopublic.com/csglearninginstitute/form/DiplomainSpanishRegistrationForm/formperma/hzPuluNSrQgm_4HrsSVPXm1_lo1tVOd0wGWXU6i8g8M/htmlRecords/submit"
        name="form"
        id="form"
        method="POST"
        accept-charset="UTF-8"
        enctype="multipart/form-data"
      >
        <FormGroup>
          <input type="hidden" name="zf_referrer_name" defaultValue />
          {/* To Track referrals , place the referrer name within the " " in the above hidden input field */}
          <input type="hidden" name="zf_redirect_url" defaultValue />
          {/* To redirect to a specific page after record submission , place the respective url within the " " in the above hidden input field */}
          <input type="hidden" name="zc_gad" defaultValue />
          {/* If GCLID is enabled in Zoho CRM Integration, click details of AdWords Ads will be pushed to Zoho CRM */}
        </FormGroup>

        <h2>Diploma in Spanish Registration Form</h2>

        {/*Name*/}
        <br />
        <FormGroup>
          <label>
            Candidate Name
            <em className="text-danger ml-1">*</em>
          </label>

          <Row>
            <Col xs={12} md={6}>
              <FormGroup>
                <FormInput
                  type="text"
                  maxLength={255}
                  name="Name_First"
                  fieldtype={7}
                  style={{ width: "100%" }}
                  placeholder="First name"
                />
              </FormGroup>
            </Col>
            <Col xs={12} md={6}>
              <FormGroup>
                <FormInput
                  type="text"
                  maxLength={255}
                  name="Name_Last"
                  fieldtype={7}
                  style={{ width: "100%" }}
                  placeholder="Last name"
                />
              </FormGroup>
            </Col>
          </Row>
        </FormGroup>

        <Row>
          <Col md={6}>
            <FormGroup>
              <label>
                Date of Birth
                <em className="text-danger ml-1">*</em>
              </label>
              <FormInput type="text" name="SingleLine" />
              <small className="text-danger">
                Enter your date of birth in the format{" "}
                <strong>MM/DD/YYYY</strong>
              </small>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <label>
                Gender
                <em className="text-danger ml-1">*</em>
              </label>

              <br />
              <Row>
                <Col xs={6}>
                  <input
                    type="radio"
                    id="Radio_1"
                    name="Radio"
                    defaultValue="Male"
                  />
                  <label className="ml-2" htmlFor="Radio_1">
                    Male
                  </label>
                </Col>
                <Col xs={6}>
                  <input
                    type="radio"
                    id="Radio_2"
                    name="Radio"
                    defaultValue="Female"
                  />
                  <label className="ml-2" htmlFor="Radio_2">
                    Female
                  </label>
                </Col>
              </Row>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <label>
                Phone Number
                <em className="text-danger ml-1">*</em>
              </label>
              <FormInput
                type="text"
                name="PhoneNumber_countrycode"
                id="international_PhoneNumber_countrycode"
              />
            </FormGroup>
          </Col>
          <Col md={6}></Col>
          <Col md={12}>
            <FormGroup>
              <label>
                Address
                <em className="text-danger ml-1">*</em>
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
              <small>State/Region/Province</small>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <FormInput type="text" maxLength={255} name="Address_ZipCode" />
              <small>Postal / Zip Code</small>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <FormSelect name="Address_Country">
                <option>-Select-</option>
                <option>Åland Islands</option>
                <option>Afghanistan</option>
                <option>Akrotiri</option>
                <option>Albania</option>
                <option>Algeria</option>
                <option>American Samoa</option>
                <option>Andorra</option>
                <option>Angola</option>
                <option>Anguilla</option>
                <option>Antarctica</option>
                <option>Antigua and Barbuda</option>
                <option>Argentina</option>
                <option>Armenia</option>
                <option>Aruba</option>
                <option>Ashmore and Cartier Islands</option>
                <option>Australia</option>
                <option>Austria</option>
                <option>Azerbaijan</option>
                <option>Bahrain</option>
                <option>Bangladesh</option>
                <option>Barbados</option>
                <option>Bassas Da India</option>
                <option>Belarus</option>
                <option>Belgium</option>
                <option>Belize</option>
                <option>Benin</option>
                <option>Bermuda</option>
                <option>Bhutan</option>
                <option>Bolivia</option>
                <option>Bosnia and Herzegovina</option>
                <option>Botswana</option>
                <option>Bouvet Island</option>
                <option>Brazil</option>
                <option>British Indian Ocean Territory</option>
                <option>British Virgin Islands</option>
                <option>Brunei</option>
                <option>Bulgaria</option>
                <option>Burkina Faso</option>
                <option>Burma</option>
                <option>Burundi</option>
                <option>Cambodia</option>
                <option>Cameroon</option>
                <option>Canada</option>
                <option>Cape Verde</option>
                <option>Caribbean Netherlands</option>
                <option>Cayman Islands</option>
                <option>Central African Republic</option>
                <option>Chad</option>
                <option>Chile</option>
                <option>China</option>
                <option>Christmas Island</option>
                <option>Clipperton Island</option>
                <option>Cocos (Keeling) Islands</option>
                <option>Colombia</option>
                <option>Comoros</option>
                <option>Cook Islands</option>
                <option>Coral Sea Islands</option>
                <option>Costa Rica</option>
                <option>Cote D'Ivoire</option>
                <option>Croatia</option>
                <option>Cuba</option>
                <option>Curaçao</option>
                <option>Cyprus</option>
                <option>Czech Republic</option>
                <option>Democratic Republic of the Congo</option>
                <option>Denmark</option>
                <option>Dhekelia</option>
                <option>Djibouti</option>
                <option>Dominica</option>
                <option>Dominican Republic</option>
                <option>Ecuador</option>
                <option>Egypt</option>
                <option>El Salvador</option>
                <option>Equatorial Guinea</option>
                <option>Eritrea</option>
                <option>Estonia</option>
                <option>Ethiopia</option>
                <option>Europa Island</option>
                <option>Falkland Islands (Islas Malvinas)</option>
                <option>Faroe Islands</option>
                <option>Federated States of Micronesia</option>
                <option>Fiji</option>
                <option>Finland</option>
                <option>France</option>
                <option>French Guiana</option>
                <option>French Polynesia</option>
                <option>French Southern and Antarctic Lands</option>
                <option>Gabon</option>
                <option>Gaza Strip</option>
                <option>Georgia</option>
                <option>Germany</option>
                <option>Ghana</option>
                <option>Gibraltar</option>
                <option>Glorioso Islands</option>
                <option>Greece</option>
                <option>Greenland</option>
                <option>Grenada</option>
                <option>Guadeloupe</option>
                <option>Guam</option>
                <option>Guatemala</option>
                <option>Guernsey</option>
                <option>Guinea</option>
                <option>Guinea-bissau</option>
                <option>Guyana</option>
                <option>Haiti</option>
                <option>Heard Island and Mcdonald Islands</option>
                <option>Holy See (Vatican City)</option>
                <option>Honduras</option>
                <option>Hong Kong</option>
                <option>Hungary</option>
                <option>Iceland</option>
                <option>India</option>
                <option>Indonesia</option>
                <option>Iran</option>
                <option>Iraq</option>
                <option>Ireland</option>
                <option>Isle of Man</option>
                <option>Israel</option>
                <option>Italy</option>
                <option selected>Jamaica</option>
                <option>Jan Mayen</option>
                <option>Japan</option>
                <option>Jersey</option>
                <option>Jordan</option>
                <option>Juan De Nova Island</option>
                <option>Kazakhstan</option>
                <option>Kenya</option>
                <option>Kiribati</option>
                <option>Kuwait</option>
                <option>Kyrgyzstan</option>
                <option>Laos</option>
                <option>Latvia</option>
                <option>Lebanon</option>
                <option>Lesotho</option>
                <option>Liberia</option>
                <option>Libya</option>
                <option>Liechtenstein</option>
                <option>Lithuania</option>
                <option>Luxembourg</option>
                <option>Macau</option>
                <option>Macedonia</option>
                <option>Madagascar</option>
                <option>Malawi</option>
                <option>Malaysia</option>
                <option>Maldives</option>
                <option>Mali</option>
                <option>Malta</option>
                <option>Marshall Islands</option>
                <option>Martinique</option>
                <option>Mauritania</option>
                <option>Mauritius</option>
                <option>Mayotte</option>
                <option>Mexico</option>
                <option>Moldova</option>
                <option>Monaco</option>
                <option>Mongolia</option>
                <option>Montenegro</option>
                <option>Montserrat</option>
                <option>Morocco</option>
                <option>Mozambique</option>
                <option>Myanmar</option>
                <option>Namibia</option>
                <option>Nauru</option>
                <option>Navassa Island</option>
                <option>Nepal</option>
                <option>Netherlands</option>
                <option>Netherlands Antilles</option>
                <option>New Caledonia</option>
                <option>New Zealand</option>
                <option>Nicaragua</option>
                <option>Niger</option>
                <option>Nigeria</option>
                <option>Niue</option>
                <option>Norfolk Island</option>
                <option>North Korea</option>
                <option>Northern Mariana Islands</option>
                <option>Norway</option>
                <option>Oman</option>
                <option>Pakistan</option>
                <option>Palau</option>
                <option>Palestine</option>
                <option>Panama</option>
                <option>Papua New Guinea</option>
                <option>Paracel Islands</option>
                <option>Paraguay</option>
                <option>Peru</option>
                <option>Philippines</option>
                <option>Pitcairn Islands</option>
                <option>Poland</option>
                <option>Portugal</option>
                <option>Puerto Rico</option>
                <option>Qatar</option>
                <option>Republic of the Congo</option>
                <option>Reunion</option>
                <option>Romania</option>
                <option>Russia</option>
                <option>Rwanda</option>
                <option>Saint BarthÃ©lemy</option>
                <option>Saint Helena</option>
                <option>Saint Kitts and Nevis</option>
                <option>Saint Lucia</option>
                <option>Saint Martin</option>
                <option>Saint Pierre and Miquelon</option>
                <option>Saint Vincent and the Grenadines</option>
                <option>Samoa</option>
                <option>San Marino</option>
                <option>Sao Tome and Principe</option>
                <option>Saudi Arabia</option>
                <option>Senegal</option>
                <option>Serbia</option>
                <option>Seychelles</option>
                <option>Sierra Leone</option>
                <option>Singapore</option>
                <option>Sint Maarten</option>
                <option>Slovakia</option>
                <option>Slovenia</option>
                <option>Solomon Islands</option>
                <option>Somalia</option>
                <option>South Africa</option>
                <option>South Georgia and the South Sandwich Islands</option>
                <option>South Korea</option>
                <option>South Sudan</option>
                <option>Spain</option>
                <option>Spratly Islands</option>
                <option>Sri Lanka</option>
                <option>Sudan</option>
                <option>Suriname</option>
                <option>Svalbard</option>
                <option>Swaziland</option>
                <option>Sweden</option>
                <option>Switzerland</option>
                <option>Syria</option>
                <option>Taiwan</option>
                <option>Tajikistan</option>
                <option>Tanzania</option>
                <option>Thailand</option>
                <option>The Bahamas</option>
                <option>The Gambia</option>
                <option>Timor-leste</option>
                <option>Togo</option>
                <option>Tokelau</option>
                <option>Tonga</option>
                <option>Trinidad and Tobago</option>
                <option>Tromelin Island</option>
                <option>Tunisia</option>
                <option>Turkey</option>
                <option>Turkmenistan</option>
                <option>Turks and Caicos Islands</option>
                <option>Tuvalu</option>
                <option>Uganda</option>
                <option>Ukraine</option>
                <option>United Arab Emirates</option>
                <option>United Kingdom</option>
                <option>United States</option>
                <option>Uruguay</option>
                <option>Uzbekistan</option>
                <option>Vanuatu</option>
                <option>Venezuela</option>
                <option>Vietnam</option>
                <option>Virgin Islands</option>
                <option>Wake Island</option>
                <option>Wallis and Futuna</option>
                <option>West Bank</option>
                <option>Western Sahara</option>
                <option>Yemen</option>
                <option>Zambia</option>
                <option>Zimbabwe</option>
              </FormSelect>
              <small>Country</small>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <label>
                Please select Diploma in Spanish (DELE) diploma level
                <em className="text-danger ml-1">*</em>
              </label>
              <FormSelect name="Dropdown">
                <option selected="true" value="-Select-">
                  -Select-
                </option>
                <option value="Beginner's A1">Beginner's A1</option>
                <option value="Intermediate B1">Intermediate B1</option>
                <option value="Fluent C1">Fluent C1</option>
              </FormSelect>
            </FormGroup>
          </Col>
          <Col md={6}>
            <MobileView>
              <br />
            </MobileView>

            <FormGroup>
              <label>
                Are you currently enrolled in a school or university?
                <em className="text-danger ml-1">*</em>
              </label>

              <br />
              <Row>
                <Col xs={6}>
                  <input
                    type="radio"
                    id="Radio1_1"
                    name="Radio1"
                    defaultValue="Yes"
                  />
                  <label className="ml-2" htmlFor="Radio1_1">
                    Yes
                  </label>
                </Col>

                <Col xs={6}>
                  <input
                    type="radio"
                    id="Radio1_2"
                    name="Radio1"
                    defaultValue="No"
                  />
                  <label className="ml-2" htmlFor="Radio1_2">
                    No
                  </label>
                </Col>
              </Row>
            </FormGroup>
          </Col>
          <Col md={6}>
            <MobileView>
              <br />
            </MobileView>
            <FormGroup>
              <label>Are you currently employed?</label>
              <em className="text-danger ml-1">*</em>

              <br />
              <Row>
                <Col xs={6}>
                  <input
                    type="radio"
                    id="Radio2_1"
                    name="Radio2"
                    defaultValue="Yes"
                  />
                  <label className="ml-2" htmlFor="Radio2_1">
                    Yes
                  </label>
                </Col>

                <Col xs={6}>
                  <input
                    type="radio"
                    id="Radio2_2"
                    name="Radio2"
                    defaultValue="No"
                  />
                  <label className="ml-2" htmlFor="Radio2_2">
                    No
                  </label>
                </Col>
              </Row>
            </FormGroup>
          </Col>
          <Col md={6}>
            <MobileView>
              <br />
            </MobileView>
            <FormGroup>
              <label>
                Class Time Preference
                <em className="text-danger ml-1">*</em>
              </label>

              <br />
              <Row>
                <Col xs={6}>
                  <input
                    type="radio"
                    id="Radio3_1"
                    name="Radio3"
                    defaultValue="Morning Classes"
                  />
                  <label className="ml-2" htmlFor="Radio3_1">
                    Morning
                  </label>
                </Col>

                <Col xs={6}>
                  <input
                    type="radio"
                    id="Radio3_2"
                    name="Radio3"
                    defaultValue="Evening Classes"
                  />
                  <label className="ml-2" htmlFor="Radio3_2">
                    Evening
                  </label>
                </Col>
              </Row>
            </FormGroup>
          </Col>
          <Col md={6}>
            <MobileView>
              <br />
            </MobileView>
            <FormGroup>
              {/*Decision Box*/}
              <FormCheckbox type="checkbox" id="DecisionBox" name="DecisionBox">
                I hereby give my consent to enrolling in online classes with CSG
                Learning Institute and consent to be contacted via email or
                phone via the details that I have provided.
                <em className="text-danger ml-1">*</em>
              </FormCheckbox>
            </FormGroup>
          </Col>
          <Col md={6}>
            <MobileView>
              <br />
            </MobileView>
            <FormGroup>
              <Button style={{ width: "100%" }} type="submit">
                Submit
              </Button>
              <br />
              <br />
              <small className="text-danger">
                Please only submit this form <strong>ONCE</strong>. If you are
                having an issue, please <a href="/contact">contact us</a>.
              </small>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </Container>
  </DiplomaLayout>
)

export default Page
