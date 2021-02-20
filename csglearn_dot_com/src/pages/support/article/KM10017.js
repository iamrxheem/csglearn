import React from "react"
import SupportLayout from "../../../layouts/supportLayout"
import SupportArticleLayout from "../../../supportComponents/supportArticleLayout"

const Page = () => (
  <SupportLayout>
    <SupportArticleLayout
      title="How to Submit An Assignment"
      shortTitle="Submit Assignment"
      category="Mobile App"
      href="/support"
      description="Learn how to submit an assignment in-app, whether it's an essay, quiz or group work."
      lastModified=""
    >
      <h5>Step 1 - Go to your dashboard</h5>

      <span>
        You will see a list of your courses on your dashboard. Go to the course
        where you have the assignment.
      </span>

      <br />
      <br />
      <img
        src="https://dl.dropbox.com/s/vv188nash24hc2c/WhatsApp%20Image%202021-01-23%20at%203.13.09%20PM.jpeg?dl=0"
        style={{ width: "100%", zIndex: "0" }}
      />

      <br />
      <br />
      <span>
        In this example, the course is 'Fundamentals of Public Speaking'.
      </span>

      <br />
      <br />
      <br />
      <h5>Step 2 - Go to the 'Assignment' Section</h5>

      <span>
        Scroll down to the 'Assignment' sections. Here, you will see a list of
        current and previous assignments.
      </span>

      <br />
      <br />
      <img
        src="https://dl.dropbox.com/s/vmzw8528cpz0uxo/WhatsApp%20Image%202021-01-23%20at%203.11.37%20PM.jpeg?dl=0"
        style={{ width: "100%" }}
      />

      <br />
      <br />
      <br />
      <h5>Step 3 - Select the assignment that's due</h5>
      <span>
        From the list of assignments, select the one that's due. It should take
        you to an overview of the assignmnet as well as provide you with options
        to submit your attempt.
      </span>

      <br />
      <br />
      <img
        src="https://dl.dropbox.com/s/fhrii2dleofig8t/WhatsApp%20Image%202021-01-23%20at%203.10.06%20PM.jpeg?dl=0"
        style={{ width: "100%" }}
      />

      <br />
      <br />
      <br />
      <h5>Step 4 - Select 'Add Submission'</h5>
      <span>
        This will allow you to select a file from your device to upload. Select
        'File'.
      </span>

      <br />
      <br />
      <img
        src="https://dl.dropbox.com/s/1ksiqsbcyzrksyr/WhatsApp%20Image%202021-01-23%20at%202.57.00%20PM%20%285%29.jpeg?dl=0"
        style={{ width: "100%" }}
      />

      <br />
      <br />
      <br />
      <h5>Step 5 - Choose your file</h5>
      <span>
        Select the where you saved your work. It's good to name your assignment
        file.
      </span>

      <br />
      <br />
      <span>It should look like this:</span>

      <br />
      <br />
      <img
        src="https://dl.dropbox.com/s/k07emjluequ6x2o/WhatsApp%20Image%202021-01-23%20at%202.57.00%20PM%20%284%29.jpeg?dl=0"
        style={{ width: "100%" }}
      />

      <br />
      <br />
      <strong>
        Important: Always save your work in the form of a PDF file.
      </strong>

      <br />
      <br />
      <br />
      <h5>Step 6 - Click the 'Save' button</h5>
      <span>
        Once you save your work, it will be uploaded for your instructor to see
        and grade.{" "}
      </span>

      <br />
      <br />
      <br />
      <h5>Step 6 - Review your grade</h5>
      <span>
        When your teacher grades your assignment, the results will be made
        available for you to view.
      </span>

      <br />
      <br />
      <img
        src="https://dl.dropbox.com/s/c5g398zv1mwr4o7/WhatsApp%20Image%202021-01-23%20at%203.24.37%20PM.jpeg?dl=0"
        style={{ width: "100%" }}
      />

      <br />
      <br />
    </SupportArticleLayout>
  </SupportLayout>
)

export default Page
