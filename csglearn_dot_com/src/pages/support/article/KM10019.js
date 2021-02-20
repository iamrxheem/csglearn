import React from "react"
import SupportLayout from "../../../layouts/supportLayout"
import SupportArticleLayout from "../../../supportComponents/supportArticleLayout"

const Page = () => (
  <SupportLayout>
    <SupportArticleLayout
      title="How to Query Oustanding Tuition"
      shortTitle="Query Tuition"
      category="Payment & Tuition"
      href="/support"
      description="While our system is undergoing maintenance, students are able to query their outstanding balance by contacting Customer Service, or by referencing their most recent invoice."
      lastModified=""
    ></SupportArticleLayout>
  </SupportLayout>
)

export default Page
