import React from "react"
import SupportLayout from "../../../layouts/supportLayout"
import SupportArticleLayout from "../../../supportComponents/supportArticleLayout"

const Page = () => (
  <SupportLayout>
    <SupportArticleLayout
      title="Incorrect Course Listed"
      shortTitle="Incorrect Course"
      category="Online Portal"
      lastModified=""
      href="/support"
      description="If you're seeing an incorrect course listed in your student portal, report it immediately."
    >
      <span>
        Affected students should send an email to{" "}
        <a href="mailto:info@csglearn.com?Subject=Incorrect Course Listed">
          info@csglearn.com
        </a>{" "}
        with the subject 'Incorrect Course Listed'.
      </span>
    </SupportArticleLayout>
  </SupportLayout>
)

export default Page
