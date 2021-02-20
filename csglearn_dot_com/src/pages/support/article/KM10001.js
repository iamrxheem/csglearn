import React from "react"
import SupportLayout from "../../../layouts/supportLayout"
import SupportArticleLayout from "../../../supportComponents/supportArticleLayout"
import Faq from "react-faq-component"

const data = {
  title: "",
  rows: [
    {
      title: "Will this also change my name for my exam registration.",
      content: (
        <>
          <br />
          <span>
            If your name has been updated before your information has been sent
            over for your exam, then the prior name would have been on file for
            you.
          </span>
          <br />
          <br />
        </>
      )
    },
    {
      title: "How soon does this take effect?",
      content: (
        <>
          <br />
          <span>Your name will be updated in the system immediately.</span>
          <br />
          <br />
        </>
      )
    },
    {
      title: "I can't change my name",
      content: (
        <>
          <br />
          <span>
            Students enrolled in certain programmes may not be able to edit
            their profile. If you are not able to do so, please contact
            administration.
          </span>
          <br />
          <br />
        </>
      )
    }
  ]
}

const styles = {
  bgColor: "transparent",
  titleTextColor: "",
  rowTitleColor: ""
  // rowContentColor: 'grey',
  // arrowColor: "red",
}

const config = {
  animate: true
  // arrowIcon: "V",
  // tabFocus: true
}

const Page = () => (
  <SupportLayout>
    <SupportArticleLayout
      title="Correct First and Last Name"
      shortTitle="Correct Name"
      category="Account & Settings"
      description="Learn how to modify or update your name on the CSG Learning Institute Student Portal. "
      lastModified=""
      href="/support"
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
      <h5>Step 4 - Make the changes</h5>
      <span>
        You should be able to modify your first and last name here, as well as
        other parts of your profile.
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
      <br />
      <h4>Frequently Asked Questions</h4>

      <Faq data={data} styles={styles} config={config} />
    </SupportArticleLayout>
  </SupportLayout>
)

export default Page
