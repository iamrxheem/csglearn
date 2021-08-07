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

import {
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormInput,
  FormGroup,
  FormSelect,
  Row,
  Col,
  Button
} from "shards-react"

import ShowMoreText from "react-show-more-text"
import PayPalBtn from "../../components/paypalButton"

const paypalSubscribe = (data, actions) => {
  return actions.subscription.create({
    plan_id: "P-37753836M1912624YMDPGYMQ"
  })
}
const paypalOnError = err => {
  console.log("Error")
}

const paypalOnApprove = (data, detail) => {
  // call the backend api to store transaction details
  console.log("Payapl approved")
  console.log(data.subscriptionID)
}

const FamilyPlan = () => (
  <Layout hideAlert>
    <SEO title="Family Plan" description="" />

    <Container>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="/plans">Plans</Link>
        </BreadcrumbItem>

        <BreadcrumbItem active>Family Plan</BreadcrumbItem>
      </Breadcrumb>

      <br />
      <Row>
        <Col sm={12} md={6}></Col>
        <Col sm={12} md={6}>
          <Form
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
            target="_top"
          >
            <FormInput type="hidden" name="cmd" defaultValue="_s-xclick" />
            <FormInput
              type="hidden"
              name="hosted_button_id"
              defaultValue="5SHWYBP2D65K4"
            />
            <table>
              <tbody>
                <FormGroup>
                  <tr>
                    <td>
                      <FormInput
                        type="hidden"
                        name="on0"
                        defaultValue="Choose Number of Students"
                      />
                      Choose Number of Students
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <FormSelect name="os0">
                        <option value="1 Student">
                          1 Student - JMD $5,000 per month
                        </option>
                        <option value="2 Students">
                          2 Students - JMD $10,000 per month
                        </option>
                        <option value="3 or More Students">
                          3 or More Students - JMD $15,000 per month
                        </option>
                      </FormSelect>
                    </td>
                  </tr>
                </FormGroup>

                <FormGroup>
                  <tr>
                    <td>
                      <FormInput
                        type="hidden"
                        name="on1"
                        defaultValue="Student Email"
                      />
                      Student Email
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <FormInput type="text" name="os1" maxLength={200} />
                    </td>
                  </tr>
                </FormGroup>
              </tbody>
            </table>
            <FormInput type="hidden" name="currency_code" defaultValue="USD" />
            <input
              type="image"
              src="https://www.paypalobjects.com/en_US/i/btn/btn_subscribeCC_LG.gif"
              border={0}
              name="submit"
              alt="PayPal - The safer, easier way to pay online!"
            />
            <img
              alt=""
              border={0}
              src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
              width={1}
              height={1}
            />
          </Form>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default FamilyPlan
