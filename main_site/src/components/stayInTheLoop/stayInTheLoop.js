import * as React from "react"
import { isMobile } from "react-device-detect"
import MobileView from "../../common/mobileView"
import {
  Container,
  Row,
  Col,
  FormInput,
  Form,
  Button,
  Alert
} from "shards-react"

class StayInTheLoop extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: ""
    }

    this.handleEmailChange = this.handleEmailChange.bind(this)
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value })
  }

  render() {
    return (
      <>
        <br />
        <br />
        <Container className="text-center">
          <h2 style={{ color: "" }}>Want to stay in the loop?</h2>
          <span className="pt-2">
            Be the first to hear about upcoming classes, special events, and
            course registrations.
          </span>

          <br />
          <br />
          <Form
            action="https://csglearn.us1.list-manage.com/subscribe/post?u=1880f88152f522fd6aedd65fc&amp;id=cd07c140ce"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
            novalidate="novalidate"
          >
            <Row>
              <Col md={6}>
                <FormInput
                  type="email"
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                  name="EMAIL"
                  className="required email"
                  id="mce-EMAIL"
                  placeholder="Enter your email"
                />
              </Col>
              <Col md={6}>
                <MobileView>
                  <br />
                </MobileView>

                <Button
                  type="submit"
                  submit
                  pill
                  style={{ width: "100%" }}
                  theme="dark"
                >
                  Sign me up!
                </Button>
              </Col>
            </Row>
          </Form>

          <br />
          <small>
            <strong>
              By submitting your email address, you agree to receive future
              emails from CSG Learning Institute and its affiliates.
            </strong>
          </small>

          <br />
          <br />
        </Container>
      </>
    )
  }
}

export default StayInTheLoop
