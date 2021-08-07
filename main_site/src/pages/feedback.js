import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// View Components
import MobileView from "../common/mobileView"
import BrowserView from "../common/browserView"
import StaffPreview from "../common/staffPreview"

import {
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  FormInput,
  FormSelect,
  FormTextarea
} from "shards-react"

const Feedback = () => (
  <Layout hideAlert>
    <SEO title="Leave Your Feedback" description="" />

    <MobileView>
      <img
        src="https://urbanedresearcher.files.wordpress.com/2017/03/black-male-photo.jpg"
        style={{ width: "100%" }}
      />
    </MobileView>

    <Container>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>Feedback</BreadcrumbItem>
      </Breadcrumb>

      <Row>
        <Col sm={12} md={6}>
          <h3>Leave your feedback</h3>

          <br />
          <p>
            Your feedback is valuable to us, as we work to improve both our
            products and our services to you.
          </p>

          <br />
        </Col>
        <Col sm={12} md={6}>
          <Form
            action="https://forms.zohopublic.com/csglearninginstitute/form/FeedbackForm/formperma/_jmObLdbawajVf2TPfQNXpt8XXnVb0plJstlSQPxuGo/htmlRecords/submit"
            name="form"
            id="form"
            method="POST"
            acceptCharset="UTF-8"
            encType="multipart/form-data"
          >
            <FormInput type="hidden" name="zf_referrer_name" defaultValue />
            <FormInput type="hidden" name="zf_redirect_url" defaultValue />
            <FormInput type="hidden" name="zc_gad" defaultValue />

            {/* First and Last Name */}
            <FormGroup>
              <label>
                Name{" "}
                <small className="text-secondary">
                  <i>(optional)</i>
                </small>
              </label>

              <Row>
                <Col xs={6}>
                  <FormGroup>
                    <FormInput
                      type="text"
                      maxLength={255}
                      name="Name_First"
                      fieldtype={7}
                      placeHolder="First"
                    />
                  </FormGroup>
                </Col>
                <Col xs={6}>
                  <FormGroup>
                    <FormInput
                      type="text"
                      maxLength={255}
                      name="Name_Last"
                      fieldtype={7}
                      placeHolder="Last"
                    />
                  </FormGroup>
                </Col>
              </Row>
            </FormGroup>

            {/* Phone Number */}
            <FormGroup>
              <label>
                Phone{" "}
                <small className="text-secondary">
                  <i>(optional)</i>
                </small>
              </label>
              <FormInput
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

            {/*Email*/}
            <FormGroup>
              <label>
                Email{" "}
                <small className="text-secondary">
                  <i>(optional)</i>
                </small>
              </label>
              <FormInput
                type="text"
                maxLength={255}
                name="Email"
                fieldtype={9}
              />
            </FormGroup>

            {/* Multi Line */}
            <FormGroup>
              <label>
                Feedback
                <em className="text-danger ml-2">*</em>
              </label>
              <FormTextarea
                name="MultiLine"
                maxLength={65535}
                defaultValue={""}
              />
            </FormGroup>

            {/*Dropdown*/}
            <FormGroup>
              <label>
                Recommended Area of Improvement{" "}
                <small className="text-secondary">
                  <i>(optional)</i>
                </small>
              </label>
              <FormSelect name="Dropdown">
                <option selected="true" value="-Select-">
                  - Select -
                </option>
                <option value="Customer Service">Customer Service</option>
                <option value="Response Time">Response Time</option>
                <option value="Delivery of Classes">Delivery of Classes</option>
              </FormSelect>
            </FormGroup>

            <br />
            <Button style={{ width: "100%" }} type="submit">
              Leave Your Feedback
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>

    <MobileView>
      <br />
      <img
        src="https://www.hebergementwebs.com/image/67/67c463c4f8df9a4812ec25b281330a41.jpg/8-smart-ways-to-get-customer-feedback-infographic.jpg"
        style={{ width: "100%" }}
      />
    </MobileView>
  </Layout>
)

export default Feedback
