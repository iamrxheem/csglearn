import React from "react"
import SupportLayout from "../../../layouts/supportLayout"
import SupportArticleLayout from "../../../supportComponents/supportArticleLayout"

const Page = () => (
  <SupportLayout>
    <SupportArticleLayout
      title="How To Access Online Portal"
      shortTitle="Access Portal"
      category="Online Portal"
      href="/support"
      description="Learn how to access our online student portal via a web broswer or your smartphone."
      lastModified=""
    >
      <h5>Step 1 - Click the direct link</h5>

      <span>
        You can log in our online portal by simply clicking{" "}
        <a href="https://www.hub.csglearn.com/my" target="_blank">
          this link
        </a>
        .
      </span>

      <br />
      <br />
      <br />
      <h5>Step 2 - Enter your login details</h5>

      <span>
        If you havn't logged in already, enter your login details and click 'log
        in'.
      </span>

      <br />
      <br />
      <span>
        Related:{" "}
        <a href="/support/article/KM10004">How to Reset Your Password</a>
      </span>

      <br />
      <br />
      <br />
      <h5>Step 3 - Step 5 - Use the app instead</h5>
      <span>
        Learn on the go and access course materials offline.{" "}
        <a href="/app">Learn how</a> to use the app.
      </span>

      <br />
      <br />
    </SupportArticleLayout>
  </SupportLayout>
)

export default Page
