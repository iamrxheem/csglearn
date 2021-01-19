import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactPayPal from "../components/reactPaypal"
import {
  Breadcrumb,
  BreadcrumbItem,
  Container,
  FormInput,
  FormSelect,
  Button,
  Row,
  Col
} from "shards-react"

export default function Page() {
  return (
    <>
      <Layout>
        <SEO
          title="Pay Fees & Tuition"
          description="Learn more about our tools and services and how you can benefit. Find scholarships, student jobs and much more!"
          lang="en"
        />

        {/* Mobile View  */}
        <div className="d-block d-md-none">
          <img
            style={{ width: "100%" }}
            src="https://dl.dropbox.com/s/3xx4np6yr0j1xu5/payonline.jpg?dl=0"
          />
        </div>

        <Container>
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="/">Home</a>
            </BreadcrumbItem>
            <BreadcrumbItem active>Pay</BreadcrumbItem>
          </Breadcrumb>

          <h5>Pay Fees and Tuition Payment</h5>
          <br />

          <Row>
            <Col sm={12} md={6}>
              <form
                action="https://www.paypal.com/cgi-bin/webscr"
                method="post"
                target="_top"
              >
                <FormInput type="hidden" name="cmd" value="_xclick" />
                <FormInput
                  type="hidden"
                  name="business"
                  value="payments@cxcguide.com"
                />
                <FormInput type="hidden" name="lc" value="US" />
                <FormInput
                  type="hidden"
                  name="item_name"
                  value="Diploma in Spanish (DELE) Payment"
                />
                <FormInput
                  type="hidden"
                  name="button_subtype"
                  value="services"
                />
                <FormInput type="hidden" name="no_note" value="0" />
                <FormInput type="hidden" name="currency_code" value="USD" />
                <FormInput type="hidden" name="tax_rate" value="10.000" />
                <FormInput
                  type="hidden"
                  name="bn"
                  value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHostedGuest"
                />
                <table>
                  <tr>
                    <td>
                      <FormInput
                        type="hidden"
                        name="on0"
                        value="Please select amount"
                      />
                      Please select amount
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <FormSelect name="os0">
                        <option value="Pay $20">Pay $20 $20.00 USD</option>
                        <option value="Pay $50">Pay $50 $500.00 USD</option>
                        <option value="Pay $100">Pay $100 $100.00 USD</option>
                        <option value="Pay $150">Pay $150 $150.00 USD</option>
                        <option value="Pay $200">Pay $200 $200.00 USD</option>
                      </FormSelect>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                      <input
                        type="hidden"
                        name="on1"
                        value="Your personal email address"
                      />
                      Your personal email address
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <FormInput type="text" name="os1" maxlength="200" />
                    </td>
                  </tr>
                </table>
                <FormInput
                  type="hidden"
                  name="option_select0"
                  value="Pay $20"
                />
                <FormInput type="hidden" name="option_amount0" value="20.00" />
                <FormInput
                  type="hidden"
                  name="option_select1"
                  value="Pay $50"
                />
                <FormInput type="hidden" name="option_amount1" value="500.00" />
                <FormInput
                  type="hidden"
                  name="option_select2"
                  value="Pay $100"
                />
                <FormInput type="hidden" name="option_amount2" value="100.00" />
                <FormInput
                  type="hidden"
                  name="option_select3"
                  value="Pay $150"
                />
                <FormInput type="hidden" name="option_amount3" value="150.00" />
                <FormInput
                  type="hidden"
                  name="option_select4"
                  value="Pay $200"
                />
                <FormInput type="hidden" name="option_amount4" value="200.00" />
                <FormInput type="hidden" name="option_index" value="0" />

                <br />
                <Button
                  outline
                  name="submit"
                  alt="PayPal - The safer, easier way to pay online!"
                >
                  Make Payment
                </Button>
                <img
                  alt=""
                  border="0"
                  src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
                  width="1"
                  height="1"
                />
              </form>
            </Col>
            <Col sm={12} md={6}></Col>
          </Row>
        </Container>
      </Layout>
    </>
  )
}
