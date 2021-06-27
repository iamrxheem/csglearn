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

class Page extends React.Component {
  render() {
    return (
      <>
        <>
          <Layout>
            <Seo title="Create Account" />

            <Container>
              <Breadcrumb style={{ backgroundColor: "" }}>
                <BreadcrumbItem>
                  <a href="/">Home</a>
                </BreadcrumbItem>
                <BreadcrumbItem active>Create an Account</BreadcrumbItem>
              </Breadcrumb>

              <br />
              <Form
                action="https://forms.zohopublic.com/csglearninginstitute/form/WePayCustomerData/formperma/WNMs1R0B1OXcysMqrr8lpu8KFoMxrnZhypR2Nt0lGCA/htmlRecords/submit"
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
                <input
                  type="radio"
                  id="Radio_1"
                  name="Radio"
                  value="Individual"
                  checked
                  hidden
                />

                <Row>
                  <Col sm={6}>
                    <h4>Create an Account</h4>

                    <p>
                      When you create an account, we save your information to
                      make the transfer process easier. The information you
                      provide here will be used to for all future transfers.
                    </p>

                    <br />
                    <Row>
                      <Col sm={6}>
                        <FormGroup>
                          <label>
                            First Name{" "}
                            <strong className="ml-1 text-danger">*</strong>
                          </label>
                          <Input
                            type="text"
                            maxLength={255}
                            name="Name_First"
                            fieldtype={7}
                          />
                        </FormGroup>
                      </Col>
                      <Col sm={6}>
                        <FormGroup>
                          <label>
                            Last Name{" "}
                            <strong className="ml-1 text-danger">*</strong>
                          </label>
                          <Input
                            type="text"
                            maxLength={255}
                            name="Name_Last"
                            fieldtype={7}
                          />
                        </FormGroup>
                      </Col>
                      <Col sm={6}>
                        <FormGroup>
                          <label>
                            Phone Number{" "}
                            <strong className="ml-1 text-danger">*</strong>
                          </label>
                          <Input
                            type="text"
                            compname="PhoneNumber"
                            name="PhoneNumber_countrycode"
                            phoneformat={1}
                            iscountrycodeenabled="false"
                            maxLength={20}
                            fieldtype={11}
                            id="international_PhoneNumber_countrycode"
                          />
                        </FormGroup>
                      </Col>
                      <Col sm={6}>
                        <FormGroup>
                          <label>
                            Email{" "}
                            <strong className="ml-1 text-danger">*</strong>
                          </label>
                          <Input
                            type="text"
                            maxLength={255}
                            name="Email"
                            fieldtype={9}
                          />
                        </FormGroup>
                      </Col>

                      <Col sm={12}>
                        <FormGroup>
                          <label>
                            Street Address{" "}
                            <strong className="ml-1 text-danger">*</strong>
                          </label>
                          <Input
                            type="text"
                            maxLength={255}
                            name="Address_AddressLine1"
                          />
                        </FormGroup>
                      </Col>

                      <Col sm={6}>
                        <FormGroup>
                          <label>Community</label>
                          <Input />
                        </FormGroup>
                      </Col>

                      <Col sm={6}>
                        <FormGroup>
                          <label>State / Parish / City</label>
                          <Input
                            type="text"
                            maxLength={255}
                            name="Address_City"
                          />
                        </FormGroup>
                      </Col>

                      <Col sm={6}>
                        <FormGroup>
                          <label>Zip Code</label>
                          <Input
                            type="text"
                            maxLength={255}
                            name="Address_ZipCode"
                          />
                        </FormGroup>
                      </Col>

                      <Col sm={6}>
                        <FormGroup>
                          <label>
                            Country{" "}
                            <strong className="ml-1 text-danger">*</strong>
                          </label>
                          <FormSelect name="Address_Country">
                            <option selected>Jamaica</option>
                          </FormSelect>
                        </FormGroup>
                      </Col>
                    </Row>
                    <p>
                      Your address may be needed to transfer money to some
                      banks. Please ensure the address entered here matches the
                      address on file at your financial institution.
                    </p>
                    <br />
                  </Col>
                  <Col sm={6}>
                    <h4>Banking Details</h4>
                    <Alert className="alert-default">
                      <i className="fas fa-info-circle mr-2"></i>
                      Be sure to double check the information as this is the
                      account your funds will be sent to.
                    </Alert>

                    <br />
                    <Row>
                      <Col sm={12}>
                        <FormGroup>
                          <label>
                            Bank / Financial Institution{" "}
                            <strong className="ml-1 text-danger">*</strong>
                          </label>
                          <FormSelect name="Dropdown1">
                            <option selected="true" value="-Select-">
                              -Select-
                            </option>

                            <option
                              selected
                              value="The&#x20;Bank&#x20;of&#x20;Nova&#x20;Scotia"
                            >
                              The Bank of Nova Scotia
                            </option>
                            <option value="CIBC&#x20;-&#x20;First&#x20;Caribbean&#x20;Bank">
                              CIBC - First Caribbean Bank
                            </option>
                            <option value="National&#x20;Commercial&#x20;Bank">
                              National Commercial Bank
                            </option>
                            <option value="Sagicor&#x20;Bank">
                              Sagicor Bank
                            </option>
                            <option value="RBC&#x20;Royal&#x20;Bank">
                              RBC Royal Bank
                            </option>
                          </FormSelect>
                        </FormGroup>
                      </Col>
                      <Col sm={6}>
                        <FormGroup>
                          <label>
                            Transit / Branch / Code{" "}
                            <strong className="ml-1 text-danger">*</strong>
                          </label>
                          <Input
                            type="text"
                            name="SingleLine1"
                            fieldtype={1}
                            maxLength={255}
                          />
                        </FormGroup>
                      </Col>
                      <Col sm={6}>
                        <FormGroup>
                          <label>
                            Account Number
                            <strong className="ml-1 text-danger">*</strong>
                          </label>
                          <Input
                            type="text"
                            name="SingleLine2"
                            fieldtype={1}
                            maxLength={255}
                          />
                        </FormGroup>
                      </Col>
                      <Col sm={6}>
                        <FormGroup>
                          <label>
                            Account Type
                            <strong className="ml-1 text-danger">*</strong>
                          </label>

                          <Row>
                            <Col xs={6}>
                              <input
                                type="radio"
                                id="Radio1_1"
                                name="Radio1"
                                defaultValue="Savings"
                              />
                              <label className="ml-2" htmlFor="Radio1_1">
                                Savings
                              </label>
                            </Col>
                            <Col xs={6}>
                              <input
                                type="radio"
                                id="Radio1_2"
                                name="Radio1"
                                defaultValue="Checking"
                              />
                              <label className="ml-2" htmlFor="Radio1_2">
                                Checking
                              </label>
                            </Col>
                          </Row>
                        </FormGroup>
                      </Col>
                    </Row>

                    <br />
                    <Button target="_blank" color="primary" type="submit">
                      Submit
                    </Button>

                    <br />
                    <br />
                    <Alert className="alert-default">
                      <i className="fas fa-info-circle mr-2"></i>
                      You only need to complete this from once. If you receive
                      an error, please <a href="/contact">contact us</a>.
                    </Alert>

                    <br />
                    <br />
                  </Col>
                </Row>
              </Form>
            </Container>
          </Layout>
        </>
      </>
    )
  }
}

export default Page
