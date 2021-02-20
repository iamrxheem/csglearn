import React from "react"
import SupportLayout from "../../../layouts/supportLayout"
import SupportArticleLayout from "../../../supportComponents/supportArticleLayout"

const Page = () => (
  <SupportLayout>
    <SupportArticleLayout
      title="How to Enroll In A Payment Plan"
      shortTitle="Payment Plan"
      category="Payment & Tuition"
      href="/support"
      description="Details on how to enroll in a payment plan is course-specific and are always included in the Welcome Package new stduents received upon acceptance."
      lastModified=""
    >
      <span>
        Each student is also automatically enrolled in a payment plan once the
        Miscellaneous Fees have been cleared.
      </span>
    </SupportArticleLayout>
  </SupportLayout>
)

export default Page
