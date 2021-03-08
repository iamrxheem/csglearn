import React, { Component } from "react"
import {
  Alert,
  Button,
  Row,
  Col,
  Container,
  Form,
  FormGroup,
  FormInput,
  Card,
  CardBody,
  CardTitle,
  CardFooter,
  FormSelect,
  FormTextarea,
  FormRadio,
  FormCheckbox
} from "shards-react"
import DatePicker from "react-datepicker"
import { v4 as uuidv4 } from "uuid"
import _ from "lodash"
import { sendData } from "../assets/js/sendEnrollmentData"
import CsecCostComponent from "./csecCostComponent"

// Sweet alert
import Swal from "sweetalert2"

class GeneralProgrammeApplicationComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: uuidv4(),
      programme: this.props.programme,
      level: this.props.level ? this.props.level : "",
      subjects: this.props.subjects ? this.props.subjects : [],
      subjectCount: 0,
      term: this.props.term ? this.props.term : "",
      firstName: this.props.firstName ? this.props.firstName : "",
      lastName: this.props.lastName ? this.props.lastName : "",
      dateOfBirth: this.props.dateOfBirth ? this.props.dateOfBirth : "",
      gender: "Male",
      phoneNumber: this.props.phoneNumber ? this.props.phoneNumber : "",
      email: this.props.email ? this.props.email : "",
      address: this.props.address ? this.props.address : "",
      country: this.props.country ? this.props.country : "",
      employed: this.props.employed ? this.props.employed : false,
      school: this.props.school ? this.props.school : false,
      hasAgreedToTerms: false,
      errorMsg: "",
      allGood: false,
      cost: 0,

      // Data for all the subjects
      subjectData: [{}]
    }

    // Methods
    this.changeGender = this.changeGender.bind(this)
    this.changeEmployed = this.changeEmployed.bind(this)
    this.changeEnrolledInSchool = this.changeEnrolledInSchool.bind(this)
    this.handleDateOfBirthChange = this.handleDateOfBirthChange.bind(this)
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
    this.handleLastNameChange = this.handleLastNameChange.bind(this)
    this.agreedToTerms = this.agreedToTerms.bind(this)
    this.handleAddressChange = this.handleAddressChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this)
    this.handleProgrammeChange = this.handleProgrammeChange.bind(this)
    this.handleCountryChange = this.handleCountryChange.bind(this)
    this.checkIfAllGood = this.checkIfAllGood.bind(this)
    this.setErrorMessage = this.setErrorMessage.bind(this)
    this.handleLevelChange = this.handleLevelChange.bind(this)
    this.addSubject = this.addSubject.bind(this)
    this.addToCsecCost = this.addToCsecCost.bind(this)
    this.removeFromCsecCost = this.removeFromCsecCost.bind(this)
    this.isSubjectSelected = this.isSubjectSelected.bind(this)

    // Handle submit
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleCountryChange(e) {
    this.setState({ country: e.target.value })

    this.checkIfAllGood()
  }

  // Changes the first name
  handleFirstNameChange(e) {
    this.setState({ firstName: e.target.value })

    this.checkIfAllGood()
  }

  // Changes the first name
  handleProgrammeChange(e) {
    this.setState({ programme: e.target.value })

    this.checkIfAllGood()
  }

  // Called when the level is changed and saves the new level
  handleLevelChange(e) {
    this.setState({
      level: e.target.value
    })

    this.checkIfAllGood()
  }

  agreedToTerms(e, val) {
    this.setState({ hasAgreedToTerms: val })

    this.checkIfAllGood()
  }

  // Changes the first name
  handleLastNameChange(e) {
    this.setState({ lastName: e.target.value })

    this.checkIfAllGood()
  }

  // Checks the subject array if a subject is selected and return either true or false
  isSubjectSelected(e) {
    if (this.state.subjects.includes(e.target.value)) {
      return true
    } else {
      return false
    }
  }

  // Changes the phone number
  handlePhoneNumberChange(e) {
    this.setState({ phoneNumber: e.target.value })

    this.checkIfAllGood()
  }

  // Changes the first name
  handleAddressChange(e) {
    this.setState({
      address: e.target.value
    })

    this.checkIfAllGood()
  }

  // Changes the first name
  handleEmailChange(e) {
    this.setState({
      email: e.target.value
    })

    this.checkIfAllGood()
  }

  // Function to change the gender
  changeGender(selected) {
    this.setState({
      gender: selected
    })

    this.checkIfAllGood()
  }

  // Function to chnage the date of Birth
  handleDateOfBirthChange(date) {
    this.setState({
      dateOfBirth: date
    })

    this.checkIfAllGood()
  }

  // Function to chnage -- is employed
  changeEmployed(selected) {
    this.setState({
      employed: selected
    })

    this.checkIfAllGood()
  }

  // Function to chnage -- is employed
  changeEnrolledInSchool(selected) {
    this.setState({
      school: selected
    })

    this.checkIfAllGood()
  }

  // This functon will check if all the necessary info has been entered in
  // by teh ueser
  checkIfAllGood() {
    // Check if user agreed to terms and conditions
    if (!this.state.hasAgreedToTerms) {
      this.setErrorMessage("Please accept the Terms of Use and Privacy Policy.")
      return
    }

    if (this.state.phoneNumber === "") {
      this.setErrorMessage("Please enter your phone number.")
      return
    }

    // Ensures that the level is selected if the student is enrolling in either
    // the dele or the delf
    if ((this.props.dele || this.props.delf) && this.state.level) {
      this.setErrorMessage("Select the course/ exam level")
      return
    }

    // Check if first name is entered
    if (this.state.firstName === "") {
      this.setErrorMessage("Please enter your first name")
      return
    }

    // Check if last name is entered
    if (this.state.lastName === "") {
      this.setErrorMessage("Please enter your last name")
      return
    }

    if (this.state.address === "") {
      this.setErrorMessage("Please enter your address")
      return
    }

    // This function will only be called if all is good with the form
    this.setIsAllGood()
  }

  setIsAllGood() {
    this.setState({
      allGood: true
    })

    //    Swal.fire("All good!")
  }

  // Sets the error message
  setErrorMessage(msg) {
    this.setState({
      errorMsg: msg,
      allGood: false
    })
  }

  handleSubmit(event) {
    sendData(this.state)
    event.preventDefault()
  }

  addSubject(event) {
    // The selected subject
    const sub = event.target.value

    // Store all the existing selected subjects
    let allSubjects = this.state.subjects

    // Index of the value
    const index = this.state.subjects ? allSubjects.indexOf(sub) : 0

    if (allSubjects.includes(sub)) {
      // Remove the subject from the array
      allSubjects.splice(index, 1)

      // If Math or English then we'd want to add the price for
      // the Math and ENglish classes
      if (sub === "English A" || sub === "Mathematics") {
        this.removeFromCsecCost(this.props.costOfMathAndEnglish)
      } else if (
        sub === "Chemistry" ||
        sub === "Physics" ||
        sub === "Chemistry"
      ) {
        this.removeFromCsecCost(this.props.costOfScienceSubjects)
      }
      {
        // Use the regular subject cost
        this.removeFromCsecCost(this.props.costOfGeneralSubjects)
      }
    } else {
      // Add the newly selected subject.
      allSubjects.push(sub)

      // If Math or English then we'd want to add the price for
      // the Math and ENglish classes
      if (sub === "English A" || sub === "Mathematics") {
        this.addToCsecCost(this.props.costOfMathAndEnglish)
      } else if (
        sub === "Chemistry" ||
        sub === "Physics" ||
        sub === "Chemistry"
      ) {
        this.addToCsecCost(this.props.costOfScienceSubjects)
      } else {
        // Use the regular subject cost
        this.addToCsecCost(this.props.costOfGeneralSubjects)
      }
    }

    // Then we finally update the states
    this.setState({
      subjects: allSubjects,
      subjectCount: this.state.subjects.length
    })
  }

  // This function will be used to calculate the cost for CSEC
  // registration
  addToCsecCost(amount) {
    const newCost = this.state.cost + amount

    this.setState({
      cost: newCost
    })
  }

  // This function will be used to calculate the cost for CSEC
  // registration
  removeFromCsecCost(amount) {
    const newCost = this.state.cost - amount

    this.setState({
      cost: newCost
    })
  }

  render() {
    try {
      return (
        <>
          {this.props.note ? (
            <>
              <Alert theme={this.props.noteTheme}>{this.props.note}</Alert>

              <br />
            </>
          ) : (
            <></>
          )}

          <Form onSubmit={this.handleSubmit}>
            <Row>
              <Col sm={6}>
                {/* Programmes */}
                <FormGroup>
                  <label htmlFor="programme">
                    <span style={{ color: "red" }}>* </span>
                    Programme
                  </label>
                  <FormSelect
                    value={this.state.programme}
                    disabled
                    onChange={this.handleProgrammeChange}
                    id="programme"
                  >
                    <option
                      selected={this.props.delf}
                      value="Diplomas in French"
                    >
                      Diplomas in French
                    </option>
                    <option
                      selected={this.props.dele}
                      value="Diplomas in Spanish"
                    >
                      Diplomas in Spanish
                    </option>
                    <option selected={this.props.sat} value="SAT Classes">
                      SAT Classes
                    </option>
                    <option
                      selected={this.props.csec}
                      value="CSEC Online Classes"
                    >
                      CSEC Online Classes
                    </option>
                  </FormSelect>
                  <br />
                </FormGroup>

                {/* Term */}
                <FormGroup>
                  <label htmlFor="term">
                    <span style={{ color: "red" }}>* </span>
                    Select term
                  </label>
                  <FormInput
                    disabled
                    value={this.state.term}
                    type="text"
                    name="term"
                    id="term"
                  />
                </FormGroup>
                {/* End Term */}

                {/* CSEC Subject Selection */}
                {this.props.csec ? (
                  <>
                    <br />
                    <FormGroup>
                      <label htmlFor="programme">
                        <span style={{ color: "red" }}>* </span>
                        Subject Selection
                      </label>

                      <br />
                      <br />
                      <Row>
                        <Col md={6}>
                          <FormCheckbox
                            onChange={this.addSubject}
                            value="Additional Mathematics"
                          >
                            Additional Mathematics
                          </FormCheckbox>
                          <FormCheckbox
                            onChange={this.addSubject}
                            value="Biology"
                          >
                            Biology
                          </FormCheckbox>
                          <FormCheckbox
                            value="Caribbean History"
                            onChange={this.addSubject}
                          >
                            Caribbean History
                          </FormCheckbox>
                          <FormCheckbox
                            onChange={this.addSubject}
                            value="Chemistry"
                          >
                            Chemistry
                          </FormCheckbox>
                          <FormCheckbox
                            onChange={this.addSubject}
                            value="Economics"
                          >
                            Economics
                          </FormCheckbox>
                          <FormCheckbox
                            onChange={this.addSubject}
                            value="Electronic Document Preparation and Management"
                          >
                            EDPM
                          </FormCheckbox>
                          <FormCheckbox
                            onChange={this.addSubject}
                            value="English A"
                          >
                            English A
                          </FormCheckbox>
                          <FormCheckbox
                            onChange={this.addSubject}
                            value="English B"
                          >
                            English B
                          </FormCheckbox>
                          <FormCheckbox
                            onChange={this.addSubject}
                            value="French"
                          >
                            French
                          </FormCheckbox>
                          <FormCheckbox
                            onChange={this.addSubject}
                            value="Geography"
                          >
                            Geography
                          </FormCheckbox>
                        </Col>
                        <Col md={6}>
                          <FormCheckbox
                            onChange={this.addSubject}
                            value="Human & Social Biology"
                          >
                            Human & Social Biology
                          </FormCheckbox>
                          <FormCheckbox
                            onChange={this.addSubject}
                            value="Information Technology"
                          >
                            Information Technology
                          </FormCheckbox>
                          <FormCheckbox
                            onChange={this.addSubject}
                            value="Integrated Science"
                          >
                            Integrated Science
                          </FormCheckbox>
                          <FormCheckbox
                            onChange={this.addSubject}
                            value="Mathematics"
                          >
                            Mathematics
                          </FormCheckbox>
                          <FormCheckbox
                            onChange={this.addSubject}
                            value="Office Administration"
                          >
                            Office Administration
                          </FormCheckbox>
                          <FormCheckbox
                            onChange={this.addSubject}
                            value="Physics"
                          >
                            Physics
                          </FormCheckbox>
                          <FormCheckbox
                            onChange={this.addSubject}
                            value="Principles of Accounts"
                          >
                            Principles of Accounts
                          </FormCheckbox>
                          <FormCheckbox
                            onChange={this.addSubject}
                            value="Principles of Business"
                          >
                            Principles of Business
                          </FormCheckbox>
                          <FormCheckbox
                            onChange={this.addSubject}
                            value="Social Studies"
                          >
                            Social Studies
                          </FormCheckbox>
                          <FormCheckbox
                            onChange={this.addSubject}
                            value="Spanish"
                          >
                            Spanish
                          </FormCheckbox>
                        </Col>
                      </Row>
                    </FormGroup>
                    <br />
                  </>
                ) : (
                  <></>
                )}
                {/* End CSEC Subject Selection */}

                {/* Level - will  only show if DELE of DELF */}
                {this.props.dele || this.props.delf ? (
                  <>
                    <FormGroup>
                      <label htmlFor="programme">
                        <span style={{ color: "red" }}>* </span>
                        Level
                      </label>
                      <FormSelect onChange={this.handleLevelChange} id="level">
                        <option value="a1">Beginner's A1</option>
                        <option value="b1">Intermediate B1</option>
                        <option value="c1">Fluent - C1</option>
                        <option value="c2">Master - C2</option>
                      </FormSelect>

                      <br />
                      <br />
                    </FormGroup>
                  </>
                ) : (
                  <></>
                )}
                {/* End Level */}

                {/* First and Last Name */}
                <FormGroup>
                  <label htmlFor="firstName">
                    <span style={{ color: "red" }}>* </span>
                    First Name
                  </label>
                  <FormInput
                    onChange={this.handleFirstNameChange}
                    value={this.state.firstName}
                    name="firstName"
                    id="firstName"
                  />
                </FormGroup>

                <FormGroup>
                  <label htmlFor="lastName">
                    <span style={{ color: "red" }}>* </span>Last Name
                  </label>
                  <FormInput
                    onChange={this.handleLastNameChange}
                    value={this.state.lastName}
                    id="lastName"
                    name="lastName"
                  />
                </FormGroup>

                {/* End first and last name */}

                {/* Gender */}
                <br />
                <FormGroup>
                  <label htmlFor="gender">
                    <span style={{ color: "red" }}>* </span>Gender
                  </label>

                  <FormRadio
                    id="gender"
                    checked={this.state.gender === "Male"}
                    onChange={() => {
                      this.changeGender("Male")
                    }}
                    value="Male"
                  >
                    Male
                  </FormRadio>
                  <FormRadio
                    checked={this.state.gender === "Female"}
                    value="Female"
                    onChange={() => {
                      this.changeGender("Female")
                    }}
                  >
                    Female
                  </FormRadio>
                  <br />
                </FormGroup>
                {/* End Gender */}

                {/* Date of Birth*/}
                <FormGroup>
                  <label htmlFor="dateOfBirth">
                    <span style={{ color: "red" }}>* </span>
                    Date of Birth
                  </label>
                  <br />
                  <DatePicker
                    onChange={date => this.handleDateOfBirthChange(date)}
                    selected={this.state.dateOfBirth}
                    value={this.state.dateOfBirth}
                    dateFormat="MMMM dd yyyy"
                    style={{ width: "100%" }}
                    className="form-control"
                    id="dateOfBirth"
                  />
                </FormGroup>

                {/* Phone Number */}
                <FormGroup>
                  <label htmlFor="phoneNumber">
                    <span style={{ color: "red" }}>* </span>Phone Number
                  </label>
                  <FormInput
                    onChange={this.handlePhoneNumberChange}
                    value={this.state.phoneNumber}
                    name="phoneNumber"
                    id="phoneNumber"
                    type="text"
                  />
                </FormGroup>
                {/* Phone Number */}

                {/* Email Address */}
                <FormGroup>
                  <label htmlFor="lastName">
                    <span style={{ color: "red" }}>* </span>Email
                  </label>
                  <FormInput
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                    name="email"
                    id="email"
                    type="email"
                  />
                </FormGroup>
                {/* End Email address */}
              </Col>

              <Col sm={6}>
                {/* Address */}
                <FormGroup>
                  <label htmlFor="address">
                    <span style={{ color: "red" }}>* </span>Complete Address
                  </label>
                  <FormTextarea
                    value={this.state.address}
                    onChange={this.handleAddressChange}
                    name="address"
                    type="text"
                  />
                </FormGroup>
                {/* End address */}

                {/* Country */}
                <FormGroup>
                  <label htmlFor="country">
                    <span style={{ color: "red" }}>* </span>
                    Country
                  </label>
                  <FormSelect onChange={this.handleCountryChange} id="country">
                    <option value="Antigua and Barbuda">
                      Antigua and Barbuda
                    </option>
                    <option value="Bahamas">Bahamas</option>
                    <option value="Barbados">Barbados</option>
                    <option value="Belize">Belize</option>
                    <option value="Dominica">Dominica</option>
                    <option value="Grenada">Grenada</option>
                    <option value="Guyana">Guyana</option>
                    <option value="Haiti">Haiti</option>
                    <option value="Jamaica" selected>
                      Jamaica
                    </option>
                    <option value="Montserrat">Montserrat</option>
                    <option value="Saint Kitts and Nevis">
                      Saint Kitts and Nevis
                    </option>
                    <option value="Saint Lucia">Saint Lucia</option>
                    <option value="Saint Vincent and the Grenadines">
                      Saint Vincent and the Grenadines
                    </option>
                    <option value="Trinidad and Tobago">
                      Trinidad and Tobago
                    </option>
                    <option value="United States of America">
                      United States of America
                    </option>
                  </FormSelect>
                  <br />
                  <br />
                </FormGroup>
                {/* End Country*/}

                {/* Currently Employed */}
                <FormGroup>
                  <label htmlFor="employed">
                    <span style={{ color: "red" }}>* </span>Are you currently
                    employed?
                  </label>
                  <Row>
                    <Col xs={6}>
                      <FormRadio
                        checked={this.state.employed === false}
                        onChange={() => {
                          this.changeEmployed(false)
                        }}
                      >
                        No
                      </FormRadio>
                    </Col>
                    <Col xs={6}>
                      <FormRadio
                        checked={this.state.employed === true}
                        onChange={() => {
                          this.changeEmployed(true)
                        }}
                      >
                        Yes
                      </FormRadio>
                    </Col>
                  </Row>
                  <br />
                </FormGroup>
                {/* End currently employed */}

                {/* Currently Attending School */}
                <FormGroup>
                  <label htmlFor="school">
                    <span style={{ color: "red" }}>* </span>Are you currently
                    enrolled in a school or university?
                  </label>
                  <Row>
                    <Col xs={6}>
                      <FormRadio
                        checked={this.state.school === false}
                        id="enrolledInSchoolNo"
                        onChange={() => {
                          this.changeEnrolledInSchool(false)
                        }}
                      >
                        No
                      </FormRadio>
                    </Col>
                    <Col xs={6}>
                      <FormRadio
                        checked={this.state.school === true}
                        id="enrolledInSchoolYes"
                        onChange={() => {
                          this.changeEnrolledInSchool(true)
                        }}
                      >
                        Yes
                      </FormRadio>
                    </Col>
                  </Row>
                </FormGroup>
                {/* End currently employed */}

                {this.props.csec ? (
                  <>
                    <CsecCostComponent
                      costOfMathAndEnglish={this.props.costOfMathAndEnglish}
                      costOfGeneralSubjects={this.props.costOfGeneralSubjects}
                      administrationFee={this.props.administrationFee}
                      csecCourseMaterialFee={this.props.csecCourseMaterialFee}
                      subjects={this.state.subjects}
                      subjectCount={this.state.subjectCount}
                      cost={this.state.cost}
                      costOfScienceSubjects={this.props.costOfScienceSubjects}
                    />
                  </>
                ) : null}

                <br />
                <FormGroup>
                  <FormCheckbox
                    checked={this.state.hasAgreedToTerms}
                    onChange={e =>
                      this.agreedToTerms(e, !this.state.hasAgreedToTerms)
                    }
                  >
                    I agree to the above listed charges,{" "}
                    <a target="_blank" href="/terms-of-use">
                      Terms of Use
                    </a>{" "}
                    and{" "}
                    <a target="_blank" href="/privacy-policy">
                      Privacy Policy
                    </a>
                    .
                  </FormCheckbox>
                </FormGroup>

                <br />
                <Row>
                  <Col xs={8}>
                    <Button value="Submit" type="submit" submit>
                      Submit Application
                    </Button>
                  </Col>
                  <Col xs={4}>
                    <Button onClick={() => {}} theme="danger">
                      Cancel
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Form>
        </>
      )
    } catch (err) {
      alert(err)
    }
  }
}

export default GeneralProgrammeApplicationComponent
