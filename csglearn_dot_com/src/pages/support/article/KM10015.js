import React from "react"
import SupportLayout from "../../../layouts/supportLayout"
import SupportArticleLayout from "../../../supportComponents/supportArticleLayout"

const Page = () => (
  <SupportLayout>
    <SupportArticleLayout
      title="Take A Multiple Choice Quiz"
      shortTitle="Take MC Quiz"
      category="Mobile App"
      href="/support"
      description="Learn how to take a multiple choice quiz in the CSG Learning app."
      lastModified=""
    >
      <h5>Step 1 - Go to your dashboard</h5>

      <span>Here, you will see all the courses you are enrolled in.</span>

      <br />
      <br />
      <br />
      <h5>Step 2 - Go to the course</h5>

      <span>Click on the course where the quiz is due.</span>

      <br />
      <br />
      <br />
      <h5>Step 3 - Select the quiz</h5>
      <span>
        Scroll down to the quiz section of the course and select the one that's
        due. Here, you will also see more information about the quiz as well
        when it's due, how many attempts you have and more.
      </span>

      <br />
      <br />
      <br />
      <h5>Step 4 - Attempt the quiz</h5>
      <span>
        Complete all the questions in the quiz. Be sure to give every question a
        try.
      </span>

      <br />
      <br />
      <br />
      <h5>Step 5 - Submit your attempt</h5>
      <span>
        Once you've attempted all the question, select the 'Submit All and
        Finish' option for your responses to be sent.{" "}
      </span>

      <br />
      <br />
      <span>
        Depending on how your teacher decides to configure the quiz, you may or
        may not see your results immediately.
      </span>

      <br />
      <br />
    </SupportArticleLayout>
  </SupportLayout>
)

export default Page
