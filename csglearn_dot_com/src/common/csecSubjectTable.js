import React from "react"
import { Table } from "react-bootstrap"

const CSECSubjectTable = props => {
  return (
    <>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>
              <a href="/programmes/csec/subjects/english-a">English Language</a>
            </td>
            <td>
              <a href="/programmes/csec/subjects/english-b">
                English Literature
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="/programmes/csec/subjects/mathematics">Mathematics</a>
            </td>
            <td>Additional Mathematics</td>
          </tr>
          <tr>
            <td>
              <a href="/programmes/csec/subjects/spanish">Spanish</a>
            </td>
            <td>
              <a href="/programmes/csec/subjects/french">French</a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="/programmes/csec/subjects/chemistry">Chemistry</a>
            </td>
            <td>
              <a href="/programmes/csec/subjects/biology">Biology</a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="/programmes/csec/subjects/physics">Physics</a>
            </td>
            <td>
              <a href="/programmes/csec/subjects/hsb">Human & Social Biology</a>
            </td>
          </tr>
          <tr>
            <td>Integrated Science</td>
            <td>
              <a href="/programmes/csec/subjects/information-technology">
                Information Technology
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="/programmes/csec/subjects/social-studies">
                Social Studies
              </a>
            </td>
            <td>Caribbean History</td>
          </tr>
          <tr>
            <td>
              <a href="/programmes/csec/subjects/poa">Principles of Accounts</a>
            </td>
            <td>
              <a href="/programmes/csec/subjects/pob">Principles of Business</a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="/programmes/csec/subjects/oa">Office Administration</a>
            </td>
            <td>
              <a href="/programmes/csec/subjects/economics">Economics</a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="/programmes/csec/subjects/geography">Geography</a>
            </td>
            <td>Electronic Document Preparation </td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}

export default CSECSubjectTable
