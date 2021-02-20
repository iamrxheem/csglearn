import React from "react"
import SupportLayout from "../../../layouts/supportLayout"
import SupportArticleLayout from "../../../supportComponents/supportArticleLayout"

const Page = () => (
  <SupportLayout>
    <SupportArticleLayout
      title="How Pay Via Bank Transfer"
      shortTitle="Bank Transfer"
      category="Payment & Tuition"
      href="/support"
      description="Our baking details are always included in the Welcome Package that all new students receive. If you have not received our banking details, please contact Customer Service for an invoice."
      lastModified=""
    >
      <span>
        Students should indicate the amount they wish to pay along with their
        Student ID or email address.
      </span>
    </SupportArticleLayout>
  </SupportLayout>
)

export default Page
