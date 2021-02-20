import React from "react"
import SupportLayout from "../../../layouts/supportLayout"
import SupportArticleLayout from "../../../supportComponents/supportArticleLayout"

const Page = () => (
  <SupportLayout>
    <SupportArticleLayout
      title="Request Course Transfer"
      shortTitle="Course Transfer"
      category="Online Portal"
      href="/support"
      description="Students requesting a course transfer should complete the Course Transfer Form."
      lastModified=""
    >
      <span>
        The form can be obtained <a href="/support">here</a>.
      </span>
    </SupportArticleLayout>
  </SupportLayout>
)

export default Page
