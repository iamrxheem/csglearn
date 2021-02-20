import React from "react"
import SupportLayout from "../../../layouts/supportLayout"
import SupportArticleLayout from "../../../supportComponents/supportArticleLayout"

const Page = () => (
  <SupportLayout>
    <SupportArticleLayout
      title="How to Update Your Email"
      shortTitle="Update Email"
      category="Accounts & Settings"
      href="/support"
      description="Learn how to update your email address on the CSG Learning Institute Student Portal."
      lastModified=""
    >
      <h5>Step 1 - Log in the online portal</h5>

      <span>
        You can only modify your account on the online portal, not in the app.
        Log in the online portal{" "}
        <a href="https://www.hub.csglearn.com/my/" target="_blank">
          here
        </a>
        .
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
      <h5>Step 2 - Go to the profile section</h5>

      <span>
        On the upper-right hand corner of your device, click the user icon
        dropdown and select the 'Profile option'.
      </span>

      <br />
      <br />
      <img
        src="https://dl.dropbox.com/s/rarp3s5yfuq1dng/navbar%20on%20mobile.jpeg?dl=0"
        style={{ width: "100%" }}
      />

      <br />
      <br />
      <br />
      <h5>Step 3 - Click 'Edit Profile'</h5>
      <span>
        Under the 'User Details' section, click the 'Edit Profile' option which
        will allow you to modify your account details.
      </span>

      <br />
      <br />
      <br />
      <h5>Step 4 - Go to the 'General' section</h5>
      <span>
        The 'General' section is at the top of this page. Here you'll see your
        basic account and demographic information. Change the email address to
        your updated email.
      </span>

      <br />
      <br />
      <br />
      <h5>Step 5 - Save your changes</h5>
      <span>
        Scroll to the bottom of the page and click the 'Update Profile' button.
      </span>

      <br />
      <br />
      <img
        src="https://dl.dropbox.com/s/yg2ralq5l7flpet/Screenshot%202021-01-21%20at%202.20.26%20PM.png?dl=0"
        style={{ width: "100%" }}
      />

      <br />
      <br />
    </SupportArticleLayout>
  </SupportLayout>
)

export default Page
