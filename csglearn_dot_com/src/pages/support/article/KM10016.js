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
import { CopyToClipboard } from "react-copy-to-clipboard"

const Page = () => (
  <SupportLayout>
    <SupportArticleLayout
      title="How To Log in the App"
      shortTitle="App Login"
      category="Mobile App"
      href="/support"
      description="Learn how to log into the Student Portal with the app."
      lastModified=""
    >
      <h5>Step 1 - Ensure you're enrolled</h5>

      <span>
        Only current students will have access to our online student portal. If
        you're not enrolled in a programme,{" "}
        <a href="/programmes" target="_blank">
          enroll today
        </a>
        .
      </span>

      <br />
      <br />
      <br />
      <h5>Step 2 - Get the app</h5>

      <span>
        Download the Open LMS app from the{" "}
        <a
          href="https://play.google.com/store/apps/details?id=com.mrooms.bbopen&hl=en&gl=US"
          target="_blank"
        >
          Google Play
        </a>{" "}
        or{" "}
        <a
          href="https://apps.apple.com/us/app/open-lms/id1212149426"
          target="_blank"
        >
          App Store
        </a>
        .
      </span>

      <br />
      <br />
      <div className="d-block d-md-none">
        <Row>
          <Col xs={6}>
            <a
              src="https://apps.apple.com/us/app/open-lms/id1212149426"
              target="_blank"
            >
              <img
                src="https://i1.wp.com/incipia.co/wp-content/uploads/2017/10/app-store.png?fit=519%2C160&ssl=1"
                style={{ height: "50px", width: "100%" }}
              />
            </a>
          </Col>
          <Col xs={6}>
            <a
              src="https://play.google.com/store/apps/details?id=com.mrooms.bbopen&hl=en&gl=US"
              target="_blank"
            >
              <img
                src="https://dctfcu.com/wp-content/uploads/sites/63/2018/04/google-play-logo-1518163351.png"
                style={{ height: "55px", width: "100%" }}
              />
            </a>
          </Col>
        </Row>
      </div>

      <br />
      <br />
      <div className="d-block d-md-none">
        <img
          src="https://dl.dropbox.com/s/p2qxq5ty5eza0a5/WhatsApp%20Image%202021-01-23%20at%201.12.36%20PM.jpeg?dl=0"
          style={{ width: "100%" }}
        />
      </div>

      <br />
      <br />
      <h5>Step 3 - Enter our website link</h5>
      <span>
        Enter the link to our online portal. Click the link to copy and paste in
        the textbox: https://www.hub.csglearn.com.{" "}
        <CopyToClipboard text="https://www.hub.csglearn.com">
          <a className="text-underline" href="#">
            Click to copy
          </a>
        </CopyToClipboard>
        .
      </span>

      <br />
      <br />
      <div className="d-block d-md-none">
        <img
          src="https://dl.dropbox.com/s/tf1vkillh5n7zih/WhatsApp%20Image%202021-01-23%20at%201.12.35%20PM.jpeg?dl=0"
          style={{ width: "100%" }}
        />
      </div>

      <br />
      <br />
      <br />
      <h5>Step 4 - Enter your login details</h5>
      <span>
        Enter your username and password. Your username is normally the email
        address your provided upon registration.
      </span>

      <br />
      <br />
      <div className="d-block d-md-none">
        <img
          src="https://dl.dropbox.com/s/xs2vfq23aswhgvw/WhatsApp%20Image%202021-01-23%20at%201.12.35%20PM%20%281%29.jpeg?dl=0"
          style={{ width: "100%" }}
        />
      </div>

      <br />
      <br />
      <span>
        Related:{" "}
        <a href="/support/article/KM10004">How to Reset Your Password</a>
      </span>

      <br />
      <br />
      <br />
      <h5>Step 5 - That's it, you're in</h5>
      <span>
        Now, using the brand new app, you can join your classes on the go,
        access course materials offline and much, much more!
      </span>

      <br />
      <br />
      <div className="d-block d-md-none">
        <img
          src="https://dl.dropbox.com/s/j79n09igmlh96ci/WhatsApp%20Image%202021-01-23%20at%201.12.36%20PM%20%281%29.jpeg?dl=0"
          style={{ width: "100%" }}
        />
      </div>

      <br />
    </SupportArticleLayout>
  </SupportLayout>
)

export default Page
