import React from "react"
import { Link } from "gatsby"
import SupportLayout from "../../../layouts/supportLayout"
import SupportArticleLayout from "../../../supportComponents/supportArticleLayout"
import SEO from "../../../components/seo"
import {
  Breadcrumb,
  BreadcrumbItem,
  Alert,
  Container,
  Row,
  Col,
  CardHeader,
  CardTitle,
  Card,
  CardFooter,
  CardBody,
  Nav,
  NavItem,
  NavLink
} from "shards-react"

const Page = () => (
  <SupportLayout>
    <SupportArticleLayout
      title="How to Change Your Profile Picture"
      shortTitle="Change Picture"
      category="Account & Settings"
      description="Want to update a personal picture of yourself? Follow these steps to get started."
      lastModified=""
      href="/support"
    >
      <h5>Step 1 - Log in the online portal</h5>

      <span>
        You can only modify your account on the online portal, not in the app.
        Log in the online poral{" "}
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
      <h5>Step 4 - Go to the 'User Picture' section</h5>
      <span>
        Scroll down to the 'User Picture' section of your account. Here, you'll
        be able to add a photo from your gallery or drag and drop one from your
        desktop.
      </span>

      <br />
      <br />
      <img
        src="https://dl.dropbox.com/s/wlfyi7inylrne4m/Screenshot%202021-01-21%20at%202.22.01%20PM.png?dl=0"
        style={{ width: "100%" }}
      />

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
