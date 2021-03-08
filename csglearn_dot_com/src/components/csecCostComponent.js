import React from "react"
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
  FormCheckbox,
  Popover,
  PopoverBody,
  PopoverHeader
} from "shards-react"
import Table from "react-bootstrap/Table"
import GetUsRate from "./getUsRate"
import { isMobile } from "react-device-detect"

const CsecCostComponent = props => {
  // Function to get the cost
  function getCost(subject) {
    // Cost for Mathematics
    if (subject === "Mathematics") {
      return props.costOfMathAndEnglish
    }

    // Cost for English A
    if (subject === "English A") {
      return props.costOfMathAndEnglish
    }

    // Cost for Biology
    if (subject === "Biology") {
      return props.costOfScienceSubjects
    }

    // Cost for Chemistry
    if (subject === "Chemistry") {
      return props.costOfScienceSubjects
    }

    // Cost for Physics
    if (subject === "Physics") {
      return props.costOfScienceSubjects
    }

    // Else return the cost of the general subjects
    return props.costOfGeneralSubjects
  } // End Function

  function calculateCost(process) {
    const currentNumberOfSubjects = props.subjects.length
  } // End Function

  function formatAsCurrency(amount) {
    return Intl.NumberFormat().format(amount)
  }

  function formatAsCurrency(amount) {
    return Intl.NumberFormat().format(amount)
  }

  if (props.subjects.length !== 0) {
    return (
      <>
        <br />
        <Alert
          theme="success"
          style={{ color: "white" }}
          className={isMobile ? "break-out" : ""}
        >
          <br />
          <h4>Great! Now, let's recap</h4>

          <br />
          <br />
          <Table striped hover responsive="sm" style={{ color: "white" }}>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Cost</th>
              </tr>
            </thead>
            {props.subjects.map(subject => (
              <>
                <tr>
                  <td>{subject}</td>
                  <td>
                    <GetUsRate amount={getCost(subject)} />
                  </td>
                </tr>
              </>
            ))}
          </Table>

          <Table striped hover responsive="sm" style={{ color: "white" }}>
            {/* Total cost per month */}
            <tr>
              <td>
                <h5>JMD ${formatAsCurrency(props.cost)} per month</h5>
              </td>
            </tr>
            {/* End cost per month */}
          </Table>

          <Table hover responsive="sm" style={{ color: "white" }}>
            <thead>
              <tr>
                <th>One-time Fees & Charges</th>
              </tr>
            </thead>

            <tr>
              <td>
                Course Material <i>(optional)</i>
              </td>
              <td>
                <GetUsRate amount={props.csecCourseMaterialFee} /> *{" "}
                {props.subjectCount}
              </td>
            </tr>
            <tr>
              <td>Administration Fee</td>
              <td>
                <GetUsRate amount={props.administrationFee} />
              </td>
            </tr>
          </Table>

          <i className="fas fa-info-circle mr-2"></i>

          <span>
            Monthly fee does not include exam registration fee. Optional course
            material fee is paid once per subject.
          </span>
          <br />
          <br />
        </Alert>
      </>
    )
  } else {
    return (
      <>
        <br />
        <Alert
          className={isMobile ? "break-out" : ""}
          theme="danger"
          style={{ color: "white" }}
        >
          <br />
          <h4>Choose your subjects</h4>
          <br />
          You haven't selected your subjects yet. Choose your subjects to see
          your a breadown of your tuition.
          <br />
          <br />
        </Alert>
      </>
    )
  }
}

export default CsecCostComponent
