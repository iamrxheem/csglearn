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
  FormCheckbox
} from "shards-react"
import Table from "react-bootstrap/Table"
import GetUsRate from "./getUsRate"

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

    // Cost for Science
    if (subject === "English A") {
      return props.costOfMathAndEnglish
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

  if (props.subjects.length !== 0) {
    return (
      <>
        <br />
        <Alert theme="primary" style={{ color: "white" }}>
          <h4>Subjects</h4>

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
          <Table style={{ color: "white" }}>
            <tr>
              <td>
                <h5>
                  <GetUsRate amount={props.cost} /> per month
                </h5>
              </td>
            </tr>
          </Table>
          <Table style={{ color: "white" }}>
            <tr>
              <td>Course Material</td>
              <td>
                <GetUsRate amount={props.csecCourseMaterialFee} />
              </td>
            </tr>
            <tr>
              <td>Administration Fee</td>
              <td>
                <GetUsRate amount={props.administrationFee} />
              </td>
            </tr>
          </Table>
          <span>
            <strong>NB:</strong> Monthly fee does not include exam registration
            fee. Course material fee is paid once per subject.
          </span>
        </Alert>
      </>
    )
  } else {
    return (
      <>
        <br />
        <Alert style={{ color: "white" }}>
          <h4>Subjects</h4>
          <br />
          Select your subjects to calculate your monthly cost.
          <br />
          <br />
        </Alert>
      </>
    )
  }
}

export default CsecCostComponent
