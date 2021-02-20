import React, { Component } from "react"
import {
  Alert,
  Row,
  Col,
  Form,
  FormInput,
  FormGroup,
  FormSelect,
  Button
} from "shards-react"

class ProgrammeInfoRequest extends Component {
  constructor(props) {
    super(props)

    this.state = {
      options: this.options,
      value: null
    }
  }

  changeHandler = value => {
    this.setState({ value })
  }

  render() {
    return (
      <>
        <Alert theme="danger">
          <h5>Get Programme Information</h5>
          <span>Fill out the form to get more details.</span>

          <br />
          <br />
          <Form>
            <FormGroup>
              <label htmlFor="area">Select area of interest</label>
              <FormSelect id="area">
                <option value="dele">
                  Diploma in Spanish as a Foreign Language
                </option>
                <option value="dele">
                  Diploma in French as a Foreign Language
                </option>
                <option value="csec">Online CSEC Classes</option>
                <option value="cape">Online CAPE Classes</option>
                <option value="pep">Online P.E.P Jamaica Classes</option>
                <option value="sat">Online SAT Classes</option>
                <option value="acca">Online ACCA Classes</option>
              </FormSelect>
            </FormGroup>

            <FormGroup>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <label htmlFor="firstName">First Name</label>
                    <FormInput id="firstName" />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <label htmlFor="lastName">Last Name</label>
                    <FormInput id="lastName" />
                  </FormGroup>
                </Col>
              </Row>
            </FormGroup>

            <FormGroup>
              <label htmlFor="email">Enter your email</label>
              <FormInput type="email" />
            </FormGroup>

            <FormGroup>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <FormInput id="phoneNumber" />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <label htmlFor="country">Country</label>

                    <FormSelect id="country" onChange={this.changeHandler} />
                  </FormGroup>
                </Col>
              </Row>
            </FormGroup>

            <FormGroup>
              <Button pill outline theme="light" type="submit">
                Get Information
              </Button>
            </FormGroup>
          </Form>
        </Alert>
      </>
    )
  }
}

export default ProgrammeInfoRequest
