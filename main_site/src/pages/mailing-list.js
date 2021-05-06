import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// View Components
import MobileView from "../common/mobileView"
import BrowserView from "../common/browserView"

import {
  Container,
  Row,
  Col,
  FormInput,
  FormGroup,
  Form,
  Button,
  Alert,
  Breadcrumb,
  BreadcrumbItem,
  FormSelect
} from "shards-react"

const iframeStyle = {
  width: "100%",
  height: "750px"
}

class Interviews extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      programme: ""
    }

    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
    this.handleLastNameChange = this.handleLastNameChange.bind(this)
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value })
  }

  handleFirstNameChange(e) {
    this.setState({ firstName: e.target.value })
  }

  handleLastNameChange(e) {
    this.setState({ lastName: e.target.value })
  }

  render() {
    return (
      <>
        <>
          <Layout>
            <SEO
              title="Mailing List"
              description="Stay in the loop! Be the first to hear about upcoming classes, special events, and course registrations."
            />

            <Container>
              <Breadcrumb>
                <BreadcrumbItem>
                  <Link to="/">Home</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>Mailing List</BreadcrumbItem>
              </Breadcrumb>

              <h2 style={{ color: "" }}>Stay in the loop</h2>

              <br />
              <span className="pt-2">
                Get past paper questions and notes directly in your inbox, and
                be the first to hear about upcoming classes, special events, and
                course registrations.
              </span>

              <br />
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
                  <Col sm={6}>
                    <FormGroup>
                      <FormInput
                        type="text"
                        value={this.state.firstName}
                        onChange={this.handleFirstNameChange}
                        name="FNAME"
                        className="required email"
                        id="mce-FNAME"
                        placeholder="First name"
                      />
                    </FormGroup>
                  </Col>
                  <Col sm={6}>
                    <FormGroup>
                      <FormInput
                        type="text"
                        value={this.state.lastName}
                        onChange={this.handleLastNameChange}
                        name="LNAME"
                        id="mce-LNAME"
                        placeholder="Last name"
                      />
                    </FormGroup>
                  </Col>

                  <Col sm={6}>
                    <FormGroup>
                      <FormInput
                        type="email"
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                        name="EMAIL"
                        className="required email"
                        id="mce-EMAIL"
                        placeholder="Enter your email"
                      />
                    </FormGroup>
                  </Col>

                  <Col sm={6}>
                    <FormGroup>
                      <FormSelect name="MMERGE6" class="" id="mce-MMERGE6">
                        <option value="">-- select a programme --</option>
                        <option value="CSEC Programme">CSEC Programme</option>
                        <option value="CAPE Programme">CAPE Programme</option>
                        <option value="Post-secondary Programme">
                          Post-secondary Programme
                        </option>
                      </FormSelect>
                    </FormGroup>
                  </Col>
                </Row>

                <br />

                <Button
                  type="submit"
                  submit
                  pill
                  style={{ width: "100%" }}
                  theme="primary"
                >
                  Sign me up!
                </Button>
              </Form>
            </Container>
          </Layout>
        </>
      </>
    )
  }
}

export default Interviews
