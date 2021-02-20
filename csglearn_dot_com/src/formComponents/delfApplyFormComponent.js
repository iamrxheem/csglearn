import React, { Component } from "react"
import {
  Form,
  FormInput,
  FormGroup,
  Row,
  Col,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  FormSelect,
  FormTextarea,
  FormRadio,
  Button
} from "shards-react"
import DatePicker from "react-datepicker"
import axios from "axios"

class DelfApplyFormComponent extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)

    this.state = {
      id: "",
      term: "",
      firstName: "",
      lastName: "",
      middleInitial: "",
      gender: "",
      dateOfBirth: "",
      email: "",
      phoneNumber: "",
      address: "",
      country: "",
      level: "",
      employed: false,
      enrolledInSchool: false,
      timePreference: ""
    }
  }

  getGeoInfo = () => {
    axios
      .get("https://ipapi.co/json/")
      .then(response => {
        let data = response.data
        this.setState({
          country: data.country_name
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  componentWillMount() {
    this.getGeoInfo()
  }

  //
  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      <>
        <Form method="POST" action="/diplomas/delf/">
          <Row>
            <Col lg={6}>
              <hr />
              <span style={{ color: "gray" }}>
                PERSONAL & DEMOGRAPHIC INFORMATION
              </span>
              <hr />
              <br />

              <Row>
                <Col md={6}>
                  <Row>
                    <Col xs={8}>
                      <FormGroup>
                        <label htmlFor="#firstName">
                          <span style={{ color: "red" }}>* </span>
                          First Name
                        </label>

                        <InputGroup seamless>
                          <InputGroupAddon type="prepend">
                            <InputGroupText>
                              <i className="fas fa-user"></i>
                            </InputGroupText>
                          </InputGroupAddon>

                          <FormInput id="#firstName" placeholder="" />
                        </InputGroup>
                      </FormGroup>
                    </Col>
                    <Col xs={4}>
                      <FormGroup>
                        <label htmlFor="#middleInitial">M.I</label>

                        <FormInput
                          maxLength="1"
                          id="#middleInitial"
                          placeholder=""
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <label htmlFor="#lastName">
                      <span style={{ color: "red" }}>* </span>Last Name
                    </label>

                    <InputGroup seamless>
                      <InputGroupAddon type="prepend">
                        <InputGroupText>
                          <i className="fas fa-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>

                      <FormInput id="#lastName" placeholder="" />
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Row>

              {/* Gender */}
              <br />
              <FormGroup>
                <label htmlFor="#gender">
                  <span style={{ color: "red" }}>* </span>Gender
                </label>

                <InputGroup seamless>
                  <InputGroupAddon type="prepend">
                    <InputGroupText>
                      <i className="fas fa-mars-double"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <FormSelect id="#gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </FormSelect>
                </InputGroup>
              </FormGroup>

              {/* Date of Birth */}
              <br />
              <FormGroup>
                <label htmlFor="#dateOfBirth">
                  <span style={{ color: "red" }}>* </span>
                  Date of Birth
                </label>

                <br />

                <InputGroup seamless>
                  <InputGroupAddon type="prepend">
                    <InputGroupText>
                      <i className="fas fa-calendar-alt"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <DatePicker
                    style={{ width: "100%" }}
                    className="form-control"
                  />
                </InputGroup>
              </FormGroup>

              {/* Email Address */}
              <br />
              <FormGroup>
                <label htmlFor="#email">
                  <span style={{ color: "red" }}>* </span>Email
                </label>

                <InputGroup seamless>
                  <InputGroupAddon type="prepend">
                    <InputGroupText>
                      <i className="fas fa-envelope"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <FormInput name="email" type="email" id="#email" />
                </InputGroup>
              </FormGroup>

              {/* Phone Number */}
              <br />
              <FormGroup>
                <label htmlFor="#phoneNumber">
                  <span style={{ color: "red" }}>* </span>
                  Phone Number
                </label>

                <InputGroup seamless>
                  <InputGroupAddon type="prepend">
                    <InputGroupText>
                      <i className="fas fa-phone-alt"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <FormInput id="#phoneNumber" type="text" placeholder="" />
                </InputGroup>
              </FormGroup>

              <br />
              <FormGroup>
                <label htmlFor="#address">
                  <span style={{ color: "red" }}>* </span>
                  Full Address
                </label>
                <FormTextarea
                  id="#address"
                  placeholder="Enter your complete address here"
                />
              </FormGroup>

              {/* Country */}
              <br />

              <FormGroup>
                <label htmlFor="#country">
                  <span style={{ color: "red" }}>* </span>Country
                </label>

                <InputGroup seamless>
                  <InputGroupAddon type="prepend">
                    <InputGroupText>
                      <i className="fas fa-globe"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <FormSelect id="#country">
                    <option
                      selected={this.state.country === "Antigua and Barbuda"}
                      value="Antigua and Barbuda"
                    >
                      Antigua and Barbuda
                    </option>
                    <option
                      selected={this.state.country === "Bahamas"}
                      value="Bahamas"
                    >
                      Bahamas
                    </option>
                    <option
                      selected={this.state.country === "Barbados"}
                      value="Barbados"
                    >
                      Barbados
                    </option>
                    <option
                      selected={this.state.country === "Belize"}
                      value="Belize"
                    >
                      Belize
                    </option>
                    <option
                      selected={this.state.country === "Dominica"}
                      value="Dominica"
                    >
                      Dominica
                    </option>
                    <option
                      selected={this.state.country === "Grenada"}
                      value="Grenada"
                    >
                      Grenada
                    </option>
                    <option
                      selected={this.state.country === "Guyana"}
                      value="Guyana"
                    >
                      Guyana
                    </option>
                    <option
                      selected={this.state.country === "Haiti"}
                      value="Haiti"
                    >
                      Haiti
                    </option>
                    <option
                      selected={this.state.country === "Jamaica"}
                      value="Jamaica"
                    >
                      Jamaica
                    </option>
                    <option
                      selected={this.state.country === "Montserrat"}
                      value="Montserrat"
                    >
                      Montserrat
                    </option>
                    <option
                      selected={this.state.country === "Saint Kitts and Nevis"}
                      value="Saint Kitts and Nevis"
                    >
                      Saint Kitts and Nevis
                    </option>
                    <option
                      selected={this.state.country === "Saint Lucia"}
                      value="Saint Lucia"
                    >
                      Saint Lucia
                    </option>
                    <option
                      selected={
                        this.state.country ===
                        "Saint Vincent and the Grenadines"
                      }
                      value="Saint Vincent and the Grenadines"
                    >
                      Saint Vincent and the Grenadines
                    </option>
                    <option
                      selected={this.state.country === "Trinidad and Tobago"}
                      value="Trinidad and Tobago"
                    >
                      Trinidad and Tobago
                    </option>
                    <option
                      selected={this.state.country === "United States"}
                      value="United States of America"
                    >
                      United States of America
                    </option>
                  </FormSelect>
                </InputGroup>
              </FormGroup>
            </Col>
            <Col>
              <hr />
              <span style={{ color: "gray" }}>ACADEMIC INFORMATION</span>
              <hr />
              <br />

              {/* Diploma in French Level */}
              <FormGroup>
                <label htmlFor="#level">
                  <span style={{ color: "red" }}>* </span>Selected Diploma in
                  French Level
                </label>

                <br />
                <br />
                <Row>
                  <Col xs={6}>
                    <FormRadio id="beginners" name="beginners">
                      DELF A1 - Beginner's
                    </FormRadio>
                  </Col>

                  <Col xs={6}>
                    <FormRadio id="intermediate" name="intermediate">
                      DELF B1 - Intermediate
                    </FormRadio>
                  </Col>

                  <Col xs={6}>
                    <FormRadio id="advanced" name="advanced">
                      DALF C1 - Advanced
                    </FormRadio>
                  </Col>

                  <Col xs={6}>
                    <FormRadio id="mastery" name="mastery">
                      DALF C2 - Mastery
                    </FormRadio>
                  </Col>
                </Row>
              </FormGroup>

              {/* Term? */}
              <br />
              <FormGroup>
                <label htmlFor="#employed">
                  <span style={{ color: "red" }}>* </span>Select Term
                </label>

                <InputGroup seamless>
                  <InputGroupAddon type="prepend">
                    <InputGroupText>
                      <i className="fas fa-bookmark"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <FormSelect id="#employed" disabled>
                    <option value="March 2021">
                      Term beginning March, 2021
                    </option>
                    <option value="September 2021">
                      Term beginning September, 2021
                    </option>
                    <option value="March 2022">
                      Term beginning March, 2022
                    </option>
                    <option value="September 2022">
                      Term beginning September, 2022
                    </option>
                  </FormSelect>
                </InputGroup>
              </FormGroup>

              {/* Enrolled in School? */}
              <br />
              <FormGroup>
                <label htmlFor="#enrolledInSchool">
                  <span style={{ color: "red" }}>* </span>Are you currently
                  enrolled in school?
                </label>

                <InputGroup seamless>
                  <InputGroupAddon type="prepend">
                    <InputGroupText>
                      <i className="fas fa-graduation-cap"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <FormSelect id="#enrolledInSchool">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </FormSelect>
                </InputGroup>
              </FormGroup>

              {/* Employed? */}
              <br />
              <FormGroup>
                <label htmlFor="#employed">
                  <span style={{ color: "red" }}>* </span>Are you currently
                  employed?
                </label>

                <InputGroup seamless>
                  <InputGroupAddon type="prepend">
                    <InputGroupText>
                      <i className="fas fa-suitcase"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <FormSelect id="#employed">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </FormSelect>
                </InputGroup>
              </FormGroup>

              {/* Time preference? */}
              <br />
              <FormGroup>
                <label htmlFor="#time">
                  <span style={{ color: "red" }}>* </span>Time Preference
                </label>

                <InputGroup seamless>
                  <InputGroupAddon type="prepend">
                    <InputGroupText>
                      <i className="fas fa-chalkboard-teacher"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <FormSelect id="#employed">
                    <option value="Morning Classes">Morning Classes</option>
                    <option value="Evening Classes">Evening Classes</option>
                    <option value="Weekend Classes">Weekend Classes</option>
                  </FormSelect>
                </InputGroup>
              </FormGroup>

              <br />
              <br />
              <Row>
                <Col xs={8}>
                  <Button type="submit" theme="success">
                    Submit Application
                  </Button>
                </Col>
                <Col xs={4}>
                  <Button theme="danger" outline>
                    Cancel
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
      </>
    )
  }
}

export default DelfApplyFormComponent
